import React, { Component } from 'react';

const Loading = ({left}) =>{
    return (
        <div>
            <button id ="loading" style = {{
            position: "absolute",
            width: "160px",
            height: "84px",
            zIndex: 99999,
            // left: 670,
            left: left,
            top: "12.4%",
            display: "none",
            borderRadius: "8px",
            backgroundColor:"#222222",
            fontSize: "20px",
            fontWeight: "bold",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#ffffff"
            }}>
            Loading.
            </button>

            {/* <button id ="loading2" style = {{
            position: "absolute",
            width: "160px",
            height: "84px",
            zIndex: 99999,
            // left: 670,
            left: left,
            top: "12.4%",
            display: "none",
            borderRadius: "8px",
            backgroundColor:"#222222",
            fontSize: "20px",
            fontWeight: "bold",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#ffffff"
            }}>
            Loading..
            </button>

            <button id ="loading3" style = {{
            position: "absolute",
            width: "160px",
            height: "84px",
            zIndex: 99999,
            // left: 670,
            left: left,
            top: "12.4%",
            display: "none",
            borderRadius: "8px",
            backgroundColor:"#222222",
            fontSize: "20px",
            fontWeight: "bold",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "normal",
            color: "#ffffff"
            }}>
            Loading...
            </button> */}

            <button id = "overlay" style = {{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 99998,
                backgroundColor: "rgba(152, 154, 156, 0.9)",
                display: "none",
            }}/>
        </div>
        )
    }

export default Loading