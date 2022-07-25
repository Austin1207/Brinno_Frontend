import { List } from 'immutable';
import { Project, Area, Line, Hole, Item, Vertex } from './export';
import {
  GraphInnerCycles,
  GeometryUtils,
  IDBroker
} from '../utils/export';
import { Layer as LayerModel } from '../models';

const sameSet = (set1, set2) => set1.size === set2.size && set1.isSuperset(set2) && set1.isSubset(set2);
let firstArea = true; //control place default camera

class Layer{

  static create( state, name, altitude ) {
    let layerID = IDBroker.acquireID();
    name = name || `layer ${layerID}`;
    altitude = altitude || 0;

    let layer = new LayerModel({ id: layerID, name, altitude });

    state = state.setIn(['scene', 'selectedLayer'], layerID );
    state = state.setIn(['scene', 'layers', layerID], layer);

    return { updatedState: state };
  }

  static select( state, layerID ) {
    if( !state.get('alterate') ) state = Project.unselectAll( state ).updatedState;
    state = state.setIn(['scene', 'selectedLayer'], layerID);

    return { updatedState: state };
  }

  static selectElement( state, layerID, elementPrototype, elementID ){
    state = state.setIn(['scene', 'layers', layerID, elementPrototype, elementID, 'selected'], true);
    state = state.updateIn(['scene', 'layers', layerID, 'selected', elementPrototype], elems => elems.push(elementID));

    return { updatedState: state };
  }

  static unselect( state, layerID, elementPrototype, elementID ){
    state = state.setIn(['scene', 'layers', layerID, elementPrototype, elementID, 'selected'], false);
    state = state.updateIn(['scene', 'layers', layerID, 'selected', elementPrototype], elems => elems.filter( el => el.id === elementID ));
    return { updatedState: state };
  }

  static unselectAll( state, layerID ) {
    let { lines, holes, items, areas } = state.getIn(['scene', 'layers', layerID]);

    if( lines ) lines.forEach( line => { state = Line.unselect( state, layerID, line.id ).updatedState; });
    if( holes ) holes.forEach( hole => { state = Hole.unselect( state, layerID, hole.id ).updatedState; });
    if( items ) items.forEach( item => { state = Item.unselect( state, layerID, item.id ).updatedState; });
    if( areas ) areas.forEach( area => { state = Area.unselect( state, layerID, area.id ).updatedState; });

    return { updatedState: state };
  }

  static setProperties( state, layerID, properties ) {
    state = state.mergeIn(['scene', 'layers', layerID], properties);
    state = state.updateIn(['scene', 'layers'], layers => layers.sort( ( a, b ) => a.altitude !== b.altitude ? a.altitude - b.altitude : a.order - b.order ));

    return { updatedState: state };
  }

  static remove( state, layerID ) {
    state = state.removeIn(['scene', 'layers', layerID]);

    state = state.setIn(
      ['scene', 'selectedLayer'],
      state.scene.selectedLayer !== layerID ? state.scene.selectedLayer : state.scene.layers.first().id
    );

    return { updatedState: state };
  }

  static removeElement( state, layerID, elementPrototype, elementID ) {
    state = state.deleteIn(['scene', 'layers', layerID, elementPrototype, elementID]);

    return { updatedState: state };
  }

