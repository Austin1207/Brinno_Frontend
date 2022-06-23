import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Map} from 'immutable';

const grabCircleRadius = "6px";
const hoverCircleRadius = "6px";
const rulerColor = '#ff6200';
const hoverColor = '#ff6200';

// 控制比例尺圓圈

//沒有抓的時候
const grabCircleStyle = {
  cursor: 'grab',
  fill: rulerColor,
  transition: 'r 150ms ease-in',
};

//抓及移動的時候
const hoverCircleStyle = {
  cursor: 'grab',
  fill: hoverColor,
  transition: 'r 150ms ease-in',
};

const pointsDistance = (x1, y1, x2, y2) => {

  if (
    !isNaN(x1) &&
    !isNaN(y1) &&
    !isNaN(x2) &&
    !isNaN(y2)
  ) {
    if (!(x1 == 0 && y1 == 0 && x2 == 0 && y2 == 0)) {
      //*10改比例尺
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))*10;
    }
  }

  return 0;
};

export default class ImageFul extends Component {
  constructor(props) {
    super(props);

    this.state = {
      handleMouseMove1: false,
      handleMouseMove2: false,
      hover1: false,
      hover2: false,
      imageLoadError: false
    };

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.toggleHover1 = this.toggleHover1.bind(this);
    this.toggleHover2 = this.toggleHover2.bind(this);

    this.ClickCircle1 = this.ClickCircle1.bind(this);
  }

  onMouseDown(event) {
    let target = event.viewerEvent.originalEvent.target;
    //console.log(target.nodeName)
    if (target.nodeName === 'circle') {
      if (target.attributes.name) {
        if (target.attributes.name.nodeValue === 'fst-anchor') {
          this.setState({handleMouseMove1: !this.state.handleMouseMove1});
          this.setState({handleMouseMove2: !this.state.handleMouseMove2})
          document.getElementById("Circle2").style.display = ""
          document.getElementById("Line").style.display = ""

          document.getElementById('1-8-8').style.display = "none"
          document.getElementById('1-8-9').style.display = "none"
          document.getElementById('1-8-10').style.display = "none"
          document.getElementById('1-8-11').style.display = "none"
          document.getElementById('1-8-12').style.display = "none"
          document.getElementById('1-8-13').style.display = "none"
          document.getElementById('1-8-14').style.display = "none"

        }
        else if (target.attributes.name.nodeValue === 'snd-anchor') {
          this.setState({handleMouseMove2: !this.state.handleMouseMove2});

          setTimeout( function () {
            document.getElementById("sidebar").style.display = "";

            document.getElementById("TutorialScaleMeasureWord").style.display = "";
            document.getElementById("TutorialScaleMeasureWord2").style.display = "";
            document.getElementById("TutorialScaleMeasureWord3").style.display = "";
            document.getElementById("TutorialScaleMeasureLine").style.display = "";
            document.getElementById("TutorialScaleMeasureBackButton").style.display = "";
            document.getElementById("TutorialScaleMeasureOkButton").style.display = "";
            itemsActions.selectItem("layer1", "xFAw434Nm");
          },250);

          // projectActions.unselectAll();
          
        }
      }
    }
  }

