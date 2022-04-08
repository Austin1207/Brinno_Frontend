import React, { Component } from 'react';
import loadingpic from './loading.gif';

var Loading = function Loading(_ref) {
    var left = _ref.left;

    return React.createElement(
        'div',
        null,
        React.createElement('img', { id: 'loading', src: loadingpic, style: {
                position: "absolute",
                width: 100,
                height: 100,
                zIndex: 9999,
                // left: 670,
                left: left,
                top: 300,
                display: "none"
            } })
    );
};

export default Loading;