  static detectAndUpdateAreas( state, layerID ) {

    let verticesArray = [];           //array with vertices coords
    let linesArray;                   //array with edges

    let vertexID_to_verticesArrayIndex = {};
    let verticesArrayIndex_to_vertexID = {};

    state.getIn(['scene', 'layers', layerID, 'vertices']).forEach(vertex => {
      let verticesCount = verticesArray.push([vertex.x, vertex.y]);
      let latestVertexIndex = verticesCount - 1;
      vertexID_to_verticesArrayIndex[vertex.id] = latestVertexIndex;
      verticesArrayIndex_to_vertexID[latestVertexIndex] = vertex.id;
    });

    linesArray = state.getIn(['scene', 'layers', layerID, 'lines'])
      .map(line => line.vertices.map(vertexID => vertexID_to_verticesArrayIndex[vertexID]).toArray());

    let innerCyclesByVerticesArrayIndex = GraphInnerCycles.calculateInnerCycles(verticesArray, linesArray);

    let innerCyclesByVerticesID = new List(innerCyclesByVerticesArrayIndex)
      .map(cycle => new List(cycle.map(vertexIndex => verticesArrayIndex_to_vertexID[vertexIndex])));

    // All area vertices should be ordered in counterclockwise order
    innerCyclesByVerticesID = innerCyclesByVerticesID.map( ( area ) =>
      GraphInnerCycles.isClockWiseOrder( area.map(vertexID => state.getIn(['scene', 'layers', layerID, 'vertices', vertexID]) ) ) ? area.reverse() : area
    );

    let areaIDs = [];

    //remove areas
    state.getIn(['scene', 'layers', layerID, 'areas']).forEach(area => {
      let areaInUse = innerCyclesByVerticesID.some(vertices => sameSet(vertices, area.vertices));
      if (!areaInUse) {
        state = Area.remove( state, layerID, area.id ).updatedState;
      }
    });

    //add new areas
    innerCyclesByVerticesID.forEach((cycle, ind) => {
      let areaInUse = state.getIn(['scene', 'layers', layerID, 'areas']).find(area => sameSet(area.vertices, cycle));

      if (areaInUse) {
        areaIDs[ind] = areaInUse.id;
        state = state.setIn(['scene', 'layers', layerID, 'areas', areaIDs[ind], 'holes'], new List());
      } else {
        let areaVerticesCoords = cycle.map(vertexID => state.getIn(['scene', 'layers', layerID, 'vertices', vertexID]));
        let resultAdd = Area.add(state, layerID, 'area', areaVerticesCoords, state.catalog);        
        areaIDs[ind] = resultAdd.area.id;
        state = resultAdd.updatedState;
      }
    });

    // Build a relationship between areas and their coordinates
    let verticesCoordsForArea = areaIDs.map(id => {
      let vertices = state.getIn(['scene', 'layers', layerID, 'areas', id]).vertices.map(vertexID => {
        let { x, y } = state.getIn(['scene', 'layers', layerID, 'vertices', vertexID]);
        return new List([x,y]);
      });
      return { id, vertices };
    });

    // Find all holes for an area
    //let i, j;
    let areaVerticesList = new Array();
    for (let i = 0; i < verticesCoordsForArea.length; i++) {
      let holesList = new List(); // The holes for this area
      areaVerticesList = verticesCoordsForArea[i].vertices.flatten().toArray();
      for (let j = 0; j < verticesCoordsForArea.length; j++) {
        if (i !== j) {
          let isHole = GeometryUtils.ContainsPoint(areaVerticesList,
            verticesCoordsForArea[j].vertices.get(0).get(0),
            verticesCoordsForArea[j].vertices.get(0).get(1));
          if (isHole) {
            holesList = holesList.push(verticesCoordsForArea[j].id);
          }
        }
      }
      state = state.setIn(['scene', 'layers', layerID, 'areas', verticesCoordsForArea[i].id, 'holes'], holesList);
    }

    // Remove holes which are already holes for other areas
    areaIDs.forEach(areaID => {
      let doubleHoles = new Set();
      let areaHoles = state.getIn(['scene', 'layers', layerID, 'areas', areaID, 'holes']);
      areaHoles.forEach((areaHoleID) => {
        let holesOfholes = state.getIn(['scene', 'layers', layerID, 'areas', areaHoleID, 'holes']);
        holesOfholes.forEach((holeID) => {
          if (areaHoles.indexOf(holeID) !== -1) doubleHoles.add(holeID);
        });
      });
      doubleHoles.forEach(doubleHoleID => {
        areaHoles = areaHoles.remove( areaHoles.indexOf(doubleHoleID) );
      });
      state = state.setIn(['scene', 'layers', layerID, 'areas', areaID, 'holes'], areaHoles);
    });

    // Add Default Camera
    let allX = new Array();
    let allY = new Array();
    for (let i = 0; i < areaVerticesList.length; i++) {
      if (i%2==0){
        allX.push(areaVerticesList[i]);
      }
      else{
        allY.push(areaVerticesList[i]);
      }
    }
    if (allX.length!=0&firstArea){
      firstArea = false;
      let Xmax = Math.max(...allX);
      let Xmin = Math.min(...allX);
      let Ymax = Math.max(...allY);
      let Ymin = Math.min(...allY);

      state = Item.create( state, layerID, 'camera_BCC2000', Xmax-10, Ymax-10, 200, 100, -45 ).updatedState;
      state = Item.create( state, layerID, 'camera_BCC2000', Xmax-10, Ymin+10, 200, 100, -135 ).updatedState;
      state = Item.create( state, layerID, 'camera_BCC2000', Xmin+10, Ymax-10, 200, 100, 45 ).updatedState;
      state = Item.create( state, layerID, 'camera_BCC2000', Xmin+10, Ymin+10, 200, 100, 135 ).updatedState;

      localStorage.setItem("Xmin", Xmin)
      localStorage.setItem("Ymax", Ymax)
      localStorage.setItem("Ymin", Ymin)
      localStorage.setItem("ZoomScale", Math.min(1500/(Xmax-Xmin),750/(Ymax-Ymin)))

      const ShowSecTurtorial = () => {
        document.getElementById('2nd_Tutorial_Rectangular').style.display = ""
        document.getElementById('2nd_Tutorial_Word').style.display = ""
      } 

      if ((localStorage.getItem("Tutorial_ConstructionArea") !== "Done") && (((localStorage.getItem("Mode") == "Upload") && (localStorage.getItem("Tutorial_Upload") !== "Done")) || (((localStorage.getItem("Mode") == "Outline") && (localStorage.getItem("Tutorial_Outline") !== "Done"))))){
      // if (localStorage.getItem("Tutorial_ConstructionArea") !== "Done"){

        document.getElementById('2-8-17').style.display = "none"

        document.getElementById('2-8-8').style.display = ""
        document.getElementById('2-8-9').style.display = ""
        document.getElementById('2-8-10').style.display = ""
        document.getElementById('2-8-11').style.display = ""
        document.getElementById('2-8-12').style.display = ""
        document.getElementById('2-8-13').style.display = ""
        document.getElementById('2-8-14').style.display = ""
        document.getElementById('2-8-15').style.display = ""
        document.getElementById('2-8-16').style.display = ""
        
        setTimeout(function(){
          document.getElementById('2-8-16').style.display = "none"
        },3000)
      }

      else if (localStorage.getItem("Tutorial_Setscale") == "Done") {
        document.getElementById('Outine Interest Area1').style.display = "none"
        document.getElementById('Outine Interest Area2').style.display = ""
  
        document.getElementById('Place Obstacle Area1').style.display = "none"
        document.getElementById('Place Obstacle Area2').style.display = ""
  
        document.getElementById('Place no-camera area1').style.display = "none"
        document.getElementById('Place no-camera area2').style.display = ""
  
        document.getElementById('Place must-cover area1').style.display = "none"
        document.getElementById('Place must-cover area2').style.display = ""
  
        document.getElementById('Camera Tool1').style.display = "none"
        document.getElementById('Camera Tool2').style.display = ""
  
        document.getElementById('Generate1').style.display = "none"
        document.getElementById('Generate2').style.display = ""

        ShowSecTurtorial();
      }

      else if (((localStorage.getItem("Mode") == "Upload") && (localStorage.getItem("Tutorial_Upload") == "Done")) || (((localStorage.getItem("Mode") == "Outline") && (localStorage.getItem("Tutorial_Outline") == "Done")))){
        localStorage.setItem("Tutorial_ConstructionArea", "Done")
      }
    }
    return { updatedState: state };
  }

