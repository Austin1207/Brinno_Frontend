import React, { Component } from 'react';
import loadingpic from './loading.gif'

const Loading = ({left}) =>{
    return (
        <div>
            <img id ="loading" src = {loadingpic} style = {{
            position: "absolute",
            width: 100,
            height: 100,
            zIndex: 9999,
            // left: 670,
            left: left,
            top: 300,
            display: "none"
            }}/>
        </div>
        )
    }

export default Loading