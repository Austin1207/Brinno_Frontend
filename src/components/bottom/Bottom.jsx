import * as React from 'react';
import s3 from './scale.png'

const Scale = event => {console.log("Scale")}
const Redo = event => {console.log("Redo")}
const Undo = event => {console.log("Undo")}

const Bottom = ({state}) => {
    return(
        <div>

            {/* <div id = "UndoRedoRectangular" style = {{
                position: "absolute",
                width: "112px",
                height: "47px",
                margin: "1px 0 0",
                padding: "14px 16px 13px",
                borderRadius:"3px",
                boxShadow: "1px 1px 12px 1px rgba(188, 188, 188, 0.64)",
                zIndex: 10000,
                backgroundColor: "#fff",
                right: "357px",
                bottom: "35px",
                display: ""
            }}/> */}

            <button id = "ScaleButton" onClick = {Scale} style = {{
                position: "absolute",
                width: "55px",
                height: "48px",
                margin: "0px 28",
                padding: "17px 10px 16px 11px",
                border:"none",
                borderRadius:"3px",
                boxShadow: "1px 1px 12px 1px rgba(188, 188, 188, 0.64)",
                zIndex: 10000,
                backgroundColor: "#fff",
                right: "136px",
                bottom: "35px",
                display: ""
            }}>
                <img src = {s3} />
            </button>

            <button id = "RedoButton" onClick = {Redo} style = {{
                position: "absolute",
                width: "55px",
                height: "48px",
                margin: "0px 28",
                padding: "17px 10px 16px 11px",
                border:"none",
                borderRadius:"3px",
                boxShadow: "1px 1px 12px 1px rgba(188, 188, 188, 0.64)",
                zIndex: 10000,
                backgroundColor: "#fff",
                right: "219px",
                bottom: "35px",
                display: ""
            }}>
                <img src = {s3} />
            </button>

        </div>
    )
}

export default Bottom