  onMouseMove(event) {
    //滑鼠所在x座標&y座標(向右為x+,向下為y+,原點在整個視窗的左上)
    let {x, y} = event.viewerEvent;
    //整個視窗的高度(2000) - 上述y = 新y座標(原點變為整個視窗的左下)(滑鼠向右x+,向上y+)
    y = this.props.scene.height - y;
    //dist = ruler兩點間距離
    let dist = (pointsDistance(this.props.x1, this.props.y1, this.props.x2, this.props.y2));
    //scalechange1
    //scale防誤
    let scale = !isNaN(dist) && dist ? (this.props.distance.length / (dist)) : 0;
    //origin.x = 相片中心x座標-相片寬度*scale/2 -> origin.x為相篇最左側x座標
    //origin.y = 相篇中心y座標+相篇長度*scale/2 -> origin.y為相片最上侧y座標
    // let origin = {
    //   x: this.props.element.x - (this.props.width * scale / 2),
    //   y: this.props.element.y + (this.props.height * scale / 2)
    // };
    // //minX = origin.x + 相篇寬度*scale -> minX為相片最右側x座標
    // //minY = origin.y + 相篇長度*scale -> minX為相片最下側x座標
    // let minX = origin.x + (this.props.width * scale);
    // let minY = origin.y - (this.props.height * scale);
    // //限制ruler兩點邊界值
    // if (x < origin.x) {
    //   x = origin.x;
    // }
    // else if (x > minX) {
    //   x = minX;
    // }
    // if (y > origin.y) {
    //   y = origin.y;
    // }
    // else if (y < minY) {
    //   y = minY;
    // }

    //新座標系統以相片左上為原點，滑鼠向右為x+，滑鼠向下為y+)

    //0度
    // let newX = (x - origin.x);
    // let newY = (origin.y - y);

    //180度
    // let newX = this.props.width * scale - (x - origin.x);
    // let newY = this.props.height * scale - (origin.y - y);

    // 改寫
    //旋轉角度
    let theta = this.props.element.rotation * Math.PI / 180
    let origin = {
      x: this.props.element.x - (this.props.width * Math.cos(theta) * scale / 2) - (this.props.height * Math.sin(theta) * scale / 2),
      y: this.props.element.y - (this.props.width * Math.sin(theta) * scale / 2) + (this.props.height * Math.cos(theta) * scale / 2)
    };

    let newX = (x - origin.x) * Math.cos(theta) + (y - origin.y) * Math.sin(theta);
    let newY = (x - origin.x) * Math.sin(theta) - (y - origin.y) * Math.cos(theta);

    //調整ruler點1時即時更新資料
    if (this.state.handleMouseMove1) {
      let dist = pointsDistance(newX, newY, this.props.x2, this.props.y2);
      this.context.projectActions.setProperties(new Map({x1: newX, y1: newY, distance: new Map({length: dist})}));
    }
    //調整ruler點2時即時更新資料
    else if (this.state.handleMouseMove2) {
      let dist = pointsDistance(this.props.x1, this.props.y1, newX, newY);
      this.context.projectActions.setProperties(new Map({x2: newX, y2: newY, distance: new Map({length: dist})}));
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown-planner-event', this.onMouseDown);
    document.addEventListener('mousemove-planner-event', this.onMouseMove);

    if (this.props.imageUri) {
      let img = new Image;
      img.src = this.props.imageUri;
      img.onload = () => {
        this.setState({imageLoadError: false});
        this.context.projectActions.setProperties(new Map({width: img.naturalWidth, height: img.naturalHeight}))
      };
      img.onerror = () => {
        this.setState({imageLoadError: true})
      };
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown-planner-event', this.onMouseDown);
    document.removeEventListener('mousemove-planner-event', this.onMouseMove);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.imageUri !== nextProps.imageUri) {
      let img = new Image;
      img.src = nextProps.imageUri;
      img.onload = () => {
        this.setState({imageLoadError: false});
        this.context.projectActions.setProperties(new Map({width: img.naturalWidth, height: img.naturalHeight}))
      };
      img.onerror = () => {
        this.setState({imageLoadError: true})
      };
    }
  }

  toggleHover1(e) {
    this.setState({hover1: !this.state.hover1})
  }

  toggleHover2(e) {
    this.setState({hover2: !this.state.hover2})
  }

  //畫線功能

  ClickCircle1(e) {
    var Circle1 = document.getElementById("Circle1")
    Circle1.style.display = ""
    this.setState({handleMouseMove1:true})
  }

  //給此處線段及圓圈id再從TutorialScale控制
  render() {
    let dist = pointsDistance(this.props.x1, this.props.y1, this.props.x2, this.props.y2);
    //scalechange2
    let scale = !isNaN(dist) && dist ? (this.props.distance.length / (dist) ) : 0;
    let half_w = this.props.width / 2;

    let ScaleRotation = Math.atan((this.props.y2 - this.props.y1)/(this.props.x2 - this.props.x1)) * 180 / Math.PI ;

    let ruler = !this.props.element.selected ? null : (
      <g>
        {/* 此處控制比例尺線段 */}
        <line id="Line" key="1" x1={this.props.x1} y1={this.props.y1} x2={this.props.x2} y2={this.props.y2} stroke={rulerColor}
              strokeWidth="4px" style = {{display:"none"}}/>
        <circle id = {"Circle1"}
          onMouseEnter={this.toggleHover1}
          onMouseLeave={this.toggleHover1}
          key="2"
          name="fst-anchor"
          cx={this.props.x1}
          cy={this.props.y1}
          r={this.state.hover1 || this.state.handleMouseMove1 ? hoverCircleRadius : grabCircleRadius}
          // style={this.state.hover1 || this.state.handleMouseMove1 ? hoverCircleStyle : grabCircleStyle}
          style = {{
            cursor: 'grab',
            fill: rulerColor,
            transition: 'r 150ms ease-in',
            display:"none"
          }}
          onClick = {this.ClickCircle1}/>

        <circle id = {"Circle2"}
          onMouseEnter={this.toggleHover2}
          onMouseLeave={this.toggleHover2}
          key="3"
          name="snd-anchor"
          cx={this.props.x2}
          cy={this.props.y2}
          r={this.state.hover2 || this.state.handleMouseMove2 ? hoverCircleRadius : grabCircleRadius}
          // style={this.state.hover2 || this.state.handleMouseMove2 ? hoverCircleStyle : grabCircleStyle}
          style = {{
            cursor: 'grab',
            fill: rulerColor,
            transition: 'r 150ms ease-in',
            display:"none"
          }}
          />

          {/* 顯示長度 */}

          <line id="path1" key="4" x1={this.props.x1 + (Math.sqrt(2)/2) * 0.01 * (this.props.x2 - this.props.x1 + this.props.y1 - this.props.y2)} 
            y1={this.props.y1 + (Math.sqrt(2)/2) * 0.01 * (this.props.x2 - this.props.x1 + this.props.y2 - this.props.y1) } 
            x2={this.props.x1 + (Math.sqrt(2)/2) * 0.2 * (this.props.x2 - this.props.x1 + this.props.y1 - this.props.y2) } 
            y2={this.props.y1 + (Math.sqrt(2)/2) * 0.2 * (this.props.x2 - this.props.x1 + this.props.y2 - this.props.y1) } 
            stroke={rulerColor} strokeWidth="5px" style = {{display:"none"}}/>

          <line id="path2" key="5" x1={this.props.x2 + (Math.sqrt(2)/2) * 0.01 * (this.props.x1 - this.props.x2 - this.props.y2 + this.props.y1)} 
            y1={this.props.y2 + (Math.sqrt(2)/2) * 0.01 * (-this.props.x1 + this.props.x2 + this.props.y1 - this.props.y2) } 
            x2={this.props.x2 + (Math.sqrt(2)/2) * 0.2 * (this.props.x1 - this.props.x2 - this.props.y2 + this.props.y1) } 
            y2={this.props.y2 + (Math.sqrt(2)/2) * 0.2 * (-this.props.x1 + this.props.x2 + this.props.y1 - this.props.y2) } 
            stroke={rulerColor} strokeWidth="5px" style = {{display:"none"}}/>

          <text id = "DistanceNumber" key="6" fill = {rulerColor} 
            dx = {(this.props.x1 + (Math.sqrt(2)/2) * 0.2 * (this.props.x2 - this.props.x1 + this.props.y1 - this.props.y2))*0.5 + (this.props.x2 + (Math.sqrt(2)/2) * 0.2 * (this.props.x1 - this.props.x2 - this.props.y2 + this.props.y1))*0.5 - 20}
            dy = {(this.props.y1 + (Math.sqrt(2)/2) * 0.2 * (this.props.x2 - this.props.x1 + this.props.y2 - this.props.y1))*0.5 + (this.props.y2 + (Math.sqrt(2)/2) * 0.2 * (-this.props.x1 + this.props.x2 + this.props.y1 - this.props.y2))*0.5 } 
            transform = {`rotate(${ScaleRotation} ${(this.props.x1 + (Math.sqrt(2)/2) * 0.2 * (this.props.x2 - this.props.x1 + this.props.y1 - this.props.y2))*0.5 + (this.props.x2 + (Math.sqrt(2)/2) * 0.2 * (this.props.x1 - this.props.x2 - this.props.y2 + this.props.y1))*0.5 }, ${(this.props.y1 + (Math.sqrt(2)/2) * 0.2 * (this.props.x2 - this.props.x1 + this.props.y2 - this.props.y1))*0.5 + (this.props.y2 + (Math.sqrt(2)/2) * 0.2 * (-this.props.x1 + this.props.x2 + this.props.y1 - this.props.y2))*0.5 } )`}
            style = {{
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "left",
              display: "none"
            }}>

            {parseInt(this.props.distance.length/100)} m

          </text>

      </g>
    );
//SVG
    return (
      <g
        transform={`scale(${scale}, ${scale}), scale(1,-1) translate(${-this.props.width / 2}, ${-this.props.height / 2})`}>
        {
          this.props.imageUri && !this.state.imageLoadError ?
            <image
              xlinkHref={this.props.imageUri}
              // 這邊可以改圖片預設放置位置
              x="0"
              y="0"
              width={this.props.width}
              height={this.props.height}
              opacity="0.8"
            /> :
            <g>
              <rect x="0" y="0" width={this.props.width} height={this.props.height} fill="#CCC"></rect>
              <text
                x={half_w}
                y={this.props.height / 2}
                textAnchor="middle"
                alignmentBaseline="central"
                fontFamily="Arial"
                fontSize="35"
                fill="#666"
              >
                <tspan x={half_w} dy="-2em">Set the image url on the component</tspan>
                <tspan x={half_w} dy="1em">property inside the sidebar,</tspan>
                <tspan x={half_w} dy="1em">click and move each vertex</tspan>
                <tspan x={half_w} dy="1em">of the ruler then set the real distance</tspan>
                <tspan x={half_w} dy="1em">in the component property</tspan>
              </text>
            </g>
        }
        {ruler}
      </g>
    )
  }
}

ImageFul.propTypes = {
  element: PropTypes.object.isRequired,
  // x1: PropTypes.number.isRequired,
  // y1: PropTypes.number.isRequired,
  // x2: PropTypes.number.isRequired,
  // y2: PropTypes.number.isRequired,
  distance: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  imageUri: PropTypes.string.isRequired,
  layer: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired
};

ImageFul.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  catalog: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
