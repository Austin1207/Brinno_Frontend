'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loading = require('./loading.gif');

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(_ref) {
    var left = _ref.left;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { id: 'loading', src: _loading2.default, style: {
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

exports.default = Loading;