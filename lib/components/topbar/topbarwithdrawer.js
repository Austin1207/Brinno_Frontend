'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TopBar;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Box = require('@mui/material/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Button = require('@mui/material/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ChevronLeft = require('@mui/icons-material/ChevronLeft');

var _ChevronLeft2 = _interopRequireDefault(_ChevronLeft);

var _ChevronRight = require('@mui/icons-material/ChevronRight');

var _ChevronRight2 = _interopRequireDefault(_ChevronRight);

var _Divider = require('@mui/material/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Drawer = require('@mui/material/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _IconButton = require('@mui/material/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('@mui/material/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Menu3 = require('@mui/icons-material/Menu');

var _Menu4 = _interopRequireDefault(_Menu3);

var _MenuItem = require('@mui/material/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _AppBar = require('@mui/material/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('@mui/material/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('@mui/material/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@mui/material/styles');

var _ClickAwayListener = require('@mui/material/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Grow = require('@mui/material/Grow');

var _Grow2 = _interopRequireDefault(_Grow);

var _Paper = require('@mui/material/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Popper = require('@mui/material/Popper');

var _Popper2 = _interopRequireDefault(_Popper);

var _MenuList = require('@mui/material/MenuList');

var _MenuList2 = _interopRequireDefault(_MenuList);

var _TextField = require('@mui/material/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _catalogItem = require('../catalog-view/catalog-item');

var _catalogItem2 = _interopRequireDefault(_catalogItem);

var _Tooltip = require('@mui/material/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Avatar = require('@mui/material/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elementstodisplay = require('./elementstodisplay');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
var drawerWidth = 260;

var AppBar = (0, _styles.styled)(_AppBar2.default, {
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

var DrawerHeader = (0, _styles.styled)('div')(function (_ref2) {
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

function TopBar(_ref3) {
  var linesActions = _ref3.linesActions;

  var theme = (0, _styles.useTheme)();

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
    _Box2.default,
    { sx: { flexGrow: 1 } },
    React.createElement(
      AppBar,
      { position: 'fixed', sx: { bgcolor: "#222" }, openDrawer: openDrawer, openPoper: openPoper },
      React.createElement(
        _Toolbar2.default,
        null,
        React.createElement(
          _Box2.default,
          { sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } } },
          React.createElement(
            _IconButton2.default,
            {
              color: 'inherit',
              'aria-label': 'open drawer',
              onClick: handleDrawerOpen,
              edge: 'start',
              sx: _extends({ mr: 2 }, openDrawer && { display: 'none' })
            },
            React.createElement(_Menu4.default, null)
          ),
          React.createElement(_TextField2.default, {
            sx: { input: { color: 'white' } },
            hiddenLabel: true,
            id: 'project-name',
            defaultValue: 'Untitled Project',
            variant: 'filled',
            color: 'warning' }),
          React.createElement(
            _Button2.default,
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
            _Popper2.default,
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
                _Grow2.default,
                _extends({}, TransitionProps, {
                  style: {
                    transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
                  }
                }),
                React.createElement(
                  _Paper2.default,
                  null,
                  React.createElement(
                    _ClickAwayListener2.default,
                    { onClickAway: handlePoperClose },
                    React.createElement(
                      _MenuList2.default,
                      {
                        autoFocusItem: openPoper,
                        id: 'composition-menu',
                        'aria-labelledby': 'composition-button'
                        //onKeyDown={handleListKeyDown}
                      },
                      React.createElement(
                        _MenuItem2.default,
                        { onClick: function onClick() {
                            return linesActions.selectToolDrawingLine('wall');
                          } },
                        'Construction Area'
                      ),
                      React.createElement(
                        _MenuItem2.default,
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
            _Button2.default,
            {
              key: 'Place',
              sx: { my: 2, color: 'white', display: 'block' }
            },
            'Place'
          ),
          React.createElement(
            _Popper2.default,
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
                _Grow2.default,
                _extends({}, TransitionProps, {
                  style: {
                    transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
                  }
                }),
                React.createElement(
                  _Paper2.default,
                  null,
                  React.createElement(
                    _ClickAwayListener2.default,
                    { onClickAway: handlePoperClose },
                    React.createElement(
                      _MenuList2.default,
                      {
                        autoFocusItem: openPoper,
                        id: 'composition-menu',
                        'aria-labelledby': 'composition-button'
                        //onKeyDown={handleListKeyDown}
                      },
                      React.createElement(
                        _MenuItem2.default,
                        { onClick: function onClick() {
                            return linesActions.selectToolDrawingLine('wall');
                          } },
                        'Construction Area'
                      ),
                      React.createElement(
                        _MenuItem2.default,
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
          _Box2.default,
          { sx: { flexGrow: 0 } },
          React.createElement(
            _Tooltip2.default,
            { title: 'Open settings' },
            React.createElement(
              _IconButton2.default,
              { onClick: handleOpenUserMenu, sx: { p: 0 } },
              React.createElement(_Avatar2.default, { alt: 'Remy Sharp', src: '/static/images/avatar/2.jpg' })
            )
          ),
          React.createElement(
            _Menu2.default,
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
                _MenuItem2.default,
                { key: setting, onClick: handleCloseNavMenu },
                React.createElement(
                  _Typography2.default,
                  { textAlign: 'center' },
                  setting
                )
              );
            })
          )
        ),
        React.createElement(
          _Box2.default,
          { sx: { flexGrow: 0 } },
          React.createElement(
            _Button2.default,
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
      _Drawer2.default,
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
          _IconButton2.default,
          { onClick: handleDrawerClose },
          theme.direction === 'ltr' ? React.createElement(_ChevronLeft2.default, null) : React.createElement(_ChevronRight2.default, null)
        )
      ),
      React.createElement(_Divider2.default, null),
      _elementstodisplay.elementsToDisplay.map(function (elem) {
        return React.createElement(_catalogItem2.default, { key: elem.name, element: elem });
      })
    )
  );
}