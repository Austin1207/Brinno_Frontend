import React, { Component } from 'react';

var Loading = function Loading(_ref) {
    var left = _ref.left;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { id: "loading", style: {
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
            "Loading."
        ),
        React.createElement("button", { id: "overlay", style: {
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 10000,
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } })
    );
};

export default Loading;