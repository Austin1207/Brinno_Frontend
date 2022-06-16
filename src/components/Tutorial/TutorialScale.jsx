import * as React from 'react';
import './Tutorial.css';
import scaleTutorial from './scale.png';
import constructionArea from './constructionArea.png';
import interestArea from './interestArea.png';
import obstacleArea from './obstacleArea.png';
import noCameraArea from './noCameraArea.png';
import mustCoverArea from './mustCoverArea.png';

const TutorialScale = ({state, projectActions, itemsActions, sceneActions, left}) => {

    const MeasureBack = event => {
        document.getElementById("sidebar").style.display = "none";

        document.getElementById("TutorialScaleMeasureWord").style.display = "none";
        document.getElementById("TutorialScaleMeasureWord2").style.display = "none";
        document.getElementById("TutorialScaleMeasureWord3").style.display = "none";
        document.getElementById("TutorialScaleMeasureLine").style.display = "none";
        document.getElementById("TutorialScaleMeasureBackButton").style.display = "none";
        document.getElementById("TutorialScaleMeasureOkButton").style.display = "none";

        document.getElementById("Circle2").style.display = "none"
        document.getElementById("Line").style.display = "none"
        DrawingScale()

    }

    const MeasureOk = event => {

        var scaleinput = document.getElementById("scaleinput")
        CircleMove(scaleinput);

        document.getElementById("sidebar").style.display = "none";

        document.getElementById("TutorialScaleMeasureWord").style.display = "none";
        document.getElementById("TutorialScaleMeasureWord2").style.display = "none";
        document.getElementById("TutorialScaleMeasureWord3").style.display = "none";
        document.getElementById("TutorialScaleMeasureLine").style.display = "none";
        document.getElementById("TutorialScaleMeasureBackButton").style.display = "none";
        document.getElementById("TutorialScaleMeasureOkButton").style.display = "none";

        document.getElementById("Circle1").style.display = "none";
        document.getElementById("Circle2").style.display = "none";
        document.getElementById("Line").style.display = "none";

        projectActions.unselectAll()
        sceneActions.selectLayer("layer2")

        document.getElementById("SetScaleSuccessRectangular").style.display = "";

        setTimeout( function () {
            document.getElementById("SetScaleSuccessRectangular").style.display = "none";
            if (localStorage.getItem("Tutorial") !== "Done"){
                document.getElementById('2-8-1').style.display = ""
                document.getElementById('2-8-2').style.display = ""
                document.getElementById('2-8-3').style.display = ""
                document.getElementById('2-8-4').style.display = ""
                document.getElementById('2-8-5').style.display = ""
                document.getElementById('2-8-6').style.display = ""
                document.getElementById('2-8-7').style.display = ""
                // document.getElementById('Outline Contruction Area2').style.zIndex = "99999"
                // document.getElementById('overlay').style.display = ""
            }
            document.getElementById('Outline Contruction Area1').style.display = "none"
            document.getElementById('Outline Contruction Area2').style.display = ""
        },3000);

    }

    
    //畫Scale
    const CircleMove = (circle) => {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        circle.dispatchEvent(e);
    }
    
    const DrawingScale = event => {
        var Circle1 = document.getElementById("Circle1")
        CircleMove(Circle1);
    }

    const Next_1 = event => {
        document.getElementById('2-8-8').style.display = "none"
        document.getElementById('2-8-9').style.display = "none"
        document.getElementById('2-8-10').style.display = "none"
        document.getElementById('2-8-11').style.display = "none"
        document.getElementById('2-8-12').style.display = "none"
        document.getElementById('2-8-13').style.display = "none"
        document.getElementById('2-8-14').style.display = "none"
        document.getElementById('2-8-15').style.display = "none"
        document.getElementById('2-8-16').style.display = "none"

        document.getElementById('3-8-1').style.display = ""
        document.getElementById('3-8-2').style.display = ""
        document.getElementById('3-8-3').style.display = ""
        document.getElementById('3-8-4').style.display = ""
        document.getElementById('3-8-5').style.display = ""
        document.getElementById('3-8-6').style.display = ""
        document.getElementById('3-8-7').style.display = ""

        document.getElementById('Outine Interest Area1').style.display = "none"
        document.getElementById('Outine Interest Area2').style.display = ""
    }

    const Next_2 = event => {
        document.getElementById('3-8-8').style.display = "none"
        document.getElementById('3-8-9').style.display = "none"
        document.getElementById('3-8-10').style.display = "none"
        document.getElementById('3-8-11').style.display = "none"
        document.getElementById('3-8-12').style.display = "none"
        document.getElementById('3-8-13').style.display = "none"
        document.getElementById('3-8-14').style.display = "none"
        document.getElementById('3-8-15').style.display = "none"

        document.getElementById('4-8-1').style.display = ""
        document.getElementById('4-8-2').style.display = ""
        document.getElementById('4-8-3').style.display = ""
        document.getElementById('4-8-4').style.display = ""
        document.getElementById('4-8-5').style.display = ""
        document.getElementById('4-8-6').style.display = ""
        document.getElementById('4-8-7').style.display = ""

        document.getElementById('Place Obstacle Area1').style.display = "none"
        document.getElementById('Place Obstacle Area2').style.display = ""
    }

    const Next_3 = event => {
        document.getElementById('4-8-8').style.display = "none"
        document.getElementById('4-8-9').style.display = "none"
        document.getElementById('4-8-10').style.display = "none"
        document.getElementById('4-8-11').style.display = "none"
        document.getElementById('4-8-12').style.display = "none"
        document.getElementById('4-8-13').style.display = "none"
        document.getElementById('4-8-14').style.display = "none"
        document.getElementById('4-8-15').style.display = "none"
        document.getElementById('4-8-16').style.display = "none"

        document.getElementById('5-8-1').style.display = ""
        document.getElementById('5-8-2').style.display = ""
        document.getElementById('5-8-3').style.display = ""
        document.getElementById('5-8-4').style.display = ""
        document.getElementById('5-8-5').style.display = ""
        document.getElementById('5-8-6').style.display = ""
        document.getElementById('5-8-7').style.display = ""

        document.getElementById('Place no-camera area1').style.display = "none"
        document.getElementById('Place no-camera area2').style.display = ""
    }

    const Next_4 = event => {
        document.getElementById('5-8-8').style.display = "none"
        document.getElementById('5-8-9').style.display = "none"
        document.getElementById('5-8-10').style.display = "none"
        document.getElementById('5-8-11').style.display = "none"
        document.getElementById('5-8-12').style.display = "none"
        document.getElementById('5-8-13').style.display = "none"
        document.getElementById('5-8-14').style.display = "none"
        document.getElementById('5-8-15').style.display = "none"
        document.getElementById('5-8-16').style.display = "none"

        document.getElementById('6-8-1').style.display = ""
        document.getElementById('6-8-2').style.display = ""
        document.getElementById('6-8-3').style.display = ""
        document.getElementById('6-8-4').style.display = ""
        document.getElementById('6-8-5').style.display = ""
        document.getElementById('6-8-6').style.display = ""
        document.getElementById('6-8-7').style.display = ""

        document.getElementById('Place must-cover area1').style.display = "none"
        document.getElementById('Place must-cover area2').style.display = ""
    }

    const Next_5 = event => {
        document.getElementById('6-8-8').style.display = "none"
        document.getElementById('6-8-9').style.display = "none"
        document.getElementById('6-8-10').style.display = "none"
        document.getElementById('6-8-11').style.display = "none"
        document.getElementById('6-8-12').style.display = "none"
        document.getElementById('6-8-13').style.display = "none"
        document.getElementById('6-8-14').style.display = "none"
        document.getElementById('6-8-15').style.display = "none"
        document.getElementById('6-8-16').style.display = "none"

        document.getElementById('7-8-1').style.display = ""
        document.getElementById('7-8-2').style.display = ""
        document.getElementById('7-8-3').style.display = ""
        document.getElementById('7-8-4').style.display = ""
        document.getElementById('7-8-5').style.display = ""
        document.getElementById('7-8-6').style.display = ""

        document.getElementById('Camera Tool1').style.display = "none"
        document.getElementById('Camera Tool2').style.display = ""
    }


    return(
        <div>
            <span id = "TutorialScaleMeasureWord" style = {{
                position: "absolute",
                top: "267px",
                left: ((left-431)/2) + 36,
                width: "359px",
                height: "19px",
                zIndex: 10000,
                // fontFamily: "HelveticaNeue",
                fontSize: "20px",
                fontWeight: "normal",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "left",
                color: "#ffffff",
                display: "none"
            }}>
                Enter the length of the actual wall or object
            </span>

            <span id = "TutorialScaleMeasureWord2" style = {{
                position: "absolute",
                top: "312px",
                left: ((left-431)/2) + 36,
                width: "45px",
                height: "17px",
                zIndex: 10000,
                // fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontWeight: "bold",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "left",
                color: "#ff8200",
                display: "none"
            }}>
                Length
            </span>

            <span id = "TutorialScaleMeasureWord3" style = {{
                position: "absolute",
                top: "347px",
                left: ((left-431)/2) + 234,
                width: "79px",
                height: "31px",
                zIndex: 10000,
                // fontFamily: "HelveticaNeue",
                fontSize: "26px",
                fontWeight: 500,
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "left",
                color: "#dcddde",
                display: "none"
            }}>
                Meters
            </span>

            <div id ="TutorialScaleMeasureLine" style = {{
                position: "absolute",
                width: "325px",
                height: "2px",
                zIndex: 10000,
                backgroundColor: "#c7c7c7",
                borderRadius: "2px",
                left: (left-431)/2 + 36,
                // left: "640px",
                top: "388px",
                border:"none",
                display: "none"
                }}/>

            <button id = "TutorialScaleMeasureBackButton" onClick = {MeasureBack} style ={{
                position: "absolute",
                width: "162px",
                height: "49px",
                zIndex: 10000,
                // left: "525px",
                left: (left-431)/2 + 36,
                top: "408px",
                // fontFamily: "HelveticaNeue",
                fontSize: "18px",
                fontWeight: "normal",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#ffffff",
                backgroundColor:"#b9bbbc",
                border:"none",
                borderRadius:"10px",
                cursor:"pointer",
                display: "none"
            }}>
                Go Back
            </button>

            <button id = "TutorialScaleMeasureOkButton" onClick = {MeasureOk} style ={{
                position: "absolute",
                width: "162px",
                height: "49px",
                zIndex: 10000,
                backgroundColor: "#ffa140",
                // left: "755px",
                left: (left -431)/2 + 233,
                top: "408px",
                // fontFamily: "HelveticaNeue",
                fontSize: "18px",
                fontWeight: "normal",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#ffffff",
                border:"none",
                borderRadius:"10px",
                cursor:"pointer",
                display: "none"
            }}>
                Enter
            </button>

            <button id="SetScaleSuccessRectangular" style = {{
                position: "absolute",
                width: "304px",
                height: "79px",
                zIndex: 9999,
                backgroundColor: "#222222",
                // left: "340px",
                left: (left-304)/2,
                // top: "937px",
                top: "97px",
                border:"none",
                borderRadius:"10px",
                fontSize:"20px",
                fontWeight:"normal",
                fontStretch:"normal",
                fontStyle:"normal",
                lineHeight:"normal",
                color:"#ffffff",
                display: "none"
                }}>
                Scale successfully adjusted 
            </button>

            {/* 1of8 - 1 */}
            <div id="1-8-1" class="Rectangle-13" style = {{
                position: "absolute",
                right: "18px",
                bottom: "115.4px",
                zIndex: 999999,
                display: "none"
            }}>
            </div>

            <div id="1-8-2" class="Polygon-3" style = {{
                position: "absolute",
                right: "118px",
                bottom: "100px",
                zIndex: 999999,
                display: "none"
            }}></div>

            <div id="1-8-3" class="Line-15" style = {{
                position: "absolute",
                right: "18px",
                bottom: "155px",
                zIndex: 999999,
                display: "none"
            }}></div>

            <div id="1-8-4" class="Line-14" style = {{
                position: "absolute",
                right: "284.1px",
                bottom: "155px",
                zIndex: 999999,
                display: "none"
            }}></div>

            <span id="1-8-5" class="-of-7" style = {{
                position: "absolute",
                right: "155px",
                bottom: "129px",
                zIndex: 999999,
                display: "none"
            }}>
            1 of 7
            </span>

            <span id="1-8-6" class="Scale-Tool" style = {{
                position: "absolute",
                right: "202.6px",
                bottom: "236.3px",
                zIndex: 999999,
                display: "none"
            }}>
            Scale Tool
            </span>

            <span id="1-8-7" class="Use-the-scale-tool-to-select-from-one-point-to-the-other-point-on-your-canvas-to-set-your-scale" style = {{
                position: "absolute",
                right: "44px",
                bottom: "178.1px",
                zIndex: 999999,
                display: "none"
            }}>
            Use the scale tool to select from one point to the other point on your canvas to set your scale!
            </span>

            {/* 1of8 - 2 */}
            <div id="1-8-8" class="Rectangle-15" style = {{
                position: "absolute",
                right: "400px",
                bottom: "255px",
                zIndex: 10000,
                display: "none"
            }} ></div>

            <div id="1-8-9" class="Polygon-3-2" style = {{
                position: "absolute",
                right: "673px",
                bottom: "453.1px",
                zIndex: 10000,
                display: "none"
            }}></div>

            <div id="1-8-10" class="Line-15" style = {{
                position: "absolute",
                right: "400px",
                bottom: "295.9px",
                zIndex: 10000,
                display: "none"
            }}></div>

            <div id="1-8-11" class="Line-14" style = {{
                position: "absolute",
                right: "659.2px",
                bottom: "295.9px",
                zIndex: 10000,
                display: "none"
            }}></div>

            <span id="1-8-12" class="-of-7" style = {{
                position: "absolute",
                right: "531px",
                bottom: "267px",
                zIndex: 10000,
                display: "none"
            }}>
            1 of 7
            </span>

            <span id="1-8-13" class="Use-your-cursor-by-clicking-on-one-point-of-the-screen-to-connect-to-another-point-to-form-a-linewa" style = {{
                position: "absolute",
                right: "426px",
                bottom: "319px",
                zIndex: 10000,
                display: "none"
            }}>
            Use your cursor by clicking on one point of the screen to connect to another point  to form a line/wall.
            </span>

            <img id="1-8-14" class="Screen-Shot-2022-02-10-at-41152-PM" src = {scaleTutorial} style = {{
                position: "absolute",
                right: "426px",
                bottom: "385px",
                zIndex: 10000,
                display: "none"
            }}></img>

            {/* Outline Construction Area */}

            <div id="2-8-1" class="Rectangle-13-2" style = {{
                position: "absolute",
                left: "75px",
                top: "71px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="2-8-2" class="Polygon-3-2" style = {{
                position: "absolute",
                left: "65px",
                top: "75px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="2-8-3" class="Line-15" style = {{
                position: "absolute",
                left: "110.9px",
                top: "171px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="2-8-4" class="Line-14-2" style = {{
                position: "absolute",
                left: "76px",
                top: "171px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span id="2-8-5" class="-of-7" style = {{
                position: "absolute",
                left: "211px",
                top: "185px",
                zIndex: 10000,
                display:"none"
            }}>
            2 of 7
            </span>

            <span id="2-8-6" class="Outline-Contruction-Area" style = {{
                position: "absolute",
                left: "101.5px",
                top: "93px",
                zIndex: 10000,
                display:"none"
            }}>
            Outline Contruction Area
            </span>

            <span id="2-8-7" class="Outline-the-general-enclosed-area-of-your-construction-site" style = {{
                position: "absolute",
                left: "101.5px",
                top: "118px",
                zIndex: 10000,
                display:"none"
            }}>
            Outline the general enclosed area of your construction site
            </span>

            <div id="2-8-8" class="Rectangle-16" style = {{
                position: "absolute",
                // left: "104px",
                left: "75px",
                top: "58px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="2-8-9" class="Polygon-3-2" style = {{
                position: "absolute",
                // left: "80px",
                left: "65px",
                // top: "90px",
                top: "75px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="2-8-10" class="Line-16" style = {{
                position: "absolute",
                // left: "137.9px",
                left: "108.9px",
                top: "336.1px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="2-8-11" class="Line-14-2" style = {{
                position: "absolute",
                // left: "104px",
                left: "75px",
                top: "336.1px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span id="2-8-12" class="-of-7" style = {{
                position: "absolute",
                // left: "234px",
                left: "205px",
                top: "354px",
                zIndex: 10000,
                display:"none"
            }}>
            2 of 7
            </span>

            <span id="2-8-13" class="Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like" style = {{
                position: "absolute",
                // left: "129.5px",
                left: "100.5px",
                top: "220px",
                zIndex: 10000,
                display:"none"
            }}>
            Use your cursor to click on the canvas to form any shape you like.
            </span>

            <button id="2-8-14" class = "button-Next" onClick = {Next_1} style = {{
                position: "absolute",
                // left: "198px",
                left: "169px",
                top: "274px",
                zIndex: 10000,
                display:"none"
            }}>
                Next
            </button>

            <button id="2-8-14-disabled" class = "button-Next-disabled" style = {{
                position: "absolute",
                // left: "198px",
                left: "169px",
                top: "274px",
                zIndex: 10000,
                display:"none"
            }}>
                Next
            </button>

            <img id="2-8-15" class="Screen-Shot-2022-02-10-at-41152-PM"  src = {constructionArea} style = {{
                position: "absolute",
                // left: "129.5px",
                left: "100.5px",
                top: "84px",
                zIndex: 10000,
                display:"none"
            }}></img>

            <button id="2-8-16" class="Successful" style = {{
                position: "absolute",
                left: (left-594)/2,
                top: "12.4%",
                zIndex: 10000,
                display:"none"
            }}>
                Cameras have been added to facilitate this tutorial walkthrough
            </button>

            {/* Outline Interest Area */}
            <div id="3-8-1" class="Rectangle-13-2" style = {{
                position: "absolute",
                // left: "95px",
                // top: "147px",
                left: "75px",
                top: "140px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="3-8-2" class="Polygon-3-2" style = {{
                position: "absolute",
                // left: "80px",
                // top: "159px",
                left: "65px",
                top: "145px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="3-8-3" class="Line-15" style = {{
                position: "absolute",
                // left: "130.9px",
                // top: "247px",
                left: "110.9px",
                top: "240px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="3-8-4" class="Line-17" style = {{
                position: "absolute",
                // left: "96px",
                // top: "247px",
                left: "76px",
                top: "240px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span id="3-8-5" class="-of-7" style = {{
                position: "absolute",
                // left: "231px",
                // top: "261px",
                left: "211px",
                top: "254px",      
                zIndex: 10000,
                display:"none"
            }}>
            3 of 7
            </span>

            <span id="3-8-6" class="Outline-Interest-Area" style = {{
                position: "absolute",
                // left: "121.5px",
                // top: "169px",
                left: "101.5px",
                top: "162px",
                zIndex: 10000,
                display:"none"
            }}>
            Outline Interest Area
            </span>

            <span id="3-8-7" class="Outline-the-area-of-the-site-where-you-are-interested-in-capturing" style = {{
                position: "absolute",
                // left: "121.5px",
                // top: "194px",
                left: "101.5px",
                top: "187px",
                zIndex: 10000,
                display:"none"
            }}>
            Outline the area of the site where you are interested in capturing
            </span>


            <div id="3-8-8" class="Rectangle-16" style = {{
                position: "absolute",
                // left: "105px",
                left: "75px",
                top: "133px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="3-8-9" class="Polygon-3-2" style = {{
                position: "absolute",
                // left: "84px",
                left: "65px",
                // top: "148px",
                top: "145px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="3-8-10" class="Line-16" style = {{
                position: "absolute",
                // left: "138.9px",
                left: "108.9px",
                top: "411.1px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="3-8-11" class="Line-17" style = {{
                position: "absolute",
                // left: "104px",
                left: "74px",
                top: "411.1px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span id="3-8-12" class="-of-7" style = {{
                position: "absolute",
                // left: "235px",
                left: "205px",
                top: "429px",
                zIndex: 10000,
                display:"none"
            }}>
            3 of 7
            </span>

            <span id="3-8-13" class="Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like" style = {{
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "290px",
                zIndex: 10000,
                display:"none"
            }}>
            Use your cursor to click on the canvas to form any shape you like.
            </span>

            <button id="3-8-14" class = "button-Next"  onClick={Next_2} style = {{
                position: "absolute",
                // left: "199px",
                left: "169px",
                top: "349px",
                zIndex: 10000,
                display:"none"
            }}>
                Next
            </button>

            <img id="3-8-15" class="Screen-Shot-2022-02-10-at-41152-PM"  src = {interestArea} style = {{
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "159px",
                zIndex: 10000,
                display:"none"
            }}></img>


            {/* Place Obstacle Area */}
            <div id="4-8-1" class="Rectangle-13-2" style = {{
                position: "absolute",
                // left: "96px",
                left: "75px",
                top: "211px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="4-8-2" class="Polygon-3-2" style = {{
                position: "absolute",
                // left: "81px",
                left: "66px",
                // top: "218px",
                top: "216px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="4-8-3" class="Line-15" style = {{
                position: "absolute",
                // left: "131.9px",
                left: "110.9px",
                top: "311px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="4-8-4" class="Line-18" style = {{
                position: "absolute",
                // left: "97px",
                left: "76px",
                top: "310.9px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span id="4-8-5" class="-of-7" style = {{
                position: "absolute",
                // left: "232px",
                left: "211px",
                top: "325px",
                zIndex: 10000,
                display:"none"
            }}>
            4 of 7
            </span>

            <span id="4-8-6" class="Place-Obstacle-Area" style = {{
                position: "absolute",
                // left: "122.5px",
                left: "101.5px",
                top: "233px",
                zIndex: 10000,
                display:"none"
            }}>
            Place Obstacle Area
            </span>

            <span id="4-8-7" class="Mark-the-area-where-obstacles-may-block-the-camera-view" style = {{
                position: "absolute",
                // left: "122.5px",
                left: "101.5px",
                top: "258px",
                zIndex: 10000,
                display:"none"
            }}>
            Mark the area where obstacles may block the camera view
            </span>


            <div id="4-8-8" class="Rectangle-16" style = {{
                position: "absolute",
                // left: "105px",
                left: "75px",
                top: "202px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="4-8-9" class="Polygon-3-2" style = {{
                position: "absolute",
                // left: "84px",
                // top: "220px",
                left: "66px",
                top: "216px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="4-8-10" class="Line-16" style = {{
                position: "absolute",
                // left: "138.9px",
                left: "108.9px",
                top: "480.1px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div id="4-8-11" class="Line-18" style = {{
                position: "absolute",
                // left: "104px",
                left: "74px",
                top: "480.1px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span id="4-8-12" class="-of-7" style = {{
                position: "absolute",
                // left: "235px",
                left: "205px",
                top: "498px",
                zIndex: 10000,
                display:"none"
            }}>
            4 of 7
            </span>

            <span id="4-8-13" class="Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like" style = {{
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "362px",
                zIndex: 10000,
                display:"none"
            }}>
            Use your cursor to click on the canvas to form any shape you like.
            </span>

            <button id="4-8-14" class = "button-Skip" onClick={Next_3} style = {{
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "418px",
                zIndex: 10000,
                display:"none"
            }}>
                Skip
            </button>

            <button id="4-8-15" class = "button-Next" onClick={Next_3} style = {{
                position: "absolute",
                // left: "267.5px",
                left: "237.5px",
                top: "418px",
                zIndex: 10000,
                display:"none"
            }}>
                Next
            </button>

            <img id="4-8-16" class="Screen-Shot-2022-02-10-at-41152-PM"  src = {obstacleArea} style = {{
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "228px",
                zIndex: 10000,
                display:"none"
            }}></img>


            {/* Place no-camera area */}
            <div class="Rectangle-13-2" id="5-8-1" style = {{
                position: "absolute",
                // left: "96px",
                left: "76px",
                top: "274px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Polygon-3-2" id="5-8-2" style = {{
                position: "absolute",
                // left: "81px",
                left: "66px",
                top: "286px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Line-15" id="5-8-3" style = {{
                position: "absolute",
                // left: "131.9px",
                left: "111.9px",
                top: "373.9px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Line-19" id="5-8-4" style = {{
                position: "absolute",
                // left: "97px",
                left: "77px",
                top: "373.9px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span class="-of-7" id="5-8-5" style = {{
                position: "absolute",
                // left: "232px",
                left: "212px",
                top: "388px",
                zIndex: 10000,
                display:"none"
            }}>
            5 of 7
            </span>

            <span class="Place-no-camera-area" id="5-8-6" style = {{
                position: "absolute",
                // left: "122.5px",
                left: "102.5px",
                top: "296px",
                zIndex: 10000,
                display:"none"
            }}>
            Place no-camera area
            </span>

            <span class="Mark-the-area-where-cameras-cannot-be-place-in-your-construction-site" id="5-8-7" style = {{
                position: "absolute",
                // left: "122.5px",
                left: "102.5px",
                top: "321px",
                zIndex: 10000,
                display:"none"
            }}>
            Mark the area where cameras cannot be place in your construction site
            </span>


            <div class="Rectangle-16" id="5-8-8" style = {{
                position: "absolute",
                // left: "105px",
                left: "75px",
                top: "268px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Polygon-3-2" id="5-8-9" style = {{
                position: "absolute",
                // left: "84px",
                // top: "288px",
                left: "66px",
                top: "286px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Line-16" id="5-8-10" style = {{
                position: "absolute",
                // left: "138.9px",
                left: "108.9px",
                top: "545.9px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Line-19" id="5-8-11" style = {{
                position: "absolute",
                // left: "104px",
                left: "74px",
                top: "545.9px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span class="-of-7" id="5-8-12" style = {{
                position: "absolute",
                // left: "235px",
                left: "205px",
                top: "564px",
                zIndex: 10000,
                display:"none"
            }}>
            5 of 7
            </span>

            <span class="Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like" id="5-8-13" style = {{
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "428px",
                zIndex: 10000,
                display:"none"
            }}>
            Use your cursor to click on the canvas to form any shape you like.
            </span>

            <button class = "button-Skip" id="5-8-14" onClick={Next_4} style = {{
                position: "absolute", 
                // left: "130.5px",
                left: "100.5px",
                top: "484px",
                zIndex: 10000,
                display:"none"
            }}>
                Skip
            </button>

            <button class = "button-Next" id="5-8-15" onClick={Next_4} style = {{
                position: "absolute",
                // left: "267.5px",
                left: "237.5px",
                top: "484px",
                zIndex: 10000,
                display:"none"
            }}>
                Next
            </button>

            <img class="Screen-Shot-2022-02-10-at-41152-PM"  id="5-8-16" src = {noCameraArea} style = {{
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "294px",
                zIndex: 10000,
                display:"none"
            }}></img>



            {/* Place must-cover area */}
            <div class="Rectangle-13-2" id="6-8-1" style = {{
                position: "absolute",
                // left: "96px",
                left: "76px",
                top: "344px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Polygon-3-2" id="6-8-2" style = {{
                position: "absolute",
                // left: "81px",
                left: "66px",
                top: "356px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Line-15" id="6-8-3" style = {{
                position: "absolute",
                // left: "131.9px",
                left: "111.9px",
                top: "444px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Line-20" id="6-8-4" style = {{
                position: "absolute",
                // left: "97px",
                left: "77px",
                top: "444px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span class="-of-7" id="6-8-5" style = {{
                position: "absolute",
                // left: "232px",
                left: "212px",
                top: "458px",
                zIndex: 10000,
                display:"none"
            }}>
            6 of 7
            </span>

            <span class="Place-must-cover-area" id="6-8-6" style = {{
                position: "absolute",
                // left: "122.5px",
                left: "102.5px",
                top: "366px",
                zIndex: 10000,
                display:"none"
            }}>
            Place must-cover area
            </span>

            <span class="Mark-the-targeted-area-where-the-cameras-must-cover" id="6-8-7" style = {{
                position: "absolute",
                // left: "122.5px",
                left: "102.5px",
                top: "391px",
                zIndex: 10000,
                display:"none"
            }}>
            Mark the targeted area where the cameras must cover
            </span>


            <div class="Rectangle-16" id="6-8-8" style = {{
                position: "absolute",
                // left: "105px",
                left: "75px",
                top: "335px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Polygon-3-2" id="6-8-9" style = {{
                position: "absolute",
                // left: "84px",
                // top: "355px",
                left: "66px",
                top: "356px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Line-16" id="6-8-10" style = {{
                position: "absolute",
                // left: "138.9px",
                left: "108.9px",
                top: "612.9px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Line-20" id="6-8-11" style = {{
                position: "absolute",
                // left: "104px",
                left: "74px",
                top: "612.9px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span class="-of-7" id="6-8-12" style = {{
                position: "absolute",
                // left: "235px",
                left: "205px",
                top: "631px",
                zIndex: 10000,
                display:"none"
            }}>
            6 of 7
            </span>

            <span class="Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like" id="6-8-13" style = {{
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "495px",
                zIndex: 10000,
                display:"none"
            }}>
            Use your cursor to click on the canvas to form any shape you like.
            </span>

            <button class = "button-Skip" id="6-8-14" onClick={Next_5} style = {{
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "551px",
                zIndex: 10000,
                display:"none"
            }}>
                Skip
            </button>

            <button class = "button-Next" id="6-8-15" onClick={Next_5} style = {{
                position: "absolute",
                // left: "267.5px",
                left: "237.5px",
                top: "551px",
                zIndex: 10000,
                display:"none"
            }}>
                Next
            </button>

            <img class="Screen-Shot-2022-02-10-at-41152-PM" id="6-8-16" src = {mustCoverArea} style = {{
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "361px",
                zIndex: 10000,
                display:"none"
            }}></img>



            
            {/* Camera Tool */}
            <div class="Rectangle-13-3" id="7-8-1" style = {{
                position: "absolute",
                // left: "96px"
                left: "76px",
                top: "418px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Polygon-3-2" id="7-8-2" style = {{
                position: "absolute",
                // left: "81px",
                left: "66px",
                top: "430px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Line-21" id="7-8-3" style = {{
                position: "absolute",
                // left: "97px",
                left: "77px",
                top: "501px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span class="-of-7" id="7-8-4" style = {{
                position: "absolute",
                // left: "232px",
                left: "212px",
                top: "515px",
                zIndex: 10000,
                display:"none"
            }}>
            7 of 7
            </span>

            <span class="Camera-Tool" id="7-8-5" style = {{
                position: "absolute",
                // left: "122.5px",
                left: "102.5px",
                top: "440px",
                zIndex: 10000,
                display:"none"
            }}>
            Camera Tool
            </span>

            <span class="Add-or-edit-a-camera-on-to-your-canvas" id="7-8-6" style = {{
                position: "absolute",
                // left: "122.5px",
                left: "102.5px",
                top: "465px",
                zIndex: 10000,
                display:"none"
            }}>
            Add or edit a camera on to your canvas
            </span>


            {/* Camera Tool部分等Camera目錄及hover做好再改 */}
            {/* <div class="Rectangle-16" style = {{
                position: "absolute",
                left: "105px",
                top: "335px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Polygon-3-2" style = {{
                position: "absolute",
                left: "84px",
                top: "355px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Line-16" style = {{
                position: "absolute",
                left: "138.9px",
                top: "612.9px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <div class="Line-20" style = {{
                position: "absolute",
                left: "104px",
                top: "612.9px",
                zIndex: 10000,
                display:"none"
            }}></div>

            <span class="-of-7" style = {{
                position: "absolute",
                left: "235px",
                top: "631px",
                zIndex: 10000,
                display:"none"
            }}>
            6 of 7
            </span>

            <span class="Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like" style = {{
                position: "absolute",
                left: "130.5px",
                top: "495px",
                zIndex: 10000,
                display:"none"
            }}>
            Use your cursor to click on the canvas to form any shape you like.
            </span>

            <button class = "button-Skip" style = {{
                position: "absolute",
                left: "130.5px",
                top: "551px",
                zIndex: 10000,
                display:"none"
            }}>
                Skip
            </button>

            <button class = "button-Next" style = {{
                position: "absolute",
                left: "267.5px",
                top: "551px",
                zIndex: 10000,
                display:"none"
            }}>
                Next
            </button>

            <img class="Screen-Shot-2022-02-10-at-41152-PM"  src = {mustCoverArea} style = {{
                position: "absolute",
                left: "130.5px",
                top: "361px",
                zIndex: 10000,
                display:"none"
            }}></img> */}
            

        </div>
    )
}

export default TutorialScale