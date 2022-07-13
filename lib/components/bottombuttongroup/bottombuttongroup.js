'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = BottomButtonGroup;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Container = require('@mui/material/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Button = require('@mui/material/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonGroup = require('@mui/material/ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Undo = require('@mui/icons-material/Undo');

var _Undo2 = _interopRequireDefault(_Undo);

var _Redo = require('@mui/icons-material/Redo');

var _Redo2 = _interopRequireDefault(_Redo);

var _QuestionMark = require('@mui/icons-material/QuestionMark');

var _QuestionMark2 = _interopRequireDefault(_QuestionMark);

var _Straighten = require('@mui/icons-material/Straighten');

var _Straighten2 = _interopRequireDefault(_Straighten);

var _Fab = require('@mui/material/Fab');

var _Fab2 = _interopRequireDefault(_Fab);

var _utils = require('@mui/material/utils');

var _ClickAwayListener = require('@mui/material/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Grow = require('@mui/material/Grow');

var _Grow2 = _interopRequireDefault(_Grow);

var _Paper = require('@mui/material/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Popper = require('@mui/material/Popper');

var _Popper2 = _interopRequireDefault(_Popper);

var _MenuItem = require('@mui/material/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuList = require('@mui/material/MenuList');

var _MenuList2 = _interopRequireDefault(_MenuList);

var _Add = require('@mui/icons-material/Add');

var _Add2 = _interopRequireDefault(_Add);

var _Remove = require('@mui/icons-material/Remove');

var _Remove2 = _interopRequireDefault(_Remove);

require('@babel/polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//for async
// const options = [
//   {name: 'Zoom to Content', do: ZoomScale5},
//   {name: '150%', do: ZoomScale4},
//   {name: '100%', do: ZoomScale3},
//   {name: '70%', do: ZoomScale2},
//   {name: '50%', do: ZoomScale1},
//   //'Zoom to Content', '150%', '100%', '70%', '50%'
// ];
//const scaleOptions = [1,1.5,1,0.7,0.5];

var buttonsStyle = {
  height: '36px', bottom: '54px',
  backgroundColor: '#FFFFFF', color: '#222222', "&:hover": { backgroundColor: '#989a9c', color: '#ffffff', cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }
};
var IconUndo = (0, _utils.createSvgIcon)(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { d: 'M7.421 9.024c-0.075 0.077 -0.053 0.138 0.053 0.138h7.193c2.209 0 3.999 1.804 3.999 4.03 0 2.227 -1.789 4.03 -4 4.03H6.48a0.574 0.574 0 0 1 -0.575 -0.575c0 -0.318 0.253 -0.576 0.575 -0.576h8.188c1.58 0 2.857 -1.287 2.857 -2.879 0 -1.589 -1.279 -2.878 -2.857 -2.878H7.475c-0.105 0 -0.131 0.059 -0.053 0.138l1.364 1.373a0.577 0.577 0 0 1 0 0.815 0.568 0.568 0 0 1 -0.807 0.001L5.5 10.144a0.577 0.577 0 0 1 0 -0.811l2.479 -2.498a0.567 0.567 0 0 1 0.807 0.001 0.58 0.58 0 0 1 0 0.815l-1.364 1.373z' })
), 'Undo');
var IconRedo = (0, _utils.createSvgIcon)(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { d: 'M16.579 9.024c0.075 0.077 0.053 0.138 -0.053 0.138H9.333C7.124 9.162 5.333 10.967 5.333 13.192c0 2.227 1.788 4.03 4 4.03h8.187a0.574 0.574 0 0 0 0.575 -0.575 0.573 0.573 0 0 0 -0.575 -0.576H9.333c-1.58 0 -2.857 -1.287 -2.857 -2.879 0 -1.589 1.279 -2.878 2.857 -2.878h7.193c0.105 0 0.131 0.059 0.053 0.138l-1.364 1.373a0.577 0.577 0 0 0 0 0.815 0.568 0.568 0 0 0 0.807 0.001l2.479 -2.497a0.577 0.577 0 0 0 0 -0.811l-2.479 -2.498a0.567 0.567 0 0 0 -0.807 0.001 0.58 0.58 0 0 0 0 0.815l1.364 1.373z' })
), 'Redo');
var IconScale = (0, _utils.createSvgIcon)(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', d: 'M18.571 8H5.429c-0.157 0 -0.286 0.2 -0.286 0.445v7.111c0 0.245 0.129 0.445 0.286 0.445h13.143c0.157 0 0.286 -0.2 0.286 -0.445V8.445c0 -0.245 -0.129 -0.445 -0.286 -0.445zm-12 0.889v1.333c0 0.244 0.129 0.444 0.286 0.444s0.285 -0.2 0.285 -0.444v-1.333h1.143v0.889c0 0.245 0.128 0.445 0.285 0.445s0.286 -0.2 0.286 -0.445v-0.889H10v1.333c0 0.244 0.129 0.444 0.285 0.444 0.157 0 0.286 -0.2 0.286 -0.444v-1.333h1.143v0.889c0 0.245 0.129 0.445 0.286 0.445 0.157 0 0.285 -0.2 0.285 -0.445v-0.889h1.143v1.333c0 0.244 0.129 0.444 0.286 0.444s0.285 -0.2 0.285 -0.444v-1.333h1.143v0.889c0 0.245 0.129 0.445 0.285 0.445 0.157 0 0.286 -0.2 0.286 -0.445v-0.889h1.143v1.333c0 0.244 0.129 0.444 0.285 0.444 0.157 0 0.286 -0.2 0.286 -0.444v-1.333h0.857v2.667H5.715v-2.667h0.857zm-0.857 3.555v2.667h12.571v-2.667H5.715z' })
), 'Scale');
var IconQuestion = (0, _utils.createSvgIcon)(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { d: 'M2.553 2.885a5.804 5.804 0 0 1 4.116 -1.52c2.975 0.093 5.455 2.395 5.602 5.157 0.049 1.703 -0.793 3.36 -2.28 4.373 -1.687 1.197 -2.678 2.901 -2.678 4.696v0.276c0 0.368 -0.346 0.691 -0.743 0.691 -0.396 0 -0.744 -0.323 -0.744 -0.691v-0.276c0 -2.256 1.189 -4.375 3.273 -5.801 1.091 -0.736 1.735 -1.933 1.684 -3.223 -0.098 -2.072 -1.933 -3.775 -4.115 -3.82A4.405 4.405 0 0 0 3.595 3.851a3.703 3.703 0 0 0 -1.289 2.809c0 0.368 -0.347 0.691 -0.743 0.691 -0.397 0 -0.744 -0.323 -0.744 -0.691 0 -1.428 0.645 -2.763 1.735 -3.775zM4.909 20.737c0 -1.045 0.921 -1.899 2.045 -1.899 1.125 0 2.045 0.854 2.045 1.898 0 1.046 -0.921 1.9 -2.045 1.9 -1.125 0 -2.045 -0.854 -2.045 -1.899z' }),
  React.createElement('path', { d: 'M2.553 2.885a5.804 5.804 0 0 1 4.116 -1.52c2.975 0.093 5.455 2.395 5.602 5.157 0.049 1.703 -0.793 3.36 -2.28 4.373 -1.687 1.197 -2.678 2.901 -2.678 4.696v0.276c0 0.368 -0.346 0.691 -0.743 0.691 -0.396 0 -0.744 -0.323 -0.744 -0.691v-0.276c0 -2.256 1.189 -4.375 3.273 -5.801 1.091 -0.736 1.735 -1.933 1.684 -3.223 -0.098 -2.072 -1.933 -3.775 -4.115 -3.82A4.405 4.405 0 0 0 3.595 3.851a3.703 3.703 0 0 0 -1.289 2.809c0 0.368 -0.347 0.691 -0.743 0.691 -0.397 0 -0.744 -0.323 -0.744 -0.691 0 -1.428 0.645 -2.763 1.735 -3.775zM4.909 20.737c0 -1.045 0.921 -1.899 2.045 -1.899 1.125 0 2.045 0.854 2.045 1.898 0 1.046 -0.921 1.9 -2.045 1.9 -1.125 0 -2.045 -0.854 -2.045 -1.899z' })
), 'Scale');

