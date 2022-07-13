import * as React from 'react';
import './Tutorial.css';
import scaleTutorial from './scale.png';
import constructionArea from './constructionArea.png';
import interestArea from './interestArea.png';
import obstacleArea from './obstacleArea.png';
import noCameraArea from './noCameraArea.png';
import mustCoverArea from './mustCoverArea.png';
import rotate from './rotate.png';
import { Layers } from 'three';

var TutorialScale = function TutorialScale(_ref) {
    var state = _ref.state,
        projectActions = _ref.projectActions,
        itemsActions = _ref.itemsActions,
        sceneActions = _ref.sceneActions,
        left = _ref.left;


    var MeasureBack = function MeasureBack(event) {
        document.getElementById("sidebar").style.display = "none";

        document.getElementById("TutorialScaleMeasureWord").style.display = "none";
        document.getElementById("TutorialScaleMeasureWord2").style.display = "none";
        document.getElementById("TutorialScaleMeasureWord3").style.display = "none";
        document.getElementById("TutorialScaleMeasureLine").style.display = "none";
        document.getElementById("TutorialScaleMeasureBackButton").style.display = "none";
        document.getElementById("TutorialScaleMeasureOkButton").style.display = "none";
        document.getElementById('overlay').style.display = "none";

        document.getElementById("Circle2").style.display = "none";
        document.getElementById("Line").style.display = "none";
        DrawingScale();
    };

    var MeasureOk = function MeasureOk(event) {

        var scaleinput = document.getElementById("scaleinput");
        CircleMove(scaleinput);

        document.getElementById("sidebar").style.display = "none";

        document.getElementById("TutorialScaleMeasureWord").style.display = "none";
        document.getElementById("TutorialScaleMeasureWord2").style.display = "none";
        document.getElementById("TutorialScaleMeasureWord3").style.display = "none";
        document.getElementById("TutorialScaleMeasureLine").style.display = "none";
        document.getElementById("TutorialScaleMeasureBackButton").style.display = "none";
        document.getElementById("TutorialScaleMeasureOkButton").style.display = "none";
        document.getElementById('overlay').style.display = "none";

        document.getElementById("Circle1").style.display = "none";
        document.getElementById("Circle2").style.display = "none";
        document.getElementById("Line").style.display = "none";

        projectActions.unselectAll();
        sceneActions.selectLayer("layer2");

        document.getElementById("SetScaleSuccessRectangular").style.display = "";

        setTimeout(function () {
            document.getElementById("SetScaleSuccessRectangular").style.display = "none";
            localStorage.setItem("Tutorial_Setscale", "Done");
            if (localStorage.getItem("Tutorial_ConstructionArea") !== "Done" && localStorage.getItem("Mode") == "Upload") {
                document.getElementById('Outline Construction Area1').style.display = "none";
                document.getElementById('Outline Construction Area2').style.display = "";
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
            } else if (localStorage.getItem("Tutorial_InterestArea") !== "Done" && localStorage.getItem("Mode") == "Outline") {
                document.getElementById('Outine Interest Area1').style.display = "none";
                document.getElementById('Outine Interest Area2').style.display = "";
                document.getElementById('3-8-1').style.display = "";
                document.getElementById('3-8-2').style.display = "";
                document.getElementById('3-8-3').style.display = "";
                document.getElementById('3-8-4').style.display = "";
                document.getElementById('3-8-5').style.display = "";
                document.getElementById('3-8-6').style.display = "";
                document.getElementById('3-8-7').style.display = "";
                document.getElementById('overlay_left').style.display = "";
                document.getElementById('overlay_right').style.display = "";
                document.getElementById('overlay_top_2').style.display = "";
                document.getElementById('overlay_bottom_2').style.display = "";

                var PlanJs = state.scene.toJS();
                var ScaleProperty = PlanJs.layers.layer1.items.xFAw434Nm.properties;
                var PointDistance = Math.pow(Math.pow(ScaleProperty.x1 - ScaleProperty.x2, 2) + Math.pow(ScaleProperty.y1 - ScaleProperty.y2, 2), 0.5);
                var DistanceValue = localStorage.getItem("ScaleValue");
                var OutlineScale = DistanceValue * 10 / PointDistance;
                localStorage.setItem("Scale", OutlineScale);
            }
        }, 3000);
    };

    //畫Scale
    var CircleMove = function CircleMove(circle) {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        circle.dispatchEvent(e);
    };

    var DrawingScale = function DrawingScale(event) {
        var Circle1 = document.getElementById("Circle1");
        CircleMove(Circle1);
    };

    var Next_1 = function Next_1(event) {
        document.getElementById('2-8-8').style.display = "none";
        document.getElementById('2-8-9').style.display = "none";
        document.getElementById('2-8-10').style.display = "none";
        document.getElementById('2-8-11').style.display = "none";
        document.getElementById('2-8-12').style.display = "none";
        document.getElementById('2-8-13').style.display = "none";
        document.getElementById('2-8-14').style.display = "none";
        document.getElementById('2-8-15').style.display = "none";
        document.getElementById('2-8-16').style.display = "none";

        localStorage.setItem("Tutorial_ConstructionArea", "Done");

        if (localStorage.getItem("Tutorial_InterestArea") !== "Done" && localStorage.getItem("Mode") == "Upload") {
            document.getElementById('3-8-1').style.display = "";
            document.getElementById('3-8-2').style.display = "";
            document.getElementById('3-8-3').style.display = "";
            document.getElementById('3-8-4').style.display = "";
            document.getElementById('3-8-5').style.display = "";
            document.getElementById('3-8-6').style.display = "";
            document.getElementById('3-8-7').style.display = "";
            document.getElementById('overlay_left').style.display = "";
            document.getElementById('overlay_right').style.display = "";
            document.getElementById('overlay_top_2').style.display = "";
            document.getElementById('overlay_bottom_2').style.display = "";

            document.getElementById('Outine Interest Area1').style.display = "none";
            document.getElementById('Outine Interest Area2').style.display = "";
        } else if (localStorage.getItem("Tutorial_Setscale") !== "Done" && localStorage.getItem("Mode") == "Outline") {
            document.getElementById('1-8-1').style.display = "";
            document.getElementById('1-8-2').style.display = "";
            document.getElementById('1-8-3').style.display = "";
            document.getElementById('1-8-4').style.display = "";
            document.getElementById('1-8-5').style.display = "";
            document.getElementById('1-8-6').style.display = "";
            document.getElementById('1-8-7').style.display = "";

            document.getElementById('Scale2').style.zIndex = "10001";
            document.getElementById('overlay').style.display = "";
        }
    };

    var Next_2 = function Next_2(event) {

        localStorage.setItem("Tutorial_InterestArea", "Done");

        if (localStorage.getItem("Tutorial_ObstacleArea") !== "Done") {

            document.getElementById('3-8-8').style.display = "none";
            document.getElementById('3-8-9').style.display = "none";
            document.getElementById('3-8-10').style.display = "none";
            document.getElementById('3-8-11').style.display = "none";
            document.getElementById('3-8-12').style.display = "none";
            document.getElementById('3-8-13').style.display = "none";
            document.getElementById('3-8-14').style.display = "none";
            document.getElementById('3-8-15').style.display = "none";
            document.getElementById('3-8-16').style.display = "none";

            document.getElementById('4-8-1').style.display = "";
            document.getElementById('4-8-2').style.display = "";
            document.getElementById('4-8-3').style.display = "";
            document.getElementById('4-8-4').style.display = "";
            document.getElementById('4-8-5').style.display = "";
            document.getElementById('4-8-6').style.display = "";
            document.getElementById('4-8-7').style.display = "";
            document.getElementById('overlay_left').style.display = "";
            document.getElementById('overlay_right').style.display = "";
            document.getElementById('overlay_top_3').style.display = "";
            document.getElementById('overlay_bottom_3').style.display = "";

            document.getElementById('Place Obstacle Area1').style.display = "none";
            document.getElementById('Place Obstacle Area2').style.display = "";
        }
    };

    var Next_3 = function Next_3(event) {

        localStorage.setItem("Tutorial_ObstacleArea", "Done");

        if (localStorage.getItem("Tutorial_NoCameraArea") !== "Done") {

            document.getElementById('4-8-8').style.display = "none";
            document.getElementById('4-8-9').style.display = "none";
            document.getElementById('4-8-10').style.display = "none";
            document.getElementById('4-8-11').style.display = "none";
            document.getElementById('4-8-12').style.display = "none";
            document.getElementById('4-8-13').style.display = "none";
            document.getElementById('4-8-14').style.display = "none";
            document.getElementById('4-8-15').style.display = "none";
            document.getElementById('4-8-16').style.display = "none";
            document.getElementById('4-8-17').style.display = "none";

            document.getElementById('5-8-1').style.display = "";
            document.getElementById('5-8-2').style.display = "";
            document.getElementById('5-8-3').style.display = "";
            document.getElementById('5-8-4').style.display = "";
            document.getElementById('5-8-5').style.display = "";
            document.getElementById('5-8-6').style.display = "";
            document.getElementById('5-8-7').style.display = "";
            document.getElementById('overlay_left').style.display = "";
            document.getElementById('overlay_right').style.display = "";
            document.getElementById('overlay_top_4').style.display = "";
            document.getElementById('overlay_bottom_4').style.display = "";

            document.getElementById('Place no-camera area1').style.display = "none";
            document.getElementById('Place no-camera area2').style.display = "";
        }
    };

    var Next_4 = function Next_4(event) {

        localStorage.setItem("Tutorial_NoCameraArea", "Done");

        if (localStorage.getItem("Tutorial_MustCoverArea") !== "Done") {

            document.getElementById('5-8-8').style.display = "none";
            document.getElementById('5-8-9').style.display = "none";
            document.getElementById('5-8-10').style.display = "none";
            document.getElementById('5-8-11').style.display = "none";
            document.getElementById('5-8-12').style.display = "none";
            document.getElementById('5-8-13').style.display = "none";
            document.getElementById('5-8-14').style.display = "none";
            document.getElementById('5-8-15').style.display = "none";
            document.getElementById('5-8-16').style.display = "none";
            document.getElementById('5-8-17').style.display = "none";

            document.getElementById('6-8-1').style.display = "";
            document.getElementById('6-8-2').style.display = "";
            document.getElementById('6-8-3').style.display = "";
            document.getElementById('6-8-4').style.display = "";
            document.getElementById('6-8-5').style.display = "";
            document.getElementById('6-8-6').style.display = "";
            document.getElementById('6-8-7').style.display = "";
            document.getElementById('overlay_left').style.display = "";
            document.getElementById('overlay_right').style.display = "";
            document.getElementById('overlay_top_5').style.display = "";
            document.getElementById('overlay_bottom_5').style.display = "";

            document.getElementById('Place must-cover area1').style.display = "none";
            document.getElementById('Place must-cover area2').style.display = "";
        }
    };

    var Next_5 = function Next_5(event) {

        localStorage.setItem("Tutorial_MustCoverArea", "Done");

        if (localStorage.getItem("Tutorial_CameraTool_1") !== "Done") {

            document.getElementById('6-8-8').style.display = "none";
            document.getElementById('6-8-9').style.display = "none";
            document.getElementById('6-8-10').style.display = "none";
            document.getElementById('6-8-11').style.display = "none";
            document.getElementById('6-8-12').style.display = "none";
            document.getElementById('6-8-13').style.display = "none";
            document.getElementById('6-8-14').style.display = "none";
            document.getElementById('6-8-15').style.display = "none";
            document.getElementById('6-8-16').style.display = "none";
            document.getElementById('6-8-17').style.display = "none";

            document.getElementById('7-8-1').style.display = "";
            document.getElementById('7-8-2').style.display = "";
            document.getElementById('7-8-3').style.display = "";
            document.getElementById('7-8-4').style.display = "";
            document.getElementById('7-8-5').style.display = "";
            document.getElementById('7-8-6').style.display = "";
            document.getElementById('overlay_left').style.display = "";
            document.getElementById('overlay_right').style.display = "";
            document.getElementById('overlay_top_6').style.display = "";
            document.getElementById('overlay_bottom_6').style.display = "";

            document.getElementById('Camera Tool1').style.display = "none";
            document.getElementById('Camera Tool2').style.display = "";
        }
    };

    var Next_6 = function Next_6(event) {
        if (localStorage.getItem("Tutorial_CameraTool_5") !== "Done") {

            document.getElementById("7-8-19").style.display = "none";
            document.getElementById("7-8-20").style.display = "none";
            document.getElementById("7-8-21").style.display = "none";
            document.getElementById("7-8-22").style.display = "none";
            document.getElementById("7-8-23").style.display = "none";
            document.getElementById("7-8-24").style.display = "none";
            document.getElementById("7-8-25").style.display = "none";
            document.getElementById("7-8-26").style.display = "none";
            document.getElementById("7-8-36").style.display = "none";

            var CameraX = parseInt(localStorage.getItem("CameraX"));
            var CameraY = parseInt(localStorage.getItem("CameraY"));

            document.getElementById("7-8-27").style.left = CameraX + 40 + 'px';
            document.getElementById("7-8-27").style.top = CameraY - 40 + 'px';
            document.getElementById("7-8-28").style.left = CameraX + 24 + 'px';
            document.getElementById("7-8-28").style.top = CameraY - 33 + 'px';
            document.getElementById("7-8-29").style.left = CameraX + 40 + 'px';
            document.getElementById("7-8-29").style.top = CameraY + 238.1 + 'px';
            document.getElementById("7-8-30").style.left = CameraX + 170 + 'px';
            document.getElementById("7-8-30").style.top = CameraY + 256 + 'px';
            document.getElementById("7-8-31").style.left = CameraX + 65.5 + 'px';
            document.getElementById("7-8-31").style.top = CameraY + 120 + 'px';
            document.getElementById("7-8-32").style.left = CameraX + 65.5 + 'px';
            document.getElementById("7-8-32").style.top = CameraY + 176 + 'px';
            document.getElementById("7-8-33").style.left = CameraX + 202.5 + 'px';
            document.getElementById("7-8-33").style.top = CameraY + 176 + 'px';
            document.getElementById("7-8-34").style.left = CameraX + 65.5 + 'px';
            document.getElementById("7-8-34").style.top = CameraY - 14 + 'px';
            document.getElementById("7-8-35").style.left = CameraX + 202.5 + 'px';
            document.getElementById("7-8-35").style.top = CameraY + 176 + 'px';

            document.getElementById("7-8-27").style.display = "";
            document.getElementById("7-8-28").style.display = "";
            document.getElementById("7-8-29").style.display = "";
            document.getElementById("7-8-30").style.display = "";
            document.getElementById("7-8-31").style.display = "";
            document.getElementById("7-8-32").style.display = "";
            document.getElementById("7-8-33").style.display = "";
            document.getElementById("7-8-34").style.display = "";

            localStorage.setItem("Tutorial_CameraTool_4", "Done");
        }
    };

    var Skip_6 = function Skip_6(event) {
        if (localStorage.getItem("Tutorial_CameraTool_5") !== "Done") {
            document.getElementById("7-8-19").style.display = "none";
            document.getElementById("7-8-20").style.display = "none";
            document.getElementById("7-8-21").style.display = "none";
            document.getElementById("7-8-22").style.display = "none";
            document.getElementById("7-8-23").style.display = "none";
            document.getElementById("7-8-24").style.display = "none";
            document.getElementById("7-8-25").style.display = "none";
            document.getElementById("7-8-26").style.display = "none";
            document.getElementById("7-8-36").style.display = "none";

            var CameraX = parseInt(localStorage.getItem("CameraX"));
            var CameraY = parseInt(localStorage.getItem("CameraY"));

            document.getElementById("7-8-27").style.left = CameraX + 40 + 'px';
            document.getElementById("7-8-27").style.top = CameraY - 40 + 'px';
            document.getElementById("7-8-28").style.left = CameraX + 24 + 'px';
            document.getElementById("7-8-28").style.top = CameraY - 33 + 'px';
            document.getElementById("7-8-29").style.left = CameraX + 40 + 'px';
            document.getElementById("7-8-29").style.top = CameraY + 238.1 + 'px';
            document.getElementById("7-8-30").style.left = CameraX + 170 + 'px';
            document.getElementById("7-8-30").style.top = CameraY + 256 + 'px';
            document.getElementById("7-8-31").style.left = CameraX + 65.5 + 'px';
            document.getElementById("7-8-31").style.top = CameraY + 120 + 'px';
            document.getElementById("7-8-32").style.left = CameraX + 65.5 + 'px';
            document.getElementById("7-8-32").style.top = CameraY + 176 + 'px';
            document.getElementById("7-8-33").style.left = CameraX + 202.5 + 'px';
            document.getElementById("7-8-33").style.top = CameraY + 176 + 'px';
            document.getElementById("7-8-34").style.left = CameraX + 65.5 + 'px';
            document.getElementById("7-8-34").style.top = CameraY - 14 + 'px';
            document.getElementById("7-8-35").style.left = CameraX + 202.5 + 'px';
            document.getElementById("7-8-35").style.top = CameraY + 176 + 'px';
            localStorage.setItem("Tutorial_CameraTool_4", "Done");
        }
    };

    var ClickCatalog = function ClickCatalog(Catalog) {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        Catalog.dispatchEvent(e);
    };

    var CloseCatalog = function CloseCatalog(event) {
        var CatalogClick = document.getElementById("Camera Tool2");
        ClickCatalog(CatalogClick);
        setTimeout(function () {
            document.getElementById('7-8-7').style.display = "none";
            document.getElementById('7-8-8').style.display = "none";
            document.getElementById('7-8-9').style.display = "none";
            document.getElementById('7-8-10').style.display = "none";
            document.getElementById('7-8-11').style.display = "none";
            document.getElementById('7-8-12').style.display = "none";
        }, 50);
    };

    var Next_7 = function Next_7(event) {

        if (localStorage.getItem("Tutorial_Generate") !== "Done") {

            document.getElementById("7-8-27").style.display = "none";
            document.getElementById("7-8-28").style.display = "none";
            document.getElementById("7-8-29").style.display = "none";
            document.getElementById("7-8-30").style.display = "none";
            document.getElementById("7-8-31").style.display = "none";
            document.getElementById("7-8-32").style.display = "none";
            document.getElementById("7-8-33").style.display = "none";
            document.getElementById("7-8-34").style.display = "none";
            document.getElementById("7-8-35").style.display = "none";

            localStorage.setItem("Tutorial_CameraTool_5", "Done");

            document.getElementById('Generate1').style.display = "none";
            document.getElementById('Generate2').style.display = "";

            if (localStorage.getItem("Tutorial_Generate") !== "Done") {
                document.getElementById("8-8-1").style.display = "";
                document.getElementById("8-8-2").style.display = "";
                document.getElementById("8-8-3").style.display = "";
                document.getElementById("8-8-4").style.display = "";
                CloseCatalog();
            }
        }
    };

    var ScreenWidth = document.body.clientWidth;
    var ScreenHeight = document.body.clientHeight;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'span',
            { id: 'TutorialScaleMeasureWord', style: {
                    position: "absolute",
                    top: "267px",
                    left: (left - 431) / 2 + 36,
                    width: "359px",
                    height: "19px",
                    zIndex: 10002,
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
                } },
            'Enter the length of the actual wall or object'
        ),
        React.createElement(
            'span',
            { id: 'TutorialScaleMeasureWord2', style: {
                    position: "absolute",
                    top: "312px",
                    left: (left - 431) / 2 + 36,
                    width: "45px",
                    height: "17px",
                    zIndex: 10002,
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
                } },
            'Length'
        ),
        React.createElement(
            'span',
            { id: 'TutorialScaleMeasureWord3', style: {
                    position: "absolute",
                    top: "347px",
                    left: (left - 431) / 2 + 234,
                    width: "79px",
                    height: "31px",
                    zIndex: 10002,
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
                } },
            'Meters'
        ),
        React.createElement('div', { id: 'TutorialScaleMeasureLine', style: {
                position: "absolute",
                width: "325px",
                height: "2px",
                zIndex: 10002,
                backgroundColor: "#c7c7c7",
                borderRadius: "2px",
                left: (left - 431) / 2 + 36,
                // left: "640px",
                top: "388px",
                border: "none",
                display: "none"
            } }),
        React.createElement(
            'button',
            { id: 'TutorialScaleMeasureBackButton', onClick: MeasureBack, style: {
                    position: "absolute",
                    width: "162px",
                    height: "49px",
                    zIndex: 10002,
                    // left: "525px",
                    left: (left - 431) / 2 + 36,
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
                    backgroundColor: "#b9bbbc",
                    border: "none",
                    borderRadius: "10px",
                    cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',
                    display: "none"
                } },
            'Go Back'
        ),
        React.createElement(
            'button',
            { id: 'TutorialScaleMeasureOkButton', onClick: MeasureOk, style: {
                    position: "absolute",
                    width: "162px",
                    height: "49px",
                    zIndex: 10002,
                    backgroundColor: "#ffa140",
                    // left: "755px",
                    left: (left - 431) / 2 + 233,
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
                    border: "none",
                    borderRadius: "10px",
                    cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer',
                    display: "none"
                } },
            'Enter'
        ),
        React.createElement(
            'button',
            { id: 'SetScaleSuccessRectangular', style: {
                    position: "absolute",
                    width: "304px",
                    height: "79px",
                    zIndex: 9999,
                    backgroundColor: "#222222",
                    // left: "340px",
                    left: (left - 304) / 2,
                    // top: "937px",
                    top: "97px",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "20px",
                    fontWeight: "normal",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    lineHeight: "normal",
                    color: "#ffffff",
                    display: "none"
                } },
            'Scale successfully adjusted'
        ),
        React.createElement('div', { id: '1-8-1', 'class': 'Rectangle-13', style: {
                position: "absolute",
                // right: "18px",
                right: "72px",
                bottom: "115.4px",
                zIndex: 999999,
                display: "none"
            } }),
        React.createElement('div', { id: '1-8-2', 'class': 'Polygon-3', style: {
                position: "absolute",
                // right: "118px",
                right: "208px",
                bottom: "100px",
                zIndex: 999999,
                display: "none"
            } }),
        React.createElement('div', { id: '1-8-3', 'class': 'Line-15', style: {
                position: "absolute",
                // right: "18px",
                right: "72px",
                bottom: "155px",
                zIndex: 999999,
                display: "none"
            } }),
        React.createElement('div', { id: '1-8-4', 'class': 'Line-14', style: {
                position: "absolute",
                // right: "284.1px",
                right: "338.1px",
                bottom: "155px",
                zIndex: 999999,
                display: "none"
            } }),
        React.createElement(
            'span',
            { id: '1-8-5', 'class': '-of-7', style: {
                    position: "absolute",
                    // right: "155px",
                    right: "209px",
                    bottom: "129px",
                    zIndex: 999999,
                    display: "none"
                } },
            '1 of 7'
        ),
        React.createElement(
            'span',
            { id: '1-8-6', 'class': 'Scale-Tool', style: {
                    position: "absolute",
                    // right: "202.6px",
                    right: "256.6px",
                    bottom: "236.3px",
                    zIndex: 999999,
                    display: "none"
                } },
            'Scale Tool'
        ),
        React.createElement(
            'span',
            { id: '1-8-7', 'class': 'Use-the-scale-tool-to-select-from-one-point-to-the-other-point-on-your-canvas-to-set-your-scale', style: {
                    position: "absolute",
                    // right: "44px",
                    right: "98px",
                    bottom: "178.1px",
                    zIndex: 999999,
                    display: "none"
                } },
            'Use the scale tool to select from one point to the other point on your canvas to set your scale!'
        ),
        React.createElement('div', { id: '1-8-8', 'class': 'Rectangle-15', style: {
                position: "absolute",
                right: "400px",
                bottom: "255px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '1-8-9', 'class': 'Polygon-3-2', style: {
                position: "absolute",
                right: "673px",
                bottom: "453.1px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '1-8-10', 'class': 'Line-15', style: {
                position: "absolute",
                right: "400px",
                bottom: "295.9px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '1-8-11', 'class': 'Line-14', style: {
                position: "absolute",
                right: "659.2px",
                bottom: "295.9px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { id: '1-8-12', 'class': '-of-7', style: {
                    position: "absolute",
                    right: "531px",
                    bottom: "267px",
                    zIndex: 10000,
                    display: "none"
                } },
            '1 of 7'
        ),
        React.createElement(
            'span',
            { id: '1-8-13', 'class': 'Use-your-cursor-by-clicking-on-one-point-of-the-screen-to-connect-to-another-point-to-form-a-linewa', style: {
                    position: "absolute",
                    right: "426px",
                    bottom: "319px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Use your cursor by clicking on one point of the screen to connect to another point  to form a line/wall.'
        ),
        React.createElement('img', { id: '1-8-14', 'class': 'Screen-Shot-2022-02-10-at-41152-PM', src: scaleTutorial, style: {
                position: "absolute",
                right: "426px",
                bottom: "385px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '2-8-1', 'class': 'Rectangle-13-2', style: {
                position: "absolute",
                left: "75px",
                top: "71px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '2-8-2', 'class': 'Polygon-3-2', style: {
                position: "absolute",
                left: "65px",
                top: "75px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '2-8-3', 'class': 'Line-15', style: {
                position: "absolute",
                left: "110.9px",
                top: "171px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '2-8-4', 'class': 'Line-14-2', style: {
                position: "absolute",
                left: "76px",
                top: "171px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { id: '2-8-5', 'class': '-of-7', style: {
                    position: "absolute",
                    left: "211px",
                    top: "185px",
                    zIndex: 10000,
                    display: "none"
                } },
            '2 of 7'
        ),
        React.createElement(
            'span',
            { id: '2-8-6', 'class': 'Outline-Construction-Area', style: {
                    position: "absolute",
                    left: "101.5px",
                    top: "93px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Outline Construction Area'
        ),
        React.createElement(
            'span',
            { id: '2-8-7', 'class': 'Outline-the-general-enclosed-area-of-your-construction-site', style: {
                    position: "absolute",
                    left: "101.5px",
                    top: "118px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Outline the general enclosed area of your construction site'
        ),
        React.createElement('div', { id: '2-8-8', 'class': 'Rectangle-16', style: {
                position: "absolute",
                // left: "104px",
                left: "75px",
                top: "58px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '2-8-9', 'class': 'Polygon-3-2', style: {
                position: "absolute",
                // left: "80px",
                left: "65px",
                // top: "90px",
                top: "75px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '2-8-10', 'class': 'Line-16', style: {
                position: "absolute",
                // left: "137.9px",
                left: "108.9px",
                top: "336.1px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '2-8-11', 'class': 'Line-14-2', style: {
                position: "absolute",
                // left: "104px",
                left: "75px",
                top: "336.1px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { id: '2-8-12', 'class': '-of-7', style: {
                    position: "absolute",
                    // left: "234px",
                    left: "205px",
                    top: "354px",
                    zIndex: 10000,
                    display: "none"
                } },
            '2 of 7'
        ),
        React.createElement(
            'span',
            { id: '2-8-13', 'class': 'Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like', style: {
                    position: "absolute",
                    // left: "129.5px",
                    left: "100.5px",
                    top: "220px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Use your cursor to click on the canvas to form any shape you like.'
        ),
        React.createElement(
            'button',
            { id: '2-8-14', 'class': 'button-Next', onClick: Next_1, style: {
                    position: "absolute",
                    // left: "198px",
                    left: "169px",
                    top: "274px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement('img', { id: '2-8-15', 'class': 'Screen-Shot-2022-02-10-at-41152-PM', src: constructionArea, style: {
                position: "absolute",
                // left: "129.5px",
                left: "100.5px",
                top: "84px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'button',
            { id: '2-8-16', 'class': 'Successful', style: {
                    position: "absolute",
                    left: (left - 594) / 2,
                    top: "12.4%",
                    zIndex: 10000,
                    display: "none"
                } },
            'Cameras have been added to facilitate this tutorial walkthrough'
        ),
        React.createElement(
            'button',
            { id: '2-8-17', 'class': 'button-Next-disabled', disabled: true, style: {
                    position: "absolute",
                    // left: "198px",
                    left: "169px",
                    top: "274px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement('div', { id: '3-8-1', 'class': 'Rectangle-13-2', style: {
                position: "absolute",
                // left: "95px",
                // top: "147px",
                left: "75px",
                top: "140px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '3-8-2', 'class': 'Polygon-3-2', style: {
                position: "absolute",
                // left: "80px",
                // top: "159px",
                left: "65px",
                top: "145px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '3-8-3', 'class': 'Line-15', style: {
                position: "absolute",
                // left: "130.9px",
                // top: "247px",
                left: "110.9px",
                top: "240px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '3-8-4', 'class': 'Line-17', style: {
                position: "absolute",
                // left: "96px",
                // top: "247px",
                left: "76px",
                top: "240px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { id: '3-8-5', 'class': '-of-7', style: {
                    position: "absolute",
                    // left: "231px",
                    // top: "261px",
                    left: "211px",
                    top: "254px",
                    zIndex: 10000,
                    display: "none"
                } },
            '3 of 7'
        ),
        React.createElement(
            'span',
            { id: '3-8-6', 'class': 'Outline-Interest-Area', style: {
                    position: "absolute",
                    // left: "121.5px",
                    // top: "169px",
                    left: "101.5px",
                    top: "162px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Outline Interest Area'
        ),
        React.createElement(
            'span',
            { id: '3-8-7', 'class': 'Outline-the-area-of-the-site-where-you-are-interested-in-capturing', style: {
                    position: "absolute",
                    // left: "121.5px",
                    // top: "194px",
                    left: "101.5px",
                    top: "187px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Outline the area of the site where you are interested in capturing'
        ),
        React.createElement('div', { id: '3-8-8', 'class': 'Rectangle-16', style: {
                position: "absolute",
                // left: "105px",
                left: "75px",
                top: "133px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '3-8-9', 'class': 'Polygon-3-2', style: {
                position: "absolute",
                // left: "84px",
                left: "65px",
                // top: "148px",
                top: "145px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '3-8-10', 'class': 'Line-16', style: {
                position: "absolute",
                // left: "138.9px",
                left: "108.9px",
                top: "411.1px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '3-8-11', 'class': 'Line-17', style: {
                position: "absolute",
                // left: "104px",
                left: "74px",
                top: "411.1px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { id: '3-8-12', 'class': '-of-7', style: {
                    position: "absolute",
                    // left: "235px",
                    left: "205px",
                    top: "429px",
                    zIndex: 10000,
                    display: "none"
                } },
            '3 of 7'
        ),
        React.createElement(
            'span',
            { id: '3-8-13', 'class': 'Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like', style: {
                    position: "absolute",
                    // left: "130.5px",
                    left: "100.5px",
                    top: "290px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Use your cursor to click on the canvas to form any shape you like.'
        ),
        React.createElement(
            'button',
            { id: '3-8-14', 'class': 'button-Next-disabled', disabled: true, onClick: Next_2, style: {
                    position: "absolute",
                    // left: "199px",
                    left: "169px",
                    top: "349px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement(
            'button',
            { id: '3-8-15', 'class': 'button-Next', onClick: Next_2, style: {
                    position: "absolute",
                    // left: "199px",
                    left: "169px",
                    top: "349px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement('img', { id: '3-8-16', 'class': 'Screen-Shot-2022-02-10-at-41152-PM', src: interestArea, style: {
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "159px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '4-8-1', 'class': 'Rectangle-13-2', style: {
                position: "absolute",
                // left: "96px",
                left: "75px",
                top: "211px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '4-8-2', 'class': 'Polygon-3-2', style: {
                position: "absolute",
                // left: "81px",
                left: "66px",
                // top: "218px",
                top: "216px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '4-8-3', 'class': 'Line-15', style: {
                position: "absolute",
                // left: "131.9px",
                left: "110.9px",
                top: "311px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '4-8-4', 'class': 'Line-18', style: {
                position: "absolute",
                // left: "97px",
                left: "76px",
                top: "310.9px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { id: '4-8-5', 'class': '-of-7', style: {
                    position: "absolute",
                    // left: "232px",
                    left: "211px",
                    top: "325px",
                    zIndex: 10000,
                    display: "none"
                } },
            '4 of 7'
        ),
        React.createElement(
            'span',
            { id: '4-8-6', 'class': 'Place-Obstacle-Area', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "101.5px",
                    top: "233px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Place Obstacle Area'
        ),
        React.createElement(
            'span',
            { id: '4-8-7', 'class': 'Mark-the-area-where-obstacles-may-block-the-camera-view', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "101.5px",
                    top: "258px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Mark the area where obstacles may block the camera view'
        ),
        React.createElement('div', { id: '4-8-8', 'class': 'Rectangle-16', style: {
                position: "absolute",
                // left: "105px",
                left: "75px",
                top: "202px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '4-8-9', 'class': 'Polygon-3-2', style: {
                position: "absolute",
                // left: "84px",
                // top: "220px",
                left: "66px",
                top: "216px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '4-8-10', 'class': 'Line-16', style: {
                position: "absolute",
                // left: "138.9px",
                left: "108.9px",
                top: "480.1px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '4-8-11', 'class': 'Line-18', style: {
                position: "absolute",
                // left: "104px",
                left: "74px",
                top: "480.1px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { id: '4-8-12', 'class': '-of-7', style: {
                    position: "absolute",
                    // left: "235px",
                    left: "205px",
                    top: "498px",
                    zIndex: 10000,
                    display: "none"
                } },
            '4 of 7'
        ),
        React.createElement(
            'span',
            { id: '4-8-13', 'class': 'Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like', style: {
                    position: "absolute",
                    // left: "130.5px",
                    left: "100.5px",
                    top: "362px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Use your cursor to click on the canvas to form any shape you like.'
        ),
        React.createElement(
            'button',
            { id: '4-8-14', 'class': 'button-Skip', onClick: Next_3, style: {
                    position: "absolute",
                    // left: "130.5px",
                    left: "100.5px",
                    top: "418px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Skip'
        ),
        React.createElement(
            'button',
            { id: '4-8-15', 'class': 'button-Next-disabled', disabled: true, onClick: Next_3, style: {
                    position: "absolute",
                    // left: "267.5px",
                    left: "237.5px",
                    top: "418px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement(
            'button',
            { id: '4-8-16', 'class': 'button-Next', onClick: Next_3, style: {
                    position: "absolute",
                    // left: "267.5px",
                    left: "237.5px",
                    top: "418px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement('img', { id: '4-8-17', 'class': 'Screen-Shot-2022-02-10-at-41152-PM', src: obstacleArea, style: {
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "228px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Rectangle-13-2', id: '5-8-1', style: {
                position: "absolute",
                // left: "96px",
                left: "76px",
                top: "274px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Polygon-3-2', id: '5-8-2', style: {
                position: "absolute",
                // left: "81px",
                left: "66px",
                top: "286px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-15', id: '5-8-3', style: {
                position: "absolute",
                // left: "131.9px",
                left: "111.9px",
                top: "373.9px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-19', id: '5-8-4', style: {
                position: "absolute",
                // left: "97px",
                left: "77px",
                top: "373.9px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { 'class': '-of-7', id: '5-8-5', style: {
                    position: "absolute",
                    // left: "232px",
                    left: "212px",
                    top: "388px",
                    zIndex: 10000,
                    display: "none"
                } },
            '5 of 7'
        ),
        React.createElement(
            'span',
            { 'class': 'Place-no-camera-area', id: '5-8-6', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "102.5px",
                    top: "296px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Place no-camera area'
        ),
        React.createElement(
            'span',
            { 'class': 'Mark-the-area-where-cameras-cannot-be-place-in-your-construction-site', id: '5-8-7', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "102.5px",
                    top: "321px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Mark the area where cameras cannot be place in your construction site'
        ),
        React.createElement('div', { 'class': 'Rectangle-16', id: '5-8-8', style: {
                position: "absolute",
                // left: "105px",
                left: "75px",
                top: "268px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Polygon-3-2', id: '5-8-9', style: {
                position: "absolute",
                // left: "84px",
                // top: "288px",
                left: "66px",
                top: "286px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-16', id: '5-8-10', style: {
                position: "absolute",
                // left: "138.9px",
                left: "108.9px",
                top: "545.9px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-19', id: '5-8-11', style: {
                position: "absolute",
                // left: "104px",
                left: "74px",
                top: "545.9px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { 'class': '-of-7', id: '5-8-12', style: {
                    position: "absolute",
                    // left: "235px",
                    left: "205px",
                    top: "564px",
                    zIndex: 10000,
                    display: "none"
                } },
            '5 of 7'
        ),
        React.createElement(
            'span',
            { 'class': 'Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like', id: '5-8-13', style: {
                    position: "absolute",
                    // left: "130.5px",
                    left: "100.5px",
                    top: "428px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Use your cursor to click on the canvas to form any shape you like.'
        ),
        React.createElement(
            'button',
            { 'class': 'button-Skip', id: '5-8-14', onClick: Next_4, style: {
                    position: "absolute",
                    // left: "130.5px",
                    left: "100.5px",
                    top: "484px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Skip'
        ),
        React.createElement(
            'button',
            { 'class': 'button-Next-disabled', id: '5-8-15', disabled: true, onClick: Next_4, style: {
                    position: "absolute",
                    // left: "267.5px",
                    left: "237.5px",
                    top: "484px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement(
            'button',
            { 'class': 'button-Next', id: '5-8-16', onClick: Next_4, style: {
                    position: "absolute",
                    // left: "267.5px",
                    left: "237.5px",
                    top: "484px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement('img', { 'class': 'Screen-Shot-2022-02-10-at-41152-PM', id: '5-8-17', src: noCameraArea, style: {
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "294px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Rectangle-13-2', id: '6-8-1', style: {
                position: "absolute",
                // left: "96px",
                left: "76px",
                top: "344px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Polygon-3-2', id: '6-8-2', style: {
                position: "absolute",
                // left: "81px",
                left: "66px",
                top: "356px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-15', id: '6-8-3', style: {
                position: "absolute",
                // left: "131.9px",
                left: "111.9px",
                top: "444px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-20', id: '6-8-4', style: {
                position: "absolute",
                // left: "97px",
                left: "77px",
                top: "444px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { 'class': '-of-7', id: '6-8-5', style: {
                    position: "absolute",
                    // left: "232px",
                    left: "212px",
                    top: "458px",
                    zIndex: 10000,
                    display: "none"
                } },
            '6 of 7'
        ),
        React.createElement(
            'span',
            { 'class': 'Place-must-cover-area', id: '6-8-6', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "102.5px",
                    top: "366px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Place must-cover area'
        ),
        React.createElement(
            'span',
            { 'class': 'Mark-the-targeted-area-where-the-cameras-must-cover', id: '6-8-7', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "102.5px",
                    top: "391px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Mark the targeted area where the cameras must cover'
        ),
        React.createElement('div', { 'class': 'Rectangle-16', id: '6-8-8', style: {
                position: "absolute",
                // left: "105px",
                left: "75px",
                top: "335px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Polygon-3-2', id: '6-8-9', style: {
                position: "absolute",
                // left: "84px",
                // top: "355px",
                left: "66px",
                top: "356px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-16', id: '6-8-10', style: {
                position: "absolute",
                // left: "138.9px",
                left: "108.9px",
                top: "612.9px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-20', id: '6-8-11', style: {
                position: "absolute",
                // left: "104px",
                left: "74px",
                top: "612.9px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { 'class': '-of-7', id: '6-8-12', style: {
                    position: "absolute",
                    // left: "235px",
                    left: "205px",
                    top: "631px",
                    zIndex: 10000,
                    display: "none"
                } },
            '6 of 7'
        ),
        React.createElement(
            'span',
            { 'class': 'Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like', id: '6-8-13', style: {
                    position: "absolute",
                    // left: "130.5px",
                    left: "100.5px",
                    top: "495px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Use your cursor to click on the canvas to form any shape you like.'
        ),
        React.createElement(
            'button',
            { 'class': 'button-Skip', id: '6-8-14', onClick: Next_5, style: {
                    position: "absolute",
                    // left: "130.5px",
                    left: "100.5px",
                    top: "551px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Skip'
        ),
        React.createElement(
            'button',
            { 'class': 'button-Next-disabled', id: '6-8-15', disabled: true, onClick: Next_5, style: {
                    position: "absolute",
                    // left: "267.5px",
                    left: "237.5px",
                    top: "551px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement(
            'button',
            { 'class': 'button-Next', id: '6-8-16', onClick: Next_5, style: {
                    position: "absolute",
                    // left: "267.5px",
                    left: "237.5px",
                    top: "551px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement('img', { 'class': 'Screen-Shot-2022-02-10-at-41152-PM', id: '6-8-17', src: mustCoverArea, style: {
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "361px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Rectangle-13-3', id: '7-8-1', style: {
                position: "absolute",
                // left: "96px"
                left: "76px",
                top: "418px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Polygon-3-2', id: '7-8-2', style: {
                position: "absolute",
                // left: "81px",
                left: "65px",
                // top: "430px",
                top: "425px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-21', id: '7-8-3', style: {
                position: "absolute",
                // left: "97px",
                left: "77px",
                top: "501px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { 'class': '-of-7', id: '7-8-4', style: {
                    position: "absolute",
                    // left: "232px",
                    left: "212px",
                    top: "515px",
                    zIndex: 10000,
                    display: "none"
                } },
            '7 of 7'
        ),
        React.createElement(
            'span',
            { 'class': 'Camera-Tool', id: '7-8-5', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "102.5px",
                    top: "440px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Camera Tool'
        ),
        React.createElement(
            'span',
            { 'class': 'Add-or-edit-a-camera-on-to-your-canvas', id: '7-8-6', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "102.5px",
                    top: "465px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Add or edit a camera on to your canvas'
        ),
        React.createElement('div', { 'class': 'Rectangle-17', id: '7-8-7', style: {
                position: "absolute",
                left: "419px",
                top: "103px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Polygon-3-2', id: '7-8-8', style: {
                position: "absolute",
                left: "403px",
                top: "110px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-21', id: '7-8-9', style: {
                position: "absolute",
                left: "419px",
                top: "207px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { 'class': '-of-7', id: '7-8-10', style: {
                    position: "absolute",
                    left: "555.5px",
                    top: "222px",
                    zIndex: 10000,
                    display: "none"
                } },
            '7 of 7'
        ),
        React.createElement(
            'span',
            { 'class': 'Camera-Tool', id: '7-8-11', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "445.5px",
                    top: "125px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Camera Tool'
        ),
        React.createElement(
            'span',
            { 'class': 'Add-a-camera-by-clicking-on-any-camera-on-this-panel-to-add-to-your-canvas', id: '7-8-12', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "445.5px",
                    top: "150px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Add a camera by clicking on any camera on this panel to add to your canvas'
        ),
        React.createElement('div', { 'class': 'Rectangle-17', id: '7-8-13', style: {
                position: "absolute",
                left: "419px",
                top: "103px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Polygon-3-2', id: '7-8-14', style: {
                position: "absolute",
                left: "403px",
                top: "110px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-21', id: '7-8-15', style: {
                position: "absolute",
                left: "419px",
                top: "207px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { 'class': '-of-7', id: '7-8-16', style: {
                    position: "absolute",
                    left: "555.5px",
                    top: "222px",
                    zIndex: 10000,
                    display: "none"
                } },
            '7 of 7'
        ),
        React.createElement(
            'span',
            { 'class': 'Click-for-more-camera-options', id: '7-8-17', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "445.5px",
                    top: "125px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Click for more camera options'
        ),
        React.createElement(
            'span',
            { 'class': 'Add-a-camera-by-clicking-on-any-camera-on-this-panel-to-add-to-your-canvas', id: '7-8-18', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "445.5px",
                    top: "150px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Click the camera to open the camera panel to edit your camera'
        ),
        React.createElement('div', { 'class': 'Rectangle-18', id: '7-8-19', style: {
                position: "absolute",
                left: "419px",
                top: "103px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Polygon-3-2', id: '7-8-20', style: {
                position: "absolute",
                left: "403px",
                top: "110px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { 'class': 'Line-21', id: '7-8-21', style: {
                position: "absolute",
                left: "419px",
                top: "273px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { 'class': '-of-7', id: '7-8-22', style: {
                    position: "absolute",
                    left: "555.5px",
                    top: "287px",
                    zIndex: 10000,
                    display: "none"
                } },
            '7 of 7'
        ),
        React.createElement(
            'span',
            { 'class': 'Camera-Tool', id: '7-8-23', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "445.5px",
                    top: "125px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Camera Tool'
        ),
        React.createElement(
            'span',
            { 'class': 'Add-a-camera-by-clicking-on-any-camera-on-this-panel-to-add-to-your-canvas', id: '7-8-24', style: {
                    position: "absolute",
                    // left: "122.5px",
                    left: "445.5px",
                    top: "150px",
                    zIndex: 10000,
                    display: "none"
                } },
            'When the camera is selected, you may change your camera to another type from this panel'
        ),
        React.createElement(
            'button',
            { id: '7-8-25', 'class': 'button-Skip', onClick: Skip_6, style: {
                    position: "absolute",
                    // left: "130.5px",
                    // left: "100.5px",
                    left: "445.5px",
                    top: "215px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Skip'
        ),
        React.createElement(
            'button',
            { id: '7-8-26', 'class': 'button-Next-disabled', disabled: true, onClick: Next_6, style: {
                    position: "absolute",
                    // left: "267.5px",
                    left: "582.5px",
                    top: "215px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement('div', { id: '7-8-27', 'class': 'Rectangle-16', style: {
                position: "absolute",
                // left: "105px",
                left: "75px",
                top: "202px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '7-8-28', 'class': 'Polygon-3-2', style: {
                position: "absolute",
                // left: "84px",
                // top: "220px",
                left: "66px",
                top: "216px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '7-8-29', 'class': 'Line-22', style: {
                position: "absolute",
                // left: "138.9px",
                left: "108.9px",
                top: "480.1px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { id: '7-8-30', 'class': '-of-7', style: {
                    position: "absolute",
                    // left: "235px",
                    left: "205px",
                    top: "498px",
                    zIndex: 10000,
                    display: "none"
                } },
            '7 of 7'
        ),
        React.createElement(
            'span',
            { id: '7-8-31', 'class': 'Use-your-cursor-to-click-on-the-canvas-to-form-any-shape-you-like', style: {
                    position: "absolute",
                    // left: "130.5px",
                    left: "100.5px",
                    top: "362px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Use your cursor to rotate the camera by the corners'
        ),
        React.createElement(
            'button',
            { id: '7-8-32', 'class': 'button-Skip', onClick: Next_7, style: {
                    position: "absolute",
                    // left: "130.5px",
                    left: "100.5px",
                    top: "418px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Skip'
        ),
        React.createElement(
            'button',
            { id: '7-8-33', 'class': 'button-Next-disabled', disabled: true, onClick: Next_7, style: {
                    position: "absolute",
                    // left: "267.5px",
                    left: "237.5px",
                    top: "418px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement('img', { id: '7-8-34', 'class': 'Screen-Shot-2022-02-10-at-41152-PM', src: rotate, style: {
                position: "absolute",
                // left: "130.5px",
                left: "100.5px",
                top: "228px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'button',
            { id: '7-8-35', 'class': 'button-Next', onClick: Next_7, style: {
                    position: "absolute",
                    // left: "267.5px",
                    left: "237.5px",
                    top: "418px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement(
            'button',
            { id: '7-8-36', 'class': 'button-Next', onClick: Next_6, style: {
                    position: "absolute",
                    // left: "267.5px",
                    left: "582.5px",
                    top: "215px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Next'
        ),
        React.createElement('div', { id: '8-8-1', 'class': 'Rectangle-19', style: {
                position: "absolute",
                right: "46px",
                top: "101px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement('div', { id: '8-8-2', 'class': 'Polygon-3-3', style: {
                position: "absolute",
                right: "71px",
                top: "81px",
                zIndex: 10000,
                display: "none"
            } }),
        React.createElement(
            'span',
            { id: '8-8-3', 'class': 'Generate-your-first-report', style: {
                    position: "absolute",
                    // left: "130.5px",
                    right: "128px",
                    top: "123px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Generate your first report!'
        ),
        React.createElement(
            'span',
            { id: '8-8-4', 'class': 'Click-generate-to-see-your-first-summary', style: {
                    position: "absolute",
                    // left: "130.5px",
                    right: "58px",
                    top: "148px",
                    zIndex: 10000,
                    display: "none"
                } },
            'Click generate to see your first summary!'
        ),
        React.createElement('button', { id: 'overlay_left', style: {
                position: "absolute",
                left: "0px",
                top: "0px",
                width: "1px",
                height: "100%",
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_right', style: {
                position: "absolute",
                left: "58.5px",
                top: "0px",
                width: ScreenWidth - 58.5,
                height: "100%",
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_top_1', style: {
                position: "absolute",
                left: "12px",
                top: "0px",
                width: "46.5px",
                height: "82px",
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_bottom_1', style: {
                position: "absolute",
                left: "12px",
                top: "127px",
                width: "46.5px",
                height: ScreenHeight - 127,
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_top_2', style: {
                position: "absolute",
                left: "12px",
                top: "0px",
                width: "46.5px",
                height: "152px",
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_bottom_2', style: {
                position: "absolute",
                left: "12px",
                top: "197px",
                width: "46.5px",
                height: ScreenHeight - 197,
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_top_3', style: {
                position: "absolute",
                left: "12px",
                top: "0px",
                width: "46.5px",
                height: "222px",
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_bottom_3', style: {
                position: "absolute",
                left: "12px",
                top: "267px",
                width: "46.5px",
                height: ScreenHeight - 267,
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_top_4', style: {
                position: "absolute",
                left: "12px",
                top: "0px",
                width: "46.5px",
                height: "292px",
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_bottom_4', style: {
                position: "absolute",
                left: "12px",
                top: "337px",
                width: "46.5px",
                height: ScreenHeight - 337,
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_top_5', style: {
                position: "absolute",
                left: "12px",
                top: "0px",
                width: "46.5px",
                height: "362px",
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_bottom_5', style: {
                position: "absolute",
                left: "12px",
                top: "407px",
                width: "46.5px",
                height: ScreenHeight - 407,
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_top_6', style: {
                position: "absolute",
                left: "12px",
                top: "0px",
                width: "46.5px",
                height: "432px",
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } }),
        React.createElement('button', { id: 'overlay_bottom_6', style: {
                position: "absolute",
                left: "12px",
                top: "477px",
                width: "46.5px",
                height: ScreenHeight - 477,
                zIndex: 9999,
                border: "none",
                backgroundColor: "rgba(152, 154, 156, 0.7)",
                display: "none"
            } })
    );
};

export default TutorialScale;