import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlagIcon from '@mui/icons-material/Flag';
import Container from '@mui/material/Container';

var actions = [{ icon: React.createElement(CameraAltIcon, null), name: 'Camera' }, { icon: React.createElement(FlagIcon, null), name: 'Target' }];

export default function BasicSpeedDial() {

  return React.createElement(
    Container,
    { maxWidth: 'xl' },
    React.createElement(
      SpeedDial,
      {
        ariaLabel: 'SpeedDial basic example',
        sx: { position: 'absolute', bottom: 16, right: 16 },
        icon: React.createElement(SpeedDialIcon, null)
      },
      actions.map(function (action) {
        return React.createElement(SpeedDialAction, {
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