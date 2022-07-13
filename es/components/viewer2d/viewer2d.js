var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React from 'react';
import PropTypes from 'prop-types';
import { SnapUtils } from '../../utils/export';
import { ReactSVGPanZoom, TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT, TOOL_AUTO } from 'react-svg-pan-zoom';
import * as constants from '../../constants';
import State from './state';
import * as SharedStyle from '../../shared-style';
import { RulerX, RulerY } from './export';
import { elementsToDisplay } from '../topbar/elementstodisplay';
import CatalogChangeItem from '../catalog-view/catalog-changeitem';
import Visibility_Polygon from './visibility-polygon';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import Box from '@material-ui/core/Box';
import { IconConstructionLine, IconInterestLine, IconObstacleLine, IconNoCamLine, IconMustLine } from './lineicon';

var drawerWidth = 260;

function mode2Tool(mode) {
  switch (mode) {
    case constants.MODE_2D_PAN:
      return TOOL_PAN;
    case constants.MODE_2D_ZOOM_IN:
      return TOOL_ZOOM_IN;
    case constants.MODE_2D_ZOOM_OUT:
      return TOOL_ZOOM_OUT;
    case constants.MODE_IDLE:
      return TOOL_AUTO;
    default:
      return TOOL_NONE;
  }
}

function mode2PointerEvents(mode) {
  switch (mode) {
    case constants.MODE_DRAWING_LINE:
    case constants.MODE_DRAWING_HOLE:
    case constants.MODE_DRAWING_ITEM:
    case constants.MODE_DRAGGING_HOLE:
    case constants.MODE_DRAGGING_ITEM:
    case constants.MODE_DRAGGING_LINE:
    case constants.MODE_DRAGGING_VERTEX:
      return { pointerEvents: 'none' };

    default:
      return {};
  }
}
// contorl Cursor
function mode2Cursor(mode) {
  switch (mode) {
    case constants.MODE_DRAGGING_HOLE:
    case constants.MODE_DRAGGING_LINE:
    // return { cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/outline.png"),pointer' };

    case constants.MODE_DRAGGING_VERTEX:
    // return { cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/outline.png"),pointer' };

    case constants.MODE_DRAGGING_ITEM:
      // return { cursor: 'move' };
      return { cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' };

    case constants.MODE_ROTATING_ITEM:
      // return { cursor: 'ew-resize' };
      return { cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/rotate_2.png") 5 10,pointer' };

    case constants.MODE_WAITING_DRAWING_LINE:
    // return { cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/outline.png"),pointer' };

    case constants.MODE_DRAWING_LINE:
      // return { cursor: 'crosshair' };
      return { cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/outline.png") 10 10,pointer' };
    default:
      return { cursor: 'default' };
  }
}

function mode2DetectAutopan(mode) {
  switch (mode) {
    case constants.MODE_DRAWING_LINE:
    case constants.MODE_DRAGGING_LINE:
    case constants.MODE_DRAGGING_VERTEX:
    case constants.MODE_DRAGGING_HOLE:
    case constants.MODE_DRAGGING_ITEM:
    case constants.MODE_DRAWING_HOLE:
    case constants.MODE_DRAWING_ITEM:
      return true;

    default:
      return false;
  }
}

function extractElementData(node) {
  while (!node.attributes.getNamedItem('data-element-root') && node.tagName !== 'svg') {
    node = node.parentNode;
  }
  if (node.tagName === 'svg') return null;

  return {
    part: node.attributes.getNamedItem('data-part') ? node.attributes.getNamedItem('data-part').value : undefined,
    layer: node.attributes.getNamedItem('data-layer').value,
    prototype: node.attributes.getNamedItem('data-prototype').value,
    selected: node.attributes.getNamedItem('data-selected').value === 'true',
    id: node.attributes.getNamedItem('data-id').value
  };
}

export default function Viewer2D(_ref, _ref2) {
  var state = _ref.state,
      width = _ref.width,
      height = _ref.height;
  var viewer2DActions = _ref2.viewer2DActions,
      linesActions = _ref2.linesActions,
      holesActions = _ref2.holesActions,
      verticesActions = _ref2.verticesActions,
      itemsActions = _ref2.itemsActions,
      areaActions = _ref2.areaActions,
      projectActions = _ref2.projectActions,
      catalog = _ref2.catalog;


  /* item button 
  const [contextMenu, setContextMenu] = React.useState(false);
  const [cursorPositionX, setX] = React.useState(0);
  const [cursorPositionY, setY] = React.useState(0);
  const [selectItem, setSelectItem] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState(false);
  const [type, setType] = React.useState(false);
    const handleContextMenu = (event) => {
    event.preventDefault();
    if(selectItem){
      setX(event.clientX);
      setY(event.clientY);
      setContextMenu(!contextMenu);
    };
  };
    const handleContextMenuClose = () => {
    setContextMenu(false);
  };
    const handleClickDelete = () =>{
    projectActions.remove();
    setInfo(false);
    setType(false);
    setContextMenu(false);
  };
    const handleInfo = () => {
    setOpen(true);
    setInfo(true);
    setType(false);
    setContextMenu(false);
    console.log(selectItem);
  };
    const handleType = () => {
    setOpen(true);
    setInfo(false);
    setType(true);
    setContextMenu(false);
  };
    const handleDrawerClose = () => {
    setOpen(false);
    setInfo(false);
  };
   item button */
  /* camera coverage button*/
  var buttonsStyle = { position: 'absolute', textTransform: 'none', width: '210px', height: '36px', justifyContent: 'flex-start', padding: '6px',
    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": { backgroundColor: '#989a9c', color: '#ffffff' } };
  var buttonsInuseStyle = { position: 'absolute', textTransform: 'none', width: '210px', height: '36px', justifyContent: 'flex-start', padding: '6px',
    backgroundColor: '#FFFFFF', color: '#ff8200', "&:hover": { backgroundColor: '#ff8200', color: '#ffffff' } };

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openCoverage = _React$useState2[0],
      setCoverage = _React$useState2[1];

  var handleCoverageButton = function handleCoverageButton() {
    setCoverage(!openCoverage);
  };
  /* Area legend*/

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openLegend = _React$useState4[0],
      setOpenLegend = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      anchorEl = _React$useState6[0],
      setAnchorEl = _React$useState6[1];

  var handleLegendButton = function handleLegendButton(event) {
    setAnchorEl(event.currentTarget);
    setOpenLegend(!openLegend);
  };

  var viewer2D = state.viewer2D,
      mode = state.mode,
      scene = state.scene;


  var layerID = scene.selectedLayer;

  var mapCursorPosition = function mapCursorPosition(_ref3) {
    var x = _ref3.x,
        y = _ref3.y;

    return { x: x, y: -y + scene.height };
  };

  var onMouseMove = function onMouseMove(viewerEvent) {

    //workaround that allow imageful component to work
    var evt = new Event('mousemove-planner-event');
    evt.viewerEvent = viewerEvent;
    document.dispatchEvent(evt);

    var _mapCursorPosition = mapCursorPosition(viewerEvent),
        x = _mapCursorPosition.x,
        y = _mapCursorPosition.y;

    projectActions.updateMouseCoord({ x: x, y: y });

    switch (mode) {
      case constants.MODE_DRAWING_LINE:
        linesActions.updateDrawingLine(x, y, state.snapMask);
        break;

      case constants.MODE_DRAWING_HOLE:
        holesActions.updateDrawingHole(layerID, x, y);
        break;

      case constants.MODE_DRAWING_ITEM:
        itemsActions.updateDrawingItem(layerID, x, y);
        break;

      case constants.MODE_DRAGGING_HOLE:
        holesActions.updateDraggingHole(x, y);
        break;

      case constants.MODE_DRAGGING_LINE:
        linesActions.updateDraggingLine(x, y, state.snapMask);
        break;

      case constants.MODE_DRAGGING_VERTEX:
        verticesActions.updateDraggingVertex(x, y, state.snapMask);
        break;

      case constants.MODE_DRAGGING_ITEM:
        itemsActions.updateDraggingItem(x, y);
        break;

      case constants.MODE_ROTATING_ITEM:
        itemsActions.updateRotatingItem(x, y);
        break;
    }

    viewerEvent.originalEvent.stopPropagation();
  };

  var onMouseDown = function onMouseDown(viewerEvent) {
    //setSelectItem(false);
    //setInfo(false);// item button
    var event = viewerEvent.originalEvent;

    //workaround that allow imageful component to work
    var evt = new Event('mousedown-planner-event');
    evt.viewerEvent = viewerEvent;
    document.dispatchEvent(evt);

    var _mapCursorPosition2 = mapCursorPosition(viewerEvent),
        x = _mapCursorPosition2.x,
        y = _mapCursorPosition2.y;

    if (mode === constants.MODE_IDLE) {
      var elementData = extractElementData(event.target);
      if (!elementData || !elementData.selected) return;

      switch (elementData.prototype) {
        case 'lines':
          linesActions.beginDraggingLine(elementData.layer, elementData.id, x, y, state.snapMask);
          break;

        case 'vertices':
          verticesActions.beginDraggingVertex(elementData.layer, elementData.id, x, y, state.snapMask);
          break;

        case 'items':
          if (elementData.part === 'rotation-anchor') itemsActions.beginRotatingItem(elementData.layer, elementData.id, x, y);else itemsActions.beginDraggingItem(elementData.layer, elementData.id, x, y);
          break;

        case 'holes':
          holesActions.beginDraggingHole(elementData.layer, elementData.id, x, y);
          break;

        default:
          break;
      }
    }
    event.stopPropagation();
  };

  var onMouseUp = function onMouseUp(viewerEvent) {
    var event = viewerEvent.originalEvent;

    var evt = new Event('mouseup-planner-event');
    evt.viewerEvent = viewerEvent;
    document.dispatchEvent(evt);

    var _mapCursorPosition3 = mapCursorPosition(viewerEvent),
        x = _mapCursorPosition3.x,
        y = _mapCursorPosition3.y;

    switch (mode) {

      case constants.MODE_IDLE:
        var elementData = extractElementData(event.target);

        if (elementData && elementData.selected) return;

        switch (elementData ? elementData.prototype : 'none') {
          case 'areas':
            areaActions.selectArea(elementData.layer, elementData.id);
            break;

          case 'lines':
            linesActions.selectLine(elementData.layer, elementData.id);
            break;

          case 'holes':
            holesActions.selectHole(elementData.layer, elementData.id);
            break;

          case 'items':
            itemsActions.selectItem(elementData.layer, elementData.id);
            //setSelectItem(true);
            //setInfo(true);// item button
            break;

          case 'none':
            projectActions.unselectAll();
            break;
        }
        break;

      case constants.MODE_WAITING_DRAWING_LINE:
        linesActions.beginDrawingLine(layerID, x, y, state.snapMask);
        break;

      case constants.MODE_DRAWING_LINE:
        /* Stop drawing line*/
        var snap = SnapUtils.nearestSnap(state.snapElements, x, y, state.snapMask);
        if (snap) {
          console.log('touch point');
          linesActions.endDrawingLine(x, y, state.snapMask);
          break;
        } else {
          console.log('no touch point');
          linesActions.endDrawingLine(x, y, state.snapMask);
          linesActions.beginDrawingLine(layerID, x, y, state.snapMask);
          break;
        }

      case constants.MODE_DRAWING_HOLE:
        holesActions.endDrawingHole(layerID, x, y);
        break;

      case constants.MODE_DRAWING_ITEM:
        itemsActions.endDrawingItem(layerID, x, y);
        break;

      case constants.MODE_DRAGGING_LINE:
        linesActions.endDraggingLine(x, y, state.snapMask);
        break;

      case constants.MODE_DRAGGING_VERTEX:
        verticesActions.endDraggingVertex(x, y, state.snapMask);
        break;

      case constants.MODE_DRAGGING_ITEM:
        itemsActions.endDraggingItem(x, y);
        //setSelectItem(true);// item button
        break;

      case constants.MODE_DRAGGING_HOLE:
        holesActions.endDraggingHole(x, y);
        break;

      case constants.MODE_ROTATING_ITEM:
        itemsActions.endRotatingItem(x, y);
        break;
    }

    event.stopPropagation();
  };

  var onChangeValue = function onChangeValue(value) {
    projectActions.updateZoomScale(value.a);
    return viewer2DActions.updateCameraView(value);
  };

  var onChangeTool = function onChangeTool(tool) {
    switch (tool) {
      case TOOL_NONE:
        projectActions.selectToolEdit();
        break;

      case TOOL_PAN:
        viewer2DActions.selectToolPan();
        break;

      case TOOL_ZOOM_IN:
        viewer2DActions.selectToolZoomIn();
        break;

      case TOOL_ZOOM_OUT:
        viewer2DActions.selectToolZoomOut();
        break;
    }
  };

  var _state$get$toJS = state.get('viewer2D').toJS(),
      e = _state$get$toJS.e,
      f = _state$get$toJS.f,
      SVGWidth = _state$get$toJS.SVGWidth,
      SVGHeight = _state$get$toJS.SVGHeight;

  var rulerSize = 0; //px
  var rulerUnitPixelSize = 100;
  var rulerBgColor = SharedStyle.PRIMARY_COLOR.main;
  var rulerFnColor = SharedStyle.COLORS.white;
  var rulerMkColor = SharedStyle.SECONDARY_COLOR.main;
  var sceneWidth = SVGWidth || state.getIn(['scene', 'width']);
  var sceneHeight = SVGHeight || state.getIn(['scene', 'height']);
  var sceneZoom = state.zoom || 1;
  var rulerXElements = Math.ceil(sceneWidth / rulerUnitPixelSize) + 1;
  var rulerYElements = Math.ceil(sceneHeight / rulerUnitPixelSize) + 1;

  return (
    // Control Dragging line and put camera cursor
    React.createElement(
      'div',
      { style: {
          margin: 0,
          padding: 0,
          display: 'grid',
          gridRowGap: '0',
          gridColumnGap: '50',
          gridTemplateColumns: rulerSize + 'px ' + (width - rulerSize) + 'px',
          gridTemplateRows: rulerSize + 'px ' + (height - rulerSize) + 'px',
          position: 'relative',
          // cursor: 'context-menu'
          // cursor: 'crosshair'
          cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/add+camera.png") 17 17,pointer'
        }
        //onContextMenu={handleContextMenu}
      },
      React.createElement('div', { style: { gridColumn: 1, gridRow: 1, backgroundColor: rulerBgColor } }),
      React.createElement(
        'div',
        { style: { gridRow: 1, gridColumn: 2, position: 'relative', overflow: 'hidden' }, id: 'rulerX' },
        sceneWidth ? React.createElement(RulerX, {
          unitPixelSize: rulerUnitPixelSize,
          zoom: sceneZoom,
          mouseX: state.mouse.get('x'),
          width: width - rulerSize,
          zeroLeftPosition: e || 0,
          backgroundColor: rulerBgColor,
          fontColor: rulerFnColor,
          markerColor: rulerMkColor,
          positiveUnitsNumber: rulerXElements,
          negativeUnitsNumber: 0
        }) : null
      ),
      React.createElement(
        'div',
        { style: { gridColumn: 1, gridRow: 2, position: 'relative', overflow: 'hidden' }, id: 'rulerY' },
        sceneHeight ? React.createElement(RulerY, {
          unitPixelSize: rulerUnitPixelSize,
          zoom: sceneZoom,
          mouseY: state.mouse.get('y'),
          height: height - rulerSize,
          zeroTopPosition: sceneHeight * sceneZoom + f || 0,
          backgroundColor: rulerBgColor,
          fontColor: rulerFnColor,
          markerColor: rulerMkColor,
          positiveUnitsNumber: rulerYElements,
          negativeUnitsNumber: 0
        }) : null
      ),
      React.createElement(
        ReactSVGPanZoom
        // style={{ gridColumn: 2, gridRow: 2 , bottom:650, right:750}}
        // width={width - rulerSize + 750}
        // height={height - rulerSize + 650}
        ,
        { style: { gridColumn: 2, gridRow: 2, bottom: 9650, right: 15000 },
          width: width - rulerSize + 15000,
          height: height - rulerSize + 9650,
          value: viewer2D.isEmpty() ? null : viewer2D.toJS(),
          onChangeValue: onChangeValue,
          tool: mode2Tool(mode),
          onChangeTool: onChangeTool,
          detectAutoPan: mode2DetectAutopan(mode),
          onMouseDown: onMouseDown,
          onMouseMove: onMouseMove,
          onMouseUp: onMouseUp,
          miniaturePosition: 'none',
          toolbarPosition: 'none'
        },
        React.createElement(
          'svg',
          { width: scene.width, height: scene.height },
          React.createElement(
            'defs',
            null,
            React.createElement(
              'pattern',
              { id: 'diagonalFill', patternUnits: 'userSpaceOnUse', width: '4', height: '4', fill: '#FFF' },
              React.createElement('rect', { x: '0', y: '0', width: '4', height: '4', fill: '#FFF' }),
              React.createElement('path', { d: 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2', style: { stroke: '#8E9BA2', strokeWidth: 1 } })
            )
          ),
          React.createElement(
            'g',
            { style: Object.assign(mode2Cursor(mode), mode2PointerEvents(mode)) },
            React.createElement(State, { state: state, catalog: catalog, openCoverage: openCoverage })
          )
        )
      ),
      React.createElement(
        Button,
        { variant: 'contained',
          sx: _extends({}, openCoverage ? buttonsInuseStyle : buttonsStyle, { top: 24, right: 41, cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }),
          onClick: handleCoverageButton },
        openCoverage ? React.createElement(VisibilityIcon, { sx: { paddingRight: '6px' } }) : React.createElement(VisibilityOffIcon, { sx: { paddingRight: '6px' } }),
        React.createElement(Divider, { orientation: 'vertical', flexItem: true }),
        React.createElement(
          Typography,
          { sx: { fontSize: '14px', paddingLeft: '6px', cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' } },
          'Camera Coverage'
        )
      ),
      React.createElement(
        Button,
        { variant: 'contained',
          sx: _extends({}, openLegend ? buttonsInuseStyle : buttonsStyle, { top: 39 + 36, right: 41, cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }),
          onClick: handleLegendButton },
        openLegend ? React.createElement(ExpandLess, { sx: { paddingRight: '6px' } }) : React.createElement(ExpandMore, { sx: { paddingRight: '6px' } }),
        React.createElement(Divider, { orientation: 'vertical', flexItem: true }),
        React.createElement(
          Typography,
          { sx: { fontSize: '14px', paddingLeft: '6px', cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' } },
          'Area Legend'
        )
      ),
      React.createElement(
        Popper,
        { open: openLegend, anchorEl: anchorEl, placement: 'bottom-start', transition: true },
        function (_ref4) {
          var TransitionProps = _ref4.TransitionProps;
          return React.createElement(
            Fade,
            _extends({}, TransitionProps, { timeout: 350 }),
            React.createElement(
              Paper,
              { sx: { width: 210 - 12, height: 'auto', justifyContent: 'flex-start', padding: '6px' } },
              React.createElement(
                Box,
                { sx: { display: 'flex', flexFlow: 'row nowrap' } },
                React.createElement(IconConstructionLine, { sx: { paddingRight: '6px' } }),
                React.createElement(Divider, { orientation: 'vertical', flexItem: true }),
                React.createElement(
                  Typography,
                  { sx: { fontSize: '14px', paddingLeft: '6px' } },
                  'Construction Area'
                )
              ),
              React.createElement(
                Box,
                { sx: { display: 'flex', flexFlow: 'row nowrap' } },
                React.createElement(IconInterestLine, { sx: { paddingRight: '6px' } }),
                React.createElement(Divider, { orientation: 'vertical', flexItem: true }),
                React.createElement(
                  Typography,
                  { sx: { fontSize: '14px', paddingLeft: '6px' } },
                  'Interest Area'
                )
              ),
              React.createElement(
                Box,
                { sx: { display: 'flex', flexFlow: 'row nowrap' } },
                React.createElement(IconObstacleLine, { sx: { paddingRight: '6px' } }),
                React.createElement(Divider, { orientation: 'vertical', flexItem: true }),
                React.createElement(
                  Typography,
                  { sx: { fontSize: '14px', paddingLeft: '6px' } },
                  'Obstacle Area'
                )
              ),
              React.createElement(
                Box,
                { sx: { display: 'flex', flexFlow: 'row nowrap' } },
                React.createElement(IconNoCamLine, { sx: { paddingRight: '6px' } }),
                React.createElement(Divider, { orientation: 'vertical', flexItem: true }),
                React.createElement(
                  Typography,
                  { sx: { fontSize: '14px', paddingLeft: '6px' } },
                  'No Camera Area'
                )
              ),
              React.createElement(
                Box,
                { sx: { display: 'flex', flexFlow: 'row nowrap' } },
                React.createElement(IconMustLine, { sx: { paddingRight: '6px' } }),
                React.createElement(Divider, { orientation: 'vertical', flexItem: true }),
                React.createElement(
                  Typography,
                  { sx: { fontSize: '14px', paddingLeft: '6px' } },
                  'Must Cover Area'
                )
              )
            )
          );
        }
      )
    )
  );
}

Viewer2D.propTypes = {
  state: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

Viewer2D.contextTypes = {
  viewer2DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  verticesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  areaActions: PropTypes.object.isRequired,
  projectActions: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired
};