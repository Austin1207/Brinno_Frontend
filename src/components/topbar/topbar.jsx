import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import mainLogo from './brinno.png';

import { loadimgjson } from './loadjson';

import '@babel/polyfill'; //for async

const pages = ['+Upload', 'Set Scale', 'Tutorials'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = ({ state, projectActions, itemsActions, sceneActions}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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


  //+Uploadfile
  function UploadFile() {
    return new Promise(function (resolve, reject) {
  
      let fileInput = document.createElement('input');
      fileInput.type = 'file';
  
      fileInput.addEventListener('change', function (event) {
        let file = event.target.files[0];
        resolve(file);
      });
      fileInput.click();
    });
  };

  const s3imgurl = "http://localhost:3000/s3ImgUrl"
  const s3pdfurl = "http://localhost:3000/s3PdfUrl"

  //偵測403
  function checkForbidden (url, imageJson, status) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    if (req.status == 200) {
      closeLoading();
      projectActions.loadProject(imageJson);
      status = 1;
      return status;
    }
  };

  //等候圈

  function showLoading() {
    document.getElementById("loading").style.display = "";
  }

  function closeLoading() {
    document.getElementById("loading").style.display = "none";
  }

  const upload = event => {
    event.preventDefault();
    UploadFile().then(async (file) => {

      if ( file.type.indexOf("image") == 0 ){
        const {url} = await fetch(s3imgurl).then(res => res.json());

        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": file.type
          },
          body: file
        })

        const imageUrl = url.split('?')[0]
        console.log(imageUrl)
        const imageJson = loadimgjson(imageUrl)
        setTimeout( function () {
            projectActions.loadProject(imageJson);
        },1000);
      }

      else if ( file.type.indexOf("pdf") == 12 ){
        showLoading();
        const {url} = await fetch(s3pdfurl).then(res => res.json());

        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": file.type
          },
          body: file
        });
        
        const pdfurl = url.split('?')[0]
        const pdfName = pdfurl.split('/')[3]
        const dicName = pdfName.split('.')[0]

        const imageUrl = "https://react-planner-img.s3.ap-northeast-1.amazonaws.com/" + dicName + ".jpg"
        console.log(imageUrl)
        const imageJson = loadimgjson(imageUrl)

        var Check403 = setInterval(function(){ 
          var status = 0;
          status = checkForbidden(imageUrl, imageJson, status);
          if (status == 1) {
            clearInterval(Check403);
          }
        },1000)

    }

      else {alert("Please upload PDF or IMG")}

    });
  };

  //topbar onclick
  const ImageLayerMode = event => {
    sceneActions.selectLayer("layer1")
    itemsActions.selectItem("layer1", "xFAw434Nm");
  }

  const TutorialsOnclick = event => {
    console.log("tutorial")
    sceneActions.selectLayer("layer1")
    itemsActions.selectItem("layer1", "xFAw434Nm");
  };

  async function SetScale() {
    document.getElementById("TutorialScaleRectangular").style.display = "";
    document.getElementById("TutorialScaleWord").style.display = "";
    document.getElementById("TutorialScaleButton").style.display = "";

    await ImageLayerMode();

    RotateCircle1.style.display = "none";
    RotateCircle2.style.display = "none";
  }

  return (
    <AppBar position = "absolute" sx={{bgcolor:"#222"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img  src={mainLogo} alt="fireSpot"/>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={upload}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Button
              key={'+Upload'}
              onClick={upload}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {'+Upload'}
            </Button>
            <Button
              key={'Set Scale'}
              onClick={SetScale}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {'Set Scale'}
            </Button>
            <Button
              key={'Tutorials'}
              onClick={TutorialsOnclick}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {'Tutorials'}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
  
export default ResponsiveAppBar