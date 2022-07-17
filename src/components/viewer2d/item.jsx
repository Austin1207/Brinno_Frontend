import React from 'react';
import PropTypes from 'prop-types';
import If from '../../utils/react-if';

const STYLE_LINE = {
  fill: "#0096fd",
  stroke: "#0096fd"
};

//旋轉拖曳圓圈
const STYLE_CIRCLE = {
  fill: "#0096fd",
  stroke: "#0096fd",
  cursor: "ew-resize"
};

//旋轉大園
const STYLE_CIRCLE2 = {
  fill: "none",
  stroke: "#0096fd",
  cursor: "ew-resize"
};

export default function Item({layer, item, scene, catalog}) {

  let {x, y, rotation} = item;

  let renderedItem = catalog.getElement(item.type).render2D(item, layer, scene);

  return (
    <g
      data-element-root
      data-prototype={item.prototype}
      data-id={item.id}
      data-selected={item.selected}
      data-layer={layer.id}
      style={item.selected ? {cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'} : {}}
      transform={`translate(${x},${y}) rotate(${rotation})`}>

      {renderedItem}
      <If condition={item.selected}>
        <g data-element-root
           data-prototype={item.prototype}
           data-id={item.id}
           data-selected={item.selected}
           data-layer={layer.id}
           data-part="rotation-anchor"
        >

          <rect id = "RotateCircle2" x="-13" y="-13" width="40" height="40" transform="rotate(45)"
            style={{
            fill: "none",
            stroke: "#0096fd",
            cursor: "ew-resize",
            // cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/rotate_2.png"),pointer',
            display:""
          }}/>

          <circle id = "RotateCircle1" cx="0" cy="38" r="2" style={{
            fill: "#ffffff",
            stroke: "#0096fd",
            // cursor: "ew-resize",
            cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/rotate_2.png") 5 10,pointer',
            display:"",
          }}
          />
          
          {/* prototype */}
          {/* <circle id = "RotateCircle1" cx="0" cy="150" r="10" style={{
            fill: "#ffffff",
            stroke: "#ffffff",
            cursor: "ew-resize",
            display:""
          }}/>

          <circle id = "RotateCircle2" cx="0" cy="0" r="150" style={{
            fill: "none",
            stroke: "#0096fd",
            cursor: "ew-resize",
            display:""
          }}/> */}
        </g>
      </If>
    </g>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  layer: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired
};

