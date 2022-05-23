import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MdSettings, MdUndo, MdDirectionsRun } from 'react-icons/md';
import { FaFile, FaMousePointer, FaPlus } from 'react-icons/fa';
import ToolbarButton from './toolbar-button';
import ToolbarSaveButton from './toolbar-save-button';
import ToolbarLoadButton from './toolbar-load-button';
import ToolbarLoadImgButton from './toolbar-load-image';//test
import If from '../../utils/react-if';
import * as SharedStyle from '../../shared-style';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { createSvgIcon } from '@mui/material/utils';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

const iconTextStyle = {
  fontSize: '19px',
  textDecoration: 'none',
  fontWeight: 'bold',
  margin: '0px',
  userSelect: 'none'
};

const Icon2D = ( {style} ) => <p style={{...iconTextStyle, ...style}}>2D</p>;
const Icon3D = ( {style} ) => <p style={{...iconTextStyle, ...style}}>3D</p>;
const IconConstruction = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.32 4.32h1.44v0.96h-0.48v0.48H4.32V4.32zm0 13.92v1.44h1.44v-0.96h-0.48v-0.48H4.32zm13.92 1.44h1.44v-1.44h-0.96v0.48h-0.48v0.96zm1.44 -13.92V4.32h-1.44v0.96h0.48v0.48h0.96zM7.2 4.32v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm4.8 2.88h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm-2.88 4.8v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zM4.32 16.8h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92z"/>
  </svg>,
  'Construction',
);
const IconInterest = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.32 4.32h1.44v0.96h-0.48v0.48H4.32V4.32zm0 13.92v1.44h1.44v-0.96h-0.48v-0.48H4.32zm13.92 1.44h1.44v-1.44h-0.96v0.48h-0.48v0.96zm1.44 -13.92V4.32h-1.44v0.96h0.48v0.48h0.96zM7.2 4.32v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm4.8 2.88h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm-2.88 4.8v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zM4.32 16.8h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92z"/>
    <path d="M7.68 7.68h8.64v8.64H7.68V7.68z"/>
  </svg>,
  'Interest',
);
const IconObstacle = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.17 1.745c-5.386 0 -9.754 4.368 -9.754 9.754c0 5.386 4.368 9.754 9.754 9.754s9.754 -4.368 9.754 -9.754C21.924 6.11 17.556 1.745 12.17 1.745zM18.266 13.327h-12.192V9.67h12.192V13.327z"/>
  </svg>,
  'Obstacle',
);
const IconNoCam = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.1 8.55v8.371l-1.35 -1.186v-7.186a0.15 0.15 0 0 0 -0.15 -0.15h-3.503l-0.321 -0.896 -0.429 -1.204h-4.697l-0.391 1.096 -1.091 -0.959 0.39 -1.09a0.599 0.599 0 0 1 0.564 -0.398h5.752a0.601 0.601 0 0 1 0.566 0.398l0.608 1.702h2.55a1.5 1.5 0 0 1 1.5 1.5zM12 9.6a2.999 2.999 0 0 1 2.995 2.836l-3.217 -2.828c0.073 -0.005 0.147 -0.008 0.222 -0.008zm-1.549 2.083 2.657 2.335a1.8 1.8 0 0 1 -2.657 -2.335zm-0.911 -0.801a2.987 2.987 0 0 0 -0.54 1.718A2.999 2.999 0 0 0 12 15.6c0.778 0 1.487 -0.296 2.019 -0.781l2.766 2.431H5.4a0.15 0.15 0 0 1 -0.15 -0.15V8.55c0 -0.082 0.068 -0.15 0.15 -0.15h1.315l2.825 2.482zm-4.345 -3.818a1.5 1.5 0 0 0 -1.295 1.486v8.55a1.5 1.5 0 0 0 1.5 1.5h12.922l0.827 0.726a0.72 0.72 0 1 0 0.95 -1.081L5.341 5.275a0.72 0.72 0 1 0 -0.95 1.082l0.804 0.707z"/>
  </svg>,
  'NoCam',
);
const IconMust = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.32 8.16V4.32h3.84v1.44h-2.4v2.4H4.32zm15.36 0V4.32h-3.84v1.44h2.4v2.4h1.44zm0 7.68h-1.44v2.4h-2.4v1.44h3.84v-3.84zm-11.52 3.84v-1.44h-2.4v-2.4H4.32v3.84h3.84zm3.36 -6.72h-2.4v-1.44h2.4v-2.4h1.44v2.4h2.4v1.44h-2.4v2.4h-1.44v-2.4z"/>
  </svg>,
  'Must',
);
const IconAddCam = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.05 7.05h2.55a1.5 1.5 0 0 1 1.5 1.5v3.434a4.734 4.734 0 0 0 -1.35 -0.803v-2.631a0.15 0.15 0 0 0 -0.15 -0.15h-3.503l-0.75 -2.1h-4.697L8.901 8.4H5.4a0.15 0.15 0 0 0 -0.15 0.15v8.55c0 0.083 0.068 0.15 0.15 0.15h7.199a4.731 4.731 0 0 0 0.776 1.35H5.4a1.5 1.5 0 0 1 -1.5 -1.5V8.55a1.5 1.5 0 0 1 1.5 -1.5h2.55l0.609 -1.702a0.599 0.599 0 0 1 0.564 -0.398h5.752a0.601 0.601 0 0 1 0.566 0.398l0.608 1.702z"/>
    <path d="M14.769 11.442A3 3 0 0 0 12 9.6a2.999 2.999 0 0 0 -3 3 2.999 2.999 0 0 0 3.303 2.985 4.742 4.742 0 0 1 0.17 -1.248 1.8 1.8 0 0 1 -2.273 -1.737 1.8 1.8 0 0 1 3.553 -0.41 4.751 4.751 0 0 1 1.016 -0.747z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.504 14.183c0.24 0.418 0.378 0.901 0.378 1.417a2.829 2.829 0 0 1 -0.378 1.417 2.856 2.856 0 0 1 -1.048 1.047c-0.417 0.24 -0.901 0.377 -1.416 0.377h-0.001a2.829 2.829 0 0 1 -1.418 -0.379 2.856 2.856 0 0 1 -1.045 -1.045 2.83 2.83 0 0 1 -0.378 -1.418c0 -0.516 0.138 -1.001 0.378 -1.418a2.856 2.856 0 0 1 1.045 -1.045 2.829 2.829 0 0 1 1.418 -0.379h0.001c0.516 0 0.999 0.137 1.416 0.378a2.856 2.856 0 0 1 1.048 1.047zM21.019 15.6a3.979 3.979 0 1 1 -7.958 0 3.979 3.979 0 0 1 7.958 0z"/>
    <path d="M16.471 17.116a0.568 0.568 0 1 0 1.137 0v-0.948h0.948a0.568 0.568 0 1 0 0 -1.137h-0.948v-0.948a0.568 0.568 0 0 0 -1.137 0v0.948h-0.947a0.568 0.568 0 1 0 0 1.137h0.947v0.948z"/>
  </svg>,
  'AddCam',
);

