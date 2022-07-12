import { fromJS } from 'immutable';
import { Layer, Vertex, Group } from './export';
import {
  IDBroker,
  NameGenerator
} from '../utils/export';

class Area{

  static add( state, layerID, type, verticesCoords, catalog ) {

    let area;

    let layer = state.getIn(['scene', 'layers', layerID]);

    layer = layer.withMutations(layer => {
      let areaID = IDBroker.acquireID();

      let vertices = verticesCoords.map( ( v ) => Vertex.add( state, layerID, v.x, v.y, 'areas', areaID).vertex.id );

      area = catalog.factoryElement(type, {
        id: areaID,
        name: NameGenerator.generateName('areas', catalog.getIn(['elements', type, 'info', 'title'])),
        type,
        prototype: 'areas',
        vertices
      });

      layer.setIn(['areas', areaID], area);
    });

    state = state.setIn(['scene', 'layers', layerID], layer);

    if ((localStorage.getItem("DrawingTool") == "InterestArea") && (localStorage.getItem("Tutorial_InterestArea") !== "Done")) {
      document.getElementById('3-8-8').style.display = ""
      document.getElementById('3-8-9').style.display = ""
      document.getElementById('3-8-10').style.display = ""
      document.getElementById('3-8-11').style.display = ""
      document.getElementById('3-8-12').style.display = ""
      document.getElementById('3-8-13').style.display = ""
      document.getElementById('3-8-14').style.display = "none"
      document.getElementById('3-8-15').style.display = ""
      document.getElementById('3-8-16').style.display = ""
    }

    else if ((localStorage.getItem("DrawingTool") == "ObstacleArea") && (localStorage.getItem("Tutorial_ObstacleArea") !== "Done")) {
      document.getElementById('4-8-8').style.display = ""
      document.getElementById('4-8-9').style.display = ""
      document.getElementById('4-8-10').style.display = ""
      document.getElementById('4-8-11').style.display = ""
      document.getElementById('4-8-12').style.display = ""
      document.getElementById('4-8-13').style.display = ""
      document.getElementById('4-8-14').style.display = ""
      document.getElementById('4-8-15').style.display = "none"
      document.getElementById('4-8-16').style.display = ""
      document.getElementById('4-8-17').style.display = ""
    }
    
    else if ((localStorage.getItem("DrawingTool") == "NoCameraArea") && (localStorage.getItem("Tutorial_NoCameraArea") !== "Done")) {
      document.getElementById('5-8-8').style.display = ""
      document.getElementById('5-8-9').style.display = ""
      document.getElementById('5-8-10').style.display = ""
      document.getElementById('5-8-11').style.display = ""
      document.getElementById('5-8-12').style.display = ""
      document.getElementById('5-8-13').style.display = ""
      document.getElementById('5-8-14').style.display = ""
      document.getElementById('5-8-15').style.display = "none"
      document.getElementById('5-8-16').style.display = ""
      document.getElementById('5-8-17').style.display = ""
    }

    else if ((localStorage.getItem("DrawingTool") == "MustCoverArea") && (localStorage.getItem("Tutorial_MustCoverArea") !== "Done")) {
      document.getElementById('6-8-8').style.display = ""
      document.getElementById('6-8-9').style.display = ""
      document.getElementById('6-8-10').style.display = ""
      document.getElementById('6-8-11').style.display = ""
      document.getElementById('6-8-12').style.display = ""
      document.getElementById('6-8-13').style.display = ""
      document.getElementById('6-8-14').style.display = ""
      document.getElementById('6-8-15').style.display = "none"
      document.getElementById('6-8-16').style.display = ""
      document.getElementById('6-8-17').style.display = ""
    }

    return { updatedState: state, area };
  }

  static select( state, layerID, areaID ){
    state = Layer.select( state, layerID ).updatedState;
    state = Layer.selectElement( state, layerID, 'areas', areaID ).updatedState;

    return {updatedState: state};
  }

  static remove( state, layerID, areaID ) {

    let area = state.getIn(['scene', 'layers', layerID, 'areas', areaID]);

    if( area.get('selected') === true ) state = this.unselect( state, layerID, areaID ).updatedState;

    area.vertices.forEach(vertexID => { state = Vertex.remove( state, layerID, vertexID, 'areas', areaID).updatedState; });

    state = state.deleteIn(['scene', 'layers', layerID, 'areas', areaID]);

    state.getIn(['scene', 'groups']).forEach( group => state = Group.removeElement(state, group.id, layerID, 'areas', areaID).updatedState );

    return {updatedState: state};
  }

  static unselect( state, layerID, areaID ) {
    state = Layer.unselect( state, layerID, 'areas', areaID ).updatedState;

    return {updatedState: state};
  }

  static setProperties( state, layerID, areaID, properties ) {
    state = state.mergeIn(['scene', 'layers', layerID, 'areas', areaID, 'properties'], properties);

    return { updatedState: state };
  }

  static setJsProperties( state, layerID, areaID, properties ) {
    return this.setProperties( state, layerID, areaID, fromJS(properties) );
  }

  static updateProperties( state, layerID, areaID, properties) {
    properties.forEach( ( v, k ) => {
      if( state.hasIn(['scene', 'layers', layerID, 'areas', areaID, 'properties', k]) )
        state = state.mergeIn(['scene', 'layers', layerID, 'areas', areaID, 'properties', k], v);
    });

    return { updatedState: state };
  }

  static updateJsProperties( state, layerID, areaID, properties) {
    return this.updateProperties( state, layerID, areaID, fromJS(properties) );
  }

  static setAttributes( state ) {
    return { updatedState: state };
  }

}

export { Area as default };
