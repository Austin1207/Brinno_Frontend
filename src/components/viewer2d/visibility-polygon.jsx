import React from 'react';
import {
    breakIntersections,
    convertToSegments,
    compute,
    computeViewport,
    inPolygon,
    Position,
    Polygon,
  } from 'visibility-polygon';

  export default function Visibility_Polygon({sceneWidth, sceneHeight}) {

    //return an array of objects according to key, value, or key and value matching
    function getObjects(obj, key, val) {
        var objects = [];
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;
            if (typeof obj[i] == 'object') {
                objects = objects.concat(getObjects(obj[i], key, val));    
            } else 
            //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
            if (i == key && obj[i] == val || i == key && val == '') { //
                objects.push(obj);
            } else if (obj[i] == val && key == ''){
                //only add if the object is not already in the array
                if (objects.lastIndexOf(obj) == -1){
                    objects.push(obj);
                }
            }
        }
        return objects;
    }

    function getWallCamera(json,sceneHeight){
        //console.log(json.layers.layer2.lines);
    	let lines = Object.entries(json.layers.layer2.lines);
        //let lines = json.layers.layer2.lines;
        //let walls_vertices = getObjects(lines,'type','obstacle area');
        //walls_vertices = walls_vertices.concat(getObjects(lines,'type','construction area'));
        //console.log(walls_vertices[0].vertices);
        //let vertices = json.layers.layer2.vertices;
        //let wall_x = getValues(vertices,'x');
        //let wall_y = getValues(vertices,'y');
        //console.log(vertices);
        //console.log(wall_x);
        //console.log(wall_y);
        /*
        for(let i=0;i<walls_vertices.length;i++){
            wall_xy.push([[getObjects(vertices,'id',walls_vertices[i].vertices[0]),]])
        }
        */
        let walls_vertices = [];
        for(let i=0;i<lines.length;i++){
            if(lines[i][1].type=="obstacle area"||lines[i][1].type=="construction area"){
                walls_vertices.push([lines[i][1].vertices])
            }
        }
        walls_vertices = walls_vertices.flat(Infinity);
        //console.log(walls_vertices);
        let wall_xy = [];
        let vertices = json.layers.layer2.vertices;
        //console.log(vertices);
        for(let i=0;i<walls_vertices.length;i++){
            let vertice = getObjects(vertices, 'id', walls_vertices[i])
            wall_xy.push([vertice[0].x,sceneHeight-vertice[0].y])
        }
        let wall_xy_reshape = [];
        while(wall_xy.length) wall_xy_reshape.push(wall_xy.splice(0,2));
        //console.log(wall_xy_reshape);
        return wall_xy_reshape;
    }

  let data = JSON.parse(localStorage.getItem('react-planner_v0'));
  let wall_info = getWallCamera(data,sceneHeight);
  //console.log(wall_info);
  const polygons = [];
  // this is the 'world' polygon, which bounds all the polygons you want to compute againts
  //console.log(sceneWidth, sceneHeight)
  polygons.push([
    [-1, -1],
    [sceneWidth+1, -1],
    [sceneWidth+1, sceneHeight+1],
    [-1, sceneHeight+1],
  ]);
  // define vertexes of your polygons
  
  for(let i=0;i<wall_info.length;i++){
    polygons.push(wall_info[i]);
  }
  console.log(polygons);
  const segments = breakIntersections(convertToSegments(polygons));
    
  // define your position in which the visibility should be calculated from
  const position = [1500, 1650];
    
  // check if the position is inside the world polygon
  /*
  if (inPolygon(position, polygons[0])) {
    // compute the visibility polygon, this can be used to draw a polygon with Canvas or WebGL
      const viewportVisibility = computeViewport(
    position,
    segments,
    [50, 50],
    [450, 450]
  );
  }
  */
  const visibility = compute(position, segments);

  //console.log(viewportVisibility);
  return(   
    <g>
      {<polygon points={visibility.join()} fill="lime" />}
    </g>
  )
}