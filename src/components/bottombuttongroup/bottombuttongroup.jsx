import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import StraightenIcon from '@mui/icons-material/Straighten';
import Fab from '@mui/material/Fab';
import { createSvgIcon } from '@mui/material/utils';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingButton from './settingbutton';

// import { ReactSVGPanZoom, TOOL_NONE, TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT, TOOL_AUTO } from 'react-svg-pan-zoom';
import { fitToViewer } from 'react-svg-pan-zoom';


import '@babel/polyfill'; //for async
// const options = [
//   {name: 'Zoom to Content', do: ZoomScale5},
//   {name: '150%', do: ZoomScale4},
//   {name: '100%', do: ZoomScale3},
//   {name: '70%', do: ZoomScale2},
//   {name: '50%', do: ZoomScale1},
//   //'Zoom to Content', '150%', '100%', '70%', '50%'
// ];
//const scaleOptions = [1,1.5,1,0.7,0.5];

const buttonsStyle = {
  height: '36px', bottom: '54px',
  backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff', cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',},
  "&:disabled": {backgroundColor: '#ffffff', color: '#b9bbbc'}
};
const IconUndo = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.421 9.024c-0.075 0.077 -0.053 0.138 0.053 0.138h7.193c2.209 0 3.999 1.804 3.999 4.03 0 2.227 -1.789 4.03 -4 4.03H6.48a0.574 0.574 0 0 1 -0.575 -0.575c0 -0.318 0.253 -0.576 0.575 -0.576h8.188c1.58 0 2.857 -1.287 2.857 -2.879 0 -1.589 -1.279 -2.878 -2.857 -2.878H7.475c-0.105 0 -0.131 0.059 -0.053 0.138l1.364 1.373a0.577 0.577 0 0 1 0 0.815 0.568 0.568 0 0 1 -0.807 0.001L5.5 10.144a0.577 0.577 0 0 1 0 -0.811l2.479 -2.498a0.567 0.567 0 0 1 0.807 0.001 0.58 0.58 0 0 1 0 0.815l-1.364 1.373z"/>
  </svg>,
  'Undo',
);
const IconRedo = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.579 9.024c0.075 0.077 0.053 0.138 -0.053 0.138H9.333C7.124 9.162 5.333 10.967 5.333 13.192c0 2.227 1.788 4.03 4 4.03h8.187a0.574 0.574 0 0 0 0.575 -0.575 0.573 0.573 0 0 0 -0.575 -0.576H9.333c-1.58 0 -2.857 -1.287 -2.857 -2.879 0 -1.589 1.279 -2.878 2.857 -2.878h7.193c0.105 0 0.131 0.059 0.053 0.138l-1.364 1.373a0.577 0.577 0 0 0 0 0.815 0.568 0.568 0 0 0 0.807 0.001l2.479 -2.497a0.577 0.577 0 0 0 0 -0.811l-2.479 -2.498a0.567 0.567 0 0 0 -0.807 0.001 0.58 0.58 0 0 0 0 0.815l1.364 1.373z"/>
  </svg>,
  'Redo',
);
const IconScale = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.571 8H5.429c-0.157 0 -0.286 0.2 -0.286 0.445v7.111c0 0.245 0.129 0.445 0.286 0.445h13.143c0.157 0 0.286 -0.2 0.286 -0.445V8.445c0 -0.245 -0.129 -0.445 -0.286 -0.445zm-12 0.889v1.333c0 0.244 0.129 0.444 0.286 0.444s0.285 -0.2 0.285 -0.444v-1.333h1.143v0.889c0 0.245 0.128 0.445 0.285 0.445s0.286 -0.2 0.286 -0.445v-0.889H10v1.333c0 0.244 0.129 0.444 0.285 0.444 0.157 0 0.286 -0.2 0.286 -0.444v-1.333h1.143v0.889c0 0.245 0.129 0.445 0.286 0.445 0.157 0 0.285 -0.2 0.285 -0.445v-0.889h1.143v1.333c0 0.244 0.129 0.444 0.286 0.444s0.285 -0.2 0.285 -0.444v-1.333h1.143v0.889c0 0.245 0.129 0.445 0.285 0.445 0.157 0 0.286 -0.2 0.286 -0.445v-0.889h1.143v1.333c0 0.244 0.129 0.444 0.285 0.444 0.157 0 0.286 -0.2 0.286 -0.444v-1.333h0.857v2.667H5.715v-2.667h0.857zm-0.857 3.555v2.667h12.571v-2.667H5.715z"/>
  </svg>,
  'Scale',
);
const IconQuestion = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.553 2.885a5.804 5.804 0 0 1 4.116 -1.52c2.975 0.093 5.455 2.395 5.602 5.157 0.049 1.703 -0.793 3.36 -2.28 4.373 -1.687 1.197 -2.678 2.901 -2.678 4.696v0.276c0 0.368 -0.346 0.691 -0.743 0.691 -0.396 0 -0.744 -0.323 -0.744 -0.691v-0.276c0 -2.256 1.189 -4.375 3.273 -5.801 1.091 -0.736 1.735 -1.933 1.684 -3.223 -0.098 -2.072 -1.933 -3.775 -4.115 -3.82A4.405 4.405 0 0 0 3.595 3.851a3.703 3.703 0 0 0 -1.289 2.809c0 0.368 -0.347 0.691 -0.743 0.691 -0.397 0 -0.744 -0.323 -0.744 -0.691 0 -1.428 0.645 -2.763 1.735 -3.775zM4.909 20.737c0 -1.045 0.921 -1.899 2.045 -1.899 1.125 0 2.045 0.854 2.045 1.898 0 1.046 -0.921 1.9 -2.045 1.9 -1.125 0 -2.045 -0.854 -2.045 -1.899z"/>
    <path d="M2.553 2.885a5.804 5.804 0 0 1 4.116 -1.52c2.975 0.093 5.455 2.395 5.602 5.157 0.049 1.703 -0.793 3.36 -2.28 4.373 -1.687 1.197 -2.678 2.901 -2.678 4.696v0.276c0 0.368 -0.346 0.691 -0.743 0.691 -0.396 0 -0.744 -0.323 -0.744 -0.691v-0.276c0 -2.256 1.189 -4.375 3.273 -5.801 1.091 -0.736 1.735 -1.933 1.684 -3.223 -0.098 -2.072 -1.933 -3.775 -4.115 -3.82A4.405 4.405 0 0 0 3.595 3.851a3.703 3.703 0 0 0 -1.289 2.809c0 0.368 -0.347 0.691 -0.743 0.691 -0.397 0 -0.744 -0.323 -0.744 -0.691 0 -1.428 0.645 -2.763 1.735 -3.775zM4.909 20.737c0 -1.045 0.921 -1.899 2.045 -1.899 1.125 0 2.045 0.854 2.045 1.898 0 1.046 -0.921 1.9 -2.045 1.9 -1.125 0 -2.045 -0.854 -2.045 -1.899z"/>
  </svg>,
  'Scale',
);

