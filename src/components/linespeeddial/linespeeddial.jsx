import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Container from '@mui/material/Container';
import CreateIcon from '@mui/icons-material/Create';
import { createSvgIcon } from '@mui/material/utils';

export default class LineSpeedDial extends Component{

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  
  render() {

    let {
      context: { itemsActions,  linesActions}
    } = this;

    const PencilAddIcon = createSvgIcon(
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.1">
        <path d="m3,17.25l0,3.75l3.75,0l11.06,-11.06l-3.75,-3.75l-11.06,11.06zm17.71,-10.21c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34a0.9959,0.9959 0 0 0 -1.41,0l-1.83,1.83l3.75,3.75l1.83,-1.83z"/>
        <path d="m3,4.69376l1.69376,0l0,-1.69376l1.73748,0l0,1.69376l1.69376,0l0,1.73748l-1.69376,0l0,1.69376l-1.73748,0l0,-1.69376l-1.69376,0l0,-1.73748z"/>
      </svg>,
      'PencilAdd',
    );

    const PencilMinusIcon = createSvgIcon(
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.1">
        <path d="m3,17.25l0,3.75l3.75,0l11.06,-11.06l-3.75,-3.75l-11.06,11.06zm17.71,-10.21c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34a0.9959,0.9959 0 0 0 -1.41,0l-1.83,1.83l3.75,3.75l1.83,-1.83z"/>
        <path d="m3.07889,4.68632l5.41487,0l0,1.73299l-5.41487,0l0,-1.73299z"/>
      </svg>,
      'PencilMinus',
    );

    const actions = [
      { icon: <PencilAddIcon />, name: "Interest Area", do: () => linesActions.selectToolDrawingLine('install area')},
      { icon: <PencilMinusIcon />, name: "Construction Area" , do: () => linesActions.selectToolDrawingLine('wall')},
    ];

    return (
      <Container 
        maxWidth='sm'
        sx={{ pl: 0, pr: 0}}
        >
        <SpeedDial
          ariaLabel="Line SpeedDial"
          sx={{ position: 'absolute', bottom: 16, right: 16}}
          icon={<CreateIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.do}
            />
          ))}
        </SpeedDial>
      </Container>
    );
  }
}

LineSpeedDial.propTypes = {
  state: PropTypes.object.isRequired,
  //width: PropTypes.number.isRequired,
  //height: PropTypes.number.isRequired,
  allowProjectFileSupport: PropTypes.bool.isRequired,
  toolbarButtons: PropTypes.array
};

LineSpeedDial.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
