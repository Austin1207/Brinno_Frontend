import React from 'react';
import PropTypes from 'prop-types';

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

const drawerWidth = 260;

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
  }
}

export default function Viewer2D(
  { state, width, height },
  { viewer2DActions, linesActions, holesActions, verticesActions, itemsActions, areaActions, projectActions, catalog }) {
  
  /* item button */
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
  /* item button */
  /* camera coverage button*/
  const buttonsStyle = { position: 'absolute', top: 94, right: 41, width: '210px', height: '36px',
        backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}};
  const buttonsInuseStyle = { position: 'absolute', top: 94, right: 41, width: '210px', height: '36px',
        backgroundColor: '#FFFFFF', color: '#ff8200', "&:hover": {backgroundColor: '#ff8200', color: '#ffffff'}};
  const [openCoverage, setCoverage] = React.useState(true);
  const handleCoverageButton = () => {
    setCoverage(!openCoverage);
  };

  let { viewer2D, mode, scene } = state;

  let layerID = scene.selectedLayer;

  let mapCursorPosition = ({ x, y }) => {
    return { x, y: -y + scene.height }
  };

  let onMouseMove = viewerEvent => {

    //workaround that allow imageful component to work
    let evt = new Event('mousemove-planner-event');
    evt.viewerEvent = viewerEvent;
    document.dispatchEvent(evt);

    let { x, y } = mapCursorPosition(viewerEvent);

    projectActions.updateMouseCoord({ x, y });

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

  let onMouseDown = viewerEvent => {
    setSelectItem(false);
    setInfo(false);// item button
    let event = viewerEvent.originalEvent;

    //workaround that allow imageful component to work
    let evt = new Event('mousedown-planner-event');
    evt.viewerEvent = viewerEvent;
    document.dispatchEvent(evt);

    let { x, y } = mapCursorPosition(viewerEvent);

    if (mode === constants.MODE_IDLE) {
      let elementData = extractElementData(event.target);
      if (!elementData || !elementData.selected) return;

      switch (elementData.prototype) {
        case 'lines':
          linesActions.beginDraggingLine(elementData.layer, elementData.id, x, y, state.snapMask);
          break;

        case 'vertices':
          verticesActions.beginDraggingVertex(elementData.layer, elementData.id, x, y, state.snapMask);
          break;

        case 'items':
          if (elementData.part === 'rotation-anchor')
            itemsActions.beginRotatingItem(elementData.layer, elementData.id, x, y);
          else
            itemsActions.beginDraggingItem(elementData.layer, elementData.id, x, y);
          break;

        case 'holes':
          holesActions.beginDraggingHole(elementData.layer, elementData.id, x, y);
          break;

        default: break;
      }
    }
    event.stopPropagation();
  };

  let onMouseUp = viewerEvent => {
    let event = viewerEvent.originalEvent;

    let evt = new Event('mouseup-planner-event');
    evt.viewerEvent = viewerEvent;
    document.dispatchEvent(evt);

    let { x, y } = mapCursorPosition(viewerEvent);

    switch (mode) {

      case constants.MODE_IDLE:
        let elementData = extractElementData(event.target);

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
            setInfo(true);// item button
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
        setSelectItem(true);// item button
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

  let onChangeValue = (value) => {
    projectActions.updateZoomScale(value.a);
    return viewer2DActions.updateCameraView(value)
  };

  let onChangeTool = (tool) => {
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

  let { e, f, SVGWidth, SVGHeight } = state.get('viewer2D').toJS();

  let rulerSize = 0; //px
  let rulerUnitPixelSize = 100;
  let rulerBgColor = SharedStyle.PRIMARY_COLOR.main;
  let rulerFnColor = SharedStyle.COLORS.white;
  let rulerMkColor = SharedStyle.SECONDARY_COLOR.main;
  let sceneWidth = SVGWidth || state.getIn(['scene', 'width']);
  let sceneHeight = SVGHeight || state.getIn(['scene', 'height']);
  let sceneZoom = state.zoom || 1;
  let rulerXElements = Math.ceil( sceneWidth / rulerUnitPixelSize ) + 1;
  let rulerYElements = Math.ceil( sceneHeight / rulerUnitPixelSize ) + 1;

  return (
    <div style={{
      margin: 0,
      padding: 0,
      display: 'grid',
      gridRowGap: '0',
      gridColumnGap: '0',
      gridTemplateColumns: `${rulerSize}px ${width - rulerSize}px`,
      gridTemplateRows: `${rulerSize}px ${height - rulerSize}px`,
      position: 'relative',
      cursor: 'context-menu'
    }}
    //onContextMenu={handleContextMenu}
    >
{/*      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        PaperProps={{ style: { height: "90vh", top: 68.5 } }}
        variant="persistent"
        anchor="left"
        open={open}>            
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>        
        <Divider />
        {
          info && !type &&
          <Typography Info>
            Info
          </Typography>
        }
        {
          type && elementsToDisplay.map(elem => <CatalogChangeItem key={elem.name} element={elem} state={state}/>)
        }
      </Drawer>*/}
      <div style={{ gridColumn: 1, gridRow: 1, backgroundColor: rulerBgColor }}></div>
      <div style={{ gridRow: 1, gridColumn: 2, position: 'relative', overflow: 'hidden' }} id="rulerX">
      { sceneWidth ? <RulerX
          unitPixelSize={rulerUnitPixelSize}
          zoom={sceneZoom}
          mouseX={state.mouse.get('x')}
          width={width - rulerSize}
          zeroLeftPosition={e || 0}
          backgroundColor={rulerBgColor}
          fontColor={rulerFnColor}
          markerColor={rulerMkColor}
          positiveUnitsNumber={rulerXElements}
          negativeUnitsNumber={0}
        /> : null }
      </div>
      <div style={{ gridColumn: 1, gridRow: 2, position: 'relative', overflow: 'hidden' }} id="rulerY">
        { sceneHeight ? <RulerY
          unitPixelSize={rulerUnitPixelSize}
          zoom={sceneZoom}
          mouseY={state.mouse.get('y')}
          height={height - rulerSize}
          zeroTopPosition={((sceneHeight * sceneZoom) + f) || 0}
          backgroundColor={rulerBgColor}
          fontColor={rulerFnColor}
          markerColor={rulerMkColor}
          positiveUnitsNumber={rulerYElements}
          negativeUnitsNumber={0}
        /> : null }
      </div>
      <ReactSVGPanZoom
        style={{ gridColumn: 2, gridRow: 2 }}
        width={width - rulerSize}
        height={height - rulerSize}
        value={viewer2D.isEmpty() ? null : viewer2D.toJS()}
        onChangeValue={onChangeValue}
        tool={mode2Tool(mode)}
        onChangeTool={onChangeTool}
        detectAutoPan={mode2DetectAutopan(mode)}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        miniaturePosition="none"
        toolbarPosition="none"
      >

        <svg width={scene.width} height={scene.height}>
          <defs>
            <pattern id="diagonalFill" patternUnits="userSpaceOnUse" width="4" height="4" fill="#FFF">
              <rect x="0" y="0" width="4" height="4" fill="#FFF" />
              <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" style={{ stroke: '#8E9BA2', strokeWidth: 1 }} />
            </pattern>
          </defs>
          <g style={Object.assign(mode2Cursor(mode), mode2PointerEvents(mode))}>
            <State state={state} catalog={catalog} openCoverage={openCoverage}/>
          </g>
        </svg>

      </ReactSVGPanZoom>
      <Button variant="contained" startIcon={openCoverage ? <VisibilityIcon/> : <VisibilityOffIcon/>}
        sx={openCoverage ? buttonsInuseStyle : buttonsStyle}
        onClick={handleCoverageButton}>
        Camera Coverage
      </Button>
{/*      <Menu
        open={contextMenu}
        onClose={handleContextMenuClose}
        anchorReference="anchorPosition"
        anchorPosition={
          { top: cursorPositionY, left: cursorPositionX }
        }
      >
        <MenuItem onClick={handleInfo}>Info</MenuItem>
        <MenuItem onClick={handleClickDelete}>Delete</MenuItem>
        <MenuItem onClick={handleType}>Change</MenuItem>
      </Menu>*/}
    </div>
  );
}


Viewer2D.propTypes = {
  state: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

Viewer2D.contextTypes = {
  viewer2DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  verticesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  areaActions: PropTypes.object.isRequired,
  projectActions: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired,
};
