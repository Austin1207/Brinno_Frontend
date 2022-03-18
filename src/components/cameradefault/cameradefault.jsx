import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Container from '@mui/material/Container';
import Sidepanel from '../sidepanel';
import Fab from '@mui/material/Fab';

export default class CameraDefault extends Component{

  constructor(props, context) {
    super(props, context);
    this.state = {
      showHideSidepanel: false
    };
  }

  hideSidepanel(){
    this.setState({ showHideSidepanel: !this.state.showHideSidepanel });
  }

  getLS(){
    const data = JSON.parse(localStorage.getItem('react-planner_v0'));
    let lines = Object.entries(data.layers.layer1.lines);
    const linesarr = Object.keys(lines);
    let wantArea = [];
    //const wantAreanum = lines.filter(i => i.type === "install area").length
    /*
    for(let i=0;i<linesarr.length;i++){
      if(lines.linesarr[i].type=="install area"){
        wantArea.append(lines.linesarr[i].vertices)
      }
    }
    */
    console.log(lines);
    console.log(months);
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
              right: 16+80+80,
              backgroundColor: '#FF8200',
              "&:hover": {backgroundColor: '#FF8200'}}}
              onClick={() => this.getLS()}
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

CameraDefault.propTypes = {
  state: PropTypes.object.isRequired,
  //width: PropTypes.number.isRequired,
  //height: PropTypes.number.isRequired,
  allowProjectFileSupport: PropTypes.bool.isRequired,
  toolbarButtons: PropTypes.array
};

CameraDefault.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  viewer2DActions: PropTypes.object.isRequired,
  viewer3DActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  itemsActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
