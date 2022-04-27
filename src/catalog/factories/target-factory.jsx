import React from 'react';
import * as SharedStyle from '../../shared-style';
import * as Geometry from '../../utils/geometry';
import Translator from '../../translator/translator';
import * as Three from 'three';

let translator = new Translator();

export default function TargetFactory(name, info) {

  let targetElement = {
    name,
    prototype: 'lines',
    info,

    render2D: function (element, layer, scene) {
      let { x: x1, y: y1 } = layer.vertices.get(element.vertices.get(0));
      let { x: x2, y: y2 } = layer.vertices.get(element.vertices.get(1));

      let epsilon = 20;
      //let STYLE_LINE = { stroke: SharedStyle.LINE_MESH_COLOR.selected };
      let STYLE_RECT = {};
      let STYLE_RECT_SELECTED = {};
      switch(name){
        case 'obstacle area':
          STYLE_RECT = { strokeWidth: 3, stroke: '#ff8200', fill: '#000000'};
          STYLE_RECT_SELECTED = { ...STYLE_RECT, stroke: SharedStyle.LINE_MESH_COLOR.selected };
          break;
        case 'nocamera area':
          STYLE_RECT = { strokeWidth: 3, stroke: '#000000', fill: '#f14242'};
          STYLE_RECT_SELECTED = { ...STYLE_RECT, stroke: SharedStyle.LINE_MESH_COLOR.selected };
          break;
        case 'mustcover area':
          STYLE_RECT = { strokeWidth: 3, stroke: '#494948', fill: '#ff8200'};
          STYLE_RECT_SELECTED = { ...STYLE_RECT, stroke: SharedStyle.LINE_MESH_COLOR.selected };
          break;
      }

      let length = Geometry.pointsDistance(x1, y1, x2, y2);
      let length_5 = length / 5;

      let thickness = 11;
      let half_thickness = thickness / 2;
      let half_thickness_eps = half_thickness + epsilon;
      let char_height = 11;
      let extra_epsilon = 5;
      let textDistance = half_thickness + epsilon + extra_epsilon;

      return (element.selected) ?
        <rect x="0" y={-half_thickness} width={length} height={thickness} style={STYLE_RECT_SELECTED} strokeDasharray="3"/>
        :
        <rect x="0" y={-half_thickness} width={length} height={thickness} style={STYLE_RECT} strokeDasharray="3"/>
    },

    render3D: function (element, layer, scene) {
      return Promise.resolve(new Three.Object3D());
    },
  };
  return targetElement;
}
