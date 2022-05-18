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
  <svg width="24" height="23.415" viewBox="0 0 24 23.415" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke-width="1.7560975609756095" stroke-dasharray="4 4" d="M3.805 2.049h16.976v16.976h-16.976z"/>
  </svg>,
  'Construction',
);
const IconInterest = createSvgIcon(
  <svg width="24" height="23.415" viewBox="0 0 24 23.415" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke-width="1.7560975609756095" stroke-dasharray="4 4" d="M3.22 3.805h16.976v16.976h-16.976z"/>
    <path d="M6.439 7.024h10.537v10.537H6.439z"/>
  </svg>,
  'Interest',
);
const IconObstacle = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.17 1.745c-5.386 0 -9.754 4.368 -9.754 9.754c0 5.386 4.368 9.754 9.754 9.754s9.754 -4.368 9.754 -9.754C21.924 6.11 17.556 1.745 12.17 1.745zM18.266 13.327h-12.192V9.67h12.192V13.327z"/>
  </svg>,
  'Obstacle',
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
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.state.mode !== nextProps.state.mode ||
      this.props.height !== nextProps.height ||
      this.props.width !== nextProps.width ||
      this.props.state.alterate !== nextProps.state.alterate;
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
        index: 0, condition: true, dom: <ToolbarButton
          active={false}
          tooltip={translator.t('Interest Area')}
          onClick={event => DrawInterestArea()}>
          <IconConstruction sx={{ fontSize: 40 }}/>
        </ToolbarButton>
      },
      {
        index: 1, condition: true, dom: <ToolbarButton
          active={false}
          tooltip={translator.t('Construction Area')}
          onClick={event => DrawConstructionArea()}>
          <IconInterest sx={{ fontSize: 40 }}/>
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
          <LocationSearchingIcon />
        </ToolbarButton>
      },
      {
        index: 4, condition: true, dom: <ToolbarButton
          active={false}
          tooltip={translator.t('Must-cover Area')}
          onClick={event => DrawMustcoverArea()}>
          <LocationSearchingIcon />
        </ToolbarButton>
      },
      {
        index: 5, condition: true, dom: <ToolbarButton
          active={false}
          tooltip={translator.t('Place Camera')}
          >
          <CameraAltIcon />
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
