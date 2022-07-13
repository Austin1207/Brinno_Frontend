import React, { Component } from 'react';

var Optimizing = function Optimizing(_ref) {
    var left = _ref.left;

    return React.createElement(
        "div",
        null,
        React.createElement(
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

export default Optimizing;