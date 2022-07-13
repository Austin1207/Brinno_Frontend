"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Optimizing = function Optimizing(_ref) {
    var left = _ref.left;

    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "button",
            { id: "optimizing", style: {
                    position: "absolute",
                    width: "160px",
                    height: "84px",
                    zIndex: 99999,
                    // left: 670,
                    left: left,
                    top: "12.4%",
                    display: "none",
                    borderRadius: "8px",
                    backgroundColor: "#222222",
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "normal",
                    color: "#ffffff"
                } },
            "Optimizing."
        )
    );
};

exports.default = Optimizing;