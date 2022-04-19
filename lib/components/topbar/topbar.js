'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _AppBar = require('@mui/material/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Box = require('@mui/material/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Toolbar = require('@mui/material/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = require('@mui/material/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Typography = require('@mui/material/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Menu = require('@mui/material/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Menu3 = require('@mui/icons-material/Menu');

var _Menu4 = _interopRequireDefault(_Menu3);

var _Container = require('@mui/material/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Avatar = require('@mui/material/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Button = require('@mui/material/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Tooltip = require('@mui/material/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _MenuItem = require('@mui/material/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _brinno = require('./brinno.png');

var _brinno2 = _interopRequireDefault(_brinno);

var _loadjson = require('./loadjson');

require('@babel/polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//for async

var pages = ['+Upload', 'Set Scale', 'Tutorials'];
var settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

var ResponsiveAppBar = function ResponsiveAppBar(_ref) {
  var SetScale = function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              document.getElementById("TutorialScaleRectangular").style.display = "";
              document.getElementById("TutorialScaleWord").style.display = "";
              document.getElementById("TutorialScaleButton").style.display = "";

              _context2.next = 5;
              return ImageLayerMode();

            case 5:

              RotateCircle1.style.display = "none";
              RotateCircle2.style.display = "none";

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function SetScale() {
      return _ref5.apply(this, arguments);
    };
  }();

  var state = _ref.state,
      projectActions = _ref.projectActions,
      itemsActions = _ref.itemsActions,
      sceneActions = _ref.sceneActions;

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorElNav = _React$useState2[0],
      setAnchorElNav = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      anchorElUser = _React$useState4[0],
      setAnchorElUser = _React$useState4[1];

  var handleOpenNavMenu = function handleOpenNavMenu(event) {
    setAnchorElNav(event.currentTarget);
    console.log("1");
  };
  var handleOpenUserMenu = function handleOpenUserMenu(event) {
    setAnchorElUser(event.currentTarget);
    console.log("2");
  };

  var handleCloseNavMenu = function handleCloseNavMenu() {
    setAnchorElNav(null);
    console.log("3");
  };

  var handleCloseUserMenu = function handleCloseUserMenu() {
    setAnchorElUser(null);
    console.log("4");
  };

  //+Uploadfile
  function UploadFile() {
    return new Promise(function (resolve, reject) {

      var fileInput = document.createElement('input');
      fileInput.type = 'file';

      fileInput.addEventListener('change', function (event) {
        var file = event.target.files[0];
        resolve(file);
      });
      fileInput.click();
    });
  };

  var s3imgurl = "http://localhost:3000/s3ImgUrl";
  var s3pdfurl = "http://localhost:3000/s3PdfUrl";

  //偵測403
  function checkForbidden(url, imageJson, status) {
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

  var upload = function upload(event) {
    event.preventDefault();
    UploadFile().then(function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        var _ref3, url, imageUrl, imageJson, _ref4, _url, pdfurl, pdfName, dicName, _imageUrl, _imageJson, Check403;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(file.type.indexOf("image") == 0)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 3;
                return fetch(s3imgurl).then(function (res) {
                  return res.json();
                });

              case 3:
                _ref3 = _context.sent;
                url = _ref3.url;
                _context.next = 7;
                return fetch(url, {
                  method: "PUT",
                  headers: {
                    "Content-Type": file.type
                  },
                  body: file
                });

              case 7:
                imageUrl = url.split('?')[0];

                console.log(imageUrl);
                imageJson = (0, _loadjson.loadimgjson)(imageUrl);

                setTimeout(function () {
                  projectActions.loadProject(imageJson);
                }, 1000);
                _context.next = 31;
                break;

              case 13:
                if (!(file.type.indexOf("pdf") == 12)) {
                  _context.next = 30;
                  break;
                }

                showLoading();
                _context.next = 17;
                return fetch(s3pdfurl).then(function (res) {
                  return res.json();
                });

              case 17:
                _ref4 = _context.sent;
                _url = _ref4.url;
                _context.next = 21;
                return fetch(_url, {
                  method: "PUT",
                  headers: {
                    "Content-Type": file.type
                  },
                  body: file
                });

              case 21:
                pdfurl = _url.split('?')[0];
                pdfName = pdfurl.split('/')[3];
                dicName = pdfName.split('.')[0];
                _imageUrl = "https://react-planner-img.s3.ap-northeast-1.amazonaws.com/" + dicName + ".jpg";

                console.log(_imageUrl);
                _imageJson = (0, _loadjson.loadimgjson)(_imageUrl);
                Check403 = setInterval(function () {
                  var status = 0;
                  status = checkForbidden(_imageUrl, _imageJson, status);
                  if (status == 1) {
                    clearInterval(Check403);
                  }
                }, 1000);
                _context.next = 31;
                break;

              case 30:
                alert("Please upload PDF or IMG");
              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  //topbar onclick
  var ImageLayerMode = function ImageLayerMode(event) {
    sceneActions.selectLayer("layer1");
    itemsActions.selectItem("layer1", "xFAw434Nm");
  };

  var TutorialsOnclick = function TutorialsOnclick(event) {
    console.log("tutorial");
    sceneActions.selectLayer("layer1");
    itemsActions.selectItem("layer1", "xFAw434Nm");
  };

  return React.createElement(
    _AppBar2.default,
    { position: 'absolute', sx: { bgcolor: "#222" } },
    React.createElement(
      _Container2.default,
      { maxWidth: 'xl' },
      React.createElement(
        _Toolbar2.default,
        { disableGutters: true },
        React.createElement('img', { src: _brinno2.default, alt: 'fireSpot' }),
        React.createElement(
          _Box2.default,
          { sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } } },
          React.createElement(
            _IconButton2.default,
            {
              size: 'large',
              'aria-label': 'account of current user',
              'aria-controls': 'menu-appbar',
              'aria-haspopup': 'true',
              onClick: handleOpenNavMenu,
              color: 'inherit'
            },
            React.createElement(_Menu4.default, null)
          ),
          React.createElement(
            _Menu2.default,
            {
              id: 'menu-appbar',
              anchorEl: anchorElNav,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
              },
              keepMounted: true,
              transformOrigin: {
                vertical: 'top',
                horizontal: 'left'
              },
              open: Boolean(anchorElNav),
              onClose: handleCloseNavMenu,
              sx: {
                display: { xs: 'block', md: 'none' }
              }
            },
            pages.map(function (page) {
              return React.createElement(
                _MenuItem2.default,
                { key: page, onClick: handleCloseNavMenu },
                React.createElement(
                  _Typography2.default,
                  { textAlign: 'center' },
                  page
                )
              );
            })
          )
        ),
        React.createElement(
          _Typography2.default,
          {
            variant: 'h6',
            noWrap: true,
            component: 'div',
            sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } }
          },
          'LOGO'
        ),
        React.createElement(
          _Box2.default,
          { sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } } },
          React.createElement(
            _Button2.default,
            {
              key: '+Upload',
              onClick: upload,
              sx: { my: 2, color: 'white', display: 'block' }
            },
            '+Upload'
          ),
          React.createElement(
            _Button2.default,
            {
              key: 'Set Scale',
              onClick: SetScale,
              sx: { my: 2, color: 'white', display: 'block' }
            },
            'Set Scale'
          ),
          React.createElement(
            _Button2.default,
            {
              key: 'Tutorials',
              onClick: TutorialsOnclick,
              sx: { my: 2, color: 'white', display: 'block' }
            },
            'Tutorials'
          )
        ),
        React.createElement(
          _Box2.default,
          { sx: { flexGrow: 0 } },
          React.createElement(
            _Tooltip2.default,
            { title: 'Open settings' },
            React.createElement(
              _IconButton2.default,
              { onClick: handleOpenUserMenu, sx: { p: 0 } },
              React.createElement(_Avatar2.default, { alt: 'Remy Sharp', src: '/static/images/avatar/2.jpg' })
            )
          ),
          React.createElement(
            _Menu2.default,
            {
              sx: { mt: '45px' },
              id: 'menu-appbar',
              anchorEl: anchorElUser,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
              },
              keepMounted: true,
              transformOrigin: {
                vertical: 'top',
                horizontal: 'right'
              },
              open: Boolean(anchorElUser),
              onClose: handleCloseUserMenu
            },
            settings.map(function (setting) {
              return React.createElement(
                _MenuItem2.default,
                { key: setting, onClick: handleCloseNavMenu },
                React.createElement(
                  _Typography2.default,
                  { textAlign: 'center' },
                  setting
                )
              );
            })
          )
        )
      )
    )
  );
};

exports.default = ResponsiveAppBar;