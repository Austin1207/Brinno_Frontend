import * as React from 'react';
import { loadimgjson } from './loadjson';
import { loadimgjson2 } from './loadjson2';
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
    document.getElementById("loading").style.display = "";
    document.getElementById("overlay").style.display = "";
    
  }

  function closeLoading() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("overlay").style.display = "none";

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
          }
        },1000)
        document.getElementById('UndoRedo').style.display = ""
        document.getElementById('Scale2').style.display = ""
        document.getElementById('Question2').style.display = ""
      }

      else if ( file.type.indexOf("pdf") == 12 ){

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
          }
        },1000)
        document.getElementById('UndoRedo').style.display = ""
        document.getElementById('Scale2').style.display = ""
        document.getElementById('Question2').style.display = ""
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

    document.getElementById("Initialoverlay").style.display = "none";

    document.getElementById('UndoRedo').style.display = ""
    document.getElementById('Scale2').style.display = ""
    
    document.getElementById('Outline Contruction Area1').style.display = "none"
    document.getElementById('Outline Contruction Area2').style.display = ""

  }

  //增加localstorage(重整不會被刪掉)的tutorial
  const test123 = () => {
    localStorage.setItem("Tutorial", "Done")
  }

  //驗證localstorage的tutorial，若為done則已使用過教學
  const test234 = () => {
    if (localStorage.getItem("Tutorial") == "Done") {
      console.log("yes")
    }
    else {console.log("no")}
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
            // fontFamily: "SFProDisplay",
            border:"none",
            borderRadius:"5px",
            cursor:"pointer",
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
            cursor:"pointer",
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