  static removeZeroLengthLines( state, layerID ) {
    let updatedState = state.getIn(['scene', 'layers', layerID, 'lines']).reduce(
      ( newState, line ) =>
      {
        let v_id0 = line.getIn(['vertices', 0]);
        let v_id1 = line.getIn(['vertices', 1]);

        let v0 = newState.getIn(['scene', 'layers', layerID, 'vertices', v_id0]);
        let v1 = newState.getIn(['scene', 'layers', layerID, 'vertices', v_id1]);

        if( GeometryUtils.verticesDistance( v0, v1 ) === 0 )
        {
          newState = Line.remove( newState, layerID, line.id ).updatedState;
        }

        return newState;
      },
      state
    );

    return { updatedState };
  }

  static mergeEqualsVertices( state, layerID, vertexID ) {
    //1. find vertices to remove
    let vertex = state.getIn(['scene', 'layers', layerID, 'vertices', vertexID]);

    let doubleVertices = state.getIn(['scene', 'layers', layerID, 'vertices'])
      .filter(v => {
        return (
          v.id !== vertexID &&
          GeometryUtils.samePoints(vertex, v)// &&
          //!v.lines.contains( vertexID ) &&
          //!v.areas.contains( vertexID )
        );
      });

    if (doubleVertices.isEmpty()) return { updatedState: state };

    doubleVertices.forEach(doubleVertex => {
      let reduced = doubleVertex.lines.reduce(
        ( reducedState, lineID ) => {

          reducedState = reducedState.updateIn(['scene', 'layers', layerID, 'lines', lineID, 'vertices'], vertices => {
            if( vertices ) {
              return vertices.map(v => v === doubleVertex.id ? vertexID : v);
            }
          });
          reducedState = Vertex.addElement( reducedState, layerID, vertexID, 'lines', lineID ).updatedState;

          return reducedState;
        },
        state
      );

      let biReduced = doubleVertex.areas.reduce(
        ( reducedState, areaID ) => {

          reducedState = reducedState.updateIn(['scene', 'layers', layerID, 'areas', areaID, 'vertices'], vertices => {
            if( vertices ) return vertices.map(v => v === doubleVertex.id ? vertexID : v);
          });
          reducedState = Vertex.addElement( reducedState, layerID, vertexID, 'areas', areaID ).updatedState;

          return reducedState;
        },
        reduced
      );

      state = Vertex.remove( biReduced, layerID, doubleVertex.id, null, null, true ).updatedState;
    });

    return { updatedState: state };
  }

