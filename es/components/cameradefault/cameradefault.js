var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Container from '@mui/material/Container';
import Sidepanel from '../sidepanel';
import Fab from '@mui/material/Fab';

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

      return React.createElement(
        'div',
        null,
        showHideSidepanel && React.createElement(Sidepanel, { state: state }),
        React.createElement(
          Container,
          {
            maxWidth: 'sm',
            sx: { pl: 0, pr: 0 }
          },
          React.createElement(
            Fab,
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
            React.createElement(CameraAltIcon, {
              style: { fill: 'white' }
            })
          )
        )
      );
    }
  }]);

  return CameraDefault;
}(Component);

export default CameraDefault;


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
  translator: PropTypes.object.isRequired
};