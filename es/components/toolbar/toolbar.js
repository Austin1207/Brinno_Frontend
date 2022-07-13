var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import If from '../../utils/react-if';
import * as SharedStyle from '../../shared-style';
import { createSvgIcon } from '@mui/material/utils';
import { styled } from '@material-ui/styles';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Box from '@material-ui/core/Box';
import AppBar from '@mui/material/AppBar';
import { MODE_DRAWING_LINE, MODE_WAITING_DRAWING_LINE } from '../../constants';

var iconTextStyle = {
  fontSize: '19px',
  textDecoration: 'none',
  fontWeight: 'bold',
  margin: '0px',
  userSelect: 'none'
};
var buttonsStyle = {
  maxWidth: '59px', maxHeight: '59px', minWidth: '59px', minHeight: '59px',
  backgroundColor: '#FFFFFF', color: '#222222', "&:hover": { backgroundColor: '#989a9c', color: '#ffffff' }
};
var buttonsInuseStyle = {
  maxWidth: '59px', maxHeight: '59px', minWidth: '59px', minHeight: '59px',
  backgroundColor: '#FFFFFF', color: '#ff8200', "&:hover": { backgroundColor: '#FFFFFF' }
};
var tooltipStyle = {
  tooltip: {
    sx: {
      width: '237px',
      height: '59px',
      color: '#ffa140',
      backgroundColor: '#222222',
      fontSize: '16px',
      textAlign: 'center',
      lineHeight: '59px'
    }
  },
  arrow: {
    sx: {
      color: '#222222'
    }
  }
};
var ToolbarButton = styled(Button)({
  maxWidth: '59px',
  maxHeight: '59px',
  minWidth: '59px',
  minHeight: '59px',
  background: '#FFFFFF',
  color: '#222222',
  "&:hover": { backgroundColor: '#989a9c', color: '#ffffff' }
});

