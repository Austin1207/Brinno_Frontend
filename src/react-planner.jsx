import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Translator from './translator/translator';
import Catalog from './catalog/catalog';
import actions from './actions/export';
import {objectsMap} from './utils/objects-utils';
import {
  ToolbarComponents,
  Content,
  SidebarComponents,
  FooterBarComponents,
  LineSpeedDial,
  CameraSpeedDial,
  Sidepanel,
  CameraDefault,
  ResponsiveAppBar,
  TopBar,
  Loading,
  InitialScreen,
  TutorialScale,
  BottomButtonGroup
} from './components/export';
import {VERSION} from './version';
import './styles/export';

import preview from './preview.png'

const {Toolbar} = ToolbarComponents;
const {Sidebar} = SidebarComponents;
const {FooterBar} = FooterBarComponents;

const toolbarW = 50;
const sidebarW = 300;
const footerBarH= 20;

const wrapperStyle = {
  // display: 'flex',
  flexFlow: 'row nowrap'
};

class ReactPlanner extends Component {

  getChildContext() {
    return {
      ...objectsMap(actions, actionNamespace => this.props[actionNamespace]),
      translator: this.props.translator,
      catalog: this.props.catalog,
    }
  }

  componentWillMount() {
    let {store} = this.context;
    let {projectActions, catalog, stateExtractor, plugins} = this.props;
    plugins.forEach(plugin => plugin(store, stateExtractor));
    projectActions.initCatalog(catalog);
  }

  componentWillReceiveProps(nextProps) {
    let {stateExtractor, state, projectActions, catalog} = nextProps;
    let plannerState = stateExtractor(state);
    let catalogReady = plannerState.getIn(['catalog', 'ready']);
    if (!catalogReady) {
      projectActions.initCatalog(catalog);
    }
  }
  
  constructor(){
    super();
    this.state = {
      showHideSidepanel: true
    };
  }

  hideSidepanel(){
    this.setState({ showHideSidepanel: !this.state.showHideSidepanel });
  }

  render() {
    let {width, height, state, stateExtractor, ...props} = this.props;

    let contentW = width; //- sidebarW;
    let toolbarH = height - footerBarH;
    let contentH = height + 60;// - footerBarH;
    let sidebarH = height;// - footerBarH;

    let extractedState = stateExtractor(state);
    let showHideSidepanel = this.state.showHideSidepanel;

    return (
      <div style={{...wrapperStyle, height}}>

        {/*
        <Toolbar width={toolbarW} height={toolbarH} state={extractedState} {...props} />
    */}

        <Loading left={(contentW-100)/2} />

        {/* 修正上方topbar遮蔽 */}
        <div style={{
          width: contentW,
          height: 64,
          zIndex: 9999
          }}></div>

        <InitialScreen state={extractedState} left={(contentW-320)/2} {...props} />

        {/* <Bottom /> */}

        <TutorialScale state={extractedState} left={contentW} {...props}/>
        
        <Content width={contentW} height={contentH-56} state={extractedState} {...props} onWheel={event => event.preventDefault()} />

        <TopBar state={extractedState} {...props} />

        <BottomButtonGroup state={extractedState} {...props} />
        
        {/*<LineSpeedDial state={extractedState} {...props} />

        <CameraSpeedDial state={extractedState} {...props} />

        <CameraDefault state={extractedState} {...props} />*/}

  {
        <Sidebar display = {'none'} width={sidebarW} height={75} left = {(contentW-520)/2} state={extractedState} {...props} />            
        //<FooterBar width={width} height={footerBarH} state={extractedState} {...props} />
  }
        
      </div>
  
    );
  }
}

ReactPlanner.propTypes = {
  translator: PropTypes.instanceOf(Translator),
  catalog: PropTypes.instanceOf(Catalog),
  allowProjectFileSupport: PropTypes.bool,
  plugins: PropTypes.arrayOf(PropTypes.func),
  autosaveKey: PropTypes.string,
  autosaveDelay: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  stateExtractor: PropTypes.func.isRequired,
  toolbarButtons: PropTypes.array,
  sidebarComponents: PropTypes.array,
  footerbarComponents: PropTypes.array,
  customContents: PropTypes.object,
  softwareSignature: PropTypes.string
};

ReactPlanner.contextTypes = {
  store: PropTypes.object.isRequired,
};

ReactPlanner.childContextTypes = {
  ...objectsMap(actions, () => PropTypes.object),
  translator: PropTypes.object,
  catalog: PropTypes.object,
};

ReactPlanner.defaultProps = {
  translator: new Translator(),
  catalog: new Catalog(),
  plugins: [],
  allowProjectFileSupport: true,
  softwareSignature: `React-Planner ${VERSION}`,
  toolbarButtons: [],
  sidebarComponents: [],
  footerbarComponents: [],
  customContents: {},
};

//redux connect
function mapStateToProps(reduxState) {
  return {
    state: reduxState
  }
}

function mapDispatchToProps(dispatch) {
  return objectsMap(actions, actionNamespace => bindActionCreators(actions[actionNamespace], dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactPlanner);
