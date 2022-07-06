import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FaPlusCircle as IconAdd} from 'react-icons/fa';
import * as SharedStyle from '../../shared-style';
import { Item } from '../../class/export';
import batteryIcon from './battery.png'
import fullHDIcon from './fullHD.png'
import HDRIcon from './HDR.png'

const STYLE_BOX = {
  width: '300px',
  height: '300px',
  padding: '30px',
  background: '#ffffff',
  border: '1px solid #e1e1e8',
  cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png"),pointer',
  position: 'relative',
  //boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.11), 0 1px 4px 0 rgba(0, 0, 0, 0.11)',
  borderRadius: '2px',
  transition: 'all .15s ease-in-out',
  WebkitTransition: 'all .15s ease-in-out',
  alignSelf: 'center',
  justifySelf: 'center',
};

const STYLE_BOX_HOVER = {
  ...STYLE_BOX,
  background: SharedStyle.SECONDARY_COLOR.main
};

const STYLE_TITLE = {
  width:'100%',
  fontSize: '20px',
  textAlign:'left',
  display:'block',
  marginBottom:'.5em',
  textTransform: 'capitalize'
};

const STYLE_TITLE_HOVER = {
  ...STYLE_TITLE,
  color:SharedStyle.COLORS.white
};

const STYLE_IMAGE_CONTAINER = {
  width: '100%',
  height: '200px',
  position:'relative',
  overflow:'hidden',
  border: 'solid 1px #e6e6e6',
  padding:0,
  margin:0,
  border:0,
  marginBottom: '5px'
};

const STYLE_IMAGE = {
  position:'absolute',
  background: '#222',
  width: '100%',
  height: '100%',
  backgroundSize: 'contain',
  backgroundPosition:'50% 50%',
  backgroundColor:SharedStyle.COLORS.white,
  backgroundRepeat:'no-repeat',
  transition: 'all .2s ease-in-out'
};

const STYLE_IMAGE_HOVER = {
  ...STYLE_IMAGE,
  transform: 'scale(1.2)'
};

const STYLE_PLUS_HOVER = {
  marginTop:'1.5em',
  color: SharedStyle.SECONDARY_COLOR.main,
  fontSize: '2em',
  opacity: '0.7',
  width: '100%'
};

const STYLE_DESCRIPTION = {
  display: 'block',
  display: '-webkit-box',
  height: '2em',
  margin: '0 auto',
  fontSize: '14px',
  color: '#838689',
  //fontStyle:'italic',
  lineHeight: '1em',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export default class CatalogChangeItem extends Component {

  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  select() {
    let element = this.props.element;
    let selectedID = this.props.state.getIn(['scene', 'layers', 'layer2', 'selected']).items._tail.array[0];
    let selectedCamera = this.props.state.getIn(['scene', 'layers', 'layer2', 'items', selectedID]);
    let cameraX = selectedCamera.x;
    let cameraY = selectedCamera.y;
    let cameraRotation = selectedCamera.rotation;

    switch (element.name) {
      case 'camera_BAC2000':
        this.context.projectActions.remove();
        this.context.itemsActions.directCreatItem('layer2', 'camera_BAC2000', cameraX, cameraY, cameraRotation );
        break;
      case 'camera_BCC200':
        this.context.projectActions.remove();
        this.context.itemsActions.directCreatItem('layer2', 'camera_BCC200', cameraX, cameraY, cameraRotation );
        break;
      case 'camera_BCC2000':
        this.context.projectActions.remove();
        this.context.itemsActions.directCreatItem('layer2', 'camera_BCC2000', cameraX, cameraY, cameraRotation );
        break;
      case 'camera_MAC200DN':
        this.context.projectActions.remove();
        this.context.itemsActions.directCreatItem('layer2', 'camera_MAC200DN', cameraX, cameraY, cameraRotation );
        break;
    }
  }

  render() {
    let element = this.props.element;
    let hover = this.state.hover;

    return (
      <div
        style={hover ? STYLE_BOX_HOVER : STYLE_BOX}
        onClick={e => this.select()}
        onMouseEnter={e => this.setState({hover: true})}
        onMouseLeave={e => this.setState({hover: false})}
      >
        <div style={ STYLE_IMAGE_CONTAINER }>
          <div style={{...( !hover ? STYLE_IMAGE: STYLE_IMAGE_HOVER ), backgroundImage: 'url(' + element.info.image + ')'}}></div>
        </div>
        <b style={ !hover ? STYLE_TITLE : STYLE_TITLE_HOVER }>{element.info.title}</b>
        <p style={STYLE_DESCRIPTION}>{element.info.description}</p>
        <div>
            <img src={batteryIcon} alt={"batteryIcon"} style={{margin: 'auto 12px auto 12px'}}/>
            <img src={fullHDIcon} alt={"fullHDIcon"} style={{margin: 'auto 12px auto 12px'}}/>
            <img src={HDRIcon} alt={"HDRIcon"} style={{margin: 'auto 12px auto 12px'}}/>
        </div>
{/*        <ul style={STYLE_TAGS}>
          {element.info.tag.map((tag, index) => <li style={STYLE_TAG} key={index}>{tag}</li>)}
    </ul>
        <div style={STYLE_DESCRIPTION}>{element.info.description}</div>*/}
      </div>
    );
  }
}

CatalogChangeItem.propTypes = {
  element: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

CatalogChangeItem.contextTypes = {
  itemsActions: PropTypes.object.isRequired,
  linesActions: PropTypes.object.isRequired,
  holesActions: PropTypes.object.isRequired,
  projectActions: PropTypes.object.isRequired
};
