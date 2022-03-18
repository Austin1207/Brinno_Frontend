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

const actions = [
  { icon: <CameraAltIcon />, name: 'Camera' },
  { icon: <FlagIcon />, name: 'Target' },
];

export default function BasicSpeedDial() {

  return (
    <Container maxWidth="xl">
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16}}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={event => projectActions.openCatalog()}
          />
        ))}
      </SpeedDial>
    </Container>
  );
}
