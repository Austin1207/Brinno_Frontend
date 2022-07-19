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

export default function SettingButton(){
    const options = [
        {name: 'Edit color mode', do: () => console.log('edit color mode')},
        {name: 'Edit units', do: handleUnitToggle},
      ];
    const unitOptions = [
        {name: 'Meters', do: () => console.log('Meters')},
        {name: 'Feet', do: () => console.log('Feet')},
    ];
    const [open, setOpen] = React.useState(false);
    const [unitOpen, setUnitOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    function handleUnitToggle(event) {
        setAnchorEl(event.currentTarget);
        setUnitOpen((prevOpen) => !prevOpen);
    };
    
    const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
    }
    setAnchorEl(null);
    setUnitOpen(false);
    setOpen(false);
    };

    return (
        <div>
            <Fab
            ref={anchorRef}
            sx={{...buttonsStyle, width: '36px', right: 150, position: 'absolute',}}
            onClick={handleToggle}
            //disabled
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
        </div>
    )
};