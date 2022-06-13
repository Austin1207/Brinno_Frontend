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
console.log(data[0].value);

export default function SummaryTable() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return(
        <div style={{width: '360px', textAlign: 'center'}}>
            <div style={{height: 54-20, marginTop: '10px'}}>
                <p style={STYLE_NEEDUPDATE}>Summary is not the most updated version.</p>
                <a id="updatesum" href="#" style={STYLE_NEEDUPDATE}>Update now</a>
            </div>
            <p style={STYLE_TITLE}>
                Camera Coverage
                </p>
            <Doughnut/>
            <Box pt={20/8}>
                <Divider/>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                        <img src={CameraIcon} alt={"CameraIcon"} style={{margin: 'auto 20px auto 4px'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Cameras Needed" secondary="4" primaryTypographyProps={{fontSize: '20px'}} secondaryTypographyProps={{fontSize: '20px'}}/>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemAvatar>
                        <img src={BatteryIcon} alt={"BatteryIcon"} style={{margin: 'auto 20px auto 4px'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Battery Life" secondary="7 Days" primaryTypographyProps={{fontSize: '20px'}} secondaryTypographyProps={{fontSize: '20px'}}/>
                    </ListItem>
                    <Divider/>
                    <ListItemButton onClick={handleClick}>
                        <ListItemAvatar>
                        <img src={CostIcon} alt={"CostIcon"} style={{margin: 'auto 20px auto 4px'}}/>
                        </ListItemAvatar>
                        <ListItemText primary="Total Cost" secondary="7,800 USD" primaryTypographyProps={{fontSize: '20px'}} secondaryTypographyProps={{fontSize: '20px'}}/>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Divider/>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItem>
                            <ListItemText secondary="Camera Details" secondaryTypographyProps={{fontSize: '20px', textAlign: 'center' }}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={
                                <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                                    <p style={{ flexGrow: 1, margin: '0 auto 0 auto' }}>BCC2000<br/>x1</p>
                                    <p style={{ flexGrow: 1, margin: '0 auto 0 auto' }}>$2,800</p>
                                </div>}
                                secondary={
                                <div style={{display: 'flex', flexFlow: 'row wrap'}}>
                                    <p style={{ flexGrow: 1, margin: '0 auto 0 auto' }}>Unit Price</p>
                                    <p style={{ flexGrow: 1, margin: '0 auto 0 auto' }}>$1,400</p>
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