var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
var drawerWidth = 260;

var AppBar = styled(MuiAppBar, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'openDrawer';
  }
})(function (_ref) {
  var theme = _ref.theme,
      openDrawer = _ref.openDrawer;
  return _extends({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }, openDrawer && {
    width: 'calc(100% - ' + drawerWidth + 'px)',
    marginLeft: drawerWidth + 'px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  });
});

var DrawerHeader = styled('div')(function (_ref2) {
  var theme = _ref2.theme;
  return _extends({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar, {
    justifyContent: 'flex-end'
  });
});

var handleOpenNavMenu = function handleOpenNavMenu(event) {
  setAnchorElNav(event.currentTarget);
  console.log("1");
};
var handleOpenUserMenu = function handleOpenUserMenu(event) {
  setAnchorElUser(event.currentTarget);
  console.log("2");
};

var handleCloseNavMenu = function handleCloseNavMenu() {
  setAnchorElNav(null);
  console.log("3");
};

var handleCloseUserMenu = function handleCloseUserMenu() {
  setAnchorElUser(null);
  console.log("4");
};

export default function TopBar(_ref3) {
  var linesActions = _ref3.linesActions;

  var theme = useTheme();

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openPoper = _React$useState2[0],
      setOpenPoper = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openDrawer = _React$useState4[0],
      setOpenDrawer = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      anchorElNav = _React$useState6[0],
      setAnchorElNav = _React$useState6[1];

  var _React$useState7 = React.useState(null),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      anchorElUser = _React$useState8[0],
      setAnchorElUser = _React$useState8[1];

  var anchorRef = React.useRef(null);
  var handleToggle = function handleToggle() {
    setOpenPoper(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleDrawerOpen = function handleDrawerOpen() {
    setOpenDrawer(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setOpenDrawer(false);
  };

  var handlePoperClose = function handlePoperClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenPoper(false);
  };
  var prevOpen = React.useRef(open);
  React.useEffect(function () {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  var handleOpenNavMenu = function handleOpenNavMenu(event) {
    setAnchorElNav(event.currentTarget);
  };
  var handleOpenUserMenu = function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget);
  };

  var handleCloseNavMenu = function handleCloseNavMenu() {
    setAnchorElNav(null);
  };

  var handleCloseUserMenu = function handleCloseUserMenu() {
    setAnchorElUser(null);
  };

  return React.createElement(
    Box,
    { sx: { flexGrow: 1 } },
    React.createElement(
      AppBar,
      { position: 'fixed', sx: { bgcolor: "#222" }, openDrawer: openDrawer, openPoper: openPoper },
      React.createElement(
        Toolbar,
        null,
        React.createElement(
          Box,
          { sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } } },
          React.createElement(
            IconButton,
            {
              color: 'inherit',
              'aria-label': 'open drawer',
              onClick: handleDrawerOpen,
              edge: 'start',
              sx: _extends({ mr: 2 }, openDrawer && { display: 'none' })
            },
            React.createElement(MenuIcon, null)
          ),
          React.createElement(TextField, {
            sx: { input: { color: 'white' } },
            hiddenLabel: true,
            id: 'project-name',
            defaultValue: 'Untitled Project',
            variant: 'filled',
            color: 'warning' }),
          React.createElement(
            Button,
            {
              sx: { my: 2, color: 'white', display: 'block' },
              ref: anchorRef,
              id: 'composition-button',
              'aria-controls': openPoper ? 'composition-menu' : undefined,
              'aria-expanded': openPoper ? 'true' : undefined,
              'aria-haspopup': 'true',
              onClick: handleToggle
            },
            'Outline'
          ),
          React.createElement(
            Popper,
            {
              open: openPoper,
              anchorEl: anchorRef.current,
              role: undefined,
              placement: 'bottom-start',
              transition: true,
              disablePortal: true
            },
            function (_ref4) {
              var TransitionProps = _ref4.TransitionProps,
                  placement = _ref4.placement;
              return React.createElement(
                Grow,
                _extends({}, TransitionProps, {
                  style: {
                    transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
                  }
                }),
                React.createElement(
                  Paper,
                  null,
                  React.createElement(
                    ClickAwayListener,
                    { onClickAway: handlePoperClose },
                    React.createElement(
                      MenuList,
                      {
                        autoFocusItem: openPoper,
                        id: 'composition-menu',
                        'aria-labelledby': 'composition-button'
                        //onKeyDown={handleListKeyDown}
                      },
                      React.createElement(
                        MenuItem,
                        { onClick: function onClick() {
                            return linesActions.selectToolDrawingLine('wall');
                          } },
                        'Construction Area'
                      ),
                      React.createElement(
                        MenuItem,
                        { onClick: function onClick() {
                            return linesActions.selectToolDrawingLine('install area');
                          } },
                        'Interest Area'
                      )
                    )
                  )
                )
              );
            }
          ),
          React.createElement(
            Button,
            {
              key: 'Place',
              sx: { my: 2, color: 'white', display: 'block' }
            },
            'Place'
          ),
          React.createElement(
            Popper,
            {
              open: openPoper,
              anchorEl: anchorRef.current,
              role: undefined,
              placement: 'bottom-start',
              transition: true,
              disablePortal: true
            },
            function (_ref5) {
              var TransitionProps = _ref5.TransitionProps,
                  placement = _ref5.placement;
              return React.createElement(
                Grow,
                _extends({}, TransitionProps, {
                  style: {
                    transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
                  }
                }),
                React.createElement(
                  Paper,
                  null,
                  React.createElement(
                    ClickAwayListener,
                    { onClickAway: handlePoperClose },
                    React.createElement(
                      MenuList,
                      {
                        autoFocusItem: openPoper,
                        id: 'composition-menu',
                        'aria-labelledby': 'composition-button'
                        //onKeyDown={handleListKeyDown}
                      },
                      React.createElement(
                        MenuItem,
                        { onClick: function onClick() {
                            return linesActions.selectToolDrawingLine('wall');
                          } },
                        'Construction Area'
                      ),
                      React.createElement(
                        MenuItem,
                        { onClick: function onClick() {
                            return linesActions.selectToolDrawingLine('install area');
                          } },
                        'Interest Area'
                      )
                    )
                  )
                )
              );
            }
          )
        ),
        React.createElement(
          Box,
          { sx: { flexGrow: 0 } },
          React.createElement(
            Tooltip,
            { title: 'Open settings' },
            React.createElement(
              IconButton,
              { onClick: handleOpenUserMenu, sx: { p: 0 } },
              React.createElement(Avatar, { alt: 'Remy Sharp', src: '/static/images/avatar/2.jpg' })
            )
          ),
          React.createElement(
            Menu,
            {
              sx: { mt: '45px' },
              id: 'menu-appbar',
              anchorEl: anchorElUser,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
              },
              keepMounted: true,
              transformOrigin: {
                vertical: 'top',
                horizontal: 'right'
              },
              open: Boolean(anchorElUser),
              onClose: handleCloseUserMenu
            },
            settings.map(function (setting) {
              return React.createElement(
                MenuItem,
                { key: setting, onClick: handleCloseNavMenu },
                React.createElement(
                  Typography,
                  { textAlign: 'center' },
                  setting
                )
              );
            })
          )
        ),
        React.createElement(
          Box,
          { sx: { flexGrow: 0 } },
          React.createElement(
            Button,
            {
              key: 'Gernerate',
              sx: { my: 2, color: 'white', display: 'block' }
            },
            'Gernerate'
          )
        )
      )
    ),
    React.createElement(
      Drawer,
      {
        sx: {
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        },
        variant: 'persistent',
        anchor: 'left',
        open: openDrawer
      },
      React.createElement(
        DrawerHeader,
        null,
        React.createElement(
          IconButton,
          { onClick: handleDrawerClose },
          theme.direction === 'ltr' ? React.createElement(ChevronLeftIcon, null) : React.createElement(ChevronRightIcon, null)
        )
      ),
      React.createElement(Divider, null),
      elementsToDisplay.map(function (elem) {
        return React.createElement(CatalogItem, { key: elem.name, element: elem });
      })
    )
  );
}