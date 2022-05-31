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

import '@babel/polyfill'; //for async

const buttonsStyle = {
  maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px', bottom: '54px',
  backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'},
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

export default function BottomButtonGroup({projectActions, sceneActions, itemsActions, state}){

  const ImageLayerMode = event => {
    sceneActions.selectLayer("layer1")
    itemsActions.selectItem("layer1", "xFAw434Nm");
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
    const PicInJson = json["layers"]["layer1"]["items"]["xFAw434Nm"];

    if ( PicInJson != undefined ) {
      projectActions.unselectAll();
  
      await ImageLayerMode();
  
      RotateCircle1.style.display = "none";
      RotateCircle2.style.display = "none";
      DrawingScale();
      }
    else {
      alert("Please upload your file first.")
    }
  }

  function test1234() {
    // console.log(document.getElementById("Undo").disabled)
    // document.getElementById("Undo").disabled = false;
    // console.log(document.getElementById("Undo").disabled)
    // document.getElementById("Redo").disabled = false;
    // console.log(document.getElementById("Undo"))
    // console.log(document.getElementById("Scale"))
    // console.log(document.getElementById("Scale").disabled)
    // document.getElementById("Scale").disabled=false
    // document.getElementById('Redo2').style.display = "";
    // document.getElementById('Redo').style.display = "none";
    // console.log(document.getElementById('UndoRedo').style)
    // document.getElementById('UndoRedo').style.display = ""
    // document.getElementById('Scale2').style.display = ""
    // document.getElementById('Scale').removeAttribute("disabled");
    console.log("123")
  }

    return (
        <Container 
          maxWidth='sm'
          sx={{ pl: 0, pr: 0}}
          >
            <ButtonGroup variant="contained" aria-label="undo redo"
            sx={{ position: 'absolute', bottom: 54, right: 168}}
            >
                <Button
                  id = "Undo"
                  sx={{maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
                    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}}}
                  onClick={() => projectActions.undo()}
                  disabled
                  >
                    <IconUndo sx={{ fontSize: 36 }}/>
                  </Button>
                <Button 
                  id = "Redo"
                  sx={{maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
                  backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'},}}
                  disabled>
                  <IconRedo sx={{ fontSize: 36 }}/>
                </Button>
            </ButtonGroup>

            {/* 暫時代替diabled方案 */}
            <ButtonGroup id = "UndoRedo" variant="contained" aria-label="undo redo"
            sx={{ position: 'absolute', bottom: 54, right: 168}}
            style = {{display:"none"}}
            >
                <Button
                  id = "Undo2"
                  sx={{maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
                    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}, display:""}}
                  onClick={() => projectActions.undo()}
                  >
                    <IconUndo sx={{ fontSize: 36 }}/>
                  </Button>
                <Button 
                  id = "Redo2"
                  sx={{maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
                  backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}, display:""}}
                  >
                  <IconRedo sx={{ fontSize: 36 }}/>
                </Button>
            </ButtonGroup>

            {/* 分隔 */}

            <Button
              id = "Scale1"
              variant="contained"
              sx={{ position: 'absolute', bottom: 54, right: 114, maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
              backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}}}
              onClick = {SetScale}
              disabled
              >
                <IconScale sx={{ fontSize: 36 }}/>
            </Button>

            <Fab
              id = "Question1"
              sx={
              {position: 'absolute',
              bottom: 54,
              right: 60,
              maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
              backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}}}
              // onClick={() => this.getLS()}
              // onClick={() => test()}
              onClick={() => test1234()}
              disabled
              aria-label="Help">
                <QuestionMarkIcon/>
            </Fab>

            {/* 暫時代替disable */}
            <Button
              variant="contained"
              id = "Scale2"
              sx={{ position: 'absolute', bottom: 54, right: 114, maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
              backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}}}
              style = {{display:"none"}}
              onClick = {SetScale}
              >
                <IconScale sx={{ fontSize: 36 }}/>
            </Button>

            <Fab
              id = "Question2"
              sx={
              {position: 'absolute',
              bottom: 54,
              right: 60,
              maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
              backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}}}
              style = {{display:"none"}}
              // onClick={() => this.getLS()}
              // onClick={() => test()}
              onClick={() => test1234()}
              aria-label="Help">
                <QuestionMarkIcon/>
            </Fab>
            
        </Container>
      );
}