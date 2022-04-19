'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = Viewer2D;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSvgPanZoom = require('react-svg-pan-zoom');

var _constants = require('../../constants');

var constants = _interopRequireWildcard(_constants);

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var _sharedStyle = require('../../shared-style');

var SharedStyle = _interopRequireWildcard(_sharedStyle);

var _export = require('./export');

var _elementstodisplay = require('../topbar/elementstodisplay');

var _catalogChangeitem = require('../catalog-view/catalog-changeitem');

var _catalogChangeitem2 = _interopRequireDefault(_catalogChangeitem);

var _Menu = require('@mui/material/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('@mui/material/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Drawer = require('@mui/material/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Typography = require('@mui/material/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = require('@mui/material/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _IconButton = require('@mui/material/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ChevronLeft = require('@mui/icons-material/ChevronLeft');

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drawerWidth = 260;

function mode2Tool(mode) {
  switch (mode) {
    case constants.MODE_2D_PAN:
      return _reactSvgPanZoom.TOOL_PAN;
    case constants.MODE_2D_ZOOM_IN:
      return _reactSvgPanZoom.TOOL_ZOOM_IN;
    case constants.MODE_2D_ZOOM_OUT:
      return _reactSvgPanZoom.TOOL_ZOOM_OUT;
    case constants.MODE_IDLE:
      return _reactSvgPanZoom.TOOL_AUTO;
    default:
      return _reactSvgPanZoom.TOOL_NONE;
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

function mode2Cursor(mode) {
  switch (mode) {
    case constants.MODE_DRAGGING_HOLE:
    case constants.MODE_DRAGGING_LINE:
    case constants.MODE_DRAGGING_VERTEX:
    case constants.MODE_DRAGGING_ITEM:
      return { cursor: 'move' };

    case constants.MODE_ROTATING_ITEM:
      return { cursor: 'ew-resize' };

    case constants.MODE_WAITING_DRAWING_LINE:
    case constants.MODE_DRAWING_LINE:
      return { cursor: 'crosshair' };
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

function Viewer2D(_ref, _ref2) {
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

  /* item button */
  var _React$useState = _react2.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      contextMenu = _React$useState2[0],
      setContextMenu = _React$useState2[1];

  var _React$useState3 = _react2.default.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      cursorPositionX = _React$useState4[0],
      setX = _React$useState4[1];

  var _React$useState5 = _react2.default.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      cursorPositionY = _React$useState6[0],
      setY = _React$useState6[1];

  var _React$useState7 = _react2.default.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      selectItem = _React$useState8[0],
      setSelectItem = _React$useState8[1];

  var _React$useState9 = _react2.default.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      open = _React$useState10[0],
      setOpen = _React$useState10[1];

  var _React$useState11 = _react2.default.useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      info = _React$useState12[0],
      setInfo = _React$useState12[1];

  var _React$useState13 = _react2.default.useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      type = _React$useState14[0],
      setType = _React$useState14[1];

  var handleContextMenu = function handleContextMenu(event) {
    event.preventDefault();
    if (selectItem) {
      setX(event.clientX);
      setY(event.clientY);
      setContextMenu(!contextMenu);
    };
  };

  var handleContextMenuClose = function handleContextMenuClose() {
    setContextMenu(false);
  };

  var handleClickDelete = function handleClickDelete() {
    projectActions.remove();
    setInfo(false);
    setType(false);
    setContextMenu(false);
  };

  var handleInfo = function handleInfo() {
    setOpen(true);
    setInfo(true);
    setType(false);
    setContextMenu(false);
  };

  var handleType = function handleType() {
    setOpen(true);
    setInfo(false);
    setType(true);
    setContextMenu(false);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setOpen(false);
    setInfo(false);
  };

  /* item button */

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
    setSelectItem(false);
    setInfo(false); // item button
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
            setSelectItem(true);
            setInfo(true); // item button
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
        linesActions.endDrawingLine(x, y, state.snapMask);
        linesActions.beginDrawingLine(layerID, x, y, state.snapMask);
        break;

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
        setSelectItem(true); // item button
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
      case _reactSvgPanZoom.TOOL_NONE:
        projectActions.selectToolEdit();
        break;

      case _reactSvgPanZoom.TOOL_PAN:
        viewer2DActions.selectToolPan();
        break;

      case _reactSvgPanZoom.TOOL_ZOOM_IN:
        viewer2DActions.selectToolZoomIn();
        break;

      case _reactSvgPanZoom.TOOL_ZOOM_OUT:
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

  return _react2.default.createElement(
    'div',
    { style: {
        margin: 0,
        padding: 0,
        display: 'grid',
        gridRowGap: '0',
        gridColumnGap: '0',
        gridTemplateColumns: rulerSize + 'px ' + (width - rulerSize) + 'px',
        gridTemplateRows: rulerSize + 'px ' + (height - rulerSize) + 'px',
        position: 'relative',
        cursor: 'context-menu'
      },
      onContextMenu: handleContextMenu },
    _react2.default.createElement(
      _Drawer2.default,
      {
        sx: {
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        },
        PaperProps: { style: { height: "90vh", top: 68.5 } },
        variant: 'persistent',
        anchor: 'left',
        open: open },
      _react2.default.createElement(
        _IconButton2.default,
        { onClick: handleDrawerClose },
        _react2.default.createElement(_ChevronLeft2.default, null)
      ),
      _react2.default.createElement(_Divider2.default, null),
      info && !type && _react2.default.createElement(
        _Typography2.default,
        { Info: true },
        'Info'
      ),
      type && _elementstodisplay.elementsToDisplay.map(function (elem) {
        return _react2.default.createElement(_catalogChangeitem2.default, { key: elem.name, element: elem, state: state });
      })
    ),
    _react2.default.createElement('div', { style: { gridColumn: 1, gridRow: 1, backgroundColor: rulerBgColor } }),
    _react2.default.createElement(
      'div',
      { style: { gridRow: 1, gridColumn: 2, position: 'relative', overflow: 'hidden' }, id: 'rulerX' },
      sceneWidth ? _react2.default.createElement(_export.RulerX, {
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
    _react2.default.createElement(
      'div',
      { style: { gridColumn: 1, gridRow: 2, position: 'relative', overflow: 'hidden' }, id: 'rulerY' },
      sceneHeight ? _react2.default.createElement(_export.RulerY, {
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
    _react2.default.createElement(
      _reactSvgPanZoom.ReactSVGPanZoom,
      {
        style: { gridColumn: 2, gridRow: 2 },
        width: width - rulerSize,
        height: height - rulerSize,
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
      _react2.default.createElement(
        'svg',
        { width: scene.width, height: scene.height },
        _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'pattern',
            { id: 'diagonalFill', patternUnits: 'userSpaceOnUse', width: '4', height: '4', fill: '#FFF' },
            _react2.default.createElement('rect', { x: '0', y: '0', width: '4', height: '4', fill: '#FFF' }),
            _react2.default.createElement('path', { d: 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2', style: { stroke: '#8E9BA2', strokeWidth: 1 } })
          )
        ),
        _react2.default.createElement(
          'g',
          { style: Object.assign(mode2Cursor(mode), mode2PointerEvents(mode)) },
          _react2.default.createElement(_state2.default, { state: state, catalog: catalog })
        )
      )
    ),
    _react2.default.createElement(
      _Menu2.default,
      {
        open: contextMenu,
        onClose: handleContextMenuClose,
        anchorReference: 'anchorPosition',
        anchorPosition: { top: cursorPositionY, left: cursorPositionX }
      },
      _react2.default.createElement(
        _MenuItem2.default,
        { onClick: handleInfo },
        'Info'
      ),
      _react2.default.createElement(
        _MenuItem2.default,
        { onClick: handleClickDelete },
        'Delete'
      ),
      _react2.default.createElement(
        _MenuItem2.default,
        { onClick: handleType },
        'Change'
      )
    )
  );
}

Viewer2D.propTypes = {
  state: _propTypes2.default.object.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired
};

Viewer2D.contextTypes = {
  viewer2DActions: _propTypes2.default.object.isRequired,
  linesActions: _propTypes2.default.object.isRequired,
  holesActions: _propTypes2.default.object.isRequired,
  verticesActions: _propTypes2.default.object.isRequired,
  itemsActions: _propTypes2.default.object.isRequired,
  areaActions: _propTypes2.default.object.isRequired,
  projectActions: _propTypes2.default.object.isRequired,
  catalog: _propTypes2.default.object.isRequired
};