'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exportjsPDF = undefined;

var _jspdf = require('jspdf');

var _jspdf2 = _interopRequireDefault(_jspdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exportjsPDF = function exportjsPDF() {
    var doc = new _jspdf2.default();
    doc.text(20, 20, 'Hello world!');
    doc.save('document.pdf');
};

exports.exportjsPDF = exportjsPDF;