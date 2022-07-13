var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import * as React from 'react';
import { loadimgjson } from './loadjson';
import { loadimgjson2 } from './loadjson2';
import { loadimgjson3 } from './loadjson3';
import '@babel/polyfill'; //for async

var InitialScreen = function InitialScreen(_ref) {
  var state = _ref.state,
      projectActions = _ref.projectActions,
      left = _ref.left,
      jsonleft = _ref.jsonleft,
      top = _ref.top;

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
  // async function checkForbidden (url, status, jsonleft, top) {
  function checkForbidden(url, status) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    if (req.status == 200) {
      closeLoading();

      var img = new Image();
      img.src = url;
      if (img.complete) {
        if (img.width >= img.height) {
          projectActions.loadProject(loadimgjson(url, jsonleft, top));
        } else {
          projectActions.loadProject(loadimgjson2(url, jsonleft, top));
        }
      } else {
        img.onload = function () {
          if (img.width >= img.height) {
            projectActions.loadProject(loadimgjson(url, jsonleft, top));
          } else {
            projectActions.loadProject(loadimgjson2(url, jsonleft, top));
          }
        };
      }
      // document.getElementById("Undo").disabled = false;
      status = 1;
      return status;
    }
  }

  //等候圈

  function showLoading() {
    document.getElementById("overlay").style.display = "";
    document.getElementById("loading").style.display = "";
    for (var i = 1; i < 20; i++) {
      setTimeout(function () {
        document.getElementById("loading").innerHTML = "Loading.";
      }, 1500 * i - 1000);
      setTimeout(function () {
        document.getElementById("loading").innerHTML = "Loading..";
      }, 1500 * i - 500);
      setTimeout(function () {
        document.getElementById("loading").innerHTML = "Loading...";
      }, 1500 * i);
    }
  }

  function closeLoading() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

  function FinishTutorial(Process) {
    localStorage.setItem("Tutorial_Setscale", Process);
    localStorage.setItem("Tutorial_ConstructionArea", Process);
    localStorage.setItem("Tutorial_InterestArea", Process);
    localStorage.setItem("Tutorial_ObstacleArea", Process);
    localStorage.setItem("Tutorial_NoCameraArea", Process);
    localStorage.setItem("Tutorial_MustCoverArea", Process);
    localStorage.setItem("Tutorial_CameraTool_1", Process);
    localStorage.setItem("Tutorial_CameraTool_2", Process);
    localStorage.setItem("Tutorial_CameraTool_3", Process);
    localStorage.setItem("Tutorial_CameraTool_4", Process);
    localStorage.setItem("Tutorial_CameraTool_5", Process);
    localStorage.setItem("Tutorial_Generate", Process);
    localStorage.setItem("Tutorial_ObstacleArea_LineDetect", Process);
    localStorage.setItem("Tutorial_Generate_Detect_1", Process);
    localStorage.setItem("Tutorial_Generate_Detect_2", Process);
  }

  function UploadTest() {
    if (localStorage.getItem("Tutorial_Upload") == "Done") {
      document.getElementById('Outline Construction Area1').style.display = "none";
      document.getElementById('Outline Construction Area2').style.display = "";

      // document.getElementById('Outine Interest Area1').style.display = "none"
      // document.getElementById('Outine Interest Area2').style.display = ""

      // document.getElementById('Place Obstacle Area1').style.display = "none"
      // document.getElementById('Place Obstacle Area2').style.display = ""

      // document.getElementById('Place no-camera area1').style.display = "none"
      // document.getElementById('Place no-camera area2').style.display = ""

      // document.getElementById('Place must-cover area1').style.display = "none"
      // document.getElementById('Place must-cover area2').style.display = ""

      // document.getElementById('Camera Tool1').style.display = "none"
      // document.getElementById('Camera Tool2').style.display = ""

      // document.getElementById('Generate1').style.display = "none"
      // document.getElementById('Generate2').style.display = ""

      FinishTutorial("Done");
    } else {
      document.getElementById('1-8-1').style.display = "";
      document.getElementById('1-8-2').style.display = "";
      document.getElementById('1-8-3').style.display = "";
      document.getElementById('1-8-4').style.display = "";
      document.getElementById('1-8-5').style.display = "";
      document.getElementById('1-8-6').style.display = "";
      document.getElementById('1-8-7').style.display = "";

      document.getElementById('Scale2').style.zIndex = "10001";
      document.getElementById('overlay').style.display = "";

      FinishTutorial("Undone");
    }
  }

  //upload

  var upload = function upload(event) {
    event.preventDefault();

    UploadFile().then(function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
        var _ref3, url, imageUrl, Check403, _ref4, _url, pdfurl, pdfName, dicName, _imageUrl;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                document.getElementById("UploadRectangular").style.display = "none";
                document.getElementById("OutlineRectangular").style.display = "none";
                document.getElementById("Initialoverlay").style.display = "none";
                showLoading();

                if (!(file.type.indexOf("image") == 0)) {
                  _context.next = 22;
                  break;
                }

                localStorage.setItem("Mode", "Upload");
                localStorage.setItem("Scale", 1);

                _context.next = 9;
                return fetch(s3imgurl).then(function (res) {
                  return res.json();
                });

              case 9:
                _ref3 = _context.sent;
                url = _ref3.url;
                _context.next = 13;
                return fetch(url, {
                  method: "PUT",
                  headers: {
                    "Content-Type": file.type
                  },
                  body: file
                });

              case 13:
                imageUrl = url.split('?')[0];

                console.log(imageUrl);

                // const imageJson = loadimgjson(imageUrl, jsonleft, top)

                Check403 = setInterval(function () {
                  var status = 0;
                  status = checkForbidden(imageUrl, status);
                  if (status == 1) {
                    clearInterval(Check403);
                    setTimeout(function () {
                      return UploadTest();
                    }, 2000);
                  }
                }, 1000);

                document.getElementById('UndoRedo').style.display = "";
                document.getElementById('Scale2').style.display = "";
                document.getElementById('Question2').style.display = "";
                document.getElementById('Setting2').style.display = "";
                _context.next = 47;
                break;

              case 22:
                if (!(file.type.indexOf("pdf") == 12)) {
                  _context.next = 42;
                  break;
                }

                localStorage.setItem("Mode", "Upload");
                localStorage.setItem("Scale", 1);

                _context.next = 27;
                return fetch(s3pdfurl).then(function (res) {
                  return res.json();
                });

              case 27:
                _ref4 = _context.sent;
                _url = _ref4.url;
                _context.next = 31;
                return fetch(_url, {
                  method: "PUT",
                  headers: {
                    "Content-Type": file.type
                  },
                  body: file
                });

              case 31:
                pdfurl = _url.split('?')[0];
                pdfName = pdfurl.split('/')[3];
                dicName = pdfName.split('.')[0];
                _imageUrl = "https://react-planner-img.s3.ap-northeast-1.amazonaws.com/" + dicName + ".jpg";
                Check403 = setInterval(function () {
                  var status = 0;
                  status = checkForbidden(_imageUrl, status);
                  if (status == 1) {
                    clearInterval(Check403);
                    setTimeout(function () {
                      return UploadTest();
                    }, 2000);
                  }
                }, 1000);

                document.getElementById('UndoRedo').style.display = "";
                document.getElementById('Scale2').style.display = "";
                document.getElementById('Question2').style.display = "";
                document.getElementById('Setting2').style.display = "";

                _context.next = 47;
                break;

              case 42:
                alert("Please upload PDF or IMG");
                document.getElementById("UploadRectangular").style.display = "";
                document.getElementById("OutlineRectangular").style.display = "";
                document.getElementById("Initialoverlay").style.display = "";
                closeLoading();

              case 47:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  };

  var Outline = function Outline(event) {
    document.getElementById("UploadRectangular").style.display = "none";
    document.getElementById("OutlineRectangular").style.display = "none";
    document.getElementById('Question2').style.display = "";
    document.getElementById('Setting2').style.display = "";

    document.getElementById("Initialoverlay").style.display = "none";

    document.getElementById('UndoRedo').style.display = "";
    document.getElementById('Scale2').style.display = "";

    document.getElementById('Outline Construction Area1').style.display = "none";
    document.getElementById('Outline Construction Area2').style.display = "";

    localStorage.setItem("Mode", "Outline");
    localStorage.setItem("Scale", 1);

    projectActions.loadProject(loadimgjson3("https://example-img.s3.ap-northeast-1.amazonaws.com/small.png", jsonleft, top));

    if (localStorage.getItem("Tutorial_Outline") == "Done") {
      // document.getElementById('Outine Interest Area1').style.display = "none"
      // document.getElementById('Outine Interest Area2').style.display = ""

      // document.getElementById('Place Obstacle Area1').style.display = "none"
      // document.getElementById('Place Obstacle Area2').style.display = ""

      // document.getElementById('Place no-camera area1').style.display = "none"
      // document.getElementById('Place no-camera area2').style.display = ""

      // document.getElementById('Place must-cover area1').style.display = "none"
      // document.getElementById('Place must-cover area2').style.display = ""

      // document.getElementById('Camera Tool1').style.display = "none"
      // document.getElementById('Camera Tool2').style.display = ""

      // document.getElementById('Generate1').style.display = "none"
      // document.getElementById('Generate2').style.display = ""

      FinishTutorial("Done");
    } else {
      document.getElementById('2-8-1').style.display = "";
      document.getElementById('2-8-2').style.display = "";
      document.getElementById('2-8-3').style.display = "";
      document.getElementById('2-8-4').style.display = "";
      document.getElementById('2-8-5').style.display = "";
      document.getElementById('2-8-6').style.display = "";
      document.getElementById('2-8-7').style.display = "";
      document.getElementById('overlay_left').style.display = "";
      document.getElementById('overlay_right').style.display = "";
      document.getElementById('overlay_top_1').style.display = "";
      document.getElementById('overlay_bottom_1').style.display = "";

      document.getElementById('2-8-5').innerHTML = "1 of 7";
      document.getElementById('2-8-12').innerHTML = "1 of 7";
      document.getElementById('1-8-5').innerHTML = "2 of 7";
      document.getElementById('1-8-12').innerHTML = "2 of 7";

      FinishTutorial("Undone");
    }
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { id: 'UploadRectangular', onClick: upload,
        style: {
          position: "absolute",
          width: "379.9px",
          // width: "26.4%",
          // height: "66px",
          height: "6.4%",
          zIndex: 9999,
          backgroundColor: "#ff8200",
          // left: "560px",
          left: left,
          // left: "36.8%",
          // top: "373px",
          top: "29.6%",
          // margin: "0 0 47px",
          // padding: "21px 129.9px 21.2px 130px",
          color: "#fff",
          fontSize: "18px",
          fontWeight: "normal",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          // fontFamily: "SFProDisplay",
          border: "none",
          borderRadius: "5px",
          cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',
          display: ""
        }
      },
      'Upload new file'
    ),
    React.createElement(
      'button',
      { id: 'OutlineRectangular', onClick: Outline, style: {
          position: "absolute",
          width: "379.9px",
          // width: "26.4%",
          // height: "66px",
          height: "6.4%",
          zIndex: 9999,
          backgroundColor: "#ff8200",
          // left: "560px",
          left: left,
          // top: "463px",
          top: "40.6%",
          // fontFamily: "HelveticaNeue",
          fontSize: "18px",
          fontWeight: "normal",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "normal",
          letterSpacing: "normal",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',
          display: ""
        } },
      'Outline your own'
    ),
    React.createElement('button', { id: 'Initialoverlay', style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9998,
        border: "none",
        backgroundColor: "transparent",
        display: ""
      } })
  );
};

export default InitialScreen;