var IconSetting = (0, _utils.createSvgIcon)(React.createElement(
  'svg',
  { width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' },
  React.createElement('path', { d: 'M30.5 34a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z', fill: '#222' })
), 'Setting');

function BottomButtonGroup(_ref) {
  var SetScale = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var json, PicInJson;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              json = state.get('scene').toJS();
              PicInJson = json["layers"]["layer1"]["items"]["xFAw434Nm"];

              if (!(PicInJson != undefined)) {
                _context.next = 14;
                break;
              }

              projectActions.unselectAll();

              _context.next = 6;
              return ImageLayerMode();

            case 6:

              RotateCircle1.style.display = "none";
              RotateCircle2.style.display = "none";
              DrawingScale();
              document.getElementById('Question2').style.display = "";
              document.getElementById('Setting2').style.display = "";

              // if ((localStorage.getItem("Mode") == "Upload") && localStorage.getItem("Tutorial_Setscale") !== "Done" ) { 
              if (localStorage.getItem("Tutorial_Setscale") !== "Done") {

                document.getElementById('1-8-1').style.display = "none";
                document.getElementById('1-8-2').style.display = "none";
                document.getElementById('1-8-3').style.display = "none";
                document.getElementById('1-8-4').style.display = "none";
                document.getElementById('1-8-5').style.display = "none";
                document.getElementById('1-8-6').style.display = "none";
                document.getElementById('1-8-7').style.display = "none";

                document.getElementById('Scale2').style.zIndex = "9990";
                document.getElementById('overlay').style.display = "none";

                document.getElementById('1-8-8').style.display = "";
                document.getElementById('1-8-9').style.display = "";
                document.getElementById('1-8-10').style.display = "";
                document.getElementById('1-8-11').style.display = "";
                document.getElementById('1-8-12').style.display = "";
                document.getElementById('1-8-13').style.display = "";
                document.getElementById('1-8-14').style.display = "";
              }

              _context.next = 15;
              break;

            case 14:
              alert("Please upload your file first.");

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function SetScale() {
      return _ref2.apply(this, arguments);
    };
  }();

  var projectActions = _ref.projectActions,
      sceneActions = _ref.sceneActions,
      itemsActions = _ref.itemsActions,
      state = _ref.state,
      viewer2DActions = _ref.viewer2DActions;


  var ImageLayerMode = function ImageLayerMode(event) {
    sceneActions.selectLayer("layer1");
    itemsActions.selectItem("layer1", "xFAw434Nm");
  };

  //畫Scale
  var CircleMove = function CircleMove(circle) {
    var e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);
    circle.dispatchEvent(e);
  };

  var DrawingScale = function DrawingScale(event) {
    var Circle1 = document.getElementById("Circle1");
    CircleMove(Circle1);
  };

  function test1234() {
    // console.log("123")
    // console.log(document.getElementById("Cameras_count"))
    // document.getElementById("totalCoverage").innerHTML = String(50);
    // console.log("123")
    // console.log(state.zoom)
    // viewer2DActions.selectToolZoomIn()
    // projectActions.updateZoomScale(0.5)
    // console.log(state.zoom)
    // console.log(viewer2DActions.updateCameraView)
    var ZoomScaleJson = state.viewer2D.toJS();
    // ZoomScaleJson.a = 0.5
    // ZoomScaleJson.d = 0.5
    // viewer2DActions.updateCameraView(ZoomScaleJson)
    // console.log(state.scene.toJS().layers.layer1.items.xFAw434Nm.properties)
    console.log(ZoomScaleJson);
  }

  function undotest() {
    console.log("undotest1");
    console.log(state);
    projectActions.undo();
    console.log("undotest2");
    console.log(state);
  }

  function redotest() {
    console.log("redotest1");
    console.log(state);
    projectActions.redo();
    console.log("redotest2");
    console.log(state);
  }

  function Setting() {
    console.log("Setting");
  }

  var ZoomScale = function ZoomScale(scale) {
    var ZoomScaleJson = state.viewer2D.toJS();
    var OriginalScale = ZoomScaleJson.a;
    var OriginalX = ZoomScaleJson.e;
    var OriginalY = ZoomScaleJson.f;
    ZoomScaleJson.a = scale;
    ZoomScaleJson.d = scale;
    ZoomScaleJson.a = scale;
    ZoomScaleJson.d = scale;
    ZoomScaleJson.e = 15070 - (15070 - OriginalX) * scale / OriginalScale;
    ZoomScaleJson.f = 9660 - (9660 - OriginalY) * scale / OriginalScale;
    viewer2DActions.updateCameraView(ZoomScaleJson);
  };

  function ZoomScale1() {
    var ZoomScaleJson = state.viewer2D.toJS();
    var OriginalScale = ZoomScaleJson.a;
    var OriginalX = ZoomScaleJson.e;
    var OriginalY = ZoomScaleJson.f;
    ZoomScaleJson.a = 0.5;
    ZoomScaleJson.d = 0.5;
    ZoomScaleJson.e = 15070 - (15070 - OriginalX) * 0.5 / OriginalScale;
    ZoomScaleJson.f = 9660 - (9660 - OriginalY) * 0.5 / OriginalScale;
    viewer2DActions.updateCameraView(ZoomScaleJson);
    setSelectedIndex(4);
    setScale(0.5);
    setOpen(false);
  }

  function ZoomScale2() {
    var ZoomScaleJson = state.viewer2D.toJS();
    var OriginalScale = ZoomScaleJson.a;
    var OriginalX = ZoomScaleJson.e;
    var OriginalY = ZoomScaleJson.f;
    ZoomScaleJson.a = 0.7;
    ZoomScaleJson.d = 0.7;
    ZoomScaleJson.e = 15070 - (15070 - OriginalX) * 0.7 / OriginalScale;
    ZoomScaleJson.f = 9660 - (9660 - OriginalY) * 0.7 / OriginalScale;
    viewer2DActions.updateCameraView(ZoomScaleJson);
    setSelectedIndex(3);
    setScale(0.7);
    setOpen(false);
  }
  function ZoomScale3() {
    var ZoomScaleJson = state.viewer2D.toJS();
    var OriginalScale = ZoomScaleJson.a;
    var OriginalX = ZoomScaleJson.e;
    var OriginalY = ZoomScaleJson.f;
    ZoomScaleJson.a = 1;
    ZoomScaleJson.d = 1;
    ZoomScaleJson.e = 15070 - (15070 - OriginalX) * 1 / OriginalScale;
    ZoomScaleJson.f = 9660 - (9660 - OriginalY) * 1 / OriginalScale;
    viewer2DActions.updateCameraView(ZoomScaleJson);
    setSelectedIndex(2);
    setScale(1);
    setOpen(false);
  }
  function ZoomScale4() {
    var ZoomScaleJson = state.viewer2D.toJS();
    var OriginalScale = ZoomScaleJson.a;
    var OriginalX = ZoomScaleJson.e;
    var OriginalY = ZoomScaleJson.f;
    ZoomScaleJson.a = 1.5;
    ZoomScaleJson.d = 1.5;
    ZoomScaleJson.e = 15070 - (15070 - OriginalX) * 1.5 / OriginalScale;
    ZoomScaleJson.f = 9660 - (9660 - OriginalY) * 1.5 / OriginalScale;
    viewer2DActions.updateCameraView(ZoomScaleJson);
    setSelectedIndex(1);
    setScale(1.5);
    setOpen(false);
  }

  function ZoomScale5() {
    var ZoomScaleJson = state.viewer2D.toJS();
    var ZoomX = localStorage.getItem("Xmin");
    var ZoomY = localStorage.getItem("Ymax");
    var ZoomYmin = localStorage.getItem("Ymin");
    var ZoomContentScale = localStorage.getItem("ZoomScale") * 0.5;
    ZoomScaleJson.a = ZoomContentScale;
    ZoomScaleJson.d = ZoomContentScale;
    ZoomScaleJson.e = 15070 - (ZoomX - 100) * ZoomContentScale;
    ZoomScaleJson.f = 9660 - (20000 - ZoomY - 100 * (6.5 / ZoomContentScale - (ZoomY - ZoomYmin) / 100) / 2) * ZoomContentScale;
    console.log(ZoomContentScale);
    console.log("y1" + ZoomY + ",y2" + ZoomYmin);
    console.log("e" + ZoomScaleJson.e);
    console.log("f" + ZoomScaleJson.f);
    viewer2DActions.updateCameraView(ZoomScaleJson);
    setSelectedIndex(0);
    setScale(1);
    setOpen(false);
  }
  var options = [{ name: 'Zoom to Content', do: ZoomScale5 }, { name: '150%', do: ZoomScale4 }, { name: '100%', do: ZoomScale3 }, { name: '70%', do: ZoomScale2 }, { name: '50%', do: ZoomScale1 }];

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var anchorRef = React.useRef(null);

  var _React$useState3 = React.useState(2),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedIndex = _React$useState4[0],
      setSelectedIndex = _React$useState4[1];

  var _React$useState5 = React.useState(1),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      scale = _React$useState6[0],
      setScale = _React$useState6[1];

  // const handleClick = () => {
  //   console.info(`You clicked ${options[selectedIndex]}`);
  // };

  // const handleMenuItemClick = (event, index) => {
  //   setSelectedIndex(index);
  //   setScale(scaleOptions[index]);
  //   //ZoomScale(scale);
  //   setOpen(false);
  // };

  var handleToggle = function handleToggle() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleClose = function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  var handleIn = function handleIn() {
    ZoomScale(Number(scale.toFixed(1)) + 0.1);
    setScale(Number(scale.toFixed(1)) + 0.1);
    setSelectedIndex(null);
  };

  var handleOut = function handleOut() {
    ZoomScale(Number(scale.toFixed(1)) - 0.1);
    setScale(Number(scale.toFixed(1)) - 0.1);
    setSelectedIndex(null);
  };

  // const mounted = React.useRef();
  // React.useEffect(() => {
  //   if(mounted.current===false){
  //     mounted.current=true;
  //     /* 下面是 componentDidMount*/


  //     /* 上面是 componentDidMount */      
  //   }
  //   else{
  //     /* 下面是componentDidUpdate */
  //     if(scale==0.7){
  //       //console.log('0.7');
  //       ZoomScale(scale);
  //     }

  //     /* 上面是componentDidUpdate */

  //   }
  // }, [scale]);

  return React.createElement(
    _Container2.default,
    {
      maxWidth: 'sm',
      sx: { pl: 0, pr: 0 }
    },
    React.createElement(
      _ButtonGroup2.default,
      { variant: 'contained', 'aria-label': 'undo redo',
        sx: { position: 'absolute', bottom: 54, right: 258 }
      },
      React.createElement(
        _Button2.default,
        {
          id: 'Undo',
          sx: _extends({}, buttonsStyle, { width: '36px', bottom: '0px' }),
          onClick: function onClick() {
            return projectActions.undo();
          },
          disabled: true
        },
        React.createElement(IconUndo, { sx: { fontSize: 36 } })
      ),
      React.createElement(
        _Button2.default,
        {
          id: 'Redo',
          sx: _extends({}, buttonsStyle, { width: '36px', bottom: '0px' })
          //TESTING REDO
          , onClick: function onClick() {
            return projectActions.redo();
          },
          disabled: true },
        React.createElement(IconRedo, { sx: { fontSize: 36 } })
      )
    ),
    React.createElement(
      _ButtonGroup2.default,
      { id: 'UndoRedo', variant: 'contained', 'aria-label': 'undo redo',
        sx: { position: 'absolute', bottom: 54, right: 258 },
        style: { display: "none" }
      },
      React.createElement(
        _Button2.default,
        {
          id: 'Undo2',
          sx: _extends({}, buttonsStyle, { width: '36px', bottom: '0px' }),
          onClick: function onClick() {
            return undotest();
          }
        },
        React.createElement(IconUndo, { sx: { fontSize: 36 } })
      ),
      React.createElement(
        _Button2.default,
        {
          id: 'Redo2',
          sx: _extends({}, buttonsStyle, { width: '36px', bottom: '0px' }),
          onClick: function onClick() {
            return redotest();
          }
        },
        React.createElement(IconRedo, { sx: { fontSize: 36 } })
      )
    ),
    React.createElement(
      _Button2.default,
      {
        id: 'Scale1',
        variant: 'contained',
        sx: _extends({}, buttonsStyle, { maxWidth: '36px', minWidth: '36px', right: 204, position: 'absolute' }),
        onClick: SetScale,
        disabled: true
      },
      React.createElement(IconScale, { sx: { fontSize: 36 } })
    ),
    React.createElement(
      _Fab2.default,
      {
        id: 'Setting1',
        sx: _extends({}, buttonsStyle, { width: '36px', right: 150, position: 'absolute' }),
        onClick: Setting,
        disabled: true,
        'aria-label': 'Help' },
      React.createElement(IconSetting, null)
    ),
    React.createElement(
      _Fab2.default,
      {
        id: 'Question1',
        sx: _extends({}, buttonsStyle, { width: '36px', right: 96, position: 'absolute' }),
        onClick: function onClick() {
          return test1234();
        },
        disabled: true,
        'aria-label': 'Help' },
      React.createElement(_QuestionMark2.default, null)
    ),
    React.createElement(
      _Button2.default,
      {
        variant: 'contained',
        id: 'Scale2',
        sx: _extends({}, buttonsStyle, { maxWidth: '36px', minWidth: '36px', right: 204, position: 'absolute' }),
        style: { display: "none" },
        onClick: SetScale
      },
      React.createElement(IconScale, { sx: { fontSize: 36 } })
    ),
    React.createElement(
      _Fab2.default,
      {
        id: 'Setting2',
        sx: _extends({}, buttonsStyle, { width: '36px', right: 150, position: 'absolute' }),
        style: { display: "none" },
        onClick: Setting,
        'aria-label': 'Help' },
      React.createElement(IconSetting, null)
    ),
    React.createElement(
      _Fab2.default,
      {
        id: 'Question2',
        sx: _extends({}, buttonsStyle, { width: '36px', right: 96, position: 'absolute', cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }),
        style: { display: "none" },
        onClick: function onClick() {
          return test1234();
        },
        'aria-label': 'Help' },
      React.createElement(_QuestionMark2.default, null)
    ),
    React.createElement(
      _ButtonGroup2.default,
      { variant: 'contained', ref: anchorRef, 'aria-label': 'zoom',
        sx: { position: 'absolute', bottom: 54, right: 348 } },
      React.createElement(
        _Button2.default,
        { sx: { maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
            backgroundColor: '#FFFFFF', color: '#222222', "&:hover": { backgroundColor: '#989a9c', color: '#ffffff' }, cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' },
          onClick: handleOut },
        React.createElement(_Remove2.default, null)
      ),
      React.createElement(
        _Button2.default,
        {
          sx: { width: '67px', height: '36px',
            backgroundColor: '#FFFFFF', color: '#222222', "&:hover": { backgroundColor: '#989a9c', color: '#ffffff' }, cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' },
          onClick: handleToggle },
        /*options[selectedIndex]*/(scale * 100).toFixed(0),
        '%'
      ),
      React.createElement(
        _Button2.default,
        { sx: { maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
            backgroundColor: '#FFFFFF', color: '#222222', "&:hover": { backgroundColor: '#989a9c', color: '#ffffff' }, cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' },
          onClick: handleIn },
        React.createElement(_Add2.default, null)
      )
    ),
    React.createElement(
      _Popper2.default,
      {
        open: open,
        anchorEl: anchorRef.current,
        role: undefined,
        transition: true,
        disablePortal: true
      },
      function (_ref3) {
        var TransitionProps = _ref3.TransitionProps,
            placement = _ref3.placement;
        return React.createElement(
          _Grow2.default,
          _extends({}, TransitionProps, {
            style: {
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }
          }),
          React.createElement(
            _Paper2.default,
            null,
            React.createElement(
              _ClickAwayListener2.default,
              { onClickAway: handleClose },
              React.createElement(
                _MenuList2.default,
                { id: 'split-button-menu', autoFocusItem: true },
                options.map(function (option, index) {
                  return React.createElement(
                    _MenuItem2.default,
                    {
                      key: option.name,
                      selected: index === selectedIndex
                      //onClick={(event) => handleMenuItemClick(event, index)}
                      , onClick: option.do,
                      style: { cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }
                    },
                    option.name
                  );
                })
              )
            )
          )
        );
      }
    )
  );
}