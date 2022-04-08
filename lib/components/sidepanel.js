'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidepanel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _catalogList = require('./catalog-view/catalog-list');

var _catalogList2 = _interopRequireDefault(_catalogList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sidepanel( /*{width, height,*/_ref) {
  var state = _ref.state;

  return _react2.default.createElement(_catalogList2.default, { state: state, width: 50, height: 100 });
}

Sidepanel.propTypes = {
  state: _propTypes2.default.object.isRequired
  //width: PropTypes.number.isRequired,
  //height: PropTypes.number.isRequired
};