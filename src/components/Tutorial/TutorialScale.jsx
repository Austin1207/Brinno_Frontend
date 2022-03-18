import * as React from 'react';

const TutorialScale = ({state, projectActions, itemsActions,left}) => {

    const TutoialScaleOk = event => {
        document.getElementById("TutorialScaleRectangular").style.display = "none";
        document.getElementById("TutorialScaleWord").style.display = "none";
        document.getElementById("TutorialScaleButton").style.display = "none";
        
        document.getElementById("TutorialScalePopupRectangular").style.display = "";
        document.getElementById("TutorialScalePopupWord").style.display = "";
        document.getElementById("TutorialScalePopupShowmeButton").style.display = "";
        document.getElementById("TutorialScalePopupOkButton").style.display = "";
      }

    const PopShowme = event => {
        conosle.log("Not yet")
    }

    const PopOk = event => {
        document.getElementById("sidebar").style.display = "";

        document.getElementById("TutorialScalePopupRectangular").style.display = "none";
        document.getElementById("TutorialScalePopupWord").style.display = "none";
        document.getElementById("TutorialScalePopupShowmeButton").style.display = "none";
        document.getElementById("TutorialScalePopupOkButton").style.display = "none";

        document.getElementById("TutorialScaleMeasureWord").style.display = "";
        document.getElementById("TutorialScaleMeasureLine").style.display = "";
        document.getElementById("TutorialScaleMeasureTriangle").style.display = "";
        document.getElementById("TutorialScaleMeasureBackButton").style.display = "";
        document.getElementById("TutorialScaleMeasureOkButton").style.display = "";

        itemsActions.selectItem("layer0", "xFAw434Nm");
    }

    const MeasureBack = event => {
        document.getElementById("sidebar").style.display = "none";

        document.getElementById("TutorialScalePopupRectangular").style.display = "";
        document.getElementById("TutorialScalePopupWord").style.display = "";
        document.getElementById("TutorialScalePopupShowmeButton").style.display = "";
        document.getElementById("TutorialScalePopupOkButton").style.display = "";

        document.getElementById("TutorialScaleMeasureWord").style.display = "none";
        document.getElementById("TutorialScaleMeasureLine").style.display = "none";
        document.getElementById("TutorialScaleMeasureTriangle").style.display = "none";
        document.getElementById("TutorialScaleMeasureBackButton").style.display = "none";
        document.getElementById("TutorialScaleMeasureOkButton").style.display = "none";

    }

    const MeasureOk = event => {
        document.getElementById("sidebar").style.display = "none";

        document.getElementById("TutorialScaleMeasureWord").style.display = "none";
        document.getElementById("TutorialScaleMeasureLine").style.display = "none";
        document.getElementById("TutorialScaleMeasureTriangle").style.display = "none";
        document.getElementById("TutorialScaleMeasureBackButton").style.display = "none";
        document.getElementById("TutorialScaleMeasureOkButton").style.display = "none";

        document.getElementById("TutorialScalePopupRectangular").style.display = "";
        document.getElementById("TutorialScaleSetWord").style.display = "";
        document.getElementById("TutorialScaleSetBackButton").style.display = "";
        document.getElementById("TutorialScaleSetOkButton").style.display = "";

    }

    const SetBack = event => {
        document.getElementById("sidebar").style.display = "";

        document.getElementById("TutorialScaleMeasureWord").style.display = "";
        document.getElementById("TutorialScaleMeasureLine").style.display = "";
        document.getElementById("TutorialScaleMeasureTriangle").style.display = "";
        document.getElementById("TutorialScaleMeasureBackButton").style.display = "";
        document.getElementById("TutorialScaleMeasureOkButton").style.display = "";

        document.getElementById("TutorialScalePopupRectangular").style.display = "none";
        document.getElementById("TutorialScaleSetWord").style.display = "none";
        document.getElementById("TutorialScaleSetBackButton").style.display = "none";
        document.getElementById("TutorialScaleSetOkButton").style.display = "none";
    }

    const SetOk = event => {
        document.getElementById("TutorialScalePopupRectangular").style.display = "none";
        document.getElementById("TutorialScaleSetWord").style.display = "none";
        document.getElementById("TutorialScaleSetBackButton").style.display = "none";
        document.getElementById("TutorialScaleSetOkButton").style.display = "none";

        projectActions.unselectAll()
    }

    return(
        <div>

            {/* TutorialScale */}

            <div id ="TutorialScaleRectangular" style = {{
                position: "absolute",
                width: "565px",
                height: "42px",
                zIndex: 9999,
                backgroundColor: "#efeded",
                // left: "340px",
                left: (left-565)/2,
                // top: "937px",
                top: "650px",
                border:"none",
                display: "none"
                }}/>

            <span id = "TutorialScaleWord" style = {{
                position: "absolute",
                top: "663px",
                // left: "323px",
                left: ((left-516)/2)-50,
                width: "516px",
                height: "17px",
                zIndex: 10000,
                // fontFamily: "HelveticaNeue",
                fontSize: "12px",
                fontWeight: 500,
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#000",
                display: "none"
            }}>
                You can magnify or minimize anywhere with scroll on your mouse or touchpad
            </span>

            <button id = "TutorialScaleButton" onClick = {TutoialScaleOk} style ={{
                position: "absolute",
                width: "61px",
                height: "24px",
                zIndex: 10000,
                backgroundColor: "#ff8200",
                // left: "821px",
                left: ((left-61)/2)+220,
                top: "659px",
                color: "#fff",
                border:"none",
                borderRadius:"8px",
                display: "none"
            }}>
                ok
            </button>

            {/* popup */}

            <div id ="TutorialScalePopupRectangular" style = {{
                position: "absolute",
                width: "520px",
                height: "204px",
                zIndex: 9999,
                backgroundColor: "#271807",
                borderRadius: "3px",
                // left: "460px",
                left: (left-520)/2,
                // top: "76px",
                top: "90px",
                border:"none",
                display: "none"
                }}/>

            <span id = "TutorialScalePopupWord" style = {{
                position: "absolute",
                top: "133px",
                // left: "527px",
                left: (left-386)/2,
                width: "386px",
                height: "38px",
                zIndex: 10000,
                // fontFamily: "HelveticaNeue",
                fontSize: "16px",
                fontWeight: 500,
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#fff",
                display: "none"
            }}>
                Please use your cursor to select from one endpoint  to the other endpoint to set the scale of your canvas
            </span>

            <button id = "TutorialScalePopupShowmeButton" onClick = {PopShowme} style ={{
                position: "absolute",
                width: "160px",
                height: "44px",
                zIndex: 10000,
                // left: "525px",
                left: (left-386)/2,
                top: "201px",
                // fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontWeight: 500,
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#969696",
                border:"none",
                borderRadius:"8px",
                display: "none"
            }}>
                Show me
            </button>

            <button id = "TutorialScalePopupOkButton" onClick = {PopOk} style ={{
                position: "absolute",
                width: "160px",
                height: "44px",
                zIndex: 10000,
                backgroundColor: "#ff8200",
                // left: "755px",
                left: (left+70)/2,
                top: "201px",
                // fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontWeight: 500,
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#fff",
                border:"none",
                borderRadius:"8px",
                display: "none"
            }}>
                Ok
            </button>

            {/* TutorialScaleMeasure */}

            <span id = "TutorialScaleMeasureWord" style = {{
                position: "absolute",
                top: "123px",
                // left: "559px",
                left: ((left-520)/2) + 99,
                width: "323px",
                height: "23px",
                zIndex: 10000,
                // fontFamily: "HelveticaNeue",
                fontSize: "16px",
                fontWeight: 500,
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#fff",
                display: "none"
            }}>
                Please enter the length of the two points selected
            </span>

            <div id ="TutorialScaleMeasureLine" style = {{
                position: "absolute",
                width: "88px",
                height: "5px",
                zIndex: 10000,
                backgroundColor: "#d8d8d8",
                borderRadius: "2px",
                left: (left-160)/2,
                // left: "640px",
                top: "210px",
                border:"none",
                borderRadius:"8px",
                display: "none"
                }}/>

                
            <div id ="TutorialScaleMeasureTriangle" style = {{
                position: "absolute",
                zIndex: 10000,
                left: "785px",
                left: (left + 130)/2,
                top: "182px",
                borderTop:"7px solid gray",
                borderLeft:"7px solid transparent",
                borderRight:"7px solid transparent",
                borderBottom:"7px solid transparent",
                display: "none"
                }}/>

            <button id = "TutorialScaleMeasureBackButton" onClick = {MeasureBack} style ={{
                position: "absolute",
                width: "160px",
                height: "44px",
                zIndex: 10000,
                // left: "525px",
                left: (left-386)/2,
                top: "230px",
                // fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontWeight: 500,
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#969696",
                border:"none",
                borderRadius:"8px",
                display: "none"
            }}>
                Back
            </button>

            <button id = "TutorialScaleMeasureOkButton" onClick = {MeasureOk} style ={{
                position: "absolute",
                width: "160px",
                height: "44px",
                zIndex: 10000,
                backgroundColor: "#ff8200",
                // left: "755px",
                left: (left + 70)/2,
                top: "230px",
                // fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontWeight: 500,
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#fff",
                border:"none",
                borderRadius:"8px",
                display: "none"
            }}>
                Ok
            </button>

        {/* TutorialScaleSet */}

            <span id = "TutorialScaleSetWord" style = {{
                position: "absolute",
                top: "150px",
                // left: "527px",
                left: (left-390)/2,
                width: "386px",
                height: "38px",
                zIndex: 10000,
                // fontFamily: "HelveticaNeue",
                fontSize: "16px",
                fontWeight: 500,
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#fff",
                display: "none"
            }}>
                Scale successfully adjusted
            </span>

            <button id = "TutorialScaleSetBackButton" onClick = {SetBack} style ={{
                position: "absolute",
                width: "160px",
                height: "44px",
                zIndex: 10000,
                // left: "525px",
                left: (left-386)/2,
                top: "230px",
                // fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontWeight: 500,
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#969696",
                border:"none",
                borderRadius:"8px",
                display: "none"
            }}>
                Back
            </button>
            
            <button id = "TutorialScaleSetOkButton" onClick = {SetOk} style ={{
                position: "absolute",
                width: "160px",
                height: "44px",
                zIndex: 10000,
                backgroundColor: "#ff8200",
                // left: "755px",
                left: (left + 70)/2,
                top: "230px",
                // fontFamily: "HelveticaNeue",
                fontSize: "14px",
                fontWeight: 500,
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#fff",
                border:"none",
                borderRadius:"8px",
                display: "none"
            }}>
                Ok
            </button>

        </div>
    )
}

export default TutorialScale