const ASIDE_STYLE = {
  backgroundColor: '#ffffff',
  padding: '5px',
  width: '100%'
};

const sortButtonsCb = (a, b) => {
  if (a.index === undefined || a.index === null) {
    a.index = Number.MAX_SAFE_INTEGER;
  }

  if (b.index === undefined || b.index === null) {
    b.index = Number.MAX_SAFE_INTEGER;
  }

  return a.index - b.index;
};

const mapButtonsCb = (el, ind) => {
  return (
    <If
      key={ind}
      condition={el.condition}
      style={{ position: 'relative' }}
    >
      {el.dom}
    </If>
  );
};

export default class Toolbar extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showDrawer: this.props.showDrawer
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.state.mode !== nextProps.state.mode ||
      this.props.height !== nextProps.height ||
      this.props.width !== nextProps.width ||
      this.props.state.alterate !== nextProps.state.alterate;
  }

  handleDrawChange(){
    this.setState({
      showDrawer: !this.props.showDrawer
    })
    this.props.updateProp(this.state.showDrawer)
    console.log(this.state .showDrawer)
  }

  render() {

    let {
      props: { state, width, height, toolbarButtons, allowProjectFileSupport },
      context: { projectActions, viewer3DActions, translator, linesActions, sceneActions }
    } = this;

    let mode = state.get('mode');
    let alterate = state.get('alterate');
    let alterateColor = alterate ? SharedStyle.MATERIAL_COLORS[500].orange : '';

    const DrawConstructionArea = () => {
      projectActions.unselectAll();
      sceneActions.selectLayer("layer2")
      linesActions.selectToolDrawingLine('construction area')
    }
  
    const DrawInterestArea = () => {
      projectActions.unselectAll()
      sceneActions.selectLayer("layer2")
      linesActions.selectToolDrawingLine('interest area')
    }

    const DrawObstacleArea = () => {
      projectActions.unselectAll()
      sceneActions.selectLayer("layer2")
      linesActions.selectToolDrawingLine('obstacle area')
    }

    const DrawNoCameraArea = () => {
      projectActions.unselectAll()
      sceneActions.selectLayer("layer2")
      linesActions.selectToolDrawingLine('nocamera area')
    }

    const DrawMustcoverArea = () => {
      projectActions.unselectAll()
      sceneActions.selectLayer("layer2")
      linesActions.selectToolDrawingLine('mustcover area')
    }

    let sorter = [
      {
        index: 1, condition: true, dom: <ToolbarButton
          active={false}
          tooltip={translator.t('Interest Area')}
          onClick={event => DrawInterestArea()}>
          <IconInterest sx={{ fontSize: 40 }}/>
        </ToolbarButton>
      },
      {
        index: 0, condition: true, dom: <ToolbarButton
          active={false}
          tooltip={translator.t('Construction Area')}
          onClick={event => DrawConstructionArea()}>
          <IconConstruction sx={{ fontSize: 40 }}/>
        </ToolbarButton>
      },
      {
        index: 2, condition: true, dom: <ToolbarButton
          active={false}
          tooltip={translator.t('Obstacle Area')}
          onClick={event => DrawObstacleArea()}>
          <IconObstacle sx={{ fontSize: 40 }}/>
        </ToolbarButton>
      },
      {
        index: 3, condition: true, dom: <ToolbarButton
          active={false}
          tooltip={translator.t('No Camera Area')}
          onClick={event => DrawNoCameraArea()}>
          <IconNoCam sx={{ fontSize: 40 }}/>
        </ToolbarButton>
      },
      {
        index: 4, condition: true, dom: <ToolbarButton
          active={false}
          tooltip={translator.t('Must-cover Area')}
          onClick={event => DrawMustcoverArea()}>
          <IconMust sx={{ fontSize: 40 }}/>
        </ToolbarButton>
      },
      {
        index: 5, condition: true, dom: <ToolbarButton
          active={false}
          tooltip={translator.t('Place Camera')}
          onClick={() => this.handleDrawChange()}>
          <IconAddCam sx={{ fontSize: 40 }}/>
        </ToolbarButton>
      },
    ];

    sorter = sorter.concat(toolbarButtons.map((Component, key) => {
      return Component.prototype ? //if is a react component
        {
          condition: true,
          dom: React.createElement(Component, { mode, state, key })
        } :
        {                           //else is a sortable toolbar button
          index: Component.index,
          condition: Component.condition,
          dom: React.createElement(Component.dom, { mode, state, key })
        };
    }));

    return (
      <aside style={{ ...ASIDE_STYLE, maxWidth: width, maxHeight: height }} className='toolbar'>
        {sorter.sort(sortButtonsCb).map(mapButtonsCb)}
      </aside>
    )
  }
}

Toolbar.propTypes = {
  state: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  allowProjectFileSupport: PropTypes.bool.isRequired,
  toolbarButtons: PropTypes.array
};

Toolbar.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  sceneActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
