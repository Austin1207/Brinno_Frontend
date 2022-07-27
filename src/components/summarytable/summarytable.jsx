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
//import html2canvas from 'html2canvas';
import {coverage_base64, camera_base64, battery_base64, BAC2000_base64} from './pdfimages';

const STYLE_TITLE = {
    height: '24px',
    fontSize: '20px',
    textAlign: 'center',
    color: '#989a9c',
    margin: '15px auto 15px auto'
}
const STYLE_NEEDUPDATE = {
    fontSize: '10px',
    color: '#e57500',
    margin: '0 auto 0 auto'
}
const data = [
    { name: "BAC2000", value: 3 },
    { name: "BCC200", value: 2 },
    { name: "BCC2000", value: 1 },
    { name: "MAC200DN", value: 1 }
  ];
// console.log(data[0].value);

export default function SummaryTable() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    /* html2canvas way */
    function takeScreenshot() {
        //使用html2canvas进行截图(需要加定时器延迟操作)
            html2canvas(document.getElementById('view'), {
                backgroundColor: null,//画出来的图片有白色的边框,不要可设置背景为透明色（null）
                useCORS: true, //支持图片跨域
                allowTaint: false,
                logging: true, //Enable log (use Web Console for get Errors and Warnings)
            }).then(canvas=>{
                imageBrowserDownload(canvas.toDataURL("image/jpg"));
            });
            // onrendered: function (canvas) {
            //     console.log('onrendered');
            //     imageBrowserDownload(canvas.toDataURL("image/jpg"));
            //    }
            //    });
    }
    //图片地址转为base64编码
    function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
        var dataURL = canvas.toDataURL("image/"+ext);
        return dataURL;
    }

    // let imageBrowserDownload = imageUri => {
    //     let fileOutputLink = document.createElement('a');
    //     let filename = 'output' + Date.now() + '.png';
    //     filename = window.prompt('Insert output filename', filename);
    //     if (!filename) return;
    
    //     fileOutputLink.setAttribute('download', filename);
    //     fileOutputLink.href = imageUri;
    //     fileOutputLink.style.display = 'none';
    //     document.body.appendChild(fileOutputLink);
    //     fileOutputLink.click();
    //     document.body.removeChild(fileOutputLink);
    //   };

    let saveSVGScreenshotToFile = event => {
        event.preventDefault();
    
        // First of all I need the svg content of the viewer
        let svgElements = document.getElementsByTagName('svg');
    
        // I get the element with max width (which is the viewer)
        let maxWidthSVGElement = svgElements[0];
        for (let i = 1; i < svgElements.length; i++) {
          if (svgElements[i].width.baseVal.value > maxWidthSVGElement.width.baseVal.value) {
            maxWidthSVGElement = svgElements[i];
          }
        }
        // console.log(maxWidthSVGElement);
    
        let serializer = new XMLSerializer();
    
        let img = new Image;
    
        // I create the new canvas to draw
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
    
        // Set width and height for the new canvas
        let heightAtt = document.createAttribute('height');
        heightAtt.value = maxWidthSVGElement.height.baseVal.value - 9650;
        canvas.setAttributeNode(heightAtt);
    
        let widthAtt = document.createAttribute('width');
        widthAtt.value = maxWidthSVGElement.width.baseVal.value - 15000;
        canvas.setAttributeNode(widthAtt);
    
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        img.crossOrigin = 'anonymous';
        img.src = `data:image/svg+xml;base64,${window.btoa(serializer.serializeToString(maxWidthSVGElement))}`;
        // img.src = `data:image/svg+xmlns http://www.we.org/1999/xlink;base64,${window.btoa(serializer.serializeToString(maxWidthSVGElement))}`;
    
        img.onload = () => {
            ctx.drawImage(img, -15000, -9650, maxWidthSVGElement.width.baseVal.value, maxWidthSVGElement.height.baseVal.value);
            //imageBrowserDownload(canvas.toDataURL());
            let pdfimg = canvas.toDataURL();
            let doc = new jsPDF('p', 'pt', [ 595.28,  841.89]);
            let coverage = localStorage.getItem("Coverage");
            let camera_count = localStorage.getItem("Camera_Count");
            doc.setFontSize(20);
            doc.text("Summary Report", 32, 24+20);
            doc.setFontSize(16);
            doc.setTextColor('#989a9c');
            doc.text("Most Cost-Effective Plan", 210, 26.5+16);
            doc.line(32, 65, 32+532, 65);
            doc.addImage(pdfimg, "PNG", 60.7, 76.7, 480, canvas.height*480/canvas.width);

            //Summary Box
            doc.setDrawColor(0);
            doc.setFillColor('#ffdfbf');
            doc.roundedRect(24, 449, 190, 33, 8, 8, "F");
            doc.setFontSize(16);
            doc.setTextColor('#e57500');
            doc.text("Summary", 44, 456+16);
            doc.addImage(coverage_base64, "PNG", 36, 502);
            doc.setFontSize(13.6);
            doc.setTextColor('#989a9c');
            doc.text("Camera Coverage", 108, 501.5+13.6);
            doc.setFontSize(15.9);
            doc.setTextColor('#222222');
            doc.text(String(coverage)+"%", 108, 529.5+15.9);        
            doc.addImage(camera_base64, "PNG", 36, 583);
            doc.setFontSize(13.6);
            doc.setTextColor('#989a9c');
            doc.text("Cameras Needed", 108, 585.5+13.6);
            doc.setFontSize(15.9);
            doc.setTextColor('#222222');
            doc.text(String(camera_count), 108, 613.5+15.9);
            doc.addImage(battery_base64, "PNG", 36, 659);
            doc.setFontSize(13.6);
            doc.setTextColor('#989a9c');
            doc.text("Battery Life", 108, 661.5+13.6);
            doc.setFontSize(15.9);
            doc.setTextColor('#222222');
            doc.text("7 Days", 108, 689.5+15.9);

            //Camera Details Box
            doc.setDrawColor(0);
            doc.setFillColor('#ffdfbf');
            doc.roundedRect(263, 449, 308, 33, 8, 8, "F");
            doc.setFontSize(16);
            doc.setTextColor('#e57500');
            doc.text("Camera Details", 283, 456+16);
            doc.addImage(BAC2000_base64, "PNG", 263, 486, 81, 81);
            doc.setFontSize(12);
            doc.setTextColor('#222222');
            doc.text("BAC2000", 372, 496+12);
            doc.setFontSize(12);
            doc.setTextColor('#989a9c');
            doc.text("Qty.", 372, 526+12);

            doc.line(263, 572, 263+308, 572);
            doc.setFontSize(15.9);
            doc.setTextColor('#222222');
            doc.text("Total Cost", 372, 572+6+15.9);

            doc.save('Summary Report.pdf');
                };
      };

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

    const Camera_Count = localStorage.getItem("Camera_Count")
    const Camera_Cost = parseInt(Camera_Count)*1400
    const Camera_Cost_USD = String(parseInt(Camera_Count)*1400) + " USD"

    return(
        <div id="SummaryTable" style={{width: '359px', textAlign: 'center'}}>
            <div style={{height: 54-20, marginTop: '10px'}}>
                <p style={STYLE_NEEDUPDATE}>Summary is not the most updated version.</p>
                <a id="updatesum" href="#" style={{...STYLE_NEEDUPDATE, cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}>Update now</a>
            </div>
            <Button
              id = "Export"
              variant="contained"
              sx={{ position: 'absolute', top: 14, right: 14, maxWidth: '36px', maxHeight: '36px', minWidth: '36px', minHeight: '36px',
              backgroundColor: '#FFFFFF', color: '#222222', "&:hover": {backgroundColor: '#989a9c', color: '#ffffff'}, cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}
              onClick = {saveSVGScreenshotToFile}
              //onClick = {takeScreenshot}
              >
                <LaunchIcon />
            </Button>
            <p style={STYLE_TITLE}>
                Camera Coverage
                </p>
            <Doughnut/>
            <Box pt={20/8}>
                <Divider/>
                <List>
                    <Box id='NumbersBattery'>
                    <ListItem>
                        <ListItemAvatar>
                        <img src={CameraIcon} alt={"CameraIcon"} style={{margin: 'auto 20px auto 4px'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Cameras Needed" secondary={Camera_Count} primaryTypographyProps={{fontSize: '20px'}} secondaryTypographyProps={{fontSize: '20px'}}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemAvatar>
                        <img src={BatteryIcon} alt={"BatteryIcon"} style={{margin: 'auto 20px auto 4px'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Battery Life" secondary="7 Days" primaryTypographyProps={{fontSize: '20px'}} secondaryTypographyProps={{fontSize: '20px'}}/>
                    </ListItem>
                    </Box>
                    <Divider/>
                    <ListItemButton onClick={handleClick} style={{cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'}}>
                        <ListItemAvatar>
                        <img src={CostIcon} alt={"CostIcon"} style={{margin: 'auto 20px auto 4px'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Total Cost" secondary={Camera_Cost_USD} primaryTypographyProps={{fontSize: '20px'}} secondaryTypographyProps={{fontSize: '20px'}}/>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Divider/>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItem>
                            <ListItemText secondary="Camera Details" secondaryTypographyProps={{fontSize: '20px', textAlign: 'center' }}/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <img src={BAC2000Icon} alt={"BAC2000Icon"} style={{margin: 'auto 20px auto 4px', width: '60px', height:'60px'}}/>
                            </ListItemAvatar>
                            <ListItemText primary={
                                <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                                    <p style={{ flexGrow: 1, margin: '0 auto 0 auto' }}>BCC2000<br/>*{Camera_Count}</p>
                                    <p style={{ flexGrow: 1, margin: '0 auto 0 auto' }}>${Camera_Cost}</p>
                                </div>}
                                secondary={
                                <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                                    <p style={{ flexGrow: 1, margin: '0 auto 0 auto' }}>Unit Price</p>
                                    <p style={{ flexGrow: 1, margin: '0 auto 0 auto' }}>$1400</p>
                                </div>}
                                primaryTypographyProps={{fontSize: '12px'}} secondaryTypographyProps={{fontSize: '12px'}} />
                        </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </div>
    );
}