var IconConstruction = createSvgIcon(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { d: 'M4.32 4.32h1.44v0.96h-0.48v0.48H4.32V4.32zm0 13.92v1.44h1.44v-0.96h-0.48v-0.48H4.32zm13.92 1.44h1.44v-1.44h-0.96v0.48h-0.48v0.96zm1.44 -13.92V4.32h-1.44v0.96h0.48v0.48h0.96zM7.2 4.32v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm4.8 2.88h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm-2.88 4.8v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zM4.32 16.8h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92z' })
), 'Construction');
var IconInterest = createSvgIcon(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { d: 'M4.32 4.32h1.44v0.96h-0.48v0.48H4.32V4.32zm0 13.92v1.44h1.44v-0.96h-0.48v-0.48H4.32zm13.92 1.44h1.44v-1.44h-0.96v0.48h-0.48v0.96zm1.44 -13.92V4.32h-1.44v0.96h0.48v0.48h0.96zM7.2 4.32v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm4.8 2.88h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm-2.88 4.8v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zM4.32 16.8h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92z' }),
  React.createElement('path', { d: 'M7.68 7.68h8.64v8.64H7.68V7.68z' })
), 'Interest');
var IconObstacle = createSvgIcon(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { d: 'M12.17 1.745c-5.386 0 -9.754 4.368 -9.754 9.754c0 5.386 4.368 9.754 9.754 9.754s9.754 -4.368 9.754 -9.754C21.924 6.11 17.556 1.745 12.17 1.745zM18.266 13.327h-12.192V9.67h12.192V13.327z' })
), 'Obstacle');
var IconNoCam = createSvgIcon(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { d: 'M20.1 8.55v8.371l-1.35 -1.186v-7.186a0.15 0.15 0 0 0 -0.15 -0.15h-3.503l-0.321 -0.896 -0.429 -1.204h-4.697l-0.391 1.096 -1.091 -0.959 0.39 -1.09a0.599 0.599 0 0 1 0.564 -0.398h5.752a0.601 0.601 0 0 1 0.566 0.398l0.608 1.702h2.55a1.5 1.5 0 0 1 1.5 1.5zM12 9.6a2.999 2.999 0 0 1 2.995 2.836l-3.217 -2.828c0.073 -0.005 0.147 -0.008 0.222 -0.008zm-1.549 2.083 2.657 2.335a1.8 1.8 0 0 1 -2.657 -2.335zm-0.911 -0.801a2.987 2.987 0 0 0 -0.54 1.718A2.999 2.999 0 0 0 12 15.6c0.778 0 1.487 -0.296 2.019 -0.781l2.766 2.431H5.4a0.15 0.15 0 0 1 -0.15 -0.15V8.55c0 -0.082 0.068 -0.15 0.15 -0.15h1.315l2.825 2.482zm-4.345 -3.818a1.5 1.5 0 0 0 -1.295 1.486v8.55a1.5 1.5 0 0 0 1.5 1.5h12.922l0.827 0.726a0.72 0.72 0 1 0 0.95 -1.081L5.341 5.275a0.72 0.72 0 1 0 -0.95 1.082l0.804 0.707z' })
), 'NoCam');
var IconMust = createSvgIcon(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { d: 'M4.32 8.16V4.32h3.84v1.44h-2.4v2.4H4.32zm15.36 0V4.32h-3.84v1.44h2.4v2.4h1.44zm0 7.68h-1.44v2.4h-2.4v1.44h3.84v-3.84zm-11.52 3.84v-1.44h-2.4v-2.4H4.32v3.84h3.84zm3.36 -6.72h-2.4v-1.44h2.4v-2.4h1.44v2.4h2.4v1.44h-2.4v2.4h-1.44v-2.4z' })
), 'Must');
var IconAddCam = createSvgIcon(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { d: 'M16.05 7.05h2.55a1.5 1.5 0 0 1 1.5 1.5v3.434a4.734 4.734 0 0 0 -1.35 -0.803v-2.631a0.15 0.15 0 0 0 -0.15 -0.15h-3.503l-0.75 -2.1h-4.697L8.901 8.4H5.4a0.15 0.15 0 0 0 -0.15 0.15v8.55c0 0.083 0.068 0.15 0.15 0.15h7.199a4.731 4.731 0 0 0 0.776 1.35H5.4a1.5 1.5 0 0 1 -1.5 -1.5V8.55a1.5 1.5 0 0 1 1.5 -1.5h2.55l0.609 -1.702a0.599 0.599 0 0 1 0.564 -0.398h5.752a0.601 0.601 0 0 1 0.566 0.398l0.608 1.702z' }),
  React.createElement('path', { d: 'M14.769 11.442A3 3 0 0 0 12 9.6a2.999 2.999 0 0 0 -3 3 2.999 2.999 0 0 0 3.303 2.985 4.742 4.742 0 0 1 0.17 -1.248 1.8 1.8 0 0 1 -2.273 -1.737 1.8 1.8 0 0 1 3.553 -0.41 4.751 4.751 0 0 1 1.016 -0.747z' }),
  React.createElement('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M19.504 14.183c0.24 0.418 0.378 0.901 0.378 1.417a2.829 2.829 0 0 1 -0.378 1.417 2.856 2.856 0 0 1 -1.048 1.047c-0.417 0.24 -0.901 0.377 -1.416 0.377h-0.001a2.829 2.829 0 0 1 -1.418 -0.379 2.856 2.856 0 0 1 -1.045 -1.045 2.83 2.83 0 0 1 -0.378 -1.418c0 -0.516 0.138 -1.001 0.378 -1.418a2.856 2.856 0 0 1 1.045 -1.045 2.829 2.829 0 0 1 1.418 -0.379h0.001c0.516 0 0.999 0.137 1.416 0.378a2.856 2.856 0 0 1 1.048 1.047zM21.019 15.6a3.979 3.979 0 1 1 -7.958 0 3.979 3.979 0 0 1 7.958 0z' }),
  React.createElement('path', { d: 'M16.471 17.116a0.568 0.568 0 1 0 1.137 0v-0.948h0.948a0.568 0.568 0 1 0 0 -1.137h-0.948v-0.948a0.568 0.568 0 0 0 -1.137 0v0.948h-0.947a0.568 0.568 0 1 0 0 1.137h0.947v0.948z' })
), 'AddCam');
var IconSum = createSvgIcon(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M16.808 15.978A6.212 6.212 0 0 0 18.222 12.48h-4.594l3.18 3.498zm-1.04 0.996A6.213 6.213 0 0 1 12 18.24c-3.446 0 -6.24 -2.794 -6.24 -6.24 0 -3.203 2.413 -5.842 5.52 -6.199V11.76c0 0.179 0.067 0.352 0.187 0.484l4.301 4.73zM12 4.32C7.758 4.32 4.32 7.758 4.32 12s3.438 7.68 7.68 7.68 7.68 -3.438 7.68 -7.68S16.242 4.32 12 4.32zm0.72 1.481V11.04h5.447c-0.426 -2.757 -2.656 -4.918 -5.447 -5.239z' })
), 'Sum');

