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
      let STYLE_LINE = { stroke: SharedStyle.LINE_MESH_COLOR.selected };
      let STYLE_RECT = { strokeWidth: 1, stroke: SharedStyle.LINE_MESH_COLOR.unselected, fill: 'green'};
      let STYLE_RECT_SELECTED = { ...STYLE_RECT, stroke: SharedStyle.LINE_MESH_COLOR.selected };

      let length = Geometry.pointsDistance(x1, y1, x2, y2);
      let length_5 = length / 5;

      let thickness = 5;
      let half_thickness = thickness / 2;
      let half_thickness_eps = half_thickness + epsilon;
      let char_height = 11;
      let extra_epsilon = 5;
      let textDistance = half_thickness + epsilon + extra_epsilon;

      return (element.selected) ?
        <g>
          <rect x="0" y={-half_thickness} width={length} height={thickness} style={STYLE_RECT_SELECTED} />
          <line x1={length_5} y1={-half_thickness_eps} x2={length_5} y2={half_thickness_eps} style={STYLE_LINE} />
        </g> :
        <rect x="0" y={-half_thickness} width={length} height={thickness} style={STYLE_RECT} />
    },

    render3D: function (element, layer, scene) {
      return Promise.resolve(new Three.Object3D());
    },
  };
  return targetElement;
}
