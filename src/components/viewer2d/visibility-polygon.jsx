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

    function getWallCamera(json){
      
    }

    function JSON_loader(json, scale_factor) {
      var areas, cam, cam_far, cam_fov, cam_id, cam_rot, cam_x, cam_y, camera_list, canvas, canvas_h, canvas_w, coor, holes, id, item, items, key, key_list, layer_value, layers, lines, name, new_coor, placeable_idNvertsid, scale_matrix, target, target_idNvertsid, thick, thickness, vert, vert2, vert_co, vert_coor, vertices, verts, wall, wall_co, wall_idNvertsid, wall_info, x, y;
      scale_factor = (1 / scale_factor);
      //canvas_w = (json["width"] * scale_factor);
      //canvas_h = (json["height"] * scale_factor);
      //canvas = [Number.parseInt(canvas_w), Number.parseInt(canvas_h)];
      //console.log(scale_factor, canvas_h, canvas_w);
      layers = [];
      for (var key, _pj_c = 0, _pj_a = json["layers"], _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          key = _pj_a[_pj_c];
          layers.append(key);
      }
      vert_coor = {};
      wall_idNvertsid = {};
      target_idNvertsid = {};
      placeable_idNvertsid = {};
      camera_list = {};
      for (var i, _pj_c = 0, _pj_a = layers, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          layer_value = dict(json["layers"][i.toString()]);
          vertices = layer_value["vertices"];
          for (var key, _pj_f = 0, _pj_d = vertices, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
              key = _pj_d[_pj_f];
              id = vertices[key]["id"];
              x = vertices[key]["x"];
              y = vertices[key]["y"];
              scale_matrix = np.matrix([[scale_factor, 0], [0, scale_factor]]);
              coor = np.array([[x, y]]);
              new_coor = (coor * scale_matrix).flatten();
              item = [[new_coor[[0, 0]], new_coor[[0, 1]]]];
              coor = dict(zip([key], item));
              vert_coor.update(coor);
          }
          lines = layer_value["lines"];
          for (var key, _pj_f = 0, _pj_d = lines, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
              key = _pj_d[_pj_f];
              if ((lines[key]["type"] === "wall")) {
                  name = lines[key]["id"];
                  verts = lines[key]["vertices"];
                  thickness = lines[key]["properties"]["thickness"]["length"];//可能不需要
                  verts.append((thickness * scale_factor));
                  wall = dict(zip([name], [verts]));
                  wall_idNvertsid.update(wall);
              } else {
                  if ((lines[key]["type"] === "line")) {
                      name = lines[key]["id"];
                      verts = lines[key]["vertices"];
                      thickness = lines[key]["properties"]["thickness"]["length"];
                      verts.append((thickness * scale_factor));
                      target = dict(zip([name], [verts]));
                      target_idNvertsid.update(target);
                  }
              }
          }
          holes = layer_value["holes"];
          areas = layer_value["areas"];
          items = layer_value["items"];
          for (var key, _pj_f = 0, _pj_d = items, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
              key = _pj_d[_pj_f];
              if ((items[key]["type"] === "camera_BCC2000")) {
                  cam_id = items[key]["id"];
                  cam_x = Number.parseInt(items[key]["x"]);
                  cam_y = Number.parseInt(items[key]["y"]);
                  scale_matrix = np.matrix([[scale_factor, 0], [0, scale_factor]]);
                  coor = np.array([[cam_x, cam_y]]);
                  new_coor = (coor * scale_matrix).flatten();
                  cam_x = new_coor[[0, 0]];
                  cam_y = new_coor[[0, 1]];
                  cam_rot = Number.parseInt(items[key]["rotation"]);
                  if ((cam_rot === 0)) {
                      cam_rot = 180;
                  } else {
                      if ((cam_rot <= 0)) {
                          cam_rot = (180 - cam_rot);
                      } else {
                          cam_rot = (cam_rot + 90);
                      }
                  }
                  cam_fov = 118;
                  cam_far = 100;
                  cam = dict(zip([cam_id], [[cam_x, cam_y, cam_rot, cam_fov, cam_far]]));
                  camera_list.update(cam);
              }
          }
      }
      /*key_list = [];
      for (var key, _pj_c = 0, _pj_a = camera_list, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          key = _pj_a[_pj_c];
          key_list.append(key);
      }
      for (var i = 0, _pj_a = (key_list.length - cam_mod); (i < _pj_a); i += 1) {
          key = key_list[i];
          camera_list.pop(key, null);
      }*/
      wall_info = {};
      for (var key, _pj_c = 0, _pj_a = wall_idNvertsid, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          key = _pj_a[_pj_c];
          vert = wall_idNvertsid[key][0];
          vert2 = wall_idNvertsid[key][1];
          thick = wall_idNvertsid[key][2];
          vert_co = [];
          vert_co.append(vert_coor[vert]);
          vert_co.append(vert_coor[vert2]);
          vert_co.append(thick);
          wall_co = dict(zip([key], [vert_co]));
          wall_info.update(wall_co);
      }
      return [wall_info, camera_list];
  }

  let data = JSON.parse(localStorage.getItem('react-planner_v0'));
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
  polygons.push([
    [250, 100],
    [260, 140],
    [240, 140],
  ]);

  polygons.push([[240,240],[260,240],[260,260],[240,260]]);
    
  const segments = breakIntersections(convertToSegments(polygons));
    
  // define your position in which the visibility should be calculated from
  const position = [100, 200];
    
  // check if the position is inside the world polygon
  if (inPolygon(position, polygons[0])) {
    // compute the visibility polygon, this can be used to draw a polygon with Canvas or WebGL
    const visibility = compute(position, segments);
  }
  const viewportVisibility = computeViewport(
    position,
    segments,
    [50, 50],
    [450, 450]
  );
  //console.log(viewportVisibility);
  return(   
    <g>
      {<polygon points={viewportVisibility.join()} fill="lime" />}
    </g>
  )
}