var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import * as React from 'react';
import Doughnut from './doughnut';
import Divider from '@mui/material/Divider';
import Box from '@material-ui/core/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import CameraIcon from './camera.png';
import BatteryIcon from './battery.png';
import CostIcon from './cost.png';
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import BAC2000Icon from '../../../demo/src/catalog/items/BAC2000/BAC2000.png';
import { createTheme } from '@mui/material';
import jsPDF from 'jspdf';
//import {PdfReport} from './pdfreport';
// import html2canvas from 'html2canvas';
import { coverage_base64, camera_base64, battery_base64, BAC2000_base64 } from './pdfimages';

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

export default function SummaryTable() {
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
            var doc = new jsPDF('p', 'pt', [595.28, 841.89]);
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
            doc.addImage(coverage_base64, "PNG", 36, 502);
            doc.setFontSize(13.6);
            doc.setTextColor('#989a9c');
            doc.text("Camera Coverage", 108, 501.5 + 13.6);
            doc.setFontSize(15.9);
            doc.setTextColor('#222222');
            doc.text(String(coverage) + "%", 108, 529.5 + 15.9);
            doc.addImage(camera_base64, "PNG", 36, 583);
            doc.setFontSize(13.6);
            doc.setTextColor('#989a9c');
            doc.text("Cameras Needed", 108, 585.5 + 13.6);
            doc.setFontSize(15.9);
            doc.setTextColor('#222222');
            doc.text(String(camera_count), 108, 613.5 + 15.9);
            doc.addImage(battery_base64, "PNG", 36, 659);
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
            doc.addImage(BAC2000_base64, "PNG", 263, 486, 81, 81);
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
            Button,
            {
                id: 'Export',
                variant: 'contained',
                sx: { position: 'absolute', top: 14, right: 14, maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
                    backgroundColor: '#FFFFFF', color: '#222222', "&:hover": { backgroundColor: '#989a9c', color: '#ffffff' }, cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' },
                onClick: saveSVGScreenshotToFile
            },
            React.createElement(LaunchIcon, null)
        ),
        React.createElement(
            'p',
            { style: STYLE_TITLE },
            'Camera Coverage'
        ),
        React.createElement(Doughnut, null),
        React.createElement(
            Box,
            { pt: 20 / 8 },
            React.createElement(Divider, null),
            React.createElement(
                List,
                null,
                React.createElement(
                    Box,
                    { id: 'NumbersBattery' },
                    React.createElement(
                        ListItem,
                        null,
                        React.createElement(
                            ListItemAvatar,
                            null,
                            React.createElement('img', { src: CameraIcon, alt: "CameraIcon", style: { margin: 'auto 20px auto 4px' } })
                        ),
                        React.createElement(ListItemText, { primary: 'Cameras Needed', secondary: Camera_Count, primaryTypographyProps: { fontSize: '20px' }, secondaryTypographyProps: { fontSize: '20px' } })
                    ),
                    React.createElement(Divider, null),
                    React.createElement(
                        ListItem,
                        null,
                        React.createElement(
                            ListItemAvatar,
                            null,
                            React.createElement('img', { src: BatteryIcon, alt: "BatteryIcon", style: { margin: 'auto 20px auto 4px' } })
                        ),
                        React.createElement(ListItemText, { primary: 'Battery Life', secondary: '7 Days', primaryTypographyProps: { fontSize: '20px' }, secondaryTypographyProps: { fontSize: '20px' } })
                    )
                ),
                React.createElement(Divider, null),
                React.createElement(
                    ListItemButton,
                    { onClick: handleClick, style: { cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer' } },
                    React.createElement(
                        ListItemAvatar,
                        null,
                        React.createElement('img', { src: CostIcon, alt: "CostIcon", style: { margin: 'auto 20px auto 4px' } })
                    ),
                    React.createElement(ListItemText, { primary: 'Total Cost', secondary: Camera_Cost_USD, primaryTypographyProps: { fontSize: '20px' }, secondaryTypographyProps: { fontSize: '20px' } }),
                    open ? React.createElement(ExpandLess, null) : React.createElement(ExpandMore, null)
                ),
                React.createElement(Divider, null),
                React.createElement(
                    Collapse,
                    { 'in': open, timeout: 'auto', unmountOnExit: true },
                    React.createElement(
                        List,
                        { component: 'div', disablePadding: true },
                        React.createElement(
                            ListItem,
                            null,
                            React.createElement(ListItemText, { secondary: 'Camera Details', secondaryTypographyProps: { fontSize: '20px', textAlign: 'center' } })
                        ),
                        React.createElement(
                            ListItem,
                            null,
                            React.createElement(
                                ListItemAvatar,
                                null,
                                React.createElement('img', { src: BAC2000Icon, alt: "BAC2000Icon", style: { margin: 'auto 20px auto 4px', width: '60px', height: '60px' } })
                            ),
                            React.createElement(ListItemText, { primary: React.createElement(
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