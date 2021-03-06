'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Item;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIf = require('../../utils/react-if');

var _reactIf2 = _interopRequireDefault(_reactIf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE_LINE = {
  fill: "#0096fd",
  stroke: "#0096fd"
};

//旋轉拖曳圓圈
var STYLE_CIRCLE = {
  fill: "#0096fd",
  stroke: "#0096fd",
  cursor: "ew-resize"
};

//旋轉大園
var STYLE_CIRCLE2 = {
  fill: "none",
  stroke: "#0096fd",
  cursor: "ew-resize"
};

function Item(_ref) {
  var layer = _ref.layer,
      item = _ref.item,
      scene = _ref.scene,
      catalog = _ref.catalog;
  var x = item.x,
      y = item.y,
      rotation = item.rotation;


  var renderedItem = catalog.getElement(item.type).render2D(item, layer, scene);

  return _react2.default.createElement(
    'g',
    {
      'data-element-root': true,
      'data-prototype': item.prototype,
      'data-id': item.id,
      'data-selected': item.selected,
      'data-layer': layer.id,
      style: item.selected ? { cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' } : {},
      transform: 'translate(' + x + ',' + y + ') rotate(' + rotation + ')' },
    renderedItem,
    _react2.default.createElement(
      _reactIf2.default,
      { condition: item.selected },
      _react2.default.createElement(
        'g',
        { 'data-element-root': true,
          'data-prototype': item.prototype,
          'data-id': item.id,
          'data-selected': item.selected,
          'data-layer': layer.id,
          'data-part': 'rotation-anchor'
        },
        _react2.default.createElement('rect', { id: 'RotateCircle2', x: '-13', y: '-13', width: '40', height: '40', transform: 'rotate(45)',
          style: {
            fill: "none",
            stroke: "#0096fd",
            cursor: "ew-resize",
            // cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/rotate_2.png"),pointer',
            display: ""
          } }),
        _react2.default.createElement('circle', { id: 'RotateCircle1', cx: '0', cy: '38', r: '2', style: {
            fill: "#ffffff",
            stroke: "#0096fd",
            // cursor: "ew-resize",
            cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/rotate_2.png") 5 10,pointer',
            display: ""
          }
        })
      )
    )
  );
}

Item.propTypes = {
  item: _propTypes2.default.object.isRequired,
  layer: _propTypes2.default.object.isRequired,
  scene: _propTypes2.default.object.isRequired,
  catalog: _propTypes2.default.object.isRequired
};