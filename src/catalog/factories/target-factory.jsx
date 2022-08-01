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
      let STYLE_LINE = {};
      let STYLE_LINE_SELECTED = {};
      switch(name){
        case 'construction area':
          if (localStorage.getItem("ColorMode") == "Light") {
          STYLE_LINE = { strokeWidth: 5, stroke: '#222222'};
          STYLE_LINE_SELECTED = { ...STYLE_LINE, stroke: SharedStyle.LINE_MESH_COLOR.selected };
          break;
          }
          else {
            STYLE_LINE = { strokeWidth: 5, stroke: '#ffffff'};
            STYLE_LINE_SELECTED = { ...STYLE_LINE, stroke: SharedStyle.LINE_MESH_COLOR.selected };
            break;
          }
        case 'interest area':
          STYLE_LINE = { strokeWidth: 5, stroke: '#ff8200'};
          STYLE_LINE_SELECTED = { ...STYLE_LINE, stroke: SharedStyle.LINE_MESH_COLOR.selected };
          break;
        case 'nocamera area':
          if (localStorage.getItem("ColorMode") == "Light") {
            STYLE_LINE = { strokeWidth: 5, stroke: '#e45d65'};
            STYLE_LINE_SELECTED = { ...STYLE_LINE, stroke: SharedStyle.LINE_MESH_COLOR.selected };
            break;
            }
            else {
              STYLE_LINE = { strokeWidth: 5, stroke: '#e6757d'};
              STYLE_LINE_SELECTED = { ...STYLE_LINE, stroke: SharedStyle.LINE_MESH_COLOR.selected };
              break;
            }
        case 'mustcover area':
          if (localStorage.getItem("ColorMode") == "Light") {
            STYLE_LINE = { strokeWidth: 5, stroke: '#8f4900'};
            STYLE_LINE_SELECTED = { ...STYLE_LINE, stroke: SharedStyle.LINE_MESH_COLOR.selected };
            break;
            }
            else {
              STYLE_LINE = { strokeWidth: 5, stroke: '#ffd7bf'};
              STYLE_LINE_SELECTED = { ...STYLE_LINE, stroke: SharedStyle.LINE_MESH_COLOR.selected };
              break;
            }
      }

      let length = Geometry.pointsDistance(x1, y1, x2, y2);
      let length_5 = length / 5;

      let thickness = 5;
      let half_thickness = thickness / 2;
      let half_thickness_eps = half_thickness + epsilon;
      let char_height = 11;
      let extra_epsilon = 5;
      let textDistance = half_thickness + epsilon + extra_epsilon;

      // return (element.selected) ?
      //   <line x1="0" y1="0" x2={length} y2="0" style={STYLE_LINE_SELECTED} strokeDasharray="20"/>
      //   :
      //   <line x1="0" y1="0" x2={length} y2="0" style={STYLE_LINE} strokeDasharray="20"/>

        return (element.selected) ?
        <line x1="0" y1="0" x2={length} y2="0" style={STYLE_LINE_SELECTED}/>
        :
        <line x1="0" y1="0" x2={length} y2="0" style={STYLE_LINE}/>
    },

    render3D: function (element, layer, scene) {
      return Promise.resolve(new Three.Object3D());
    },
  };
  return targetElement;
}
