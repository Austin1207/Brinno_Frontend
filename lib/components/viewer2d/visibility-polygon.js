'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Visibility_Polygon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _visibilityPolygon = require('visibility-polygon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Visibility_Polygon(_ref) {
  var state = _ref.state,
      sceneWidth = _ref.sceneWidth,
      sceneHeight = _ref.sceneHeight;


  //return an array of objects according to key, value, or key and value matching
  function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (_typeof(obj[i]) == 'object') {
        objects = objects.concat(getObjects(obj[i], key, val));
      } else
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') {
          //
          objects.push(obj);
        } else if (obj[i] == val && key == '') {
          //only add if the object is not already in the array
          if (objects.lastIndexOf(obj) == -1) {
            objects.push(obj);
          }
        }
    }
    return objects;
  }

  function getWallCamera(json, sceneHeight) {
    var wall_info = [];
    var cameara_info = [];
    if (json) {
      var lines = Object.entries(json.layers.layer2.lines);
      var walls_vertices = [];
      for (var i = 0; i < lines.length; i++) {
        if (lines[i][1].type == "obstacle area" /*||lines[i][1].type=="construction area"*/) {
            walls_vertices.push([lines[i][1].vertices]);
          }
      }
      walls_vertices = walls_vertices.flat(Infinity);
      //console.log(walls_vertices);
      var wall_xy = [];
      var vertices = json.layers.layer2.vertices;
      //console.log(vertices);
      for (var _i = 0; _i < walls_vertices.length; _i++) {
        var vertice = getObjects(vertices, 'id', walls_vertices[_i]);
        wall_xy.push([vertice[0].x, sceneHeight - vertice[0].y]);
      }
      while (wall_xy.length) {
        wall_info.push(wall_xy.splice(0, 2));
      } //console.log(wall_info);
      var camearas = json.layers.layer2.items;
      cameara_info = cameara_info.concat(getObjects(camearas, 'type', 'camera_BAC2000'));
      cameara_info = cameara_info.concat(getObjects(camearas, 'type', 'camera_BCC200'));
      cameara_info = cameara_info.concat(getObjects(camearas, 'type', 'camera_BCC2000'));
      cameara_info = cameara_info.concat(getObjects(camearas, 'type', 'camera_MAC200DN'));
    }

    return [wall_info, cameara_info];
  }

  function get_endpts(angle, cam_x, cam_y, radius) {
    var vx = Math.sin(Math.PI * angle / 180);
    var vy = Math.cos(Math.PI * angle / 180);
    var x = cam_x + radius * vx;
    var y = cam_y + radius * vy;
    return [x, y];
  }

  function camera_cone(cam_x, cam_y, radius, angle, fov) {
    var path = 'M ';
    // Define the start and end of the arc
    var angle_convert = angle + 360;
    var angle1 = angle_convert + fov / 2;
    var angle2 = angle_convert - fov / 2;
    var pt1 = get_endpts(angle1, cam_x, cam_y, radius);
    var x1 = pt1[0];
    var y1 = pt1[1];
    var pt2 = get_endpts(angle2, cam_x, cam_y, radius);
    var x2 = pt2[0];
    var y2 = pt2[1];
    path = path.concat(cam_x, ' ', cam_y, ' L ', x1, ' ', y1, ' A ', radius, ' ', radius, ' 0 0 1 ', x2, ' ', y2, ' Z');
    return path;
  }
  //console.log(state);
  var data = JSON.parse(localStorage.getItem('react-planner_v0'));
  var wallcamera_info = getWallCamera(data, sceneHeight);
  var wall_info = wallcamera_info[0];
  var cameara_info = wallcamera_info[1];
  //console.log(cameara_info);
  //console.log(wall_info);
  var polygons = [];
  // this is the 'world' polygon, which bounds all the polygons you want to compute againts
  //console.log(sceneWidth, sceneHeight)
  polygons.push([[-1, -1], [sceneWidth + 1, -1], [sceneWidth + 1, sceneHeight + 1], [-1, sceneHeight + 1]]);
  // define vertexes of your polygons

  for (var i = 0; i < wall_info.length; i++) {
    polygons.push(wall_info[i]);
  }
  //console.log(polygons);
  var segments = (0, _visibilityPolygon.breakIntersections)((0, _visibilityPolygon.convertToSegments)(polygons));

  // define your position in which the visibility should be calculated from
  //let position = [cameara_info[0].x, sceneHeight-cameara_info[0].y];
  var position = [];
  //let conepath = camera_cone(cameara_info[0].x, sceneHeight-cameara_info[0].y, 500, cameara_info[0].rotation, 69);
  var conepath = '';
  var visibility = [];
  var rendered = [];
  for (var _i2 = 0; _i2 < cameara_info.length; _i2++) {
    position = [cameara_info[_i2].x, sceneHeight - cameara_info[_i2].y];
    conepath = camera_cone(cameara_info[_i2].x, sceneHeight - cameara_info[_i2].y, 500, cameara_info[_i2].rotation, parseInt(cameara_info[_i2].fov));
    visibility = (0, _visibilityPolygon.compute)(position, segments);
    rendered.push(_react2.default.createElement(
      'g',
      { key: cameara_info[_i2].id + '_visibility' },
      _react2.default.createElement(
        'clipPath',
        { id: cameara_info[_i2].id + '_cone' },
        _react2.default.createElement('path', { d: conepath })
      ),
      _react2.default.createElement(
        'g',
        { clipPath: 'url(#' + cameara_info[_i2].id + '_cone)' },
        _react2.default.createElement('polygon', { points: visibility.join(), fill: '#ff8200', 'fill-opacity': '0.15' })
      )
    ));
  }
  //console.log(conepath);

  //let visibility = compute(position, segments);

  //console.log(viewportVisibility);
  return _react2.default.createElement(
    'g',
    { pointerEvents: 'none' },
    rendered
  );
}