'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

require('@babel/polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//for async

function BottomButtonGroup(_ref) {
  var SetScale = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              document.getElementById("TutorialScaleRectangular").style.display = "";
              document.getElementById("TutorialScaleWord").style.display = "";
              document.getElementById("TutorialScaleButton").style.display = "";

              _context.next = 5;
              return ImageLayerMode();

            case 5:

              RotateCircle1.style.display = "none";
              RotateCircle2.style.display = "none";

            case 7:
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
      itemsActions = _ref.itemsActions;

  var ImageLayerMode = function ImageLayerMode(event) {
    sceneActions.selectLayer("layer1");
    itemsActions.selectItem("layer1", "xFAw434Nm");
  };

  return React.createElement(
    _Container2.default,
    {
      maxWidth: 'sm',
      sx: { pl: 0, pr: 0 }
    },
    React.createElement(
      _ButtonGroup2.default,
      { variant: 'contained', 'aria-label': 'undo redo',
        sx: { position: 'absolute', bottom: 35, right: 219 }
      },
      React.createElement(
        _Button2.default,
        { sx: { backgroundColor: '#FFFFFF', "&:hover": { backgroundColor: '#FFFFFF' } }, onClick: function onClick() {
            return projectActions.undo();
          } },
        React.createElement(_Undo2.default, { style: { fill: 'black' } })
      ),
      React.createElement(
        _Button2.default,
        { sx: { backgroundColor: '#FFFFFF', "&:hover": { backgroundColor: '#FFFFFF' } } },
        React.createElement(_Redo2.default, { style: { fill: 'black' } })
      )
    ),
    React.createElement(
      _Button2.default,
      { variant: 'contained',
        sx: { position: 'absolute', bottom: 35, right: 136, backgroundColor: '#FFFFFF', "&:hover": { backgroundColor: '#FFFFFF' } },
        onClick: SetScale
      },
      React.createElement(_Straighten2.default, { style: { fill: 'black' } })
    ),
    React.createElement(
      _Fab2.default,
      {
        sx: { position: 'absolute',
          bottom: 35,
          right: 60,
          backgroundColor: '#FFFFFF',
          "&:hover": { backgroundColor: '#FFFFFF' } }
        //onClick={() => this.getLS()}
        , 'aria-label': 'Help' },
      React.createElement(_QuestionMark2.default, {
        style: { fill: 'black' }
      })
    )
  );
}