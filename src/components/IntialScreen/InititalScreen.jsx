import * as React from 'react';
import { loadimgjson } from './loadjson';
import { loadimgjson2 } from './loadjson2';
import { loadimgjson3 } from './loadjson3';
import '@babel/polyfill'; //for async

const InitialScreen = ({state,projectActions, left, jsonleft, top}) => {
  //+Upload onclick
  const ScaleUrl = "https://example-img.s3.ap-northeast-1.amazonaws.com/small.png"

  const ClickAreaLegend = (AreaLegend) => {
    var e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);
    AreaLegend.dispatchEvent(e);
    }

  const OpenAreaLegend = event => {
    var AreaLegendClick = document.getElementById("OpenAreaLegend")
    ClickAreaLegend(AreaLegendClick);
    }

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
  function checkForbidden (url, status) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    if (req.status == 200) {
      closeLoading();

      var img = new Image();
      //let dataBase64 = '';
      img.src = url;
      getBase64FromUrl(url).then((value) => {
        // 在 myPromise 被 resolve 時執行
        if (img.complete) {
          if (img.width >= img.height){
            projectActions.loadProject(loadimgjson(ScaleUrl, value, jsonleft, top));
          }
          else {
            projectActions.loadProject(loadimgjson2(ScaleUrl, value, jsonleft, top));
          }
        }
        else {
          img.onload = function(){
            if (img.width >= img.height){
              projectActions.loadProject(loadimgjson(ScaleUrl, value, jsonleft, top));
            }
            else {
              projectActions.loadProject(loadimgjson2(ScaleUrl, value, jsonleft, top));
            }
          }
        }
        //console.log(value);
      });
      //console.log(url);
      //console.log(dataBase64);
      // if (img.complete) {
      //   if (img.width >= img.height){
      //     projectActions.loadProject(loadimgjson(ScaleUrl, url, jsonleft, top));
      //   }
      //   else {
      //     projectActions.loadProject(loadimgjson2(ScaleUrl, url, jsonleft, top));
      //   }
      // }
      // else {
      //   img.onload = function(){
      //     if (img.width >= img.height){
      //       projectActions.loadProject(loadimgjson(ScaleUrl, url, jsonleft, top));
      //     }
      //     else {
      //       projectActions.loadProject(loadimgjson2(ScaleUrl, url, jsonleft, top));
      //     }
      //   }
      // }
      status = 1;
      return status;
      }
    }

  //等候圈

  function showLoading() {
    document.getElementById("overlay").style.display = "";
    document.getElementById("loading").style.display = "";
    for (var i = 1; i < 20; i++) {
      setTimeout(function(){
        document.getElementById("loading").innerHTML = "Loading.";
      },1500*i - 1000)
      setTimeout(function(){
        document.getElementById("loading").innerHTML = "Loading..";
      },1500*i -500)
      setTimeout(function(){
        document.getElementById("loading").innerHTML = "Loading...";
      },1500*i)
    }
  }

  function closeLoading() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

  function FinishTutorial(Process) {
    localStorage.setItem("Tutorial_Setscale", "Undone");
    localStorage.setItem("Tutorial_ConstructionArea", "Undone");
    // localStorage.setItem("Tutorial_Setscale", Process);
    // localStorage.setItem("Tutorial_ConstructionArea", Process);
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
    localStorage.setItem("Tutorial_ObstacleArea_LineDetect", Process)
    localStorage.setItem("Tutorial_Generate_Detect_1", Process)
    localStorage.setItem("Tutorial_Generate_Detect_2", Process)

    localStorage.setItem("ColorMode","Light")

    localStorage.setItem("AreaLegend_Backgorund1","#ffffff")
    localStorage.setItem("AreaLegend_Icon_Open","#222222")
    localStorage.setItem("AreaLegend_Icon_Close","#222222")
    localStorage.setItem("AreaLegend_Word","#222222")

    localStorage.setItem("AreaLegend_Button", "Close")

    localStorage.setItem("Unit", "m")
    localStorage.setItem("UnitName", "Meters")
    localStorage.setItem("Scale", 1)
  }

  function UploadTest () {
    if (localStorage.getItem("Tutorial_Upload") == "Done") {
      document.getElementById('Outline Construction Area1').style.display = "none"
      document.getElementById('Outline Construction Area2').style.display = ""
      FinishTutorial("Done")
    }
    else {
      document.getElementById('1-8-1').style.display = ""
      document.getElementById('1-8-2').style.display = ""
      document.getElementById('1-8-3').style.display = ""
      document.getElementById('1-8-4').style.display = ""
      document.getElementById('1-8-5').style.display = ""
      document.getElementById('1-8-6').style.display = ""
      document.getElementById('1-8-7').style.display = ""

      document.getElementById('Scale2').style.zIndex = "10001"
      document.getElementById('overlay').style.display = ""

      FinishTutorial("Undone")
    }
  }

  //upload

  const upload = event => {
    event.preventDefault();

    UploadFile().then(async (file) => {

      document.getElementById("UploadRectangular").style.display = "none";
      document.getElementById("OutlineRectangular").style.display = "none";
      document.getElementById("Initialoverlay").style.display = "none";
      showLoading();
        
      if ( file.type.indexOf("image") == 0 ){

        localStorage.setItem("Mode", "Upload")

        const {url} = await fetch(s3imgurl).then(res => res.json());

        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": file.type
          },
          body: file
        })

        const imageUrl = url.split('?')[0];
        //const dataBase64 = getBase64FromUrl(imageUrl);
        //console.log(dataBase64)

        var Check403 = setInterval(function(){ 
          var status = 0;
          status = checkForbidden(imageUrl, status);
          //status = checkForbidden(dataBase64, status);
          if (status == 1) {
            clearInterval(Check403);
            setTimeout(()=>UploadTest(),2000)
          }
        },1000)
        document.getElementById('UndoRedo').style.display = ""
        document.getElementById('Scale2').style.display = ""
        document.getElementById('Question2').style.display = ""
        document.getElementById('Setting2').style.display = ""
        OpenAreaLegend();
      }

      else if ( file.type.indexOf("pdf") == 12 ){

        localStorage.setItem("Mode", "Upload")

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

        const imageUrl = "https://react-planner-img.s3.ap-northeast-1.amazonaws.com/" + dicName + ".jpg";
        //const dataBase64 = getBase64FromUrl(imageUrl);

        var Check403 = setInterval(function(){ 
          var status = 0;
          status = checkForbidden(imageUrl, status);
          //status = checkForbidden(dataBase64, status);
          if (status == 1) {
            clearInterval(Check403)
            setTimeout(()=>UploadTest(),2000)
          }
        },1000)
        document.getElementById('UndoRedo').style.display = ""
        document.getElementById('Scale2').style.display = ""
        document.getElementById('Question2').style.display = ""
        document.getElementById('Setting2').style.display = ""
        OpenAreaLegend();

    }

      else {
        alert("Please upload PDF or IMG");
        document.getElementById("UploadRectangular").style.display = "";
        document.getElementById("OutlineRectangular").style.display = "";
        document.getElementById("Initialoverlay").style.display = "";
        closeLoading();
        }
    });
  };

  //url2base64
  const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob); 
      reader.onloadend = () => {
        const base64data = reader.result;   
        resolve(base64data);
      }
    });
  }

  const Outline = event => {
    document.getElementById("UploadRectangular").style.display = "none";
    document.getElementById("OutlineRectangular").style.display = "none";
    document.getElementById('Question2').style.display = ""
    document.getElementById('Setting2').style.display = ""

    document.getElementById("Initialoverlay").style.display = "none";

    document.getElementById('UndoRedo').style.display = ""
    document.getElementById('Scale2').style.display = ""
    
    document.getElementById('Outline Construction Area1').style.display = "none"
    document.getElementById('Outline Construction Area2').style.display = ""

    localStorage.setItem("Mode", "Outline")

    projectActions.loadProject(loadimgjson3(ScaleUrl, jsonleft, top));

    OpenAreaLegend();

    if (localStorage.getItem("Tutorial_Outline") == "Done") {
      FinishTutorial("Done")
    }
    else {    
    document.getElementById('2-8-1').style.display = ""
    document.getElementById('2-8-2').style.display = ""
    document.getElementById('2-8-3').style.display = ""
    document.getElementById('2-8-4').style.display = ""
    document.getElementById('2-8-5').style.display = ""
    document.getElementById('2-8-6').style.display = ""
    document.getElementById('2-8-7').style.display = ""
    document.getElementById('overlay_left').style.display = ""
    document.getElementById('overlay_right').style.display = ""
    document.getElementById('overlay_top_1').style.display = ""
    document.getElementById('overlay_bottom_1').style.display = ""

    document.getElementById('2-8-5').innerHTML = "1 of 7"
    document.getElementById('2-8-12').innerHTML = "1 of 7"
    document.getElementById('1-8-5').innerHTML = "2 of 7"
    document.getElementById('1-8-12').innerHTML = "2 of 7"

    FinishTutorial("Undone")
    }

  }

  return(
    
    <div>
        <button id ="UploadRectangular" onClick = {upload}
        style = {{
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
            fontFamily: "SF Pro Display",
            border:"none",
            borderRadius:"5px",
            cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',
            display: "",
            }}
            >
              Upload new file
          </button>

        <button id ="OutlineRectangular" onClick = {Outline} style = {{
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
            fontFamily: "SF Pro Display",
            fontSize: "18px",
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            color: "#fff",
            border:"none",
            borderRadius:"5px",
            cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',
            display: ""
            }}>
              Outline your own
        </button>

        <button id = "Initialoverlay" style = {{
                position: "absolute",
                top:0,
                left:0,
                width: "100%",
                height:"100%",
                zIndex: 9998,
                border:"none",
                backgroundColor: "transparent",
                display: ""
            }}/>
    </div>
  )
}

export default InitialScreen;