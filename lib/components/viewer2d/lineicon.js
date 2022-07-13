'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IconMustLine = exports.IconNoCamLine = exports.IconObstacleLine = exports.IconInterestLine = exports.IconConstructionLine = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('@mui/material/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconConstructionLine = (0, _utils.createSvgIcon)(_react2.default.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: '#none', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement('path', { d: 'M3 12h21', stroke: '#222', 'stroke-width': '3', 'stroke-dasharray': '6 6' })
), 'ConstructionLine');
var IconInterestLine = (0, _utils.createSvgIcon)(_react2.default.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: '#none', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement('path', { d: 'M3 12h21', stroke: '#FF8200', 'stroke-width': '3', 'stroke-dasharray': '6 6' })
), 'InterestLine');
var IconObstacleLine = (0, _utils.createSvgIcon)(_react2.default.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: '#none', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement('path', { d: 'M3 12h18', stroke: '#75787B', 'stroke-width': '3' })
), 'ObstacleLine');
var IconNoCamLine = (0, _utils.createSvgIcon)(_react2.default.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: '#none', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement('path', { d: 'M3 12h21', stroke: '#E45D65', 'stroke-width': '3', 'stroke-dasharray': '6 6' })
), 'NoCamLine');
var IconMustLine = (0, _utils.createSvgIcon)(_react2.default.createElement(
    'svg',
    { width: '24', height: '24', viewBox: '0 0 24 24', fill: '#none', xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement('path', { d: 'M3 12h21', stroke: '#8F4900', 'stroke-width': '3', 'stroke-dasharray': '6 6' })
), 'MustLine');

exports.IconConstructionLine = IconConstructionLine;
exports.IconInterestLine = IconInterestLine;
exports.IconObstacleLine = IconObstacleLine;
exports.IconNoCamLine = IconNoCamLine;
exports.IconMustLine = IconMustLine;