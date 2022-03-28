'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TargetFactory = exports.LineFactory = exports.AreaFactory = exports.WallFactory = undefined;

var _wallFactory = require('./wall-factory');

var _wallFactory2 = _interopRequireDefault(_wallFactory);

var _areaFactory = require('./area-factory');

var _areaFactory2 = _interopRequireDefault(_areaFactory);

var _lineFactory = require('./line-factory');

var _lineFactory2 = _interopRequireDefault(_lineFactory);

var _targetFactory = require('./target-factory');

var _targetFactory2 = _interopRequireDefault(_targetFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.WallFactory = _wallFactory2.default;
exports.AreaFactory = _areaFactory2.default;
exports.LineFactory = _lineFactory2.default;
exports.TargetFactory = _targetFactory2.default;
exports.default = {
  WallFactory: _wallFactory2.default,
  AreaFactory: _areaFactory2.default,
  LineFactory: _lineFactory2.default,
  TargetFactory: _targetFactory2.default
};