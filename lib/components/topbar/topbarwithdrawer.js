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

var _styles2 = require('@material-ui/core/styles');

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

var _catalogChangeitem = require('../catalog-view/catalog-changeitem');

var _catalogChangeitem2 = _interopRequireDefault(_catalogChangeitem);

var _Tooltip = require('@mui/material/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _Avatar = require('@mui/material/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _elementstodisplay = require('./elementstodisplay');

var _system = require('@mui/system');

var _summarytable = require('../summarytable/summarytable');

var _summarytable2 = _interopRequireDefault(_summarytable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
var drawerWidth = 360;
var useStyles = (0, _styles2.makeStyles)({
  drawerPaper: {
    marginLeft: "69px"
  }
});

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
  var GernerateOnclick = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var json_data, _ref5, url, InputUrl, objName, JsonUrl, CamUrl, ScoreUrl, Check403_2, Check403_3, Check403;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (localStorage.getItem("Mode") == "Upload") {
                localStorage.setItem("Tutorial_Upload", "Done");
              } else {
                localStorage.setItem("Tutorial_Outline", "Done");
              }

              localStorage.setItem("Tutorial_Generate", "Done");

              document.getElementById("8-8-1").style.display = "none";
              document.getElementById("8-8-2").style.display = "none";
              document.getElementById("8-8-3").style.display = "none";
              document.getElementById("8-8-4").style.display = "none";

              document.getElementById("SummaryPage1").style.display = "none";
              document.getElementById("SummaryPage2").style.display = "";
              showOptimizing();
              json_data = state.get('scene').toJS();
              _context.next = 12;
              return fetch(s3jsoninputurl).then(function (res) {
                return res.json();
              });

            case 12:
              _ref5 = _context.sent;
              url = _ref5.url;
              _context.next = 16;
              return fetch(url, {
                method: "PUT",
                headers: {
                  "Content-Type": 'application/json'
                },
                body: JSON.stringify(json_data)
              });

            case 16:

              // console.log(url)

              InputUrl = url.split('?')[0];
              objName = InputUrl.split('/')[3];
              JsonUrl = "https://tooljsonoutput.s3.ap-northeast-1.amazonaws.com/" + objName;
              CamUrl = "https://tooljsonoutput.s3.ap-northeast-1.amazonaws.com/" + "cam_" + objName;
              ScoreUrl = "https://tooljsonoutput.s3.ap-northeast-1.amazonaws.com/" + "score_" + objName;

              // console.log(JsonUrl);

              Check403_2 = setInterval(function () {
                var status = 0;
                status = checkForbidden_cam(CamUrl, status);
                if (status == 1) {
                  clearInterval(Check403_2);
                }
              }, 1000);
              Check403_3 = setInterval(function () {
                var status = 0;
                status = checkForbidden_score(ScoreUrl, status);
                if (status == 1) {
                  clearInterval(Check403_3);
                }
              }, 1000);
              Check403 = setInterval(function () {
                var status = 0;
                status = checkForbidden(JsonUrl, status);
                if (status == 1) {
                  clearInterval(Check403);
                  OpenSummary();
                }
              }, 1000);

              // }

              // const mongodburl = "http://localhost:3000/datas/";

              // const testmongodb = (e) => {
              //   e.preventDefault();
              //   state = Project.unselectAll( state ).updatedState;
              //   const jsondata = state.get('scene').toJS();

              //   const data2 = JSON.stringify(jsondata)

              //   console.log(data2)

              //   fetch(mongodburl, {
              //     method: "POST",
              //     body: data2,
              //     headers: {
              //       "Content-Type": "application/json"
              //     },
              //   })

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function GernerateOnclick() {
      return _ref4.apply(this, arguments);
    };
  }();

  var state = _ref3.state,
      linesActions = _ref3.linesActions,
      projectActions = _ref3.projectActions,
      sceneActions = _ref3.sceneActions,
      showCamDrawer = _ref3.showCamDrawer,
      showSumDrawer = _ref3.showSumDrawer;

  var theme = (0, _styles.useTheme)();
  var classes = useStyles();

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

  //Outline onlick with layer select
  var DrawConstructionArea = function DrawConstructionArea() {
    projectActions.unselectAll();
    sceneActions.selectLayer("layer2");
    linesActions.selectToolDrawingLine('wall');
  };

  var DrawInterestArea = function DrawInterestArea() {
    projectActions.unselectAll();
    sceneActions.selectLayer("layer2");
    linesActions.selectToolDrawingLine('install area');
  };
  //change camera
  var camearaSelected = state.getIn(['scene', 'layers', 'layer2', 'selected']).items.size == 1;

  //Gernerate(checkforbidden及check403待輸出json出來後修改)
  var s3jsoninputurl = "http://localhost:3000/s3jsoninputUrl";

  function showOptimizing() {
    document.getElementById("overlay").style.display = "";
    document.getElementById("optimizing").style.display = "";
    for (var i = 1; i < 400; i++) {
      setTimeout(function () {
        document.getElementById("optimizing").innerHTML = "Optimizing.";
      }, 1500 * i - 1000);
      setTimeout(function () {
        document.getElementById("optimizing").innerHTML = "Optimizing..";
      }, 1500 * i - 500);
      setTimeout(function () {
        document.getElementById("optimizing").innerHTML = "Optimizing...";
      }, 1500 * i);
    }
  }

  function closeOptimizing() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("optimizing").style.display = "none";
  }

  // function checkForbidden (url, resultJson, status) {
  //   var req = new XMLHttpRequest();
  //   req.open('GET', url, false);
  //   req.send();
  //   if (req.status == 200) {
  //     closeLoading();

  //     projectActions.loadProject(resultJson);
  //     status = 1;
  //     return status;
  //   }
  // };


  function checkForbidden(url, status) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    if (req.status == 200) {
      closeOptimizing();

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.send();
      xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        console.log(data);

        projectActions.loadProject(data);

        sceneActions.selectLayer("layer2");
      };
      status = 1;
      return status;
    }
  }

  function checkForbidden_cam(url, status) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    if (req.status == 200) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.send();
      xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        console.log(data);
        var Cam_count = Object.values(data);
        var BCC_200_count = String(Cam_count[0]);
        var BCC_300_count = String(Cam_count[1]);
        var TLC_2020C_count = String(Cam_count[2]);
        var BCC_2000_count = String(Cam_count[3]);
        var BCC_2000PLUS_count = String(Cam_count[4]);
        var BCC_200PLUS_count = String(Cam_count[5]);
        var MAC_200DN_count = String(Cam_count[6]);
        var BAC_2000_count = String(Cam_count[7]);
        var Total_Camera_count = String(Number(Cam_count[0]) + Number(Cam_count[1]) + Number(Cam_count[2]) + Number(Cam_count[3]) + Number(Cam_count[4]) + Number(Cam_count[5]) + Number(Cam_count[6]) + Number(Cam_count[7]));

        localStorage.setItem("BCC200_Count", BCC_200_count);
        localStorage.setItem("BCC300_Count", BCC_300_count);
        localStorage.setItem("TLC2020C_Count", TLC_2020C_count);
        localStorage.setItem("BCC2000_Count", BCC_2000_count);
        localStorage.setItem("BCC2000PLUS_Count", BCC_2000PLUS_count);
        localStorage.setItem("BCC200PLUS_Count", BCC_200PLUS_count);
        localStorage.setItem("MAC200DN_Count", MAC_200DN_count);
        localStorage.setItem("BAC2000_Count", BAC_2000_count);

        localStorage.setItem("Camera_Count", Total_Camera_count);
      };
      status = 1;
      return status;
    }
  }

  function checkForbidden_score(url, status) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    if (req.status == 200) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.send();
      xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        console.log(data);
        var score = data["score"];
        document.getElementById("totalCoverage").innerHTML = String(score) + "%";
        localStorage.setItem("Coverage", score);
      };
      status = 1;
      return status;
    }
  }

  var ClickSummary = function ClickSummary(summary) {
    var e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);
    summary.dispatchEvent(e);
  };

  var OpenSummary = function OpenSummary(event) {
    var SummaryClick = document.getElementById("SummaryPage2");
    ClickSummary(SummaryClick);
  };

  return React.createElement(
    _Box2.default,
    { sx: { flexGrow: 1 } },
    React.createElement(
      AppBar,
      { position: 'fixed', sx: { bgcolor: "#15110d" }, style: { height: "70px" }, elevation: 0, openDrawer: openDrawer, openPoper: openPoper },
      React.createElement(
        _Toolbar2.default,
        null,
        React.createElement(_Box2.default, { sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }),
        React.createElement(
          _Box2.default,
          { sx: { flexGrow: 0 } },
          React.createElement(
            _Button2.default,
            {
              id: 'Generate1',
              key: 'Generat1',
              sx: { my: 2, color: '#ffffff', display: 'block', fontSize: "16px", fontWeight: "normal", fontStretch: "normal", fontStyle: "normal", textTransform: "capitalize" },
              style: { width: "134px", height: "41px", borderRadius: "10px", backgroundColor: "#ffdfbf" }
              // onClick = {GernerateOnclick}
            },
            'Generate'
          ),
          React.createElement(
            _Button2.default,
            {
              id: 'Generate2',
              key: 'Generat',
              sx: { my: 2, color: '#ffffff', display: 'block', fontSize: "16px", fontWeight: "normal", fontStretch: "normal", fontStyle: "normal", textTransform: "capitalize" },
              style: { width: "134px", height: "41px", borderRadius: "10px", backgroundColor: "#ff8200", display: "none", cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' },
              onClick: GernerateOnclick
            },
            'Generate'
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
        PaperProps: { style: { height: "95vh", top: 70 } },
        variant: 'persistent',
        anchor: 'left',
        open: showCamDrawer || showSumDrawer,
        classes: {
          paper: classes.drawerPaper
        }
      },
      !showCamDrawer && showSumDrawer && React.createElement(_summarytable2.default, null),
      showCamDrawer && !showSumDrawer && _elementstodisplay.elementsToDisplay.map(function (elem) {
        return camearaSelected ? React.createElement(_catalogChangeitem2.default, { key: elem.name, element: elem, state: state }) : React.createElement(_catalogItem2.default, { key: elem.name, element: elem });
      })
    )
  );
}