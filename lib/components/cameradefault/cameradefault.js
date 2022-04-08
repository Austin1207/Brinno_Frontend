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
    key: 'getLS',
    value: function getLS() {
      var data = JSON.parse(localStorage.getItem('react-planner_v0'));
      var lines = Object.entries(data.layers.layer1.lines);
      var linesarr = Object.keys(lines);
      var wantArea = [];
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
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var state = this.props.state,
          _context = this.context,
          itemsActions = _context.itemsActions,
          linesActions = _context.linesActions;

      var showHideSidepanel = this.state.showHideSidepanel;

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