  static setPropertiesOnSelected( state, layerID, properties ) {
    let selected = state.getIn(['scene', 'layers', layerID, 'selected']);

    selected.lines.forEach(lineID => state = Line.setProperties(state, layerID, lineID, properties).updatedState);
    selected.holes.forEach(holeID => state = Hole.setProperties(state, layerID, holeID, properties).updatedState);
    selected.areas.forEach(areaID => state = Area.setProperties(state, layerID, areaID, properties).updatedState);
    selected.items.forEach(itemID => state = Item.setProperties(state, layerID, itemID, properties).updatedState);

    return { updatedState: state };
  }

  static updatePropertiesOnSelected( state, layerID, properties ) {
    let selected = state.getIn(['scene', 'layers', layerID, 'selected']);

    selected.lines.forEach(lineID => state = Line.updateProperties(state, layerID, lineID, properties).updatedState);
    selected.holes.forEach(holeID => state = Hole.updateProperties(state, layerID, holeID, properties).updatedState);
    selected.areas.forEach(areaID => state = Area.updateProperties(state, layerID, areaID, properties).updatedState);
    selected.items.forEach(itemID => state = Item.updateProperties(state, layerID, itemID, properties).updatedState);

    return { updatedState: state };
  }

  static setAttributesOnSelected( state, layerID, attributes ) {
    let selected = state.getIn(['scene', 'layers', layerID, 'selected']);

    selected.lines.forEach(lineID => state = Line.setAttributes( state, layerID, lineID, attributes ).updatedState);
    selected.holes.forEach(holeID => state = Hole.setAttributes( state, layerID, holeID, attributes ).updatedState);
    selected.items.forEach(itemID => state = Item.setAttributes( state, layerID, itemID, attributes ).updatedState);
    //selected.areas.forEach(areaID => state = Area.setAttributes( state, layerID, areaID, attributes ).updatedState);

    return { updatedState: state };
  }

}

export { Layer as default };
