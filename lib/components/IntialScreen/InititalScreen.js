'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _loadjson = require('./loadjson');

require('@babel/polyfill');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//for async

var InitialScreen = function InitialScreen(_ref) {
  var state = _ref.state,
      projectActions = _ref.projectActions,
      left = _ref.left;

  //+Upload onclick
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

  //upload

  var upload = function upload(event) {
    event.preventDefault();
    UploadFile().then(function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        var _ref3, url, imageUrl, imageJson, _ref4, _url, pdfurl, pdfName, dicName, _imageUrl, _imageJson, Check403;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                document.getElementById("UploadRectangular").style.display = "none";
                document.getElementById("OutlineRectangular").style.display = "none";

                if (!(file.type.indexOf("image") == 0)) {
                  _context.next = 15;
                  break;
                }

                _context.next = 5;
                return fetch(s3imgurl).then(function (res) {
                  return res.json();
                });

              case 5:
                _ref3 = _context.sent;
                url = _ref3.url;
                _context.next = 9;
                return fetch(url, {
                  method: "PUT",
                  headers: {
                    "Content-Type": file.type
                  },
                  body: file
                });

              case 9:
                imageUrl = url.split('?')[0];

                console.log(imageUrl);
                imageJson = (0, _loadjson.loadimgjson)(imageUrl);

                setTimeout(function () {
                  projectActions.loadProject(imageJson);
                }, 1000);
                _context.next = 33;
                break;

              case 15:
                if (!(file.type.indexOf("pdf") == 12)) {
                  _context.next = 32;
                  break;
                }

                showLoading();
                _context.next = 19;
                return fetch(s3pdfurl).then(function (res) {
                  return res.json();
                });

              case 19:
                _ref4 = _context.sent;
                _url = _ref4.url;
                _context.next = 23;
                return fetch(_url, {
                  method: "PUT",
                  headers: {
                    "Content-Type": file.type
                  },
                  body: file
                });

              case 23:
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
                _context.next = 33;
                break;

              case 32:
                alert("Please upload PDF or IMG");
              case 33:
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

  var Outline = function Outline(event) {
    document.getElementById("UploadRectangular").style.display = "none";
    document.getElementById("OutlineRectangular").style.display = "none";
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { id: 'UploadRectangular', onClick: upload, style: {
          position: "absolute",
          width: "320px",
          height: "64px",
          zIndex: 9999,
          backgroundColor: "#ff8200",
          // left: "560px",
          left: left,
          top: "373px",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          // fontFamily: "HelveticaNeue",
          border: "none",
          // borderRadius:"8px",
          display: ""
        } },
      'Upload new file'
    ),
    React.createElement(
      'button',
      { id: 'OutlineRectangular', onClick: Outline, style: {
          position: "absolute",
          width: "320px",
          height: "64px",
          zIndex: 9999,
          backgroundColor: "#ff8200",
          // left: "560px",
          left: left,
          top: "463px",
          // fontFamily: "HelveticaNeue",
          fontSize: "16px",
          fontWeight: "bold",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          color: "#fff",
          border: "none",
          // borderRadius:"8px",
          display: ""
        } },
      'Outline your own'
    )
  );
};

exports.default = InitialScreen;