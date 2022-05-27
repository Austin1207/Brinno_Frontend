import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import StraightenIcon from '@mui/icons-material/Straighten';
import Fab from '@mui/material/Fab';

import '@babel/polyfill'; //for async

const buttonsStyle = {
  maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px', bottom: '54px',
  backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'},
};

export default function BottomButtonGroup({projectActions, sceneActions, itemsActions, state}){

  const ImageLayerMode = event => {
    sceneActions.selectLayer("layer1")
    itemsActions.selectItem("layer1", "xFAw434Nm");
    }

  async function SetScale() {

    const json = state.get('scene').toJS();
    const PicInJson = json["layers"]["layer1"]["items"]["xFAw434Nm"];

    if ( PicInJson != undefined ) {
      document.getElementById("TutorialScaleRectangular").style.display = "";
      document.getElementById("TutorialScaleWord").style.display = "";
      document.getElementById("TutorialScaleButton").style.display = "";
  
      await ImageLayerMode();
  
      RotateCircle1.style.display = "none";
      RotateCircle2.style.display = "none";
      }
    else {
      alert("Please upload your file first.")
    }
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
                  sx={{maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
                    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'},}}
                  onClick={() => projectActions.undo()}>
                    <UndoIcon />
                    </Button>
                <Button sx={{maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
                    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'},}}
                    disabled>
                    <RedoIcon />
                    </Button>
            </ButtonGroup>

            <Button variant="contained"
            sx={{ position: 'absolute', bottom: 54, right: 114, maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
            backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}}}
            onClick = {SetScale}
            >
                <StraightenIcon />
            </Button>

            <Fab
              sx={
              {position: 'absolute',
              bottom: 54,
              right: 60,
              maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
              backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}}}
              // onClick={() => this.getLS()}
              onClick={() => test()}
              aria-label="Help">
                <QuestionMarkIcon
                />
            </Fab>
        </Container>
      );
}