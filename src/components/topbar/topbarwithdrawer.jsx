import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import TextField from '@mui/material/TextField';
import CatalogItem from '../catalog-view/catalog-item';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import { elementsToDisplay } from './elementstodisplay';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 260;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'openDrawer',
})(({ theme, openDrawer }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(openDrawer && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
  console.log("1")
};
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
  console.log("2")
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
  console.log("3")
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
  console.log("4")
};

export default function TopBar({ linesActions }) {
  const theme = useTheme();
  const [openPoper, setOpenPoper] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpenPoper((prevOpen) => !prevOpen);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handlePoperClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenPoper(false);
  };
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{bgcolor:"#222"}} openDrawer={openDrawer} openPoper={openPoper}>
      {/*<AppBar position="fixed" sx={{ bgcolor:"#222", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>*/}
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(openDrawer && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <TextField
              sx={{ input: { color: 'white' } }}
              hiddenLabel
              id="project-name"
              defaultValue="Untitled Project"
              variant="filled"
              color="warning"/>
            <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            ref={anchorRef}
            id="composition-button"
            aria-controls={openPoper ? 'composition-menu' : undefined}
            aria-expanded={openPoper ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Outline
          </Button>
          <Popper
            open={openPoper}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handlePoperClose}>
                    <MenuList
                      autoFocusItem={openPoper}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      //onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={() => linesActions.selectToolDrawingLine('wall')}>Construction Area</MenuItem>
                      <MenuItem onClick={() => linesActions.selectToolDrawingLine('interest area')}>Interest Area</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Button
            key={'Place'}
            sx={{ my: 2, color: 'white', display: 'block' }}
            >
            {'Place'}
          </Button>
          <Popper
            open={openPoper}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handlePoperClose}>
                    <MenuList
                      autoFocusItem={openPoper}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      //onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={() => linesActions.selectToolDrawingLine('wall')}>Construction Area</MenuItem>
                      <MenuItem onClick={() => linesActions.selectToolDrawingLine('interest area')}>Interest Area</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Box> 
        <Box sx={{ flexGrow: 0 }}>        
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Button
              key={'Gernerate'}
              sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {'Gernerate'}
          </Button>
        </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={openDrawer}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {elementsToDisplay.map(elem => <CatalogItem key={elem.name} element={elem}/>)}
      </Drawer>
    </Box>
  );
}