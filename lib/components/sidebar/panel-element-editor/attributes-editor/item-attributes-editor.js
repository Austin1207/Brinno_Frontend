'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ItemAttributesEditor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formNumberInput = require('../../../style/form-number-input');

var _formNumberInput2 = _interopRequireDefault(_formNumberInput);

var _formTextInput = require('../../../style/form-text-input');

var _formTextInput2 = _interopRequireDefault(_formTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var tableStyle = { width: '100%' };
var firstTdStyle = { width: '6em' };
var inputStyle = { textAlign: 'left' };

function ItemAttributesEditor(_ref, _ref2) {
  var element = _ref.element,
      onUpdate = _ref.onUpdate,
      attributeFormData = _ref.attributeFormData,
      state = _ref.state,
      rest = _objectWithoutProperties(_ref, ['element', 'onUpdate', 'attributeFormData', 'state']);

  var translator = _ref2.translator;

  var name = attributeFormData.has('name') ? attributeFormData.get('name') : element.name;
  var renderedX = attributeFormData.has('x') ? attributeFormData.get('x') : element.x;
  var renderedY = attributeFormData.has('y') ? attributeFormData.get('y') : element.y;
  var renderedR = attributeFormData.has('rotation') ? attributeFormData.get('rotation') : element.rotation;

  return _react2.default.createElement(
    'table',
    { style: tableStyle },
    _react2.default.createElement('tbody', null)
  );
}

ItemAttributesEditor.propTypes = {
  element: _propTypes2.default.object.isRequired,
  onUpdate: _propTypes2.default.func.isRequired,
  attributeFormData: _propTypes2.default.object.isRequired,
  state: _propTypes2.default.object.isRequired
};

ItemAttributesEditor.contextTypes = {
  translator: _propTypes2.default.object.isRequired
};