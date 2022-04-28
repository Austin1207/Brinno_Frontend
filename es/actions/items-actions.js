import { SELECT_ITEM, SELECT_TOOL_DRAWING_ITEM, UPDATE_DRAWING_ITEM, END_DRAWING_ITEM, BEGIN_DRAGGING_ITEM, UPDATE_DRAGGING_ITEM, END_DRAGGING_ITEM, BEGIN_ROTATING_ITEM, UPDATE_ROTATING_ITEM, END_ROTATING_ITEM, DIRECT_CREATE_ITEM } from '../constants';

export function selectItem(layerID, itemID) {
  return {
    type: SELECT_ITEM,
    layerID: layerID,
    itemID: itemID
  };
}

export function selectToolDrawingItem(sceneComponentType) {
  return {
    type: SELECT_TOOL_DRAWING_ITEM,
    sceneComponentType: sceneComponentType
  };
}

export function updateDrawingItem(layerID, x, y) {
  return {
    type: UPDATE_DRAWING_ITEM,
    layerID: layerID, x: x, y: y
  };
}

export function endDrawingItem(layerID, x, y) {
  return {
    type: END_DRAWING_ITEM,
    layerID: layerID, x: x, y: y
  };
}

export function beginDraggingItem(layerID, itemID, x, y) {
  return {
    type: BEGIN_DRAGGING_ITEM,
    layerID: layerID, itemID: itemID, x: x, y: y
  };
}

export function updateDraggingItem(x, y) {
  return {
    type: UPDATE_DRAGGING_ITEM,
    x: x, y: y
  };
}

export function endDraggingItem(x, y) {
  return {
    type: END_DRAGGING_ITEM,
    x: x, y: y
  };
}

export function beginRotatingItem(layerID, itemID, x, y) {
  return {
    type: BEGIN_ROTATING_ITEM,
    layerID: layerID, itemID: itemID, x: x, y: y
  };
}

export function updateRotatingItem(x, y) {
  return {
    type: UPDATE_ROTATING_ITEM,
    x: x, y: y
  };
}

export function endRotatingItem(x, y) {
  return {
    type: END_ROTATING_ITEM,
    x: x, y: y
  };
}

export function directCreatItem(layerID, itemtype, x, y, rotation) {
  return {
    type: DIRECT_CREATE_ITEM,
    layerID: layerID, itemtype: itemtype, x: x, y: y, rotation: rotation
  };
}