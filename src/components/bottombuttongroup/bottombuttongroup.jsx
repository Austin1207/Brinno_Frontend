import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import StraightenIcon from '@mui/icons-material/Straighten';
import Fab from '@mui/material/Fab';

export default function BottomButtonGroup({projectActions}){
    return (
        <Container 
          maxWidth='sm'
          sx={{ pl: 0, pr: 0}}
          >
            <ButtonGroup variant="contained" aria-label="undo redo"
            sx={{ position: 'absolute', bottom: 35, right: 219}}
            >
                <Button sx={{backgroundColor: '#FFFFFF', "&:hover": {backgroundColor: '#FFFFFF'}}} onClick={() => projectActions.undo()}>
                    <UndoIcon style={{ fill: 'black' }}/>
                    </Button>
                <Button sx={{backgroundColor: '#FFFFFF', "&:hover": {backgroundColor: '#FFFFFF'}}}>
                    <RedoIcon style={{ fill: 'black' }}/>
                    </Button>
            </ButtonGroup>

            <Button variant="contained"
            sx={{ position: 'absolute', bottom: 35, right: 136, backgroundColor: '#FFFFFF', "&:hover": {backgroundColor: '#FFFFFF'}}}
            >
                <StraightenIcon style={{ fill: 'black' }}/>
            </Button>

            <Fab
              sx={
              {position: 'absolute',
              bottom: 35,
              right: 60,
              backgroundColor: '#FFFFFF',
              "&:hover": {backgroundColor: '#FFFFFF'}}}
              //onClick={() => this.getLS()}
              aria-label="Help">
                <QuestionMarkIcon
                  style={{ fill: 'black' }} 
                />
            </Fab>
        </Container>
      );
}