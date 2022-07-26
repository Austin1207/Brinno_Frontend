import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Popper from '@mui/material/Popper';
import Box from '@material-ui/core/Box';
import {IconConstructionLine, IconInterestLine, IconObstacleLine, IconNoCamLine, IconMustLine, IconConstructionLine2, IconObstacleLine2, IconNoCamLine2, IconMustLine2} from './lineicon';

export default function Legend({blackMode}){
    const buttonsStyle = { textTransform: 'none', width: '210px', height: '36px', justifyContent: 'flex-start', padding: '6px',
    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}, "&:disabled": {backgroundColor: '#FFFFFF', color: '#222222'}};
    const buttonsBlackStyle = { textTransform: 'none', width: '210px', height: '36px', justifyContent: 'flex-start', padding: '6px',
    backgroundColor: '#222222', color: '#FFFFFF', "&:hover": {backgroundColor: '#ff8200', color: '#ffffff'}, "&:disabled": {backgroundColor: '#222222', color: '#FFFFFF'}};
    const [openLegend, setOpenLegend] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleLegendButton = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenLegend(!openLegend);
        if (localStorage.getItem("AreaLegend_Button") == "Close") {
          localStorage.setItem("AreaLegend_Button", "Open")
        }
        else {
          localStorage.setItem("AreaLegend_Button", "Close")
        }
      };
      return (
        <div>
        <ButtonGroup variant="contained" aria-label="AreaLegend"
            sx={{ position: 'absolute', top: 39+36+70, right: 41}}
            >
          <Button
            sx={{...(blackMode ? buttonsBlackStyle : buttonsStyle), width: '36px', height: '36px', cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}
            onClick={handleLegendButton}
            >
              {openLegend ? <ExpandLess /> : <ExpandMore />}
            </Button>
          <Button 
            sx={{...(blackMode ? buttonsBlackStyle : buttonsStyle), width: '174px', height: '36px', }}
            disabled>
            Area Legend
          </Button>
      </ButtonGroup>
      <Popper open={openLegend} anchorEl={anchorEl} placement='bottom-start' transition>
        {({ TransitionProps }) => (
          <Fade id="AreaLegend_Background2" {...TransitionProps} timeout={350}>
            <Paper sx={{width: 210-12, height: 'auto', justifyContent: 'flex-start', padding: '6px',}}>
              <Box sx={{display: 'flex', flexFlow: 'row nowrap'}}>
                <IconConstructionLine id="IconConstructionLine_Light" style={{display:""}} sx={{paddingRight: '6px'}}/>
                <IconConstructionLine2 id="IconConstructionLine_Dark" style={{display:"none"}} sx={{paddingRight: '6px'}}/>
                <Divider orientation="vertical" flexItem={true}/>
                <Typography id="IconConstructionLine_Word" sx={{fontSize: '14px', paddingLeft: '6px'}}>Construction Area</Typography>
              </Box>
              <Box sx={{display: 'flex', flexFlow: 'row nowrap'}}>
                <IconInterestLine sx={{paddingRight: '6px'}}/>
                <Divider orientation="vertical" flexItem={true}/>
                <Typography id="IconInterestLine_Word" sx={{fontSize: '14px', paddingLeft: '6px'}}>Interest Area</Typography>
              </Box>
              <Box sx={{display: 'flex', flexFlow: 'row nowrap'}}>
                <IconObstacleLine id="IconObstacleLine_Light" style={{display:""}} sx={{paddingRight: '6px'}}/>
                <IconObstacleLine2 id="IconObstacleLine_Dark" style={{display:"none"}} sx={{paddingRight: '6px'}}/>
                <Divider orientation="vertical" flexItem={true}/>
                <Typography id="IconObstacleLine_Word" sx={{fontSize: '14px', paddingLeft: '6px'}}>Obstacle Area</Typography>
              </Box>
              <Box sx={{display: 'flex', flexFlow: 'row nowrap'}}>
                <IconNoCamLine id="IconNoCamLine_Light" style={{display:""}} sx={{paddingRight: '6px'}}/>
                <IconNoCamLine2 id="IconNoCamLine_Dark" style={{display:"none"}}  sx={{paddingRight: '6px'}}/>
                <Divider orientation="vertical" flexItem={true}/>
                <Typography id="IconNoCamLine_Word" sx={{fontSize: '14px', paddingLeft: '6px'}}>No Camera Area</Typography>
              </Box>
              <Box sx={{display: 'flex', flexFlow: 'row nowrap'}}>
                <IconMustLine id="IconMustLine_Light" style={{display:""}} sx={{paddingRight: '6px'}}/>
                <IconMustLine2 id="IconMustLine_Dark" style={{display:"none"}}  sx={{paddingRight: '6px'}}/>
                <Divider orientation="vertical" flexItem={true}/>
                <Typography id="IconMustLine_Word" sx={{fontSize: '14px', paddingLeft: '6px'}}>Must Cover Area</Typography>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
      </div>
      )
};
