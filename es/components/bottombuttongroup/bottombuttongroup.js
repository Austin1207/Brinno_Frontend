function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import StraightenIcon from '@mui/icons-material/Straighten';
import Fab from '@mui/material/Fab';

import '@babel/polyfill'; //for async

export default function BottomButtonGroup(_ref) {
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
    Container,
    {
      maxWidth: 'sm',
      sx: { pl: 0, pr: 0 }
    },
    React.createElement(
      ButtonGroup,
      { variant: 'contained', 'aria-label': 'undo redo',
        sx: { position: 'absolute', bottom: 35, right: 219 }
      },
      React.createElement(
        Button,
        { sx: { backgroundColor: '#FFFFFF', "&:hover": { backgroundColor: '#FFFFFF' } }, onClick: function onClick() {
            return projectActions.undo();
          } },
        React.createElement(UndoIcon, { style: { fill: 'black' } })
      ),
      React.createElement(
        Button,
        { sx: { backgroundColor: '#FFFFFF', "&:hover": { backgroundColor: '#FFFFFF' } } },
        React.createElement(RedoIcon, { style: { fill: 'black' } })
      )
    ),
    React.createElement(
      Button,
      { variant: 'contained',
        sx: { position: 'absolute', bottom: 35, right: 136, backgroundColor: '#FFFFFF', "&:hover": { backgroundColor: '#FFFFFF' } },
        onClick: SetScale
      },
      React.createElement(StraightenIcon, { style: { fill: 'black' } })
    ),
    React.createElement(
      Fab,
      {
        sx: { position: 'absolute',
          bottom: 35,
          right: 60,
          backgroundColor: '#FFFFFF',
          "&:hover": { backgroundColor: '#FFFFFF' } }
        //onClick={() => this.getLS()}
        , 'aria-label': 'Help' },
      React.createElement(QuestionMarkIcon, {
        style: { fill: 'black' }
      })
    )
  );
}