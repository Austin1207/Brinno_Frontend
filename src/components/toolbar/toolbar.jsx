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
import {
  MODE_DRAWING_LINE,
  MODE_WAITING_DRAWING_LINE
} from '../../constants';

const iconTextStyle = {
  fontSize: '19px',
  textDecoration: 'none',
  fontWeight: 'bold',
  margin: '0px',
  userSelect: 'none'
};
const buttonsStyle = {
    maxWidth: '59px', maxHeight: '59px', minWidth: '59px', minHeight: '59px',
    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'},
};
const buttonsInuseStyle = {
  maxWidth: '59px', maxHeight: '59px', minWidth: '59px', minHeight: '59px',
  backgroundColor: '#FFFFFF', color: '#ff8200', "&:hover": {backgroundColor: '#FFFFFF'},
};
const tooltipStyle = {
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
  arrow:{
    sx: {
      color: '#222222',
    }
  }
};
const ToolbarButton = styled(Button)({
  maxWidth: '59px',
  maxHeight: '59px',
  minWidth: '59px',
  minHeight: '59px',
  background: '#FFFFFF',
  color: '#222222',
  "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'},
});

const IconConstruction = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.32 4.32h1.44v0.96h-0.48v0.48H4.32V4.32zm0 13.92v1.44h1.44v-0.96h-0.48v-0.48H4.32zm13.92 1.44h1.44v-1.44h-0.96v0.48h-0.48v0.96zm1.44 -13.92V4.32h-1.44v0.96h0.48v0.48h0.96zM7.2 4.32v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm4.8 2.88h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm-2.88 4.8v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zM4.32 16.8h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92z"/>
  </svg>,
  'Construction',
);
const IconInterest = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.32 4.32h1.44v0.96h-0.48v0.48H4.32V4.32zm0 13.92v1.44h1.44v-0.96h-0.48v-0.48H4.32zm13.92 1.44h1.44v-1.44h-0.96v0.48h-0.48v0.96zm1.44 -13.92V4.32h-1.44v0.96h0.48v0.48h0.96zM7.2 4.32v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm3.84 0v1.44h1.92V4.32h-1.92zm4.8 2.88h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm0 3.84h-1.44v1.92h1.44v-1.92zm-2.88 4.8v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zm-3.84 0v-1.44h-1.92v1.44h1.92zM4.32 16.8h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92zm0 -3.84h1.44v-1.92H4.32v1.92z"/>
    <path d="M7.68 7.68h8.64v8.64H7.68V7.68z"/>
  </svg>,
  'Interest',
);
const IconObstacle = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.17 1.745c-5.386 0 -9.754 4.368 -9.754 9.754c0 5.386 4.368 9.754 9.754 9.754s9.754 -4.368 9.754 -9.754C21.924 6.11 17.556 1.745 12.17 1.745zM18.266 13.327h-12.192V9.67h12.192V13.327z"/>
  </svg>,
  'Obstacle',
);
const IconNoCam = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.1 8.55v8.371l-1.35 -1.186v-7.186a0.15 0.15 0 0 0 -0.15 -0.15h-3.503l-0.321 -0.896 -0.429 -1.204h-4.697l-0.391 1.096 -1.091 -0.959 0.39 -1.09a0.599 0.599 0 0 1 0.564 -0.398h5.752a0.601 0.601 0 0 1 0.566 0.398l0.608 1.702h2.55a1.5 1.5 0 0 1 1.5 1.5zM12 9.6a2.999 2.999 0 0 1 2.995 2.836l-3.217 -2.828c0.073 -0.005 0.147 -0.008 0.222 -0.008zm-1.549 2.083 2.657 2.335a1.8 1.8 0 0 1 -2.657 -2.335zm-0.911 -0.801a2.987 2.987 0 0 0 -0.54 1.718A2.999 2.999 0 0 0 12 15.6c0.778 0 1.487 -0.296 2.019 -0.781l2.766 2.431H5.4a0.15 0.15 0 0 1 -0.15 -0.15V8.55c0 -0.082 0.068 -0.15 0.15 -0.15h1.315l2.825 2.482zm-4.345 -3.818a1.5 1.5 0 0 0 -1.295 1.486v8.55a1.5 1.5 0 0 0 1.5 1.5h12.922l0.827 0.726a0.72 0.72 0 1 0 0.95 -1.081L5.341 5.275a0.72 0.72 0 1 0 -0.95 1.082l0.804 0.707z"/>
  </svg>,
  'NoCam',
);
const IconMust = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.32 8.16V4.32h3.84v1.44h-2.4v2.4H4.32zm15.36 0V4.32h-3.84v1.44h2.4v2.4h1.44zm0 7.68h-1.44v2.4h-2.4v1.44h3.84v-3.84zm-11.52 3.84v-1.44h-2.4v-2.4H4.32v3.84h3.84zm3.36 -6.72h-2.4v-1.44h2.4v-2.4h1.44v2.4h2.4v1.44h-2.4v2.4h-1.44v-2.4z"/>
  </svg>,
  'Must',
);
const IconAddCam = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.05 7.05h2.55a1.5 1.5 0 0 1 1.5 1.5v3.434a4.734 4.734 0 0 0 -1.35 -0.803v-2.631a0.15 0.15 0 0 0 -0.15 -0.15h-3.503l-0.75 -2.1h-4.697L8.901 8.4H5.4a0.15 0.15 0 0 0 -0.15 0.15v8.55c0 0.083 0.068 0.15 0.15 0.15h7.199a4.731 4.731 0 0 0 0.776 1.35H5.4a1.5 1.5 0 0 1 -1.5 -1.5V8.55a1.5 1.5 0 0 1 1.5 -1.5h2.55l0.609 -1.702a0.599 0.599 0 0 1 0.564 -0.398h5.752a0.601 0.601 0 0 1 0.566 0.398l0.608 1.702z"/>
    <path d="M14.769 11.442A3 3 0 0 0 12 9.6a2.999 2.999 0 0 0 -3 3 2.999 2.999 0 0 0 3.303 2.985 4.742 4.742 0 0 1 0.17 -1.248 1.8 1.8 0 0 1 -2.273 -1.737 1.8 1.8 0 0 1 3.553 -0.41 4.751 4.751 0 0 1 1.016 -0.747z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.504 14.183c0.24 0.418 0.378 0.901 0.378 1.417a2.829 2.829 0 0 1 -0.378 1.417 2.856 2.856 0 0 1 -1.048 1.047c-0.417 0.24 -0.901 0.377 -1.416 0.377h-0.001a2.829 2.829 0 0 1 -1.418 -0.379 2.856 2.856 0 0 1 -1.045 -1.045 2.83 2.83 0 0 1 -0.378 -1.418c0 -0.516 0.138 -1.001 0.378 -1.418a2.856 2.856 0 0 1 1.045 -1.045 2.829 2.829 0 0 1 1.418 -0.379h0.001c0.516 0 0.999 0.137 1.416 0.378a2.856 2.856 0 0 1 1.048 1.047zM21.019 15.6a3.979 3.979 0 1 1 -7.958 0 3.979 3.979 0 0 1 7.958 0z"/>
    <path d="M16.471 17.116a0.568 0.568 0 1 0 1.137 0v-0.948h0.948a0.568 0.568 0 1 0 0 -1.137h-0.948v-0.948a0.568 0.568 0 0 0 -1.137 0v0.948h-0.947a0.568 0.568 0 1 0 0 1.137h0.947v0.948z"/>
  </svg>,
  'AddCam',
);
const IconSum = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.808 15.978A6.212 6.212 0 0 0 18.222 12.48h-4.594l3.18 3.498zm-1.04 0.996A6.213 6.213 0 0 1 12 18.24c-3.446 0 -6.24 -2.794 -6.24 -6.24 0 -3.203 2.413 -5.842 5.52 -6.199V11.76c0 0.179 0.067 0.352 0.187 0.484l4.301 4.73zM12 4.32C7.758 4.32 4.32 7.758 4.32 12s3.438 7.68 7.68 7.68 7.68 -3.438 7.68 -7.68S16.242 4.32 12 4.32zm0.72 1.481V11.04h5.447c-0.426 -2.757 -2.656 -4.918 -5.447 -5.239z"/>
  </svg>,
  'Sum',
);

