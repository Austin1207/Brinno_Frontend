'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SpeedDial = require('@mui/material/SpeedDial');

var _SpeedDial2 = _interopRequireDefault(_SpeedDial);

var _SpeedDialAction = require('@mui/material/SpeedDialAction');

var _SpeedDialAction2 = _interopRequireDefault(_SpeedDialAction);

var _Container = require('@mui/material/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Create = require('@mui/icons-material/Create');

var _Create2 = _interopRequireDefault(_Create);

var _utils = require('@mui/material/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineSpeedDial = function (_Component) {
  _inherits(LineSpeedDial, _Component);

  function LineSpeedDial(props, context) {
    _classCallCheck(this, LineSpeedDial);

    var _this = _possibleConstructorReturn(this, (LineSpeedDial.__proto__ || Object.getPrototypeOf(LineSpeedDial)).call(this, props, context));

    _this.state = {};
    return _this;
  }

  _createClass(LineSpeedDial, [{
    key: 'render',
    value: function render() {
      var _context = this.context,
          itemsActions = _context.itemsActions,
          linesActions = _context.linesActions;


      var PencilAddIcon = (0, _utils.createSvgIcon)(_react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', version: '1.1' },
        _react2.default.createElement('path', { d: 'm3,17.25l0,3.75l3.75,0l11.06,-11.06l-3.75,-3.75l-11.06,11.06zm17.71,-10.21c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34a0.9959,0.9959 0 0 0 -1.41,0l-1.83,1.83l3.75,3.75l1.83,-1.83z' }),
        _react2.default.createElement('path', { d: 'm3,4.69376l1.69376,0l0,-1.69376l1.73748,0l0,1.69376l1.69376,0l0,1.73748l-1.69376,0l0,1.69376l-1.73748,0l0,-1.69376l-1.69376,0l0,-1.73748z' })
      ), 'PencilAdd');

      var PencilMinusIcon = (0, _utils.createSvgIcon)(_react2.default.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', version: '1.1' },
        _react2.default.createElement('path', { d: 'm3,17.25l0,3.75l3.75,0l11.06,-11.06l-3.75,-3.75l-11.06,11.06zm17.71,-10.21c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34a0.9959,0.9959 0 0 0 -1.41,0l-1.83,1.83l3.75,3.75l1.83,-1.83z' }),
        _react2.default.createElement('path', { d: 'm3.07889,4.68632l5.41487,0l0,1.73299l-5.41487,0l0,-1.73299z' })
      ), 'PencilMinus');

      var actions = [{ icon: _react2.default.createElement(PencilAddIcon, null), name: "Interest Area", do: function _do() {
          return linesActions.selectToolDrawingLine('install area');
        } }, { icon: _react2.default.createElement(PencilMinusIcon, null), name: "Construction Area", do: function _do() {
          return linesActions.selectToolDrawingLine('wall');
        } }];

      return _react2.default.createElement(
        _Container2.default,
        {
          maxWidth: 'sm',
          sx: { pl: 0, pr: 0 }
        },
        _react2.default.createElement(
          _SpeedDial2.default,
          {
            ariaLabel: 'Line SpeedDial',
            sx: { position: 'absolute', bottom: 16, right: 16 },
            icon: _react2.default.createElement(_Create2.default, null)
          },
          actions.map(function (action) {
            return _react2.default.createElement(_SpeedDialAction2.default, {
              key: action.name,
              icon: action.icon,
              tooltipTitle: action.name,
              onClick: action.do
            });
          })
        )
      );
    }
  }]);

  return LineSpeedDial;
}(_react.Component);

exports.default = LineSpeedDial;


LineSpeedDial.propTypes = {
  state: _propTypes2.default.object.isRequired,
  //width: PropTypes.number.isRequired,
  //height: PropTypes.number.isRequired,
  allowProjectFileSupport: _propTypes2.default.bool.isRequired,
  toolbarButtons: _propTypes2.default.array
};

LineSpeedDial.contextTypes = {
  projectActions: _propTypes2.default.object.isRequired,
  viewer2DActions: _propTypes2.default.object.isRequired,
  viewer3DActions: _propTypes2.default.object.isRequired,
  linesActions: _propTypes2.default.object.isRequired,
  holesActions: _propTypes2.default.object.isRequired,
  itemsActions: _propTypes2.default.object.isRequired,
  translator: _propTypes2.default.object.isRequired
};