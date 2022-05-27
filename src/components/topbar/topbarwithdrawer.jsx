import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import TextField from '@mui/material/TextField';
import CatalogItem from '../catalog-view/catalog-item';
import CatalogChangeItem from '../catalog-view/catalog-changeitem';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import { elementsToDisplay } from './elementstodisplay';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 260;
const useStyles = makeStyles({
  drawerPaper: {
    marginLeft: "69px"
  }
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'openDrawer',
})(({ theme, openDrawer }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(openDrawer && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
  console.log("1")
};
const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
  console.log("2")
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
  console.log("3")
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
  console.log("4")
};

export default function TopBar({ state, linesActions, projectActions, sceneActions, showDrawer}) {
  const theme = useTheme();
  const classes = useStyles();
  const [openPoper, setOpenPoper] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpenPoper((prevOpen) => !prevOpen);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handlePoperClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenPoper(false);
  };
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Outline onlick with layer select
  const DrawConstructionArea = () => {
    projectActions.unselectAll();
    sceneActions.selectLayer("layer2")
    linesActions.selectToolDrawingLine('wall');
  }

  const DrawInterestArea = () => {
    projectActions.unselectAll()
    sceneActions.selectLayer("layer2")
    linesActions.selectToolDrawingLine('install area')
  }
  //change camera
  let camearaSelected = state.getIn(['scene', 'layers', 'layer2', 'selected']).items.size == 1;

  //Gernerate(checkforbidden及check403待輸出json出來後修改)
  const s3jsoninputurl = "http://localhost:3000/s3jsoninputUrl"

  function showLoading() {
    document.getElementById("loading").style.display = "";
  }

  function closeLoading() {
    document.getElementById("loading").style.display = "none";
  }

  // function checkForbidden (url, resultJson, status) {
  //   var req = new XMLHttpRequest();
  //   req.open('GET', url, false);
  //   req.send();
  //   if (req.status == 200) {
  //     closeLoading();

  //     projectActions.loadProject(resultJson);
  //     status = 1;
  //     return status;
  //   }
  // };

  async function GernerateOnclick(){
    showLoading();
    const json_data = state.get('scene').toJS();
    const {url} = await fetch(s3jsoninputurl).then(res => res.json());

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(json_data)
    })

    console.log(url)

    const InputUrl = url.split('?')[0]
    const objName = InputUrl.split('/')[3]
    const JsonUrl = "https://tooljsonoutput.s3.ap-northeast-1.amazonaws.com/" + objName

    console.log(JsonUrl);

    // var Check403 = setInterval(function(){ 
    //   var status = 0;
    //   status = checkForbidden(imageUrl, Json, status);
    //   if (status == 1) {
    //     clearInterval(Check403);
    //   }
    // },1000)
  }

  // const dispatch = useDispatch();

  const mongodburl = "http://localhost:3000/datas/";

  const testmongodb = (e) => {
    e.preventDefault();
    state = Project.unselectAll( state ).updatedState;
    const jsondata = state.get('scene').toJS();

    const data2 = JSON.stringify(jsondata)

    console.log(data2)

    fetch(mongodburl, {
      method: "POST",
      body: data2,
      headers: {
        "Content-Type": "application/json"
      },
    })
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{bgcolor:"#222"}} openDrawer={openDrawer} openPoper={openPoper}>
      {/*<AppBar position="fixed" sx={{ bgcolor:"#222", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>*/}
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
{/*            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(openDrawer && { display: 'none' }) }}
            >
              <MenuIcon />
  </IconButton>*/}
            <TextField
              sx={{ input: { color: 'white' } }}
              hiddenLabel
              id="project-name"
              defaultValue="Untitled Project"
              variant="filled"
              color="warning"/>
          </Box> 
{/*        <Box sx={{ flexGrow: 0 }}>        
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
            </Box>*/}
        <Box sx={{ flexGrow: 0 }}>
          <Button
              key={'Gernerate'}
              sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {'Gernerate'}
          </Button>
        </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        PaperProps={{ style: { height: "95vh", top: 68.5 } }}
        variant="persistent"
        anchor="left"
        open={showDrawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
{/*        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
      </DrawerHeader>*/}
        <Divider />
        {elementsToDisplay.map(elem => camearaSelected ? <CatalogChangeItem key={elem.name} element={elem} state={state}/> : <CatalogItem key={elem.name} element={elem}/>)}
      </Drawer>
    </Box>
  );
}