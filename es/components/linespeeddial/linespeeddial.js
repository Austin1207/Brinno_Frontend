var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Container from '@mui/material/Container';
import CreateIcon from '@mui/icons-material/Create';
import { createSvgIcon } from '@mui/material/utils';

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
      var linesActions = this.context.linesActions;


      var PencilAddIcon = createSvgIcon(React.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', version: '1.1' },
        React.createElement('path', { d: 'm3,17.25l0,3.75l3.75,0l11.06,-11.06l-3.75,-3.75l-11.06,11.06zm17.71,-10.21c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34a0.9959,0.9959 0 0 0 -1.41,0l-1.83,1.83l3.75,3.75l1.83,-1.83z' }),
        React.createElement('path', { d: 'm3,4.69376l1.69376,0l0,-1.69376l1.73748,0l0,1.69376l1.69376,0l0,1.73748l-1.69376,0l0,1.69376l-1.73748,0l0,-1.69376l-1.69376,0l0,-1.73748z' })
      ), 'PencilAdd');

      var PencilMinusIcon = createSvgIcon(React.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', version: '1.1' },
        React.createElement('path', { d: 'm3,17.25l0,3.75l3.75,0l11.06,-11.06l-3.75,-3.75l-11.06,11.06zm17.71,-10.21c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34a0.9959,0.9959 0 0 0 -1.41,0l-1.83,1.83l3.75,3.75l1.83,-1.83z' }),
        React.createElement('path', { d: 'm3.07889,4.68632l5.41487,0l0,1.73299l-5.41487,0l0,-1.73299z' })
      ), 'PencilMinus');

      var actions = [{ icon: React.createElement(PencilAddIcon, null), name: "Interest Area", do: function _do() {
          return linesActions.selectToolDrawingLine('install area');
        } }, { icon: React.createElement(PencilMinusIcon, null), name: "Construction Area", do: function _do() {
          return linesActions.selectToolDrawingLine('wall');
        } }];

      return React.createElement(
        Container,
        {
          maxWidth: 'sm',
          sx: { pl: 0, pr: 0 }
        },
        React.createElement(
          SpeedDial,
          {
            ariaLabel: 'Line SpeedDial',
            sx: { position: 'absolute', bottom: 16, right: 16 },
            icon: React.createElement(CreateIcon, null)
          },
          actions.map(function (action) {
            return React.createElement(SpeedDialAction, {
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
}(Component);

export default LineSpeedDial;


LineSpeedDial.propTypes = {
  state: PropTypes.object.isRequired,
  //width: PropTypes.number.isRequired,
  //height: PropTypes.number.isRequired,
  allowProjectFileSupport: PropTypes.bool.isRequired,
  toolbarButtons: PropTypes.array
};

LineSpeedDial.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired
};