import * as React from 'react';
import Fab from '@mui/material/Fab';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const buttonsStyle = {
    height: '36px', bottom: '54px',
    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff', cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',},
    "&:disabled": {backgroundColor: '#ffffff', color: '#b9bbbc'}
  };

export default function SettingButton({state, projectActions, sceneActions, itemsActions}){
    const options = [
        {name: 'Edit color mode', do: handleColorToggle},
        {name: 'Edit units', do: handleUnitToggle},
      ];
    const unitOptions = [
        {name: 'Meters', do: () => ScaleSet1()},
        {name: 'Feet', do: () => ScaleSet2()},
    ];
    const colorOptions = [
        {name: 'Light Mode', do: () => ColorTest1()},
        {name: 'Dark Mode', do: () => ColorTest2()},
    ];


    const [open, setOpen] = React.useState(false);
    const [unitOpen, setUnitOpen] = React.useState(false);
    const [colorOpen, setColorOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    function handleUnitToggle(event) {
        setAnchorEl(event.currentTarget);
        setUnitOpen((prevOpen) => !prevOpen);
    };

    function handleColorToggle(event) {
        setAnchorEl(event.currentTarget);
        setColorOpen((prevOpen) => !prevOpen);
    };
    
    const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
    }
    setAnchorEl(null);
    setUnitOpen(false);
    setColorOpen(false);
    setOpen(false);
    };

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

    function ScaleSet1() {
        localStorage.setItem("Unit", "m")
        localStorage.setItem("UnitName", "Meters")
        }
    
    function ScaleSet2() {
        localStorage.setItem("Unit", "ft")
        localStorage.setItem("UnitName", "Feets")
    }

    function ColorTest1() {
        localStorage.setItem("AreaLegend_Backgorund1","#ffffff")
        localStorage.setItem("AreaLegend_Icon_Open","#222222")
        localStorage.setItem("AreaLegend_Icon_Close","#222222")
        localStorage.setItem("AreaLegend_Word","#222222")
    
        OpenAreaLegend()
    
        setTimeout(() => {
            document.getElementById("IconConstructionLine_Dark").style.display = "none"
            document.getElementById("IconObstacleLine_Dark").style.display = "none"
            document.getElementById("IconNoCamLine_Dark").style.display = "none"
            document.getElementById("IconMustLine_Dark").style.display = "none"
            document.getElementById("IconConstructionLine_Light").style.display = ""
            document.getElementById("IconObstacleLine_Light").style.display = ""
            document.getElementById("IconNoCamLine_Light").style.display = ""
            document.getElementById("IconMustLine_Light").style.display = ""
        
            document.getElementById("AreaLegend_Background2").style.backgroundColor = "#ffffff"
        
            document.getElementById("IconConstructionLine_Word").style.color = "#222222"
            document.getElementById("IconInterestLine_Word").style.color = "#222222"
            document.getElementById("IconObstacleLine_Word").style.color = "#222222"
            document.getElementById("IconNoCamLine_Word").style.color = "#222222"
            document.getElementById("IconMustLine_Word").style.color = "#222222"
    
        
            localStorage.setItem("ColorMode","Light")
            sceneActions.selectLayer("layer3")
            itemsActions.selectItem("layer3", "xFAw434Nm");
        }, 200)
    
        setTimeout(() => {
            projectActions.unselectAll();
            sceneActions.selectLayer("layer2");
        }, 250)
    }
    
    function ColorTest2() {
        localStorage.setItem("AreaLegend_Backgorund1","#222222")
        localStorage.setItem("AreaLegend_Icon_Open","#ffffff")
        localStorage.setItem("AreaLegend_Icon_Close","#ffffff")
        localStorage.setItem("AreaLegend_Word","#ffffff")
    
        OpenAreaLegend()
    
        setTimeout(() => {
            document.getElementById("IconConstructionLine_Light").style.display = "none"
            document.getElementById("IconObstacleLine_Light").style.display = "none"
            document.getElementById("IconNoCamLine_Light").style.display = "none"
            document.getElementById("IconMustLine_Light").style.display = "none"
            document.getElementById("IconConstructionLine_Dark").style.display = ""
            document.getElementById("IconObstacleLine_Dark").style.display = ""
            document.getElementById("IconNoCamLine_Dark").style.display = ""
            document.getElementById("IconMustLine_Dark").style.display = ""
        
            document.getElementById("AreaLegend_Background2").style.backgroundColor = "#222222"
        
            document.getElementById("IconConstructionLine_Word").style.color = "#ffffff"
            document.getElementById("IconInterestLine_Word").style.color = "#ffffff"
            document.getElementById("IconObstacleLine_Word").style.color = "#ffffff"
            document.getElementById("IconNoCamLine_Word").style.color = "#ffffff"
            document.getElementById("IconMustLine_Word").style.color = "#ffffff"
        
            localStorage.setItem("ColorMode","Dark")
            sceneActions.selectLayer("layer1")
            itemsActions.selectItem("layer1", "xFAw434Nm");
        }, 200)
    
        setTimeout(() => {
            projectActions.unselectAll();
            sceneActions.selectLayer("layer2");
        }, 250)
    }

    return (
        <div>
            <Fab id = "Setting2"
            ref={anchorRef}
            style = {{display:"none"}}
            sx={{...buttonsStyle, width: '36px', right: 150, position: 'absolute'}}
            onClick={handleToggle}
            // disabled
            >
            <MoreVertIcon/>
            </Fab>
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
                            //selected={index === selectedIndex}
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
            <Popper
            open={unitOpen}
            anchorEl={anchorEl}
            placement='left-end'
            transition
            >
            {({ TransitionProps}) => (
                <Grow
                {...TransitionProps}
                >
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="unit-button-menu" autoFocusItem>
                        {unitOptions.map((option, index) => (
                        <MenuItem
                            key={option.name}
                            //selected={index === selectedIndex}
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

            <Popper
            open={colorOpen}
            anchorEl={anchorEl}
            placement='left-end'
            transition
            >
            {({ TransitionProps}) => (
                <Grow
                {...TransitionProps}
                >
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="color-button-menu" autoFocusItem>
                        {colorOptions.map((option, index) => (
                        <MenuItem
                            key={option.name}
                            //selected={index === selectedIndex}
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
        </div>
    )
};