var ASIDE_STYLE = {
  backgroundColor: '#ffffff',
  padding: '5px',
  width: '100%'
};

var sortButtonsCb = function sortButtonsCb(a, b) {
  if (a.index === undefined || a.index === null) {
    a.index = Number.MAX_SAFE_INTEGER;
  }

  if (b.index === undefined || b.index === null) {
    b.index = Number.MAX_SAFE_INTEGER;
  }

  return a.index - b.index;
};

var mapButtonsCb = function mapButtonsCb(el, ind) {
  return React.createElement(
    If,
    {
      key: ind,
      condition: el.condition,
      style: { position: 'relative' }
    },
    el.dom
  );
};

var Toolbar = function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar(props, context) {
    _classCallCheck(this, Toolbar);

    var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props, context));

    _this.state = {
      showCamDrawer: _this.props.showCamDrawer,
      showSumDrawer: _this.props.showSumDrawer,
      inuseTool: ''
    };
    return _this;
  }
  /*
    shouldComponentUpdate(nextProps, nextState) {
      return this.props.state.mode !== nextProps.state.mode ||
        this.props.height !== nextProps.height ||
        this.props.width !== nextProps.width ||
        this.props.state.alterate !== nextProps.state.alterate;
    }
  */


  _createClass(Toolbar, [{
    key: 'handleCamDrawChange',
    value: function handleCamDrawChange() {
      this.setState({
        showSumDrawer: false,
        showCamDrawer: !this.state.showCamDrawer
      });
      this.props.updateCam(!this.state.showCamDrawer);
      this.props.updateSum(false);

      if (localStorage.getItem("Tutorial_CameraTool_1") !== "Done") {
        document.getElementById('7-8-1').style.display = "none";
        document.getElementById('7-8-2').style.display = "none";
        document.getElementById('7-8-3').style.display = "none";
        document.getElementById('7-8-4').style.display = "none";
        document.getElementById('7-8-5').style.display = "none";
        document.getElementById('7-8-6').style.display = "none";
        document.getElementById('overlay_left').style.display = "none";
        document.getElementById('overlay_right').style.display = "none";
        document.getElementById('overlay_top_6').style.display = "none";
        document.getElementById('overlay_bottom_6').style.display = "none";

        document.getElementById('7-8-7').style.display = "";
        document.getElementById('7-8-8').style.display = "";
        document.getElementById('7-8-9').style.display = "";
        document.getElementById('7-8-10').style.display = "";
        document.getElementById('7-8-11').style.display = "";
        document.getElementById('7-8-12').style.display = "";

        localStorage.setItem("Tutorial_CameraTool_1", "Done");
      }
    }
  }, {
    key: 'handleSumDrawChange',
    value: function handleSumDrawChange() {
      this.setState({
        showCamDrawer: false,
        showSumDrawer: !this.state.showSumDrawer
      });
      this.props.updateSum(!this.state.showSumDrawer);
      this.props.updateCam(false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          state = _props.state,
          width = _props.width,
          height = _props.height,
          toolbarButtons = _props.toolbarButtons,
          allowProjectFileSupport = _props.allowProjectFileSupport,
          _context = this.context,
          projectActions = _context.projectActions,
          viewer3DActions = _context.viewer3DActions,
          translator = _context.translator,
          linesActions = _context.linesActions,
          sceneActions = _context.sceneActions;


      var mode = state.get('mode');
      var alterate = state.get('alterate');
      var alterateColor = alterate ? SharedStyle.MATERIAL_COLORS[500].orange : '';

      var CloseTutorial_3 = function CloseTutorial_3() {
        document.getElementById('3-8-1').style.display = "none";
        document.getElementById('3-8-2').style.display = "none";
        document.getElementById('3-8-3').style.display = "none";
        document.getElementById('3-8-4').style.display = "none";
        document.getElementById('3-8-5').style.display = "none";
        document.getElementById('3-8-6').style.display = "none";
        document.getElementById('3-8-7').style.display = "none";
        document.getElementById('3-8-8').style.display = "none";
        document.getElementById('3-8-9').style.display = "none";
        document.getElementById('3-8-10').style.display = "none";
        document.getElementById('3-8-11').style.display = "none";
        document.getElementById('3-8-12').style.display = "none";
        document.getElementById('3-8-13').style.display = "none";
        document.getElementById('3-8-14').style.display = "none";
        document.getElementById('3-8-15').style.display = "none";
        document.getElementById('3-8-16').style.display = "none";
      };

      var CloseTutorial_4 = function CloseTutorial_4() {
        document.getElementById('4-8-1').style.display = "none";
        document.getElementById('4-8-2').style.display = "none";
        document.getElementById('4-8-3').style.display = "none";
        document.getElementById('4-8-4').style.display = "none";
        document.getElementById('4-8-5').style.display = "none";
        document.getElementById('4-8-6').style.display = "none";
        document.getElementById('4-8-7').style.display = "none";
        document.getElementById('4-8-8').style.display = "none";
        document.getElementById('4-8-9').style.display = "none";
        document.getElementById('4-8-10').style.display = "none";
        document.getElementById('4-8-11').style.display = "none";
        document.getElementById('4-8-12').style.display = "none";
        document.getElementById('4-8-13').style.display = "none";
        document.getElementById('4-8-14').style.display = "none";
        document.getElementById('4-8-15').style.display = "none";
        document.getElementById('4-8-16').style.display = "none";
        document.getElementById('4-8-17').style.display = "none";
      };

      var CloseTutorial_5 = function CloseTutorial_5() {
        document.getElementById('5-8-1').style.display = "none";
        document.getElementById('5-8-2').style.display = "none";
        document.getElementById('5-8-3').style.display = "none";
        document.getElementById('5-8-4').style.display = "none";
        document.getElementById('5-8-5').style.display = "none";
        document.getElementById('5-8-6').style.display = "none";
        document.getElementById('5-8-7').style.display = "none";
        document.getElementById('5-8-8').style.display = "none";
        document.getElementById('5-8-9').style.display = "none";
        document.getElementById('5-8-10').style.display = "none";
        document.getElementById('5-8-11').style.display = "none";
        document.getElementById('5-8-12').style.display = "none";
        document.getElementById('5-8-13').style.display = "none";
        document.getElementById('5-8-14').style.display = "none";
        document.getElementById('5-8-15').style.display = "none";
        document.getElementById('5-8-16').style.display = "none";
        document.getElementById('5-8-17').style.display = "none";
      };

      var CloseTutorial_6 = function CloseTutorial_6() {
        document.getElementById('6-8-1').style.display = "none";
        document.getElementById('6-8-2').style.display = "none";
        document.getElementById('6-8-3').style.display = "none";
        document.getElementById('6-8-4').style.display = "none";
        document.getElementById('6-8-5').style.display = "none";
        document.getElementById('6-8-6').style.display = "none";
        document.getElementById('6-8-7').style.display = "none";
        document.getElementById('6-8-8').style.display = "none";
        document.getElementById('6-8-9').style.display = "none";
        document.getElementById('6-8-10').style.display = "none";
        document.getElementById('6-8-11').style.display = "none";
        document.getElementById('6-8-12').style.display = "none";
        document.getElementById('6-8-13').style.display = "none";
        document.getElementById('6-8-14').style.display = "none";
        document.getElementById('6-8-15').style.display = "none";
        document.getElementById('6-8-16').style.display = "none";
        document.getElementById('6-8-17').style.display = "none";
      };

      var CloseTutorial_7 = function CloseTutorial_7() {
        document.getElementById('7-8-1').style.display = "none";
        document.getElementById('7-8-2').style.display = "none";
        document.getElementById('7-8-3').style.display = "none";
        document.getElementById('7-8-4').style.display = "none";
        document.getElementById('7-8-5').style.display = "none";
        document.getElementById('7-8-6').style.display = "none";
        document.getElementById('7-8-7').style.display = "none";
        document.getElementById('7-8-8').style.display = "none";
        document.getElementById('7-8-9').style.display = "none";
        document.getElementById('7-8-10').style.display = "none";
        document.getElementById('7-8-11').style.display = "none";
        document.getElementById('7-8-12').style.display = "none";
        document.getElementById('7-8-13').style.display = "none";
        document.getElementById('7-8-14').style.display = "none";
        document.getElementById('7-8-15').style.display = "none";
        document.getElementById('7-8-16').style.display = "none";
        document.getElementById('7-8-17').style.display = "none";
        document.getElementById('7-8-18').style.display = "none";
        document.getElementById('7-8-19').style.display = "none";
        document.getElementById('7-8-20').style.display = "none";
        document.getElementById('7-8-21').style.display = "none";
        document.getElementById('7-8-22').style.display = "none";
        document.getElementById('7-8-23').style.display = "none";
        document.getElementById('7-8-24').style.display = "none";
        document.getElementById('7-8-25').style.display = "none";
        document.getElementById('7-8-26').style.display = "none";
        document.getElementById('7-8-27').style.display = "none";
        document.getElementById('7-8-28').style.display = "none";
        document.getElementById('7-8-29').style.display = "none";
        document.getElementById('7-8-30').style.display = "none";
        document.getElementById('7-8-31').style.display = "none";
        document.getElementById('7-8-32').style.display = "none";
        document.getElementById('7-8-33').style.display = "none";
        document.getElementById('7-8-34').style.display = "none";
        document.getElementById('7-8-26').style.display = "none";
        document.getElementById('7-8-36').style.display = "none";
      };

      var CloseTutorial_8 = function CloseTutorial_8() {
        document.getElementById('8-8-1').style.display = "none";
        document.getElementById('8-8-2').style.display = "none";
        document.getElementById('8-8-3').style.display = "none";
        document.getElementById('8-8-4').style.display = "none";
      };

      var DrawConstructionArea = function DrawConstructionArea() {
        projectActions.unselectAll();
        sceneActions.selectLayer("layer2");
        linesActions.selectToolDrawingLine('construction area');
        _this2.setState({
          inuseTool: 'construction area'
        });

        localStorage.setItem("DrawingTool", "ConstructionArea");

        if (localStorage.getItem("Tutorial_ConstructionArea") !== "Done") {
          document.getElementById('2-8-1').style.display = "none";
          document.getElementById('2-8-2').style.display = "none";
          document.getElementById('2-8-3').style.display = "none";
          document.getElementById('2-8-4').style.display = "none";
          document.getElementById('2-8-5').style.display = "none";
          document.getElementById('2-8-6').style.display = "none";
          document.getElementById('2-8-7').style.display = "none";
          document.getElementById('overlay_left').style.display = "none";
          document.getElementById('overlay_right').style.display = "none";
          document.getElementById('overlay_top_1').style.display = "none";
          document.getElementById('overlay_bottom_1').style.display = "none";

          document.getElementById('2-8-8').style.display = "";
          document.getElementById('2-8-9').style.display = "";
          document.getElementById('2-8-10').style.display = "";
          document.getElementById('2-8-11').style.display = "";
          document.getElementById('2-8-12').style.display = "";
          document.getElementById('2-8-13').style.display = "";
          document.getElementById('2-8-17').style.display = "";
          document.getElementById('2-8-15').style.display = "";
        }

        CloseTutorial_3();
        CloseTutorial_4();
        CloseTutorial_5();
        CloseTutorial_6();
        CloseTutorial_7();
        CloseTutorial_8();
      };

      var DrawInterestArea = function DrawInterestArea() {
        projectActions.unselectAll();
        sceneActions.selectLayer("layer2");
        linesActions.selectToolDrawingLine('interest area');
        _this2.setState({
          inuseTool: 'interest area'
        });

        localStorage.setItem("DrawingTool", "InterestArea");

        if (localStorage.getItem("Tutorial_InterestArea") !== "Done") {
          document.getElementById('3-8-1').style.display = "none";
          document.getElementById('3-8-2').style.display = "none";
          document.getElementById('3-8-3').style.display = "none";
          document.getElementById('3-8-4').style.display = "none";
          document.getElementById('3-8-5').style.display = "none";
          document.getElementById('3-8-6').style.display = "none";
          document.getElementById('3-8-7').style.display = "none";
          document.getElementById('overlay_left').style.display = "none";
          document.getElementById('overlay_right').style.display = "none";
          document.getElementById('overlay_top_2').style.display = "none";
          document.getElementById('overlay_bottom_2').style.display = "none";

          document.getElementById('3-8-8').style.display = "";
          document.getElementById('3-8-9').style.display = "";
          document.getElementById('3-8-10').style.display = "";
          document.getElementById('3-8-11').style.display = "";
          document.getElementById('3-8-12').style.display = "";
          document.getElementById('3-8-13').style.display = "";
          document.getElementById('3-8-14').style.display = "";
          document.getElementById('3-8-16').style.display = "";
        }

        CloseTutorial_4();
        CloseTutorial_5();
        CloseTutorial_6();
        CloseTutorial_7();
        CloseTutorial_8();
      };

      var DrawObstacleArea = function DrawObstacleArea() {
        projectActions.unselectAll();
        sceneActions.selectLayer("layer2");
        linesActions.selectToolDrawingLine('obstacle area');
        _this2.setState({
          inuseTool: 'obstacle area'
        });

        localStorage.setItem("DrawingTool", "ObstacleArea");

        if (localStorage.getItem("Tutorial_ObstacleArea") !== "Done") {
          document.getElementById('4-8-1').style.display = "none";
          document.getElementById('4-8-2').style.display = "none";
          document.getElementById('4-8-3').style.display = "none";
          document.getElementById('4-8-4').style.display = "none";
          document.getElementById('4-8-5').style.display = "none";
          document.getElementById('4-8-6').style.display = "none";
          document.getElementById('4-8-7').style.display = "none";
          document.getElementById('overlay_left').style.display = "none";
          document.getElementById('overlay_right').style.display = "none";
          document.getElementById('overlay_top_3').style.display = "none";
          document.getElementById('overlay_bottom_3').style.display = "none";

          document.getElementById('4-8-8').style.display = "";
          document.getElementById('4-8-9').style.display = "";
          document.getElementById('4-8-10').style.display = "";
          document.getElementById('4-8-11').style.display = "";
          document.getElementById('4-8-12').style.display = "";
          document.getElementById('4-8-13').style.display = "";
          document.getElementById('4-8-14').style.display = "";
          document.getElementById('4-8-15').style.display = "";
          document.getElementById('4-8-17').style.display = "";
        }

        CloseTutorial_5();
        CloseTutorial_6();
        CloseTutorial_7();
        CloseTutorial_8();
      };

      var DrawNoCameraArea = function DrawNoCameraArea() {
        projectActions.unselectAll();
        sceneActions.selectLayer("layer2");
        linesActions.selectToolDrawingLine('nocamera area');
        _this2.setState({
          inuseTool: 'nocamera area'
        });

        localStorage.setItem("DrawingTool", "NoCameraArea");

        if (localStorage.getItem("Tutorial_NoCameraArea") !== "Done") {
          document.getElementById('5-8-1').style.display = "none";
          document.getElementById('5-8-2').style.display = "none";
          document.getElementById('5-8-3').style.display = "none";
          document.getElementById('5-8-4').style.display = "none";
          document.getElementById('5-8-5').style.display = "none";
          document.getElementById('5-8-6').style.display = "none";
          document.getElementById('5-8-7').style.display = "none";
          document.getElementById('overlay_left').style.display = "none";
          document.getElementById('overlay_right').style.display = "none";
          document.getElementById('overlay_top_4').style.display = "none";
          document.getElementById('overlay_bottom_4').style.display = "none";

          document.getElementById('5-8-8').style.display = "";
          document.getElementById('5-8-9').style.display = "";
          document.getElementById('5-8-10').style.display = "";
          document.getElementById('5-8-11').style.display = "";
          document.getElementById('5-8-12').style.display = "";
          document.getElementById('5-8-13').style.display = "";
          document.getElementById('5-8-14').style.display = "";
          document.getElementById('5-8-15').style.display = "";
          document.getElementById('5-8-17').style.display = "";
        }

        CloseTutorial_6();
        CloseTutorial_7();
        CloseTutorial_8();
      };

      var DrawMustcoverArea = function DrawMustcoverArea() {
        projectActions.unselectAll();
        sceneActions.selectLayer("layer2");
        linesActions.selectToolDrawingLine('mustcover area');
        _this2.setState({
          inuseTool: 'mustcover area'
        });

        localStorage.setItem("DrawingTool", "MustCoverArea");

        if (localStorage.getItem("Tutorial_MustCoverArea") !== "Done") {
          document.getElementById('6-8-1').style.display = "none";
          document.getElementById('6-8-2').style.display = "none";
          document.getElementById('6-8-3').style.display = "none";
          document.getElementById('6-8-4').style.display = "none";
          document.getElementById('6-8-5').style.display = "none";
          document.getElementById('6-8-6').style.display = "none";
          document.getElementById('6-8-7').style.display = "none";
          document.getElementById('overlay_left').style.display = "none";
          document.getElementById('overlay_right').style.display = "none";
          document.getElementById('overlay_top_5').style.display = "none";
          document.getElementById('overlay_bottom_5').style.display = "none";

          document.getElementById('6-8-8').style.display = "";
          document.getElementById('6-8-9').style.display = "";
          document.getElementById('6-8-10').style.display = "";
          document.getElementById('6-8-11').style.display = "";
          document.getElementById('6-8-12').style.display = "";
          document.getElementById('6-8-13').style.display = "";
          document.getElementById('6-8-14').style.display = "";
          document.getElementById('6-8-15').style.display = "";
          document.getElementById('6-8-17').style.display = "";
        }

        CloseTutorial_7();
        CloseTutorial_8();
      };

      var OpenCameraTool = function OpenCameraTool() {
        projectActions.unselectAll();
        sceneActions.selectLayer("layer2");
        _this2.handleCamDrawChange();
      };

      var sorter = [{
        index: 0, condition: true, dom: React.createElement(
          Box,
          { pb: 5 / 8 },
          React.createElement(
            Tooltip,
            { title: 'Outline Construction Area', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { id: 'Outline Construction Area1',
                sx: this.state.inuseTool == 'construction area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle,
                onClick: function onClick(event) {
                  return DrawConstructionArea();
                },
                disabled: true
              },
              React.createElement(IconConstruction, { sx: { fontSize: 40 } })
            )
          ),
          React.createElement(
            Tooltip,
            { title: 'Outline Construction Area', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { id: 'Outline Construction Area2',
                sx: this.state.inuseTool == 'construction area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle,
                onClick: function onClick(event) {
                  return DrawConstructionArea();
                },
                style: { display: "none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }
              },
              React.createElement(IconConstruction, { sx: { fontSize: 40 } })
            )
          )
        )
      }, {
        index: 1, condition: true, dom: React.createElement(Divider, null)
      }, {
        index: 2, condition: true, dom: React.createElement(
          Box,
          { pt: 5 / 8, pb: 5 / 8 },
          React.createElement(
            Tooltip,
            { title: 'Outline Interest Area', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { id: 'Outine Interest Area1',
                sx: this.state.inuseTool == 'interest area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle,
                onClick: function onClick(event) {
                  return DrawInterestArea();
                },
                disabled: true,
                style: { display: "" }
              },
              React.createElement(IconInterest, { sx: { fontSize: 40 } })
            )
          ),
          React.createElement(
            Tooltip,
            { title: 'Outline Interest Area', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { id: 'Outine Interest Area2',
                sx: this.state.inuseTool == 'interest area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle,
                onClick: function onClick(event) {
                  return DrawInterestArea();
                },
                style: { display: "none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }
              },
              React.createElement(IconInterest, { sx: { fontSize: 40 } })
            )
          )
        )
      }, {
        index: 3, condition: true, dom: React.createElement(Divider, null)
      }, {
        index: 4, condition: true, dom: React.createElement(
          Box,
          { pt: 5 / 8, pb: 5 / 8 },
          React.createElement(
            Tooltip,
            { title: 'Place Obstacle Area', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { id: 'Place Obstacle Area1',
                sx: this.state.inuseTool == 'obstacle area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle,
                onClick: function onClick(event) {
                  return DrawObstacleArea();
                },
                disabled: true
              },
              React.createElement(IconObstacle, { sx: { fontSize: 40 } })
            )
          ),
          React.createElement(
            Tooltip,
            { title: 'Place Obstacle Area', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { id: 'Place Obstacle Area2',
                sx: this.state.inuseTool == 'obstacle area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle,
                onClick: function onClick(event) {
                  return DrawObstacleArea();
                },
                style: { display: "none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }
              },
              React.createElement(IconObstacle, { sx: { fontSize: 40 } })
            )
          )
        )
      }, {
        index: 5, condition: true, dom: React.createElement(Divider, null)
      }, {
        index: 6, condition: true, dom: React.createElement(
          Box,
          { pt: 5 / 8, pb: 5 / 8 },
          React.createElement(
            Tooltip,
            { title: 'Place no-camera area', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { id: 'Place no-camera area1',
                sx: this.state.inuseTool == 'nocamera area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle,
                onClick: function onClick(event) {
                  return DrawNoCameraArea();
                },
                disabled: true
              },
              React.createElement(IconNoCam, { sx: { fontSize: 40 } })
            )
          ),
          React.createElement(
            Tooltip,
            { title: 'Place no-camera area', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { id: 'Place no-camera area2',
                sx: this.state.inuseTool == 'nocamera area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle,
                onClick: function onClick(event) {
                  return DrawNoCameraArea();
                },
                style: { display: "none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }
              },
              React.createElement(IconNoCam, { sx: { fontSize: 40 } })
            )
          )
        )
      }, {
        index: 7, condition: true, dom: React.createElement(Divider, null)
      }, {
        index: 8, condition: true, dom: React.createElement(
          Box,
          { pt: 5 / 8, pb: 5 / 8 },
          React.createElement(
            Tooltip,
            { title: 'Place must-cover area', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { id: 'Place must-cover area1',
                sx: this.state.inuseTool == 'mustcover area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle,
                onClick: function onClick(event) {
                  return DrawMustcoverArea();
                },
                disabled: true
              },
              React.createElement(IconMust, { sx: { fontSize: 40 } })
            )
          ),
          React.createElement(
            Tooltip,
            { title: 'Place must-cover area', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { id: 'Place must-cover area2',
                sx: this.state.inuseTool == 'mustcover area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle,
                onClick: function onClick(event) {
                  return DrawMustcoverArea();
                },
                style: { display: "none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }
              },
              React.createElement(IconMust, { sx: { fontSize: 40 } })
            )
          )
        )
      }, {
        index: 9, condition: true, dom: React.createElement(Divider, null)
      }, {
        index: 10, condition: true, dom: React.createElement(
          Box,
          { pt: 5 / 8, pb: 5 / 8 },
          React.createElement(
            Tooltip,
            { title: 'Camera Tool', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { sx: this.state.showCamDrawer ? buttonsInuseStyle : buttonsStyle,
                id: 'Camera Tool1'
                // onClick={() => this.handleCamDrawChange()}
                , onClick: function onClick() {
                  return OpenCameraTool();
                },
                disabled: true
              },
              React.createElement(IconAddCam, { sx: { fontSize: 40 } })
            )
          ),
          React.createElement(
            Tooltip,
            { title: 'Camera Tool', placement: 'right', arrow: true,
              componentsProps: tooltipStyle },
            React.createElement(
              Button,
              { sx: this.state.showCamDrawer ? buttonsInuseStyle : buttonsStyle,
                id: 'Camera Tool2'
                // onClick={() => this.handleCamDrawChange()}
                , onClick: function onClick() {
                  return OpenCameraTool();
                },
                style: { display: "none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }
              },
              React.createElement(IconAddCam, { sx: { fontSize: 40 } })
            )
          )
        )
      }, {
        index: 11, condition: true, dom: React.createElement(Divider, null)
      }];

      sorter = sorter.concat(toolbarButtons.map(function (Component, key) {
        return Component.prototype ? //if is a react component
        {
          condition: true,
          dom: React.createElement(Component, { mode: mode, state: state, key: key })
        } : { //else is a sortable toolbar button
          index: Component.index,
          condition: Component.condition,
          dom: React.createElement(Component.dom, { mode: mode, state: state, key: key })
        };
      }));

      return React.createElement(
        AppBar,
        { style: _extends({}, ASIDE_STYLE, { maxWidth: width, height: height, top: '70px', left: 0 }), className: 'toolbar' },
        React.createElement(
          Box,
          { sx: { flexGrow: 1 } },
          sorter.sort(sortButtonsCb).map(mapButtonsCb)
        ),
        React.createElement(
          Box,
          { sx: { flexGrow: 0 } },
          React.createElement(Divider, null),
          React.createElement(
            Box,
            { pt: 5 / 8, pb: 5 / 8 },
            React.createElement(
              Button,
              {
                id: 'SummaryPage1',
                sx: this.state.showSumDrawer ? buttonsInuseStyle : buttonsStyle,
                onClick: function onClick() {
                  return _this2.handleSumDrawChange();
                },
                disabled: true
              },
              React.createElement(IconSum, { sx: { fontSize: 40 } })
            ),
            React.createElement(
              Button,
              {
                id: 'SummaryPage2',
                sx: buttonsStyle,
                onClick: function onClick() {
                  return _this2.handleSumDrawChange();
                }
                // disabled={true}
                , style: { display: "none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }
              },
              React.createElement(IconSum, { sx: { fontSize: 40 } })
            )
          )
        )
      );
    }
  }]);

  return Toolbar;
}(Component);

export default Toolbar;


Toolbar.propTypes = {
  state: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  allowProjectFileSupport: PropTypes.bool.isRequired,
  toolbarButtons: PropTypes.array
};

Toolbar.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  sceneActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired
};