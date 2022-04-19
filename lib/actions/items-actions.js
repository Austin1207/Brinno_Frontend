"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectItem = selectItem;
exports.selectToolDrawingItem = selectToolDrawingItem;
exports.updateDrawingItem = updateDrawingItem;
exports.endDrawingItem = endDrawingItem;
exports.beginDraggingItem = beginDraggingItem;
exports.updateDraggingItem = updateDraggingItem;
exports.endDraggingItem = endDraggingItem;
exports.beginRotatingItem = beginRotatingItem;
exports.updateRotatingItem = updateRotatingItem;
exports.endRotatingItem = endRotatingItem;
exports.directCreatItem = directCreatItem;

var _constants = require("../constants");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function selectItem(layerID, itemID) {
  return {
    type: _constants.SELECT_ITEM,
    layerID: layerID,
    itemID: itemID
  };
}

function selectToolDrawingItem(sceneComponentType) {
  return {
    type: _constants.SELECT_TOOL_DRAWING_ITEM,
    sceneComponentType: sceneComponentType
  };
}

function updateDrawingItem(layerID, x, y) {
  return {
    type: _constants.UPDATE_DRAWING_ITEM,
    layerID: layerID, x: x, y: y
  };
}

function endDrawingItem(layerID, x, y) {
  return {
    type: _constants.END_DRAWING_ITEM,
    layerID: layerID, x: x, y: y
  };
}

function beginDraggingItem(layerID, itemID, x, y) {
  return {
    type: _constants.BEGIN_DRAGGING_ITEM,
    layerID: layerID, itemID: itemID, x: x, y: y
  };
}

function updateDraggingItem(x, y) {
  return {
    type: _constants.UPDATE_DRAGGING_ITEM,
    x: x, y: y
  };
}

function endDraggingItem(x, y) {
  return {
    type: _constants.END_DRAGGING_ITEM,
    x: x, y: y
  };
}

function beginRotatingItem(layerID, itemID, x, y) {
  return {
    type: _constants.BEGIN_ROTATING_ITEM,
    layerID: layerID, itemID: itemID, x: x, y: y
  };
}

function updateRotatingItem(x, y) {
  return {
    type: _constants.UPDATE_ROTATING_ITEM,
    x: x, y: y
  };
}

function endRotatingItem(x, y) {
  return {
    type: _constants.END_ROTATING_ITEM,
    x: x, y: y
  };
}

function directCreatItem(layerID, type, x, y, rotation) {
  var _ref;

  console.log("items-actions");
  return _ref = {
    type: _constants.DIRECT_CREATE_ITEM,
    layerID: layerID }, _defineProperty(_ref, "type", type), _defineProperty(_ref, "x", x), _defineProperty(_ref, "y", y), _defineProperty(_ref, "rotation", rotation), _ref;
}