const ASIDE_STYLE = {
  backgroundColor: '#ffffff',
  padding: '5px',
  width: '100%',
};

const sortButtonsCb = (a, b) => {
  if (a.index === undefined || a.index === null) {
    a.index = Number.MAX_SAFE_INTEGER;
  }

  if (b.index === undefined || b.index === null) {
    b.index = Number.MAX_SAFE_INTEGER;
  }

  return a.index - b.index;
};

const mapButtonsCb = (el, ind) => {
  return (
    <If
      key={ind}
      condition={el.condition}
      style={{ position: 'relative' }}
    >
      {el.dom}
    </If>
  );
};

export default class Toolbar extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showCamDrawer: this.props.showCamDrawer,
      showSumDrawer: this.props.showSumDrawer,
      inuseTool: ''
    };
  }
/*
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.state.mode !== nextProps.state.mode ||
      this.props.height !== nextProps.height ||
      this.props.width !== nextProps.width ||
      this.props.state.alterate !== nextProps.state.alterate;
  }
*/
  handleCamDrawChange(){
    this.setState({
      showSumDrawer: false,
      showCamDrawer: !this.state.showCamDrawer
    })
    this.props.updateCam(!this.state.showCamDrawer)
    this.props.updateSum(false)

    if (localStorage.getItem("Tutorial_CameraTool_1") !== "Done"){
      document.getElementById('7-8-1').style.display = "none"
      document.getElementById('7-8-2').style.display = "none"
      document.getElementById('7-8-3').style.display = "none"
      document.getElementById('7-8-4').style.display = "none"
      document.getElementById('7-8-5').style.display = "none"
      document.getElementById('7-8-6').style.display = "none"
      document.getElementById('overlay_left').style.display = "none"
      document.getElementById('overlay_right').style.display = "none"
      document.getElementById('overlay_top_6').style.display = "none"
      document.getElementById('overlay_bottom_6').style.display = "none"

      document.getElementById('7-8-7').style.display = ""
      document.getElementById('7-8-8').style.display = ""
      document.getElementById('7-8-9').style.display = ""
      document.getElementById('7-8-10').style.display = ""
      document.getElementById('7-8-11').style.display = ""
      document.getElementById('7-8-12').style.display = ""

      localStorage.setItem("Tutorial_CameraTool_1", "Done")
    }
  }

  handleSumDrawChange(){
    this.setState({
      showCamDrawer: false,
      showSumDrawer: !this.state.showSumDrawer
    })
    this.props.updateSum(!this.state.showSumDrawer)
    this.props.updateCam(false)
  }

  render() {
    let {
      props: { state, width, height, toolbarButtons, allowProjectFileSupport },
      context: { projectActions, viewer3DActions, translator, linesActions, sceneActions }
    } = this;

    let mode = state.get('mode');
    let alterate = state.get('alterate');
    let alterateColor = alterate ? SharedStyle.MATERIAL_COLORS[500].orange : '';

    const CloseTutorial_3 = () => {
      document.getElementById('3-8-1').style.display = "none"
      document.getElementById('3-8-2').style.display = "none"
      document.getElementById('3-8-3').style.display = "none"
      document.getElementById('3-8-4').style.display = "none"
      document.getElementById('3-8-5').style.display = "none"
      document.getElementById('3-8-6').style.display = "none"
      document.getElementById('3-8-7').style.display = "none"
      document.getElementById('3-8-8').style.display = "none"
      document.getElementById('3-8-9').style.display = "none"
      document.getElementById('3-8-10').style.display = "none"
      document.getElementById('3-8-11').style.display = "none"
      document.getElementById('3-8-12').style.display = "none"
      document.getElementById('3-8-13').style.display = "none"
      document.getElementById('3-8-14').style.display = "none"
      document.getElementById('3-8-15').style.display = "none"
      document.getElementById('3-8-16').style.display = "none"
    }

    const CloseTutorial_4 = () => {
      document.getElementById('4-8-1').style.display = "none"
      document.getElementById('4-8-2').style.display = "none"
      document.getElementById('4-8-3').style.display = "none"
      document.getElementById('4-8-4').style.display = "none"
      document.getElementById('4-8-5').style.display = "none"
      document.getElementById('4-8-6').style.display = "none"
      document.getElementById('4-8-7').style.display = "none"
      document.getElementById('4-8-8').style.display = "none"
      document.getElementById('4-8-9').style.display = "none"
      document.getElementById('4-8-10').style.display = "none"
      document.getElementById('4-8-11').style.display = "none"
      document.getElementById('4-8-12').style.display = "none"
      document.getElementById('4-8-13').style.display = "none"
      document.getElementById('4-8-14').style.display = "none"
      document.getElementById('4-8-15').style.display = "none"
      document.getElementById('4-8-16').style.display = "none"
      document.getElementById('4-8-17').style.display = "none"
    }

    const CloseTutorial_5 = () => {
      document.getElementById('5-8-1').style.display = "none"
      document.getElementById('5-8-2').style.display = "none"
      document.getElementById('5-8-3').style.display = "none"
      document.getElementById('5-8-4').style.display = "none"
      document.getElementById('5-8-5').style.display = "none"
      document.getElementById('5-8-6').style.display = "none"
      document.getElementById('5-8-7').style.display = "none"
      document.getElementById('5-8-8').style.display = "none"
      document.getElementById('5-8-9').style.display = "none"
      document.getElementById('5-8-10').style.display = "none"
      document.getElementById('5-8-11').style.display = "none"
      document.getElementById('5-8-12').style.display = "none"
      document.getElementById('5-8-13').style.display = "none"
      document.getElementById('5-8-14').style.display = "none"
      document.getElementById('5-8-15').style.display = "none"
      document.getElementById('5-8-16').style.display = "none"
      document.getElementById('5-8-17').style.display = "none"
    }

    const CloseTutorial_6 = () => {
      document.getElementById('6-8-1').style.display = "none"
      document.getElementById('6-8-2').style.display = "none"
      document.getElementById('6-8-3').style.display = "none"
      document.getElementById('6-8-4').style.display = "none"
      document.getElementById('6-8-5').style.display = "none"
      document.getElementById('6-8-6').style.display = "none"
      document.getElementById('6-8-7').style.display = "none"
      document.getElementById('6-8-8').style.display = "none"
      document.getElementById('6-8-9').style.display = "none"
      document.getElementById('6-8-10').style.display = "none"
      document.getElementById('6-8-11').style.display = "none"
      document.getElementById('6-8-12').style.display = "none"
      document.getElementById('6-8-13').style.display = "none"
      document.getElementById('6-8-14').style.display = "none"
      document.getElementById('6-8-15').style.display = "none"
      document.getElementById('6-8-16').style.display = "none"
      document.getElementById('6-8-17').style.display = "none"
    }

    const CloseTutorial_7 = () => {
      document.getElementById('7-8-1').style.display = "none"
      document.getElementById('7-8-2').style.display = "none"
      document.getElementById('7-8-3').style.display = "none"
      document.getElementById('7-8-4').style.display = "none"
      document.getElementById('7-8-5').style.display = "none"
      document.getElementById('7-8-6').style.display = "none"
      document.getElementById('7-8-7').style.display = "none"
      document.getElementById('7-8-8').style.display = "none"
      document.getElementById('7-8-9').style.display = "none"
      document.getElementById('7-8-10').style.display = "none"
      document.getElementById('7-8-11').style.display = "none"
      document.getElementById('7-8-12').style.display = "none"
      document.getElementById('7-8-13').style.display = "none"
      document.getElementById('7-8-14').style.display = "none"
      document.getElementById('7-8-15').style.display = "none"
      document.getElementById('7-8-16').style.display = "none"
      document.getElementById('7-8-17').style.display = "none"
      document.getElementById('7-8-18').style.display = "none"
      document.getElementById('7-8-19').style.display = "none"
      document.getElementById('7-8-20').style.display = "none"
      document.getElementById('7-8-21').style.display = "none"
      document.getElementById('7-8-22').style.display = "none"
      document.getElementById('7-8-23').style.display = "none"
      document.getElementById('7-8-24').style.display = "none"
      document.getElementById('7-8-25').style.display = "none"
      document.getElementById('7-8-26').style.display = "none"
      document.getElementById('7-8-27').style.display = "none"
      document.getElementById('7-8-28').style.display = "none"
      document.getElementById('7-8-29').style.display = "none"
      document.getElementById('7-8-30').style.display = "none"
      document.getElementById('7-8-31').style.display = "none"
      document.getElementById('7-8-32').style.display = "none"
      document.getElementById('7-8-33').style.display = "none"
      document.getElementById('7-8-34').style.display = "none"
      document.getElementById('7-8-26').style.display = "none"
      document.getElementById('7-8-36').style.display = "none"
    }

    const CloseTutorial_8 = () => {
      document.getElementById('8-8-1').style.display = "none"
      document.getElementById('8-8-2').style.display = "none"
      document.getElementById('8-8-3').style.display = "none"
      document.getElementById('8-8-4').style.display = "none"
    }

    const DrawConstructionArea = () => {
      projectActions.unselectAll();
      sceneActions.selectLayer("layer2");
      linesActions.selectToolDrawingLine('construction area');
      this.setState({
        inuseTool: 'construction area'
      });

      localStorage.setItem("DrawingTool", "ConstructionArea")

      if ((localStorage.getItem("Tutorial_ConstructionArea") !== "Done") && (((localStorage.getItem("Mode") == "Upload") && (localStorage.getItem("Tutorial_Upload") !== "Done")) || (((localStorage.getItem("Mode") == "Outline") && (localStorage.getItem("Tutorial_Outline") !== "Done"))))){
      // if (localStorage.getItem("Tutorial_ConstructionArea") !== "Done"){
        document.getElementById('2-8-1').style.display = "none"
        document.getElementById('2-8-2').style.display = "none"
        document.getElementById('2-8-3').style.display = "none"
        document.getElementById('2-8-4').style.display = "none"
        document.getElementById('2-8-5').style.display = "none"
        document.getElementById('2-8-6').style.display = "none"
        document.getElementById('2-8-7').style.display = "none"
        document.getElementById('overlay_left').style.display = "none"
        document.getElementById('overlay_right').style.display = "none"
        document.getElementById('overlay_top_1').style.display = "none"
        document.getElementById('overlay_bottom_1').style.display = "none"

        document.getElementById('2-8-8').style.display = ""
        document.getElementById('2-8-9').style.display = ""
        document.getElementById('2-8-10').style.display = ""
        document.getElementById('2-8-11').style.display = ""
        document.getElementById('2-8-12').style.display = ""
        document.getElementById('2-8-13').style.display = ""
        document.getElementById('2-8-17').style.display = ""
        document.getElementById('2-8-15').style.display = ""
      }

      CloseTutorial_3()
      CloseTutorial_4()
      CloseTutorial_5()
      CloseTutorial_6()
      CloseTutorial_7()
      CloseTutorial_8()

    }
  
    const DrawInterestArea = () => {
      projectActions.unselectAll();
      sceneActions.selectLayer("layer2");
      linesActions.selectToolDrawingLine('interest area');
      this.setState({
        inuseTool: 'interest area'
      });

      localStorage.setItem("DrawingTool", "InterestArea")

      if (localStorage.getItem("Tutorial_InterestArea") !== "Done"){
        document.getElementById('3-8-1').style.display = "none"
        document.getElementById('3-8-2').style.display = "none"
        document.getElementById('3-8-3').style.display = "none"
        document.getElementById('3-8-4').style.display = "none"
        document.getElementById('3-8-5').style.display = "none"
        document.getElementById('3-8-6').style.display = "none"
        document.getElementById('3-8-7').style.display = "none"
        document.getElementById('overlay_left').style.display = "none"
        document.getElementById('overlay_right').style.display = "none"
        document.getElementById('overlay_top_2').style.display = "none"
        document.getElementById('overlay_bottom_2').style.display = "none"

        document.getElementById('3-8-8').style.display = ""
        document.getElementById('3-8-9').style.display = ""
        document.getElementById('3-8-10').style.display = ""
        document.getElementById('3-8-11').style.display = ""
        document.getElementById('3-8-12').style.display = ""
        document.getElementById('3-8-13').style.display = ""
        document.getElementById('3-8-14').style.display = ""
        document.getElementById('3-8-16').style.display = ""
      }

      CloseTutorial_4()
      CloseTutorial_5()
      CloseTutorial_6()
      CloseTutorial_7()
      CloseTutorial_8()
    }

    const DrawObstacleArea = () => {
      projectActions.unselectAll()
      sceneActions.selectLayer("layer2")
      linesActions.selectToolDrawingLine('obstacle area')
      this.setState({
        inuseTool: 'obstacle area'
      })

      localStorage.setItem("DrawingTool", "ObstacleArea")

      if (localStorage.getItem("Tutorial_ObstacleArea") !== "Done"){
        document.getElementById('4-8-1').style.display = "none"
        document.getElementById('4-8-2').style.display = "none"
        document.getElementById('4-8-3').style.display = "none"
        document.getElementById('4-8-4').style.display = "none"
        document.getElementById('4-8-5').style.display = "none"
        document.getElementById('4-8-6').style.display = "none"
        document.getElementById('4-8-7').style.display = "none"
        document.getElementById('overlay_left').style.display = "none"
        document.getElementById('overlay_right').style.display = "none"
        document.getElementById('overlay_top_3').style.display = "none"
        document.getElementById('overlay_bottom_3').style.display = "none"

        document.getElementById('4-8-8').style.display = ""
        document.getElementById('4-8-9').style.display = ""
        document.getElementById('4-8-10').style.display = ""
        document.getElementById('4-8-11').style.display = ""
        document.getElementById('4-8-12').style.display = ""
        document.getElementById('4-8-13').style.display = ""
        document.getElementById('4-8-14').style.display = ""
        document.getElementById('4-8-15').style.display = ""
        document.getElementById('4-8-17').style.display = ""
      }

      CloseTutorial_5()
      CloseTutorial_6()
      CloseTutorial_7()
      CloseTutorial_8()
    }

    const DrawNoCameraArea = () => {
      projectActions.unselectAll()
      sceneActions.selectLayer("layer2")
      linesActions.selectToolDrawingLine('nocamera area')
      this.setState({
        inuseTool: 'nocamera area'
      })
      
      localStorage.setItem("DrawingTool", "NoCameraArea")

      if (localStorage.getItem("Tutorial_NoCameraArea") !== "Done"){
        document.getElementById('5-8-1').style.display = "none"
        document.getElementById('5-8-2').style.display = "none"
        document.getElementById('5-8-3').style.display = "none"
        document.getElementById('5-8-4').style.display = "none"
        document.getElementById('5-8-5').style.display = "none"
        document.getElementById('5-8-6').style.display = "none"
        document.getElementById('5-8-7').style.display = "none"
        document.getElementById('overlay_left').style.display = "none"
        document.getElementById('overlay_right').style.display = "none"
        document.getElementById('overlay_top_4').style.display = "none"
        document.getElementById('overlay_bottom_4').style.display = "none"

        document.getElementById('5-8-8').style.display = ""
        document.getElementById('5-8-9').style.display = ""
        document.getElementById('5-8-10').style.display = ""
        document.getElementById('5-8-11').style.display = ""
        document.getElementById('5-8-12').style.display = ""
        document.getElementById('5-8-13').style.display = ""
        document.getElementById('5-8-14').style.display = ""
        document.getElementById('5-8-15').style.display = ""
        document.getElementById('5-8-17').style.display = ""
      }

      CloseTutorial_6()
      CloseTutorial_7()
      CloseTutorial_8()
    }

    const DrawMustcoverArea = () => {
      projectActions.unselectAll()
      sceneActions.selectLayer("layer2")
      linesActions.selectToolDrawingLine('mustcover area')
      this.setState({
        inuseTool: 'mustcover area'
      })
      
      localStorage.setItem("DrawingTool", "MustCoverArea")

      if (localStorage.getItem("Tutorial_MustCoverArea") !== "Done"){
        document.getElementById('6-8-1').style.display = "none"
        document.getElementById('6-8-2').style.display = "none"
        document.getElementById('6-8-3').style.display = "none"
        document.getElementById('6-8-4').style.display = "none"
        document.getElementById('6-8-5').style.display = "none"
        document.getElementById('6-8-6').style.display = "none"
        document.getElementById('6-8-7').style.display = "none"
        document.getElementById('overlay_left').style.display = "none"
        document.getElementById('overlay_right').style.display = "none"
        document.getElementById('overlay_top_5').style.display = "none"
        document.getElementById('overlay_bottom_5').style.display = "none"

        document.getElementById('6-8-8').style.display = ""
        document.getElementById('6-8-9').style.display = ""
        document.getElementById('6-8-10').style.display = ""
        document.getElementById('6-8-11').style.display = ""
        document.getElementById('6-8-12').style.display = ""
        document.getElementById('6-8-13').style.display = ""
        document.getElementById('6-8-14').style.display = ""
        document.getElementById('6-8-15').style.display = ""
        document.getElementById('6-8-17').style.display = ""
      }

      CloseTutorial_7()
      CloseTutorial_8()
    }    

    const OpenCameraTool = () => {
      projectActions.unselectAll();
      sceneActions.selectLayer("layer2");
      this.handleCamDrawChange()
    }

    let sorter = [
      {
        index: 0, condition: true, dom: 
        <Box pb={5/8} >
          <Tooltip title="Outline Construction Area" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button id ="Outline Construction Area1"
              sx={this.state.inuseTool == 'construction area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle}
              onClick={event => DrawConstructionArea()}
              disabled
              >
              <IconConstruction sx={{ fontSize: 40 }} />
            </Button>
          </Tooltip>
          <Tooltip title="Outline Construction Area" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button id ="Outline Construction Area2"
              sx={this.state.inuseTool == 'construction area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle}
              onClick={event => DrawConstructionArea()}
              style = {{display:"none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}
              >
              <IconConstruction sx={{ fontSize: 40 }} />
            </Button>
          </Tooltip>
        </Box>
      },

      {
        index: 1, condition: true, dom: <Divider/>
      },
      {
        index: 2, condition: true, dom: 
        <Box pt={5/8} pb={5/8}>
          <Tooltip title="Outline Interest Area" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button id = "Outine Interest Area1"
              sx={this.state.inuseTool == 'interest area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle}
              onClick={event => DrawInterestArea()}
              disabled={true}
              style = {{display:""}}
              >
              <IconInterest sx={{ fontSize: 40 }} />
            </Button>
          </Tooltip>
          <Tooltip title="Outline Interest Area" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button id = "Outine Interest Area2"
              sx={this.state.inuseTool == 'interest area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle}
              onClick={event => DrawInterestArea()}
              style = {{display:"none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}
              >
              <IconInterest sx={{ fontSize: 40 }} />
            </Button>
          </Tooltip>
        </Box>
      },
      
      {
        index: 3, condition: true, dom: <Divider/>
      },

      {
        index: 4, condition: true, dom: 
        <Box pt={5/8} pb={5/8}>
          <Tooltip title="Place Obstacle Area" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button id = "Place Obstacle Area1"
              sx={this.state.inuseTool == 'obstacle area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle}
              onClick={event => DrawObstacleArea()}
              disabled={true}
              >
              <IconObstacle sx={{ fontSize: 40 }}/>
            </Button>
          </Tooltip>
          <Tooltip title="Place Obstacle Area" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button id = "Place Obstacle Area2"
              sx={this.state.inuseTool == 'obstacle area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle}
              onClick={event => DrawObstacleArea()}
              style = {{display:"none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}
              >
              <IconObstacle sx={{ fontSize: 40 }}/>
            </Button>
          </Tooltip>
        </Box>
      },

      {
        index: 5, condition: true, dom: <Divider/>
      },
      {
        index: 6, condition: true, dom: 
        <Box pt={5/8} pb={5/8}>
          <Tooltip title="Place no-camera area" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button id = "Place no-camera area1"
              sx={this.state.inuseTool == 'nocamera area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle}
              onClick={event => DrawNoCameraArea()}
              disabled={true}
              >
              <IconNoCam sx={{ fontSize: 40 }}/>
            </Button>
          </Tooltip>
          <Tooltip title="Place no-camera area" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button id = "Place no-camera area2"
              sx={this.state.inuseTool == 'nocamera area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle}
              onClick={event => DrawNoCameraArea()}
              style = {{display:"none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}
              >
              <IconNoCam sx={{ fontSize: 40 }}/>
            </Button>
          </Tooltip>
        </Box>
      },

      {
        index: 7, condition: true, dom: <Divider/>
      },
      {
        index: 8, condition: true, dom:
        <Box pt={5/8} pb={5/8}>
          <Tooltip title="Place must-cover area" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button id ="Place must-cover area1"
              sx={this.state.inuseTool == 'mustcover area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle}
              onClick={event => DrawMustcoverArea()}
              disabled={true}
              >
              <IconMust sx={{ fontSize: 40 }}/>
            </Button>
          </Tooltip>
          <Tooltip title="Place must-cover area" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button id ="Place must-cover area2"
              sx={this.state.inuseTool == 'mustcover area' && ([MODE_WAITING_DRAWING_LINE].includes(mode) || [MODE_DRAWING_LINE].includes(mode)) ? buttonsInuseStyle : buttonsStyle}
              onClick={event => DrawMustcoverArea()}
              style = {{display:"none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}
              >
              <IconMust sx={{ fontSize: 40 }}/>
            </Button>
          </Tooltip>
        </Box>
      },

      {
        index: 9, condition: true, dom: <Divider/>
      },

      {
        index: 10, condition: true, dom: 
        <Box pt={5/8} pb={5/8}>
          <Tooltip title="Camera Tool" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button sx={this.state.showCamDrawer ? buttonsInuseStyle : buttonsStyle}
              id = "Camera Tool1"
              // onClick={() => this.handleCamDrawChange()}
              onClick={() => OpenCameraTool()}
              disabled={true}
              >
              <IconAddCam sx={{ fontSize: 40 }}/>
            </Button>
          </Tooltip>
          <Tooltip title="Camera Tool" placement="right" arrow 
            componentsProps={tooltipStyle}>
            <Button sx={this.state.showCamDrawer ? buttonsInuseStyle : buttonsStyle}
              id = "Camera Tool2"
              // onClick={() => this.handleCamDrawChange()}
              onClick={() => OpenCameraTool()}
              style = {{display:"none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}
              >
              <IconAddCam sx={{ fontSize: 40 }}/>
            </Button>
          </Tooltip>
        </Box>
      },

      {
        index: 11, condition: true, dom: <Divider/>
      },
    ];

    sorter = sorter.concat(toolbarButtons.map((Component, key) => {
      return Component.prototype ? //if is a react component
        {
          condition: true,
          dom: React.createElement(Component, { mode, state, key })
        } :
        {                           //else is a sortable toolbar button
          index: Component.index,
          condition: Component.condition,
          dom: React.createElement(Component.dom, { mode, state, key })
        };
    }));

    return (
      <AppBar style={{ ...ASIDE_STYLE, maxWidth: width, height: height, top: '70px', left: 0 }} className='toolbar'>
        <Box sx={{ flexGrow: 1 }}>
          {sorter.sort(sortButtonsCb).map(mapButtonsCb)}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Divider/>
          <Box pt={5/8} pb={5/8}>

            <Button 
              id = "SummaryPage1" 
              sx={this.state.showSumDrawer ? buttonsInuseStyle : buttonsStyle}
              onClick={() => this.handleSumDrawChange()}
              disabled={true}
              >
              <IconSum sx={{ fontSize: 40 }}/>
            </Button>

            <Button
              id = "SummaryPage2" 
              sx={buttonsStyle}
              onClick={() => this.handleSumDrawChange()}
              // disabled={true}
              style = {{display:"none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}
              >
              <IconSum sx={{ fontSize: 40 }}/>
            </Button>
          </Box>
        </Box>
      </AppBar>
    )
  }
}

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
  translator: PropTypes.object.isRequired,
};
