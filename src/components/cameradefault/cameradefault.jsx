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

  
  render() {

    let {
      props: { state },
      context: { itemsActions,  linesActions}
    } = this;
    let showHideSidepanel = this.state.showHideSidepanel;

    let getLS = (e) => {
      const data = JSON.parse(localStorage.getItem('react-planner_v0'));
      let lines = Object.entries(data.layers.layer1.lines);
      let wantVertices = new Array();
      for(let i=0;i<lines.length;i++){
        if(lines[i][1].type=="install area"){
          wantVertices.push(lines[i][1].vertices)
        }
      }
      wantVertices = wantVertices.flat();
      wantVertices = wantVertices.filter(function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      });
      console.log(wantVertices);
      let vertices = Object.entries(data.layers.layer1.vertices);
      let allX = new Array();
      let allY = new Array();
      for(let i=0;i<vertices.length;i++){
        for(let j=0;j<wantVertices.length;j++){
          if(vertices[i][1].id==wantVertices[j]){
            allX.push(vertices[i][1].x);
            allY.push(vertices[i][1].y);
          }
        }
      }
      console.log(allX);
      console.log(allY);
      let Xmax = Math.max(...allX);
      let Xmin = Math.min(...allX);
      let Ymax = Math.max(...allY);
      let Ymin = Math.min(...allY);
      console.log(Xmax,Xmin,Ymax,Ymin);
      let {
        context: {itemsActions}
      } = this;
      itemsActions.selectToolDrawingItem('camera_BAC2000');
      itemsActions.endDrawingItem('layer1', Xmax, Ymax);
      itemsActions.endDrawingItem('layer1', Xmax, Ymin);
      itemsActions.endDrawingItem('layer1', Xmin, Ymax);
      itemsActions.endDrawingItem('layer1', Xmin, Ymin);
      let data_new = JSON.parse(localStorage.getItem('react-planner_v0'));
      let items = Object.entries(data_new.layers.layer1.items);
      console.log(items);
      //let defaultCameras = new Array();
      //for(let i=0;i<items.length;i++){
        /*
        if(items[i][1].x==Xmax&items[i][1].y==Ymax||
          items[i][1].x==Xmax&items[i][1].y==Ymin||
          items[i][1].x==Xmin&items[i][1].y==Ymax||
          items[i][1].x==Xmin&items[i][1].y==Ymin){
            */
          //defaultCameras.push(items[i][1].x)
        //}
      //}
      /*
      let defaultCameras = items.map(function(element,index){
        if(element[1].x==Xmax&element[1].y==Ymax||
          element[1].x==Xmax&element[1].y==Ymin||
          element[1].x==Xmin&element[1].y==Ymax||
          element[1].x==Xmin&element[1].y==Ymin){
            return element[1].id
          }
      });
      */
      //console.log(defaultCameras)
      //itemsActions.beginRotatingItem('layer1', "RwwTliA30", Xmax, Ymax);
      //itemsActions.endRotatingItem(0, 0);
    }

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
