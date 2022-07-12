import { Layer, Group } from './export';
import {
  IDBroker,
  NameGenerator
} from '../utils/export';
import { Map, fromJS } from 'immutable';

import {
  MODE_IDLE,
  MODE_DRAWING_ITEM,
  MODE_DRAGGING_ITEM,
  MODE_ROTATING_ITEM
} from '../constants';

// clear redoHistort
import { HistoryStructure } from '../models';

class Item{

  static create( state, layerID, type, x, y, width, height, rotation ) {
    let itemID = IDBroker.acquireID();

    let item = state.catalog.factoryElement(type, {
      id: itemID,
      name: NameGenerator.generateName('items', state.catalog.getIn(['elements', type, 'info', 'title'])),
      type,
      fov:  NameGenerator.generateName('items', state.catalog.getIn(['elements', type, 'info', 'fov'])),
      battery: '',
      distance: '',
      price: '',
      coverage: '',
      height,
      width,
      x,
      y,
      rotation
    });

    state = state.setIn(['scene', 'layers', layerID, 'items', itemID], item);

    if ((localStorage.getItem("Tutorial_CameraTool_1") == "Done") && (localStorage.getItem("Tutorial_CameraTool_2") !== "Done")){

      document.getElementById('7-8-7').style.display = "none"
      document.getElementById('7-8-8').style.display = "none"
      document.getElementById('7-8-9').style.display = "none"
      document.getElementById('7-8-10').style.display = "none"
      document.getElementById('7-8-11').style.display = "none"
      document.getElementById('7-8-12').style.display = "none"
      localStorage.setItem("Tutorial_CameraTool_2", "Done")

    }
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state, item };
  }

  static select( state, layerID, itemID ){
    state = Layer.select( state, layerID ).updatedState;
    state = Layer.selectElement( state, layerID, 'items', itemID ).updatedState;

    if ((localStorage.getItem("Tutorial_CameraTool_2") == "Done") && (localStorage.getItem("Tutorial_CameraTool_3") == "Done")  && (localStorage.getItem("Tutorial_CameraTool_4") !== "Done")) {
      document.getElementById("7-8-13").style.display = "none"
      document.getElementById("7-8-14").style.display = "none"
      document.getElementById("7-8-15").style.display = "none"
      document.getElementById("7-8-16").style.display = "none"
      document.getElementById("7-8-17").style.display = "none"
      document.getElementById("7-8-18").style.display = "none"

      document.getElementById("7-8-19").style.display = ""
      document.getElementById("7-8-20").style.display = ""
      document.getElementById("7-8-21").style.display = ""
      document.getElementById("7-8-22").style.display = ""
      document.getElementById("7-8-23").style.display = ""
      document.getElementById("7-8-24").style.display = ""
      document.getElementById("7-8-25").style.display = ""
      document.getElementById("7-8-26").style.display = ""

      localStorage.setItem("Tutorial_CameraTool_3", "Done")
    }

    else if ((localStorage.getItem("Tutorial_CameraTool_4") == "Done") && (localStorage.getItem("Tutorial_CameraTool_5") !== "Done")){
      document.getElementById("7-8-27").style.display = ""
      document.getElementById("7-8-28").style.display = ""
      document.getElementById("7-8-29").style.display = ""
      document.getElementById("7-8-30").style.display = ""
      document.getElementById("7-8-31").style.display = ""
      document.getElementById("7-8-32").style.display = ""
      document.getElementById("7-8-33").style.display = ""
      document.getElementById("7-8-34").style.display = ""
    }
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return {updatedState: state};
  }

  static remove( state, layerID, itemID ) {
    state = this.unselect( state, layerID, itemID ).updatedState;
    state = Layer.removeElement( state, layerID, 'items', itemID ).updatedState;

    state.getIn(['scene', 'groups']).forEach( group => state = Group.removeElement(state, group.id, layerID, 'items', itemID).updatedState );
   
    // clear redoHistort
    // state = state.merge({
    //   redoHistory:  new HistoryStructure()
    // });

    return { updatedState: state };
  }

  static unselect( state, layerID, itemID ) {
    state = Layer.unselect( state, layerID, 'items', itemID ).updatedState;
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static selectToolDrawingItem(state, sceneComponentType) {
    state = state.merge({
      mode: MODE_DRAWING_ITEM,
      drawingSupport: new Map({
        type: sceneComponentType
      })
    });
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static updateDrawingItem(state, layerID, x, y) {
    if (state.hasIn(['drawingSupport','currentID'])) {
      state = state.updateIn(['scene', 'layers', layerID, 'items', state.getIn(['drawingSupport','currentID'])], item => item.merge({x, y}));
    }
    else {
      let { updatedState: stateI, item } = this.create( state, layerID, state.getIn(['drawingSupport','type']), x, y, 200, 100, 0);
      state = Item.select( stateI, layerID, item.id ).updatedState;
      state = state.setIn(['drawingSupport','currentID'], item.id);
    }
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static endDrawingItem(state, layerID, x, y) {
    let catalog = state.catalog;
    state = this.updateDrawingItem(state, layerID, x, y, catalog).updatedState;
    state = Layer.unselectAll( state, layerID ).updatedState;
    state =  state.merge({
      drawingSupport: Map({
        type: state.drawingSupport.get('type')
      })
    });

    // Tutorial Camera Click
    if (localStorage.getItem("Tutorial_CameraTool_3") !== "Done"){
      var e = window.event;
      console.log(e.clientX)
      document.getElementById("7-8-13").style.left = `${e.clientX + 40}px`
      document.getElementById("7-8-13").style.top = `${e.clientY - 40}px`
      document.getElementById("7-8-14").style.left = `${e.clientX + 24}px`
      document.getElementById("7-8-14").style.top = `${e.clientY - 33}px`
      document.getElementById("7-8-15").style.left = `${e.clientX + 40}px`
      document.getElementById("7-8-15").style.top = `${e.clientY + 64}px`
      document.getElementById("7-8-16").style.left = `${e.clientX + 176.5}px`
      document.getElementById("7-8-16").style.top = `${e.clientY + 79}px`
      document.getElementById("7-8-17").style.left = `${e.clientX + 66.5}px`
      document.getElementById("7-8-17").style.top = `${e.clientY -18 }px`
      document.getElementById("7-8-18").style.left = `${e.clientX + 66.5}px`
      document.getElementById("7-8-18").style.top = `${e.clientY + 7}px`

      document.getElementById("7-8-13").style.display = ""
      document.getElementById("7-8-14").style.display = ""
      document.getElementById("7-8-15").style.display = ""
      document.getElementById("7-8-16").style.display = ""
      document.getElementById("7-8-17").style.display = ""
      document.getElementById("7-8-18").style.display = ""

      // localStorage.setItem("CreateCamera","")
      // localStorage.setItem("ReplaceCamera","Ing")
      localStorage.setItem("CameraX",`${e.clientX}`)
      localStorage.setItem("CameraY",`${e.clientY}`)
      localStorage.setItem("Tutorial_CameraTool_3", "Done")

      }

    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static beginDraggingItem(state, layerID, itemID, x, y) {

    let item = state.getIn(['scene', 'layers', layerID, 'items', itemID]);

    state = state.merge({
      mode: MODE_DRAGGING_ITEM,
      draggingSupport: Map({
        layerID,
        itemID,
        startPointX: x,
        startPointY: y,
        originalX: item.x,
        originalY: item.y
      })
    });
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static updateDraggingItem(state, x, y) {
    let {draggingSupport, scene} = state;

    let layerID = draggingSupport.get('layerID');
    let itemID = draggingSupport.get('itemID');
    let startPointX = draggingSupport.get('startPointX');
    let startPointY = draggingSupport.get('startPointY');
    let originalX = draggingSupport.get('originalX');
    let originalY = draggingSupport.get('originalY');

    let diffX = startPointX - x;
    let diffY = startPointY - y;

    let item = scene.getIn(['layers', layerID, 'items', itemID]);
    item = item.merge({
      x: originalX - diffX,
      y: originalY - diffY
    });

    state = state.merge({
      scene: scene.mergeIn(['layers', layerID, 'items', itemID], item)
    });
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static endDraggingItem(state, x, y) {
    state = this.updateDraggingItem(state, x, y).updatedState;
    state = state.merge({ mode: MODE_IDLE });
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static beginRotatingItem(state, layerID, itemID, x, y) {
    state = state.merge({
      mode: MODE_ROTATING_ITEM,
      rotatingSupport: Map({
        layerID,
        itemID
      })
    });
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static updateRotatingItem(state, x, y) {
    let {rotatingSupport, scene} = state;

    let layerID = rotatingSupport.get('layerID');
    let itemID = rotatingSupport.get('itemID');
    let item = state.getIn(['scene', 'layers', layerID, 'items', itemID]);

    let deltaX = x - item.x;
    let deltaY = y - item.y;
    let rotation = Math.atan2(deltaY, deltaX) * 180 / Math.PI - 90;

    if (-5 < rotation && rotation < 5) rotation = 0;
    if (-95 < rotation && rotation < -85) rotation = -90;
    if (-185 < rotation && rotation < -175) rotation = -180;
    if (85 < rotation && rotation < 90) rotation = 90;
    if (-270 < rotation && rotation < -265) rotation = 90;

    item = item.merge({
      rotation,
    });

    state = state.merge({
      scene: scene.mergeIn(['layers', layerID, 'items', itemID], item)
    });

    if ((localStorage.getItem("Tutorial_CameraTool_5") !== "Done") && (localStorage.getItem("Tutorial_CameraTool_4") == "Done")){
      document.getElementById("7-8-27").style.display = "none"
      document.getElementById("7-8-28").style.display = "none"
      document.getElementById("7-8-29").style.display = "none"
      document.getElementById("7-8-30").style.display = "none"
      document.getElementById("7-8-31").style.display = "none"
      document.getElementById("7-8-32").style.display = "none"
      document.getElementById("7-8-33").style.display = "none"
      document.getElementById("7-8-34").style.display = "none"
    }
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static endRotatingItem(state, x, y) {
    state = this.updateRotatingItem(state, x, y).updatedState;
    state = state.merge({ mode: MODE_IDLE });
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    if ((localStorage.getItem("Tutorial_CameraTool_5") !== "Done") && (localStorage.getItem("Tutorial_CameraTool_4") == "Done")){
      document.getElementById("7-8-27").style.display = ""
      document.getElementById("7-8-28").style.display = ""
      document.getElementById("7-8-29").style.display = ""
      document.getElementById("7-8-30").style.display = ""
      document.getElementById("7-8-31").style.display = ""
      document.getElementById("7-8-32").style.display = ""
      document.getElementById("7-8-34").style.display = ""
      document.getElementById("7-8-35").style.display = ""
    }

    return { updatedState: state };
  }

  static directCreatItem(state, layerID, itemtype, x, y, rotation) {
    state = this.create( state, layerID, itemtype, x, y, 200, 100, rotation ).updatedState;
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static setProperties( state, layerID, itemID, properties ) {
    state = state.mergeIn(['scene', 'layers', layerID, 'items', itemID, 'properties'], properties);
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static setJsProperties( state, layerID, itemID, properties ) {
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return this.setProperties( state, layerID, itemID, fromJS(properties) );
  }

  static updateProperties( state, layerID, itemID, properties) {
    properties.forEach( ( v, k ) => {
      if( state.hasIn(['scene', 'layers', layerID, 'items', itemID, 'properties', k]) )
        state = state.mergeIn(['scene', 'layers', layerID, 'items', itemID, 'properties', k], v);
    });
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static updateJsProperties( state, layerID, itemID, properties) {
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return this.updateProperties( state, layerID, itemID, fromJS(properties) );
  }

  static setAttributes( state, layerID, itemID, itemAttributes) {
    state = state.mergeIn(['scene', 'layers', layerID, 'items', itemID], itemAttributes);
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return { updatedState: state };
  }

  static setJsAttributes( state, layerID, itemID, itemAttributes) {
    itemAttributes = fromJS(itemAttributes);
   
    // clear redoHistort
    state = state.merge({
      redoHistory:  new HistoryStructure()
    });

    return this.setAttributes(state, layerID, itemID, itemAttributes);
  }

}

export { Item as default };
