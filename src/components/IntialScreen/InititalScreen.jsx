import * as React from 'react';
import { loadimgjson } from './loadjson';
import { loadimgjson2 } from './loadjson2';
import { loadimgjson3 } from './loadjson3';
import '@babel/polyfill'; //for async

const InitialScreen = ({state,projectActions, left, jsonleft, top}) => {
  //+Upload onclick

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
  // async function checkForbidden (url, status, jsonleft, top) {
  function checkForbidden (url, status) {
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send();
    if (req.status == 200) {
      closeLoading();

      var img = new Image();
      img.src = url;
      if (img.complete) {
        if (img.width >= img.height){
          projectActions.loadProject(loadimgjson(url, jsonleft, top));
        }
        else {
          projectActions.loadProject(loadimgjson2(url, jsonleft, top));
        }
      }
      else {
        img.onload = function(){
          if (img.width >= img.height){
            projectActions.loadProject(loadimgjson(url, jsonleft, top));
          }
          else {
            projectActions.loadProject(loadimgjson2(url, jsonleft, top));
          }
        }
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


  function CheckUserTest () {
    if (localStorage.getItem("Tutorial") == "Done") {
      document.getElementById('Outline Construction Area1').style.display = "none"
      document.getElementById('Outline Construction Area2').style.display = ""

      document.getElementById('Outine Interest Area1').style.display = "none"
      document.getElementById('Outine Interest Area2').style.display = ""

      document.getElementById('Place Obstacle Area1').style.display = "none"
      document.getElementById('Place Obstacle Area2').style.display = ""

      document.getElementById('Place no-camera area1').style.display = "none"
      document.getElementById('Place no-camera area2').style.display = ""

      document.getElementById('Place must-cover area1').style.display = "none"
      document.getElementById('Place must-cover area2').style.display = ""

      document.getElementById('Camera Tool1').style.display = "none"
      document.getElementById('Camera Tool2').style.display = ""

      document.getElementById('Generate1').style.display = "none"
      document.getElementById('Generate2').style.display = ""
    }
    else {
      document.getElementById('1-8-1').style.display = ""
      document.getElementById('1-8-2').style.display = ""
      document.getElementById('1-8-3').style.display = ""
      document.getElementById('1-8-4').style.display = ""
      document.getElementById('1-8-5').style.display = ""
      document.getElementById('1-8-6').style.display = ""
      document.getElementById('1-8-7').style.display = ""

      
      document.getElementById('Scale2').style.zIndex = "999999"
      document.getElementById('overlay').style.display = ""
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
        localStorage.setItem("Scale", 1)

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

        // const imageJson = loadimgjson(imageUrl, jsonleft, top)

        var Check403 = setInterval(function(){ 
          var status = 0;
          status = checkForbidden(imageUrl, status);
          if (status == 1) {
            clearInterval(Check403);
            setTimeout(()=>CheckUserTest(),2000)
          }
        },1000)
        document.getElementById('UndoRedo').style.display = ""
        document.getElementById('Scale2').style.display = ""
        document.getElementById('Question2').style.display = ""
        document.getElementById('Setting2').style.display = ""
      }

      else if ( file.type.indexOf("pdf") == 12 ){

        localStorage.setItem("Mode", "Upload")
        localStorage.setItem("Scale", 1)

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

        var Check403 = setInterval(function(){ 
          var status = 0;
          status = checkForbidden(imageUrl, status);
          if (status == 1) {
            clearInterval(Check403)
            setTimeout(()=>CheckUserTest(),2000)
          }
        },1000)
        document.getElementById('UndoRedo').style.display = ""
        document.getElementById('Scale2').style.display = ""
        document.getElementById('Question2').style.display = ""
        document.getElementById('Setting2').style.display = ""


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
    localStorage.setItem("Scale", 1)

    projectActions.loadProject(loadimgjson3("https://example-img.s3.ap-northeast-1.amazonaws.com/small.png", jsonleft, top));

    if (localStorage.getItem("Tutorial") == "Done") {
      document.getElementById('Outine Interest Area1').style.display = "none"
      document.getElementById('Outine Interest Area2').style.display = ""

      document.getElementById('Place Obstacle Area1').style.display = "none"
      document.getElementById('Place Obstacle Area2').style.display = ""

      document.getElementById('Place no-camera area1').style.display = "none"
      document.getElementById('Place no-camera area2').style.display = ""

      document.getElementById('Place must-cover area1').style.display = "none"
      document.getElementById('Place must-cover area2').style.display = ""

      document.getElementById('Camera Tool1').style.display = "none"
      document.getElementById('Camera Tool2').style.display = ""

      document.getElementById('Generate1').style.display = "none"
      document.getElementById('Generate2').style.display = ""
    }
    else {    
    document.getElementById('2-8-1').style.display = ""
    document.getElementById('2-8-2').style.display = ""
    document.getElementById('2-8-3').style.display = ""
    document.getElementById('2-8-4').style.display = ""
    document.getElementById('2-8-5').style.display = ""
    document.getElementById('2-8-6').style.display = ""
    document.getElementById('2-8-7').style.display = ""

    document.getElementById('2-8-5').innerHTML = "1 of 6"
    document.getElementById('2-8-12').innerHTML = "1 of 6"
    document.getElementById('3-8-5').innerHTML = "2 of 6"
    document.getElementById('3-8-12').innerHTML = "2 of 6"
    document.getElementById('4-8-5').innerHTML = "3 of 6"
    document.getElementById('4-8-12').innerHTML = "3 of 6"
    document.getElementById('5-8-5').innerHTML = "4 of 6"
    document.getElementById('5-8-12').innerHTML = "4 of 6"
    document.getElementById('6-8-5').innerHTML = "5 of 6"
    document.getElementById('6-8-12').innerHTML = "5 of 6"
    document.getElementById('7-8-4').innerHTML = "6 of 6"
    }

  }

  //增加localstorage(重整不會被刪掉)的tutorial
  const test123 = () => {
    localStorage.setItem("Tutorial", "Done")
  }

  //驗證localstorage的tutorial，若為done則已使用過教學
  const CheckUser = () => {
    if (localStorage.getItem("Tutorial") == "Done") {
      console.log("yes")
    }
    else {console.log("no")}
  }

  const test111 = (e) => {
    console.log(state)
  }

  return(
    
    <div>
        <button id ="UploadRectangular" onClick = {upload} onWheel = {test111}
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
            // fontFamily: "SFProDisplay",
            border:"none",
            borderRadius:"5px",
            cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png"),pointer',
            display: ""
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
            // fontFamily: "HelveticaNeue",
            fontSize: "18px",
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            letterSpacing: "normal",
            color: "#fff",
            border:"none",
            borderRadius:"5px",
            cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png"),pointer',
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