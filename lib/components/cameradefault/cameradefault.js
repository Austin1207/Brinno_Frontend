'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CameraAlt = require('@mui/icons-material/CameraAlt');

var _CameraAlt2 = _interopRequireDefault(_CameraAlt);

var _Container = require('@mui/material/Container');

var _Container2 = _interopRequireDefault(_Container);

var _sidepanel = require('../sidepanel');

var _sidepanel2 = _interopRequireDefault(_sidepanel);

var _Fab = require('@mui/material/Fab');

var _Fab2 = _interopRequireDefault(_Fab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CameraDefault = function (_Component) {
  _inherits(CameraDefault, _Component);

  function CameraDefault(props, context) {
    _classCallCheck(this, CameraDefault);

    var _this = _possibleConstructorReturn(this, (CameraDefault.__proto__ || Object.getPrototypeOf(CameraDefault)).call(this, props, context));

    _this.state = {
      showHideSidepanel: false
    };
    return _this;
  }

  _createClass(CameraDefault, [{
    key: 'hideSidepanel',
    value: function hideSidepanel() {
      this.setState({ showHideSidepanel: !this.state.showHideSidepanel });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var state = this.props.state,
          _context = this.context,
          itemsActions = _context.itemsActions,
          linesActions = _context.linesActions;

      var showHideSidepanel = this.state.showHideSidepanel;

      var getLS = function getLS(e) {
        var data = JSON.parse(localStorage.getItem('react-planner_v0'));
        var lines = Object.entries(data.layers.layer1.lines);
        var wantVertices = new Array();
        for (var i = 0; i < lines.length; i++) {
          if (lines[i][1].type == "install area") {
            wantVertices.push(lines[i][1].vertices);
          }
        }
        wantVertices = wantVertices.flat();
        wantVertices = wantVertices.filter(function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
        });
        console.log(wantVertices);
        var vertices = Object.entries(data.layers.layer1.vertices);
        var allX = new Array();
        var allY = new Array();
        for (var _i = 0; _i < vertices.length; _i++) {
          for (var j = 0; j < wantVertices.length; j++) {
            if (vertices[_i][1].id == wantVertices[j]) {
              allX.push(vertices[_i][1].x);
              allY.push(vertices[_i][1].y);
            }
          }
        }
        console.log(allX);
        console.log(allY);
        var Xmax = Math.max.apply(Math, allX);
        var Xmin = Math.min.apply(Math, allX);
        var Ymax = Math.max.apply(Math, allY);
        var Ymin = Math.min.apply(Math, allY);
        console.log(Xmax, Xmin, Ymax, Ymin);
        var itemsActions = _this2.context.itemsActions;

        itemsActions.selectToolDrawingItem('camera_BAC2000');
        itemsActions.endDrawingItem('layer1', Xmax, Ymax);
        itemsActions.endDrawingItem('layer1', Xmax, Ymin);
        itemsActions.endDrawingItem('layer1', Xmin, Ymax);
        itemsActions.endDrawingItem('layer1', Xmin, Ymin);
        var data_new = JSON.parse(localStorage.getItem('react-planner_v0'));
        var items = Object.entries(data_new.layers.layer1.items);
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
      };

      return _react2.default.createElement(
        'div',
        null,
        showHideSidepanel && _react2.default.createElement(_sidepanel2.default, { state: state }),
        _react2.default.createElement(
          _Container2.default,
          {
            maxWidth: 'sm',
            sx: { pl: 0, pr: 0 }
          },
          _react2.default.createElement(
            _Fab2.default,
            {
              sx: { position: 'absolute',
                bottom: 16,
                right: 16 + 80 + 80,
                backgroundColor: '#FF8200',
                "&:hover": { backgroundColor: '#FF8200' } },
              onClick: function onClick() {
                return _this2.getLS();
              },
              'aria-label': 'Add Camera' },
            _react2.default.createElement(_CameraAlt2.default, {
              style: { fill: 'white' }
            })
          )
        )
      );
    }
  }]);

  return CameraDefault;
}(_react.Component);

exports.default = CameraDefault;


CameraDefault.propTypes = {
  state: _propTypes2.default.object.isRequired,
  //width: PropTypes.number.isRequired,
  //height: PropTypes.number.isRequired,
  allowProjectFileSupport: _propTypes2.default.bool.isRequired,
  toolbarButtons: _propTypes2.default.array
};

CameraDefault.contextTypes = {
  projectActions: _propTypes2.default.object.isRequired,
  viewer2DActions: _propTypes2.default.object.isRequired,
  viewer3DActions: _propTypes2.default.object.isRequired,
  linesActions: _propTypes2.default.object.isRequired,
  holesActions: _propTypes2.default.object.isRequired,
  itemsActions: _propTypes2.default.object.isRequired,
  translator: _propTypes2.default.object.isRequired
};