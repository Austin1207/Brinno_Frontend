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

export default function Visibility_Polygon({state, sceneWidth, sceneHeight}) {

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
    let wall_info = [];
    let cameara_info = [];
    if(json){
      let lines = Object.entries(json.layers.layer2.lines);
      let walls_vertices = [];
      for(let i=0;i<lines.length;i++){
          if(lines[i][1].type=="obstacle area"/*||lines[i][1].type=="construction area"*/){
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
      while(wall_xy.length) wall_info.push(wall_xy.splice(0,2));
      //console.log(wall_info);
      let camearas = json.layers.layer2.items;
      cameara_info = cameara_info.concat(getObjects(camearas, 'type', 'camera_BAC2000'));
      cameara_info = cameara_info.concat(getObjects(camearas, 'type', 'camera_BCC200'));
      cameara_info = cameara_info.concat(getObjects(camearas, 'type', 'camera_BCC2000'));
      cameara_info = cameara_info.concat(getObjects(camearas, 'type', 'camera_MAC200DN'));
    }

    return [wall_info, cameara_info];
  }

  function get_endpts(angle, cam_x, cam_y, radius){
    let vx = Math.sin(Math.PI * angle/180);
    let vy = Math.cos(Math.PI * angle/180);
    let x = cam_x + radius * vx;
    let y = cam_y + radius * vy;
    return [x, y];
  }

  function camera_cone(cam_x, cam_y, radius, angle, fov){
    let path = 'M ';
    // Define the start and end of the arc
    let angle_convert = angle + 360;
    let angle1 = angle_convert + fov / 2;
    let angle2 = angle_convert - fov / 2;
    let pt1 = get_endpts(angle1, cam_x, cam_y, radius);
    let x1 = pt1[0];
    let y1 = pt1[1];
    let pt2 = get_endpts(angle2, cam_x, cam_y, radius);
    let x2 = pt2[0];
    let y2 = pt2[1];
    path = path.concat(cam_x,' ', cam_y, ' L ', x1, ' ', y1, ' A ', radius, ' ', radius, ' 0 0 1 ', x2, ' ', y2, ' Z');
    return path;
  }
  //console.log(state);
  let data = JSON.parse(localStorage.getItem('react-planner_v0'));
  let scale = localStorage.getItem("Scale");
  let wallcamera_info = getWallCamera(data,sceneHeight);
  let wall_info = wallcamera_info[0];
  let cameara_info = wallcamera_info[1];
  //console.log(cameara_info);
  //console.log(wall_info);
  let polygons = [];
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
  //console.log(polygons);
  const segments = breakIntersections(convertToSegments(polygons));
    
  // define your position in which the visibility should be calculated from
  //let position = [cameara_info[0].x, sceneHeight-cameara_info[0].y];
  let position = [];
  //let conepath = camera_cone(cameara_info[0].x, sceneHeight-cameara_info[0].y, 500, cameara_info[0].rotation, 69);
  let conepath = '';
  let visibility = [];
  let rendered = [];
  for(let i=0;i<cameara_info.length;i++){
    position = [cameara_info[i].x, sceneHeight-cameara_info[i].y];
    conepath = camera_cone(cameara_info[i].x, sceneHeight-cameara_info[i].y, parseInt(cameara_info[i].distance)*scale, cameara_info[i].rotation, parseInt(cameara_info[i].fov));
    visibility = compute(position, segments);
    rendered.push(
      <g key={`${cameara_info[i].id}_visibility`}>
        <clipPath id={`${cameara_info[i].id}_cone`}>  
          <path d={conepath}/>
        </clipPath>
        <g clipPath={`url(#${cameara_info[i].id}_cone)`}>
          <polygon points={visibility.join()} fill="#ff8200" fill-opacity="0.15"/>
        </g>
      </g>
    )
  }
  //console.log(conepath);

  //let visibility = compute(position, segments);

  //console.log(viewportVisibility);
  return(   
    <g pointerEvents={'none'}>
      {rendered}
    </g>
  )
}