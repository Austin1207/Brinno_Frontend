'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BasicSpeedDial;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Box = require('@mui/material/Box');

var _Box2 = _interopRequireDefault(_Box);

var _SpeedDial = require('@mui/material/SpeedDial');

var _SpeedDial2 = _interopRequireDefault(_SpeedDial);

var _SpeedDialIcon = require('@mui/material/SpeedDialIcon');

var _SpeedDialIcon2 = _interopRequireDefault(_SpeedDialIcon);

var _SpeedDialAction = require('@mui/material/SpeedDialAction');

var _SpeedDialAction2 = _interopRequireDefault(_SpeedDialAction);

var _Save = require('@mui/icons-material/Save');

var _Save2 = _interopRequireDefault(_Save);

var _Print = require('@mui/icons-material/Print');

var _Print2 = _interopRequireDefault(_Print);

var _CameraAlt = require('@mui/icons-material/CameraAlt');

var _CameraAlt2 = _interopRequireDefault(_CameraAlt);

var _Flag = require('@mui/icons-material/Flag');

var _Flag2 = _interopRequireDefault(_Flag);

var _Container = require('@mui/material/Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var actions = [{ icon: React.createElement(_CameraAlt2.default, null), name: 'Camera' }, { icon: React.createElement(_Flag2.default, null), name: 'Target' }];

function BasicSpeedDial() {

  return React.createElement(
    _Container2.default,
    { maxWidth: 'xl' },
    React.createElement(
      _SpeedDial2.default,
      {
        ariaLabel: 'SpeedDial basic example',
        sx: { position: 'absolute', bottom: 16, right: 16 },
        icon: React.createElement(_SpeedDialIcon2.default, null)
      },
      actions.map(function (action) {
        return React.createElement(_SpeedDialAction2.default, {
          key: action.name,
          icon: action.icon,
          tooltipTitle: action.name,
          onClick: function onClick(event) {
            return projectActions.openCatalog();
          }
        });
      })
    )
  );
}