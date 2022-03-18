import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Container from '@mui/material/Container';
import Sidepanel from '../sidepanel';
import Fab from '@mui/material/Fab';

export default class CameraSpeedDial extends Component{

  constructor(props, context) {
    super(props, context);
    this.state = {
      showHideSidepanel: false
    };
  }

  hideSidepanel(){
    this.setState({ showHideSidepanel: !this.state.showHideSidepanel });
  }
  
  render() {

    let {
      props: { state },
      context: { itemsActions,  linesActions}
    } = this;
    let showHideSidepanel = this.state.showHideSidepanel;

    return (
      <div>
        {showHideSidepanel && <Sidepanel state={state} />}
        <Container 
          maxWidth='sm'
          sx={{ pl: 0, pr: 0}}
          >
            <Fab
              sx={
              {position: 'absolute',
              bottom: 16,
              right: 16+80,
              backgroundColor: '#FF8200',
              "&:hover": {backgroundColor: '#FF8200'}}}
              onClick={() => this.hideSidepanel()}
              aria-label="Add Camera">
                <CameraAltIcon
                  style={{ fill: 'white' }} 
                />
            </Fab>
        </Container>
        
      </div>
    );
  }
}

CameraSpeedDial.propTypes = {
  state: PropTypes.object.isRequired,
  //width: PropTypes.number.isRequired,
  //height: PropTypes.number.isRequired,
  allowProjectFileSupport: PropTypes.bool.isRequired,
  toolbarButtons: PropTypes.array
};

CameraSpeedDial.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
