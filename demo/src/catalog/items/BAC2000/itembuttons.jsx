import React, {Component} from 'react';
import PropTypes from 'prop-types';

const width = 60;
const height = 40;
const hoverWidth = 62;
const hoveerHeight = 42;
const buttonColor = '#271807';
const hoverColor = '#ff9900';
let theta = 0;

const buttonStyle = {
    cursor: 'pointer',
    fill: buttonColor,
    transition: 'r 150ms ease-in'
  };
  
  const hoverStyle = {
    cursor: 'pointer',
    fill: hoverColor,
    transition: 'r 150ms ease-in'
  };

export default class ItemButtons extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        hover1: false,
        hover2: false,
        hover3: false
      };
  
      this.onMouseDown = this.onMouseDown.bind(this);
      this.toggleHover1 = this.toggleHover1.bind(this);
      this.toggleHover2 = this.toggleHover2.bind(this);
      this.toggleHover3 = this.toggleHover3.bind(this);
    }

  onMouseDown(event) {
    //theta = this.props.element.rotation * Math.PI / 180
    //console.log(theta)
    /*let x = 100*Math.cos(-theta)-100*Math.sin(-theta)
    let y = 100*Math.sin(-theta)+100*Math.cos(-theta)*/

    let target = event.viewerEvent.originalEvent.target;
    console.log(target.nodeName);
    if (target.nodeName === 'rect') {
      if (target.attributes.name) {
        if (target.attributes.name.nodeValue === 'fst-button') {
          console.log('fst-button');
          this.context.projectActions.remove();
        }
        else if (target.attributes.name.nodeValue === 'snd-button') {
          console.log('snd-button');
        }
      }
    }
  }

  remove(e){
    console.log('fst-button');
    this.context.projectActions.remove();
  }

  componentDidMount() {
    document.addEventListener('mousedown-planner-event', this.onMouseDown);
  }

  componentDidUpdate() {
    theta = this.props.element.rotation * Math.PI / 180;
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown-planner-event', this.onMouseDown);
  }  

  toggleHover1(e) {
    this.setState({hover1: !this.state.hover1})
  }

  toggleHover2(e) {
    this.setState({hover2: !this.state.hover2})
  }

  toggleHover3(e) {
    this.setState({hover3: !this.state.hover3})
  }
  
  render() {
    let buttons = !this.props.element.selected ? null : (
        <g>
            <rect
                onMouseEnter={this.toggleHover1}
                onMouseLeave={this.toggleHover1}
                key="1"
                name="fst-button"
                x={100*Math.cos(-theta)-100*Math.sin(-theta)}
                y={100*Math.sin(-theta)+100*Math.cos(-theta)}
                width={this.state.hover1 ? hoverWidth : width}
                height={this.state.hover1 ? hoveerHeight : height}
                style={this.state.hover1 ? hoverStyle : buttonStyle}/>
        </g>
    );
    return(
      <g>
        {buttons}
      </g>
    )
  }
}

ItemButtons.propTypes = {
  element: PropTypes.object.isRequired,
  layer: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired
};

ItemButtons.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};