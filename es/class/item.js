var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { Layer, Group } from './export';
import { IDBroker, NameGenerator } from '../utils/export';
import { Map, fromJS } from 'immutable';

import { MODE_IDLE, MODE_DRAWING_ITEM, MODE_DRAGGING_ITEM, MODE_ROTATING_ITEM } from '../constants';

// clear redoHistort
import { HistoryStructure } from '../models';

var Item = function () {
  function Item() {
    _classCallCheck(this, Item);
  }

  _createClass(Item, null, [{
    key: 'create',
    value: function create(state, layerID, type, x, y, width, height, rotation) {
      var itemID = IDBroker.acquireID();

      var item = state.catalog.factoryElement(type, {
        id: itemID,
        name: NameGenerator.generateName('items', state.catalog.getIn(['elements', type, 'info', 'title'])),
        type: type,
        fov: NameGenerator.generateName('items', state.catalog.getIn(['elements', type, 'info', 'fov'])),
        battery: '',
        distance: '',
        price: '',
        coverage: '',
        height: height,
        width: width,
        x: x,
        y: y,
        rotation: rotation
      });

      state = state.setIn(['scene', 'layers', layerID, 'items', itemID], item);

      if (localStorage.getItem("Tutorial_CameraTool_1") == "Done" && localStorage.getItem("Tutorial_CameraTool_2") !== "Done") {

        document.getElementById('7-8-7').style.display = "none";
        document.getElementById('7-8-8').style.display = "none";
        document.getElementById('7-8-9').style.display = "none";
        document.getElementById('7-8-10').style.display = "none";
        document.getElementById('7-8-11').style.display = "none";
        document.getElementById('7-8-12').style.display = "none";
        localStorage.setItem("Tutorial_CameraTool_2", "Done");
      }

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state, item: item };
    }
  }, {
    key: 'select',
    value: function select(state, layerID, itemID) {
      state = Layer.select(state, layerID).updatedState;
      state = Layer.selectElement(state, layerID, 'items', itemID).updatedState;

      if (localStorage.getItem("Tutorial_CameraTool_2") == "Done" && localStorage.getItem("Tutorial_CameraTool_3") == "Done" && localStorage.getItem("Tutorial_CameraTool_4") !== "Done") {
        document.getElementById("7-8-13").style.display = "none";
        document.getElementById("7-8-14").style.display = "none";
        document.getElementById("7-8-15").style.display = "none";
        document.getElementById("7-8-16").style.display = "none";
        document.getElementById("7-8-17").style.display = "none";
        document.getElementById("7-8-18").style.display = "none";

        document.getElementById("7-8-19").style.display = "";
        document.getElementById("7-8-20").style.display = "";
        document.getElementById("7-8-21").style.display = "";
        document.getElementById("7-8-22").style.display = "";
        document.getElementById("7-8-23").style.display = "";
        document.getElementById("7-8-24").style.display = "";
        document.getElementById("7-8-25").style.display = "";
        document.getElementById("7-8-26").style.display = "";

        localStorage.setItem("Tutorial_CameraTool_3", "Done");
      } else if (localStorage.getItem("Tutorial_CameraTool_4") == "Done" && localStorage.getItem("Tutorial_CameraTool_5") !== "Done") {
        document.getElementById("7-8-27").style.display = "";
        document.getElementById("7-8-28").style.display = "";
        document.getElementById("7-8-29").style.display = "";
        document.getElementById("7-8-30").style.display = "";
        document.getElementById("7-8-31").style.display = "";
        document.getElementById("7-8-32").style.display = "";
        document.getElementById("7-8-33").style.display = "";
        document.getElementById("7-8-34").style.display = "";
      }

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'remove',
    value: function remove(state, layerID, itemID) {
      state = this.unselect(state, layerID, itemID).updatedState;
      state = Layer.removeElement(state, layerID, 'items', itemID).updatedState;

      state.getIn(['scene', 'groups']).forEach(function (group) {
        return state = Group.removeElement(state, group.id, layerID, 'items', itemID).updatedState;
      });

      // clear redoHistort
      // state = state.merge({
      //   redoHistory:  new HistoryStructure()
      // });

      return { updatedState: state };
    }
  }, {
    key: 'unselect',
    value: function unselect(state, layerID, itemID) {
      state = Layer.unselect(state, layerID, 'items', itemID).updatedState;

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'selectToolDrawingItem',
    value: function selectToolDrawingItem(state, sceneComponentType) {
      state = state.merge({
        mode: MODE_DRAWING_ITEM,
        drawingSupport: new Map({
          type: sceneComponentType
        })
      });

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'updateDrawingItem',
    value: function updateDrawingItem(state, layerID, x, y) {
      if (state.hasIn(['drawingSupport', 'currentID'])) {
        state = state.updateIn(['scene', 'layers', layerID, 'items', state.getIn(['drawingSupport', 'currentID'])], function (item) {
          return item.merge({ x: x, y: y });
        });
      } else {
        var _create = this.create(state, layerID, state.getIn(['drawingSupport', 'type']), x, y, 200, 100, 0),
            stateI = _create.updatedState,
            item = _create.item;

        state = Item.select(stateI, layerID, item.id).updatedState;
        state = state.setIn(['drawingSupport', 'currentID'], item.id);
      }

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'endDrawingItem',
    value: function endDrawingItem(state, layerID, x, y) {
      var catalog = state.catalog;
      state = this.updateDrawingItem(state, layerID, x, y, catalog).updatedState;
      state = Layer.unselectAll(state, layerID).updatedState;
      state = state.merge({
        drawingSupport: Map({
          type: state.drawingSupport.get('type')
        })
      });

      // Tutorial Camera Click
      if (localStorage.getItem("Tutorial_CameraTool_3") !== "Done") {
        var e = window.event;
        console.log(e.clientX);
        document.getElementById("7-8-13").style.left = e.clientX + 40 + 'px';
        document.getElementById("7-8-13").style.top = e.clientY - 40 + 'px';
        document.getElementById("7-8-14").style.left = e.clientX + 24 + 'px';
        document.getElementById("7-8-14").style.top = e.clientY - 33 + 'px';
        document.getElementById("7-8-15").style.left = e.clientX + 40 + 'px';
        document.getElementById("7-8-15").style.top = e.clientY + 64 + 'px';
        document.getElementById("7-8-16").style.left = e.clientX + 176.5 + 'px';
        document.getElementById("7-8-16").style.top = e.clientY + 79 + 'px';
        document.getElementById("7-8-17").style.left = e.clientX + 66.5 + 'px';
        document.getElementById("7-8-17").style.top = e.clientY - 18 + 'px';
        document.getElementById("7-8-18").style.left = e.clientX + 66.5 + 'px';
        document.getElementById("7-8-18").style.top = e.clientY + 7 + 'px';

        document.getElementById("7-8-13").style.display = "";
        document.getElementById("7-8-14").style.display = "";
        document.getElementById("7-8-15").style.display = "";
        document.getElementById("7-8-16").style.display = "";
        document.getElementById("7-8-17").style.display = "";
        document.getElementById("7-8-18").style.display = "";

        // localStorage.setItem("CreateCamera","")
        // localStorage.setItem("ReplaceCamera","Ing")
        localStorage.setItem("CameraX", '' + e.clientX);
        localStorage.setItem("CameraY", '' + e.clientY);
        localStorage.setItem("Tutorial_CameraTool_3", "Done");
      }

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'beginDraggingItem',
    value: function beginDraggingItem(state, layerID, itemID, x, y) {

      var item = state.getIn(['scene', 'layers', layerID, 'items', itemID]);

      state = state.merge({
        mode: MODE_DRAGGING_ITEM,
        draggingSupport: Map({
          layerID: layerID,
          itemID: itemID,
          startPointX: x,
          startPointY: y,
          originalX: item.x,
          originalY: item.y
        })
      });

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'updateDraggingItem',
    value: function updateDraggingItem(state, x, y) {
      var _state = state,
          draggingSupport = _state.draggingSupport,
          scene = _state.scene;


      var layerID = draggingSupport.get('layerID');
      var itemID = draggingSupport.get('itemID');
      var startPointX = draggingSupport.get('startPointX');
      var startPointY = draggingSupport.get('startPointY');
      var originalX = draggingSupport.get('originalX');
      var originalY = draggingSupport.get('originalY');

      var diffX = startPointX - x;
      var diffY = startPointY - y;

      var item = scene.getIn(['layers', layerID, 'items', itemID]);
      item = item.merge({
        x: originalX - diffX,
        y: originalY - diffY
      });

      state = state.merge({
        scene: scene.mergeIn(['layers', layerID, 'items', itemID], item)
      });

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'endDraggingItem',
    value: function endDraggingItem(state, x, y) {
      state = this.updateDraggingItem(state, x, y).updatedState;
      state = state.merge({ mode: MODE_IDLE });

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'beginRotatingItem',
    value: function beginRotatingItem(state, layerID, itemID, x, y) {
      state = state.merge({
        mode: MODE_ROTATING_ITEM,
        rotatingSupport: Map({
          layerID: layerID,
          itemID: itemID
        })
      });

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'updateRotatingItem',
    value: function updateRotatingItem(state, x, y) {
      var _state2 = state,
          rotatingSupport = _state2.rotatingSupport,
          scene = _state2.scene;


      var layerID = rotatingSupport.get('layerID');
      var itemID = rotatingSupport.get('itemID');
      var item = state.getIn(['scene', 'layers', layerID, 'items', itemID]);

      var deltaX = x - item.x;
      var deltaY = y - item.y;
      var rotation = Math.atan2(deltaY, deltaX) * 180 / Math.PI - 90;

      if (-5 < rotation && rotation < 5) rotation = 0;
      if (-95 < rotation && rotation < -85) rotation = -90;
      if (-185 < rotation && rotation < -175) rotation = -180;
      if (85 < rotation && rotation < 90) rotation = 90;
      if (-270 < rotation && rotation < -265) rotation = 90;

      item = item.merge({
        rotation: rotation
      });

      state = state.merge({
        scene: scene.mergeIn(['layers', layerID, 'items', itemID], item)
      });

      if (localStorage.getItem("Tutorial_CameraTool_5") !== "Done" && localStorage.getItem("Tutorial_CameraTool_4") == "Done") {
        document.getElementById("7-8-27").style.display = "none";
        document.getElementById("7-8-28").style.display = "none";
        document.getElementById("7-8-29").style.display = "none";
        document.getElementById("7-8-30").style.display = "none";
        document.getElementById("7-8-31").style.display = "none";
        document.getElementById("7-8-32").style.display = "none";
        document.getElementById("7-8-33").style.display = "none";
        document.getElementById("7-8-34").style.display = "none";
      }

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'endRotatingItem',
    value: function endRotatingItem(state, x, y) {
      state = this.updateRotatingItem(state, x, y).updatedState;
      state = state.merge({ mode: MODE_IDLE });

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      if (localStorage.getItem("Tutorial_CameraTool_5") !== "Done" && localStorage.getItem("Tutorial_CameraTool_4") == "Done") {
        document.getElementById("7-8-27").style.display = "";
        document.getElementById("7-8-28").style.display = "";
        document.getElementById("7-8-29").style.display = "";
        document.getElementById("7-8-30").style.display = "";
        document.getElementById("7-8-31").style.display = "";
        document.getElementById("7-8-32").style.display = "";
        document.getElementById("7-8-34").style.display = "";
        document.getElementById("7-8-35").style.display = "";
      }

      return { updatedState: state };
    }
  }, {
    key: 'directCreatItem',
    value: function directCreatItem(state, layerID, itemtype, x, y, rotation) {
      state = this.create(state, layerID, itemtype, x, y, 200, 100, rotation).updatedState;

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'setProperties',
    value: function setProperties(state, layerID, itemID, properties) {
      state = state.mergeIn(['scene', 'layers', layerID, 'items', itemID, 'properties'], properties);

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'setJsProperties',
    value: function setJsProperties(state, layerID, itemID, properties) {

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return this.setProperties(state, layerID, itemID, fromJS(properties));
    }
  }, {
    key: 'updateProperties',
    value: function updateProperties(state, layerID, itemID, properties) {
      properties.forEach(function (v, k) {
        if (state.hasIn(['scene', 'layers', layerID, 'items', itemID, 'properties', k])) state = state.mergeIn(['scene', 'layers', layerID, 'items', itemID, 'properties', k], v);
      });

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'updateJsProperties',
    value: function updateJsProperties(state, layerID, itemID, properties) {

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return this.updateProperties(state, layerID, itemID, fromJS(properties));
    }
  }, {
    key: 'setAttributes',
    value: function setAttributes(state, layerID, itemID, itemAttributes) {
      state = state.mergeIn(['scene', 'layers', layerID, 'items', itemID], itemAttributes);

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return { updatedState: state };
    }
  }, {
    key: 'setJsAttributes',
    value: function setJsAttributes(state, layerID, itemID, itemAttributes) {
      itemAttributes = fromJS(itemAttributes);

      // clear redoHistort
      state = state.merge({
        redoHistory: new HistoryStructure()
      });

      return this.setAttributes(state, layerID, itemID, itemAttributes);
    }
  }]);

  return Item;
}();

export { Item as default };