const IconSetting = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.5 34a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" fill="#222"/>
  </svg>,
  'Setting',
)

export default function BottomButtonGroup({projectActions, sceneActions, itemsActions, state, viewer2DActions}){

  const ImageLayerMode = event => {
    sceneActions.selectLayer("layer3")
    itemsActions.selectItem("layer3", "xFAw434Nm");
    }

  //畫Scale
  const CircleMove = (circle) => {
    var e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);
    circle.dispatchEvent(e);
    }

  const DrawingScale = event => {
    var Circle1 = document.getElementById("Circle1")
    CircleMove(Circle1);
    }

  async function SetScale() {

    const json = state.get('scene').toJS();
    const PicInJson = json["layers"]["layer3"]["items"]["xFAw434Nm"];

    if ( PicInJson != undefined ) {
      projectActions.unselectAll();
  
      await ImageLayerMode();
  
      RotateCircle1.style.display = "none";
      RotateCircle2.style.display = "none";
      DrawingScale();
      document.getElementById('Question2').style.display = ""
      document.getElementById('Setting2').style.display = ""

      // if ((localStorage.getItem("Mode") == "Upload") && localStorage.getItem("Tutorial_Setscale") !== "Done" ) { 

      if (( localStorage.getItem("Tutorial_Setscale") !== "Done" ) && ( localStorage.getItem("Tutorial_ObstacleArea") !== "Done" )) { 
        
        document.getElementById('1-8-1').style.display = "none"
        document.getElementById('1-8-2').style.display = "none"
        document.getElementById('1-8-3').style.display = "none"
        document.getElementById('1-8-4').style.display = "none"
        document.getElementById('1-8-5').style.display = "none"
        document.getElementById('1-8-6').style.display = "none"
        document.getElementById('1-8-7').style.display = "none"

        document.getElementById('Scale2').style.zIndex = "9990"
        document.getElementById('overlay').style.display = "none"

        document.getElementById('1-8-8').style.display = ""
        document.getElementById('1-8-9').style.display = ""
        document.getElementById('1-8-10').style.display = ""
        document.getElementById('1-8-11').style.display = ""
        document.getElementById('1-8-12').style.display = ""
        document.getElementById('1-8-13').style.display = ""
        document.getElementById('1-8-14').style.display = ""
      }

      }
    else {
      alert("Please upload your file first.")
    }
  }

  function test1234() {
    // fitToViewer(400,400)
    console.log("test")
    // console.log(document.getElementById("SummartTable"))
  }

  function undotest() {
    console.log("undotest1")
    console.log(state)
    projectActions.undo()
    console.log("undotest2")
    console.log(state)
  }

  function redotest() {
    console.log("redotest1")
    console.log(state)
    projectActions.redo()
    console.log("redotest2")
    console.log(state)
  }

  function Setting() {
    console.log("Setting")
  }

  const ClickAreaLegend = (AreaLegend) => {
    var e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);
    AreaLegend.dispatchEvent(e);
    }

  const OpenAreaLegend = event => {
    var AreaLegendClick = document.getElementById("AreaLegend_Button")
    if (localStorage.getItem("AreaLegend_Button") == "Close"){
      ClickAreaLegend(AreaLegendClick);
      }
    }

  const ZoomScale = (scale)=>{
    let ZoomScaleJson = state.viewer2D.toJS();
    const OriginalScale = ZoomScaleJson.a
    const OriginalX = ZoomScaleJson.e
    const OriginalY = ZoomScaleJson.f
    ZoomScaleJson.a = scale;
    ZoomScaleJson.d = scale;
    ZoomScaleJson.a = scale
    ZoomScaleJson.d = scale
    ZoomScaleJson.e = 15070 - (15070 - OriginalX)*scale/OriginalScale
    ZoomScaleJson.f = 9660 - (9660 - OriginalY)*scale/OriginalScale
    viewer2DActions.updateCameraView(ZoomScaleJson);
  }
  
  function ZoomScale1() {
    var ZoomScaleJson = state.viewer2D.toJS()
    const OriginalScale = ZoomScaleJson.a
    const OriginalX = ZoomScaleJson.e
    const OriginalY = ZoomScaleJson.f
    ZoomScaleJson.a = 0.5
    ZoomScaleJson.d = 0.5
    ZoomScaleJson.e = 15070 - (15070 - OriginalX)*0.5/OriginalScale
    ZoomScaleJson.f = 9660 - (9660 - OriginalY)*0.5/OriginalScale
    viewer2DActions.updateCameraView(ZoomScaleJson)
    setSelectedIndex(4);
    setScale(0.5);
    setOpen(false);
  }
  
  function ZoomScale2() {
    var ZoomScaleJson = state.viewer2D.toJS()
    const OriginalScale = ZoomScaleJson.a
    const OriginalX = ZoomScaleJson.e
    const OriginalY = ZoomScaleJson.f
    ZoomScaleJson.a = 0.7
    ZoomScaleJson.d = 0.7
    ZoomScaleJson.e = 15070 - (15070 - OriginalX)*0.7/OriginalScale
    ZoomScaleJson.f = 9660 - (9660 - OriginalY)*0.7/OriginalScale
    viewer2DActions.updateCameraView(ZoomScaleJson)
    setSelectedIndex(3);
    setScale(0.7);
    setOpen(false);
  }
  function ZoomScale3() {
    var ZoomScaleJson = state.viewer2D.toJS()
    const OriginalScale = ZoomScaleJson.a
    const OriginalX = ZoomScaleJson.e
    const OriginalY = ZoomScaleJson.f
    ZoomScaleJson.a = 1
    ZoomScaleJson.d = 1
    ZoomScaleJson.e = 15070 - (15070 - OriginalX)*1/OriginalScale
    ZoomScaleJson.f = 9660 - (9660 - OriginalY)*1/OriginalScale
    viewer2DActions.updateCameraView(ZoomScaleJson)
    setSelectedIndex(2);
    setScale(1);
    setOpen(false);
  }
  function ZoomScale4() {
    var ZoomScaleJson = state.viewer2D.toJS()
    const OriginalScale = ZoomScaleJson.a
    const OriginalX = ZoomScaleJson.e
    const OriginalY = ZoomScaleJson.f
    ZoomScaleJson.a = 1.5
    ZoomScaleJson.d = 1.5
    ZoomScaleJson.e = 15070 - (15070 - OriginalX)*1.5/OriginalScale
    ZoomScaleJson.f = 9660 - (9660 - OriginalY)*1.5/OriginalScale
    viewer2DActions.updateCameraView(ZoomScaleJson)
    setSelectedIndex(1);
    setScale(1.5);
    setOpen(false);
  }

  function ZoomScale5() {
    var ZoomScaleJson = state.viewer2D.toJS()
    var ZoomX = localStorage.getItem("Xmin")
    var ZoomY = localStorage.getItem("Ymax")
    var ZoomYmin = localStorage.getItem("Ymin")
    var ZoomContentScale = localStorage.getItem("ZoomScale")*0.5
    ZoomScaleJson.a = ZoomContentScale
    ZoomScaleJson.d = ZoomContentScale
    ZoomScaleJson.e = 15070 - (ZoomX - 100) * ZoomContentScale
    ZoomScaleJson.f = 9660 - (20000 - ZoomY - 100* ((6.5/ZoomContentScale) - (ZoomY - ZoomYmin)/100)/2) * ZoomContentScale
    console.log(ZoomContentScale)
    console.log("y1" + ZoomY + ",y2" + ZoomYmin)
    console.log("e" + ZoomScaleJson.e)
    console.log("f" + ZoomScaleJson.f)
    viewer2DActions.updateCameraView(ZoomScaleJson)
    setSelectedIndex(0);
    setScale(ZoomContentScale);
    setOpen(false);
  }
  const options = [
    {name: 'Zoom to Content', do: ZoomScale5},
    {name: '150%', do: ZoomScale4},
    {name: '100%', do: ZoomScale3},
    {name: '70%', do: ZoomScale2},
    {name: '50%', do: ZoomScale1},
    //'Zoom to Content', '150%', '100%', '70%', '50%'
  ];
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(2);
  const [scale, setScale] = React.useState(1);

  // const handleClick = () => {
  //   console.info(`You clicked ${options[selectedIndex]}`);
  // };

  // const handleMenuItemClick = (event, index) => {
  //   setSelectedIndex(index);
  //   setScale(scaleOptions[index]);
  //   //ZoomScale(scale);
  //   setOpen(false);
  // };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleIn = () => {
    ZoomScale(Number(scale.toFixed(1))+0.1);
    setScale(Number(scale.toFixed(1))+0.1);
    setSelectedIndex(null);
  };

  const handleOut = () => {
    ZoomScale(Number(scale.toFixed(1))-0.1);
    setScale(Number(scale.toFixed(1))-0.1);
    setSelectedIndex(null);
  };


  // const mounted = React.useRef();
  // React.useEffect(() => {
  //   if(mounted.current===false){
  //     mounted.current=true;
  //     /* 下面是 componentDidMount*/
  
  
  //     /* 上面是 componentDidMount */      
  //   }
  //   else{
  //     /* 下面是componentDidUpdate */
  //     if(scale==0.7){
  //       //console.log('0.7');
  //       ZoomScale(scale);
  //     }
  
  //     /* 上面是componentDidUpdate */

  //   }
  // }, [scale]);

    return (
        <Container 
          maxWidth='sm'
          sx={{ pl: 0, pr: 0}}
          >
            <ButtonGroup variant="contained" aria-label="undo redo"
            sx={{ position: 'absolute', bottom: 54, right: 258}}
            >
                <Button
                  id = "Undo"
                  sx={{...buttonsStyle, width: '36px', bottom: '0px'}}
                  onClick={() => projectActions.undo()}
                  disabled
                  >
                    <IconUndo sx={{ fontSize: 36 }}/>
                  </Button>
                <Button 
                  id = "Redo"
                  sx={{...buttonsStyle, width: '36px', bottom: '0px'}}
                  //TESTING REDO
                  onClick={() => projectActions.redo()}
                  disabled>
                  <IconRedo sx={{ fontSize: 36 }}/>
                </Button>
            </ButtonGroup>

            {/* 暫時代替disabled方案 */}
            <ButtonGroup id = "UndoRedo" variant="contained" aria-label="undo redo"
            sx={{ position: 'absolute', bottom: 54, right: 258}}
            style = {{display:"none"}}
            >
                <Button
                  id = "Undo2"
                  sx={{...buttonsStyle, width: '36px', bottom: '0px'}}
                  onClick={() => undotest()}
                  >
                    <IconUndo sx={{ fontSize: 36 }}/>
                  </Button>
                <Button 
                  id = "Redo2"
                  sx={{...buttonsStyle, width: '36px', bottom: '0px'}}
                  onClick={() => redotest()}
                  >
                  <IconRedo sx={{ fontSize: 36 }}/>
                </Button>
            </ButtonGroup>

            {/* 分隔 */}

            <Button
              id = "Scale1"
              variant="contained"
              sx={{...buttonsStyle, maxWidth: '36px', minWidth: '36px', right: 204, position: 'absolute',}}
              onClick = {SetScale}
              disabled
              >
                <IconScale sx={{ fontSize: 36 }}/>
            </Button>

            <Fab
              id = "Setting1"
              sx={{...buttonsStyle, width: '36px', right: 150, position: 'absolute',}}
              onClick={Setting}
              disabled
              aria-label="Help">
                <MoreVertIcon/>
            </Fab>

            <Fab
              id = "Question1"
              sx={{...buttonsStyle, width: '36px', right: 96, position: 'absolute',}}
              onClick={() => test1234()}
              disabled
              aria-label="Help">
                <QuestionMarkIcon/>
            </Fab>

            {/* 暫時代替disable */}
            <Button
              variant="contained"
              id = "Scale2"
              sx={{...buttonsStyle, maxWidth: '36px', minWidth: '36px', right: 204, position: 'absolute',}}
              style = {{display:"none"}}
              onClick = {SetScale}
              >
                <IconScale sx={{ fontSize: 36 }}/>
            </Button>

            {/* <Fab
              id = "Setting2"
              sx={{...buttonsStyle, width: '36px', right: 950, position: 'absolute',}}
              style = {{display:"none"}}
              onClick={Setting}
              aria-label="Help">
                <MoreVertIcon/>
            </Fab> */}

            <SettingButton state = {state} projectActions={projectActions} sceneActions={sceneActions} itemsActions={itemsActions}/>

            {/* <Fab
              id = "colorTest1"
              sx={{...buttonsStyle, width: '36px', right: 600, position: 'absolute',}}
              // style = {{display:"none"}}
              onClick={ColorTest1}
              aria-label="Help">
                <IconSetting/>
            </Fab>

            <Fab
              id = "colorTest2"
              sx={{...buttonsStyle, width: '36px', right: 700, position: 'absolute',}}
              // style = {{display:"none"}}
              onClick={ColorTest2}
              aria-label="Help">
                <IconSetting/>
            </Fab>

            <Fab
              id = "ScaleTest1"
              sx={{...buttonsStyle, width: '36px', right: 800, position: 'absolute',}}
              // style = {{display:"none"}}
              onClick={ScaleSet1}
              aria-label="Help">
                <IconSetting/>
            </Fab>

            <Fab
              id = "ScaleTest2"
              sx={{...buttonsStyle, width: '36px', right: 900, position: 'absolute',}}
              // style = {{display:"none"}}
              onClick={ScaleSet2}
              aria-label="Help">
                <IconSetting/>
            </Fab> */}

            <Fab
              id = "Question2"
              sx={{...buttonsStyle, width: '36px', right: 96, position: 'absolute', cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',}}
              style = {{display:"none"}}
              onClick={() => test1234()}
              aria-label="Help">
                <QuestionMarkIcon/>
            </Fab>

            <ButtonGroup variant="contained" ref={anchorRef} aria-label="zoom"
            sx={{ position: 'absolute', bottom: 54, right: 348}}>
              <Button sx={{maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
                    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'},
                    "&:disabled": {backgroundColor: '#ffffff', color: '#b9bbbc'},
                    cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',}}
                    onClick={handleOut}
                    disabled={scale==0.1}>
                <RemoveIcon />
              </Button>
              <Button
              sx={{width: '67px', height: '36px',
                    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}, cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',}}
              onClick={handleToggle}>{/*options[selectedIndex]*/(scale*100).toFixed(0)}%</Button>
              <Button sx={{maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
                    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}, cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',}}
                    onClick={handleIn}>
                <AddIcon />
              </Button>
            </ButtonGroup>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu" autoFocusItem>
                        {options.map((option, index) => (
                          <MenuItem
                            key={option.name}
                            selected={index === selectedIndex}
                            //onClick={(event) => handleMenuItemClick(event, index)}
                            onClick={option.do}
                            style = {{cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}
                          >
                            {option.name}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
        </Container>

        
      );
}