'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _scale = require('./scale.png');

var _scale2 = _interopRequireDefault(_scale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Scale = function Scale(event) {
    console.log("Scale");
};
var Redo = function Redo(event) {
    console.log("Redo");
};
var Undo = function Undo(event) {
    console.log("Undo");
};

var Bottom = function Bottom(_ref) {
    var state = _ref.state;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { id: 'ScaleButton', onClick: Scale, style: {
                    position: "absolute",
                    width: "55px",
                    height: "48px",
                    margin: "0px 28",
                    padding: "17px 10px 16px 11px",
                    border: "none",
                    borderRadius: "3px",
                    boxShadow: "1px 1px 12px 1px rgba(188, 188, 188, 0.64)",
                    zIndex: 10000,
                    backgroundColor: "#fff",
                    right: "136px",
                    bottom: "35px",
                    display: ""
                } },
            React.createElement('img', { src: _scale2.default })
        ),
        React.createElement(
            'button',
            { id: 'RedoButton', onClick: Redo, style: {
                    position: "absolute",
                    width: "55px",
                    height: "48px",
                    margin: "0px 28",
                    padding: "17px 10px 16px 11px",
                    border: "none",
                    borderRadius: "3px",
                    boxShadow: "1px 1px 12px 1px rgba(188, 188, 188, 0.64)",
                    zIndex: 10000,
                    backgroundColor: "#fff",
                    right: "219px",
                    bottom: "35px",
                    display: ""
                } },
            React.createElement('img', { src: _scale2.default })
        )
    );
};

exports.default = Bottom;