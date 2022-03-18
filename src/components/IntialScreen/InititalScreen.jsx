import * as React from 'react';
import { loadimgjson } from './loadjson';
import '@babel/polyfill'; //for async

const InitialScreen = ({state,projectActions,left}) => {
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

  //upload

  const upload = event => {
    event.preventDefault();
    UploadFile().then(async (file) => {
        
      document.getElementById("UploadRectangular").style.display = "none";
      document.getElementById("OutlineRectangular").style.display = "none";
        
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

  const Outline = event => {
    document.getElementById("UploadRectangular").style.display = "none";
    document.getElementById("OutlineRectangular").style.display = "none";
  }

  return(
    <div>
        <button id ="UploadRectangular" onClick = {upload} style = {{
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
            border:"none",
            // borderRadius:"8px",
            display: ""
            }}>
              Upload new file
          </button>

        <button id ="OutlineRectangular" onClick = {Outline} style = {{
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
            border:"none",
            // borderRadius:"8px",
            display: ""
            }}>
              Outline your own
        </button>

    </div>
  )
}

export default InitialScreen;