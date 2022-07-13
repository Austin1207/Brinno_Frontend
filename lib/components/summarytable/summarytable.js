'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//import {PdfReport} from './pdfreport';
// import html2canvas from 'html2canvas';


exports.default = SummaryTable;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _doughnut = require('./doughnut');

var _doughnut2 = _interopRequireDefault(_doughnut);

var _Divider = require('@mui/material/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Box = require('@material-ui/core/Box');

var _Box2 = _interopRequireDefault(_Box);

var _List = require('@mui/material/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@mui/material/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = require('@mui/material/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _ListItemButton = require('@mui/material/ListItemButton');

var _ListItemButton2 = _interopRequireDefault(_ListItemButton);

var _ListItemIcon = require('@mui/material/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _Collapse = require('@mui/material/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _ListItemAvatar = require('@mui/material/ListItemAvatar');

var _ListItemAvatar2 = _interopRequireDefault(_ListItemAvatar);

var _Avatar = require('@mui/material/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Image = require('@mui/icons-material/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Work = require('@mui/icons-material/Work');

var _Work2 = _interopRequireDefault(_Work);

var _MoveToInbox = require('@mui/icons-material/MoveToInbox');

var _MoveToInbox2 = _interopRequireDefault(_MoveToInbox);

var _ExpandLess = require('@mui/icons-material/ExpandLess');

var _ExpandLess2 = _interopRequireDefault(_ExpandLess);

var _ExpandMore = require('@mui/icons-material/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _StarBorder = require('@mui/icons-material/StarBorder');

var _StarBorder2 = _interopRequireDefault(_StarBorder);

var _camera = require('./camera.png');

var _camera2 = _interopRequireDefault(_camera);

var _battery = require('./battery.png');

var _battery2 = _interopRequireDefault(_battery);

var _cost = require('./cost.png');

var _cost2 = _interopRequireDefault(_cost);

var _Button = require('@mui/material/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Launch = require('@mui/icons-material/Launch');

var _Launch2 = _interopRequireDefault(_Launch);

var _BAC = require('../../../demo/src/catalog/items/BAC2000/BAC2000.png');

var _BAC2 = _interopRequireDefault(_BAC);

var _material = require('@mui/material');

var _jspdf = require('jspdf');

var _jspdf2 = _interopRequireDefault(_jspdf);

var _pdfimages = require('./pdfimages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var STYLE_TITLE = {
    height: '24px',
    fontSize: '20px',
    textAlign: 'center',
    color: '#989a9c',
    margin: '15px auto 15px auto'
};
var STYLE_NEEDUPDATE = {
    fontSize: '10px',
    color: '#e57500',
    margin: '0 auto 0 auto'
};
var data = [{ name: "BAC2000", value: 3 }, { name: "BCC200", value: 2 }, { name: "BCC2000", value: 1 }, { name: "MAC200DN", value: 1 }];
console.log(data[0].value);

function SummaryTable() {
    var _React$useState = React.useState(true),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

    var handleClick = function handleClick() {
        setOpen(!open);
    };

    var imageBrowserDownload = function imageBrowserDownload(imageUri) {
        var fileOutputLink = document.createElement('a');

        var filename = 'output' + Date.now() + '.png';
        filename = window.prompt('Insert output filename', filename);
        if (!filename) return;

        fileOutputLink.setAttribute('download', filename);
        fileOutputLink.href = imageUri;
        fileOutputLink.style.display = 'none';
        document.body.appendChild(fileOutputLink);
        fileOutputLink.click();
        document.body.removeChild(fileOutputLink);
    };

    var saveSVGScreenshotToFile = function saveSVGScreenshotToFile(event) {
        event.preventDefault();

        // First of all I need the svg content of the viewer
        var svgElements = document.getElementsByTagName('svg');

        // I get the element with max width (which is the viewer)
        var maxWidthSVGElement = svgElements[0];
        for (var i = 1; i < svgElements.length; i++) {
            if (svgElements[i].width.baseVal.value > maxWidthSVGElement.width.baseVal.value) {
                maxWidthSVGElement = svgElements[i];
            }
        }

        var serializer = new XMLSerializer();

        var img = new Image();

        // I create the new canvas to draw
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        // Set width and height for the new canvas
        var heightAtt = document.createAttribute('height');
        heightAtt.value = maxWidthSVGElement.height.baseVal.value;
        canvas.setAttributeNode(heightAtt);

        var widthAtt = document.createAttribute('width');
        widthAtt.value = maxWidthSVGElement.width.baseVal.value;
        canvas.setAttributeNode(widthAtt);

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        img.crossOrigin = 'anonymous';
        img.src = 'data:image/svg+xml;base64,' + window.btoa(serializer.serializeToString(maxWidthSVGElement));

        img.onload = function () {
            ctx.drawImage(img, 0, 0, maxWidthSVGElement.width.baseVal.value, maxWidthSVGElement.height.baseVal.value);
            //imageBrowserDownload(canvas.toDataURL());
            var pdfimg = canvas.toDataURL();
            var doc = new _jspdf2.default('p', 'pt', [595.28, 841.89]);
            var coverage = localStorage.getItem("Coverage");
            var camera_count = localStorage.getItem("Camera_Count");
            doc.setFontSize(20);
            doc.text("Summary Report", 32, 24 + 20);
            doc.setFontSize(16);
            doc.setTextColor('#989a9c');
            doc.text("Most Cost-Effective Plan", 210, 26.5 + 16);
            doc.line(32, 65, 32 + 532, 65);
            doc.addImage(pdfimg, "PNG", 60.7, 76.7, 480, 320);
            //Summary Box
            doc.setDrawColor(0);
            doc.setFillColor('#ffdfbf');
            doc.roundedRect(24, 449, 190, 33, 8, 8, "F");
            doc.setFontSize(16);
            doc.setTextColor('#e57500');
            doc.text("Summary", 44, 456 + 16);
            doc.addImage(_pdfimages.coverage_base64, "PNG", 36, 502);
            doc.setFontSize(13.6);
            doc.setTextColor('#989a9c');
            doc.text("Camera Coverage", 108, 501.5 + 13.6);
            doc.setFontSize(15.9);
            doc.setTextColor('#222222');
            doc.text(String(coverage) + "%", 108, 529.5 + 15.9);
            doc.addImage(_pdfimages.camera_base64, "PNG", 36, 583);
            doc.setFontSize(13.6);
            doc.setTextColor('#989a9c');
            doc.text("Cameras Needed", 108, 585.5 + 13.6);
            doc.setFontSize(15.9);
            doc.setTextColor('#222222');
            doc.text(String(camera_count), 108, 613.5 + 15.9);
            doc.addImage(_pdfimages.battery_base64, "PNG", 36, 659);
            doc.setFontSize(13.6);
            doc.setTextColor('#989a9c');
            doc.text("Battery Life", 108, 661.5 + 13.6);
            doc.setFontSize(15.9);
            doc.setTextColor('#222222');
            doc.text("7 Days", 108, 689.5 + 15.9);

            //Camera Details Box
            doc.setDrawColor(0);
            doc.setFillColor('#ffdfbf');
            doc.roundedRect(263, 449, 308, 33, 8, 8, "F");
            doc.setFontSize(16);
            doc.setTextColor('#e57500');
            doc.text("Camera Details", 283, 456 + 16);
            doc.addImage(_pdfimages.BAC2000_base64, "PNG", 263, 486, 81, 81);
            doc.setFontSize(12);
            doc.setTextColor('#222222');
            doc.text("BAC2000", 372, 496 + 12);
            doc.setFontSize(12);
            doc.setTextColor('#989a9c');
            doc.text("Qty.", 372, 526 + 12);

            doc.line(263, 572, 263 + 308, 572);
            doc.setFontSize(15.9);
            doc.setTextColor('#222222');
            doc.text("Total Cost", 372, 572 + 6 + 15.9);
            doc.save('Summary Report.pdf');
            console.log(canvas.toDataURL());
        };
    };

    // const exportTest = () => {
    //     var url = "https://tooljsonoutput.s3.ap-northeast-1.amazonaws.com/export.pdf";
    //     window.open(url)
    // }

    // const exportjsPDF = () => {
    //     let doc = new jsPDF('p', 'pt', [ 595.28,  841.89]);
    //     let coverage = localStorage.getItem("Coverage");
    //     let camera_count = localStorage.getItem("Camera_Count");
    //     doc.setFontSize(20);
    //     doc.text("Summary Report", 32, 24+20);
    //     doc.setFontSize(16);
    //     doc.setTextColor('#989a9c');
    //     doc.text("Most Cost-Effective Plan", 210, 26.5+16);
    //     doc.line(32, 65, 32+532, 65);
    //     //Summary Box
    //     doc.setDrawColor(0);
    //     doc.setFillColor('#ffdfbf');
    //     doc.roundedRect(24, 449, 190, 33, 8, 8, "F");
    //     doc.setFontSize(16);
    //     doc.setTextColor('#e57500');
    //     doc.text("Summary", 44, 456+16);
    //     doc.addImage(coverage_base64, "PNG", 36, 502);
    //     doc.setFontSize(13.6);
    //     doc.setTextColor('#989a9c');
    //     doc.text("Camera Coverage", 108, 501.5+13.6);
    //     doc.setFontSize(15.9);
    //     doc.setTextColor('#222222');
    //     doc.text(String(coverage)+"%", 108, 529.5+15.9);        
    //     doc.addImage(camera_base64, "PNG", 36, 583);
    //     doc.setFontSize(13.6);
    //     doc.setTextColor('#989a9c');
    //     doc.text("Cameras Needed", 108, 585.5+13.6);
    //     doc.setFontSize(15.9);
    //     doc.setTextColor('#222222');
    //     doc.text(String(camera_count), 108, 613.5+15.9);
    //     doc.addImage(battery_base64, "PNG", 36, 659);
    //     doc.setFontSize(13.6);
    //     doc.setTextColor('#989a9c');
    //     doc.text("Battery Life", 108, 661.5+13.6);
    //     doc.setFontSize(15.9);
    //     doc.setTextColor('#222222');
    //     doc.text("7 Days", 108, 689.5+15.9);

    //     //Camera Details Box
    //     doc.setDrawColor(0);
    //     doc.setFillColor('#ffdfbf');
    //     doc.roundedRect(263, 449, 308, 33, 8, 8, "F");
    //     doc.setFontSize(16);
    //     doc.setTextColor('#e57500');
    //     doc.text("Camera Details", 283, 456+16);
    //     doc.addImage(BAC2000_base64, "PNG", 263, 486, 81, 81);
    //     doc.setFontSize(12);
    //     doc.setTextColor('#222222');
    //     doc.text("BAC2000", 372, 496+12);
    //     doc.setFontSize(12);
    //     doc.setTextColor('#989a9c');
    //     doc.text("Qty.", 372, 526+12);

    //     doc.line(263, 572, 263+308, 572);
    //     doc.setFontSize(15.9);
    //     doc.setTextColor('#222222');
    //     doc.text("Total Cost", 372, 572+6+15.9);

    //     doc.save('Summary Report.pdf');
    // }

    var Camera_Count = localStorage.getItem("Camera_Count");
    var Camera_Cost = parseInt(Camera_Count) * 1400;
    var Camera_Cost_USD = String(parseInt(Camera_Count) * 1400) + " USD";

    return React.createElement(
        'div',
        { style: { width: '359px', textAlign: 'center' } },
        React.createElement(
            'div',
            { style: { height: 54 - 20, marginTop: '10px' } },
            React.createElement(
                'p',
                { style: STYLE_NEEDUPDATE },
                'Summary is not the most updated version.'
            ),
            React.createElement(
                'a',
                { id: 'updatesum', href: '#', style: _extends({}, STYLE_NEEDUPDATE, { cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' }) },
                'Update now'
            )
        ),
        React.createElement(
            _Button2.default,
            {
                id: 'Export',
                variant: 'contained',
                sx: { position: 'absolute', top: 14, right: 14, maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
                    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": { backgroundColor: '#989a9c', color: '#ffffff' }, cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' },
                onClick: saveSVGScreenshotToFile
            },
            React.createElement(_Launch2.default, null)
        ),
        React.createElement(
            'p',
            { style: STYLE_TITLE },
            'Camera Coverage'
        ),
        React.createElement(_doughnut2.default, null),
        React.createElement(
            _Box2.default,
            { pt: 20 / 8 },
            React.createElement(_Divider2.default, null),
            React.createElement(
                _List2.default,
                null,
                React.createElement(
                    _Box2.default,
                    { id: 'NumbersBattery' },
                    React.createElement(
                        _ListItem2.default,
                        null,
                        React.createElement(
                            _ListItemAvatar2.default,
                            null,
                            React.createElement('img', { src: _camera2.default, alt: "CameraIcon", style: { margin: 'auto 20px auto 4px' } })
                        ),
                        React.createElement(_ListItemText2.default, { primary: 'Cameras Needed', secondary: Camera_Count, primaryTypographyProps: { fontSize: '20px' }, secondaryTypographyProps: { fontSize: '20px' } })
                    ),
                    React.createElement(_Divider2.default, null),
                    React.createElement(
                        _ListItem2.default,
                        null,
                        React.createElement(
                            _ListItemAvatar2.default,
                            null,
                            React.createElement('img', { src: _battery2.default, alt: "BatteryIcon", style: { margin: 'auto 20px auto 4px' } })
                        ),
                        React.createElement(_ListItemText2.default, { primary: 'Battery Life', secondary: '7 Days', primaryTypographyProps: { fontSize: '20px' }, secondaryTypographyProps: { fontSize: '20px' } })
                    )
                ),
                React.createElement(_Divider2.default, null),
                React.createElement(
                    _ListItemButton2.default,
                    { onClick: handleClick, style: { cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' } },
                    React.createElement(
                        _ListItemAvatar2.default,
                        null,
                        React.createElement('img', { src: _cost2.default, alt: "CostIcon", style: { margin: 'auto 20px auto 4px' } })
                    ),
                    React.createElement(_ListItemText2.default, { primary: 'Total Cost', secondary: Camera_Cost_USD, primaryTypographyProps: { fontSize: '20px' }, secondaryTypographyProps: { fontSize: '20px' } }),
                    open ? React.createElement(_ExpandLess2.default, null) : React.createElement(_ExpandMore2.default, null)
                ),
                React.createElement(_Divider2.default, null),
                React.createElement(
                    _Collapse2.default,
                    { 'in': open, timeout: 'auto', unmountOnExit: true },
                    React.createElement(
                        _List2.default,
                        { component: 'div', disablePadding: true },
                        React.createElement(
                            _ListItem2.default,
                            null,
                            React.createElement(_ListItemText2.default, { secondary: 'Camera Details', secondaryTypographyProps: { fontSize: '20px', textAlign: 'center' } })
                        ),
                        React.createElement(
                            _ListItem2.default,
                            null,
                            React.createElement(
                                _ListItemAvatar2.default,
                                null,
                                React.createElement('img', { src: _BAC2.default, alt: "BAC2000Icon", style: { margin: 'auto 20px auto 4px', width: '60px', height: '60px' } })
                            ),
                            React.createElement(_ListItemText2.default, { primary: React.createElement(
                                    'div',
                                    { style: { display: 'flex', flexFlow: 'row wrap' } },
                                    React.createElement(
                                        'p',
                                        { style: { flexGrow: 1, margin: '0 auto 0 auto' } },
                                        'BCC2000',
                                        React.createElement('br', null),
                                        '*',
                                        Camera_Count
                                    ),
                                    React.createElement(
                                        'p',
                                        { style: { flexGrow: 1, margin: '0 auto 0 auto' } },
                                        '$',
                                        Camera_Cost
                                    )
                                ),
                                secondary: React.createElement(
                                    'div',
                                    { style: { display: 'flex', flexFlow: 'row wrap' } },
                                    React.createElement(
                                        'p',
                                        { style: { flexGrow: 1, margin: '0 auto 0 auto' } },
                                        'Unit Price'
                                    ),
                                    React.createElement(
                                        'p',
                                        { style: { flexGrow: 1, margin: '0 auto 0 auto' } },
                                        '$1400'
                                    )
                                ),
                                primaryTypographyProps: { fontSize: '12px' }, secondaryTypographyProps: { fontSize: '12px' } })
                        )
                    )
                )
            )
        )
    );
}