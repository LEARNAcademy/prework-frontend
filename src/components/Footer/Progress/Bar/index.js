import React from 'react'
import Filler from '../Filler'
import './style.css'

//receive modules
//get module names
//map module names inside barOverlay
//add separatots between module names
//width of module name equals percent of total lessons / lessons per module
let width = {
    "width":"5%",
    "display":"inline-block",
    "float":"left"
}
const Bar = (props) => {
    return(
        <div className="bar">
            <div className="barOverlay">
                {/* 
                    - map modules and list them out
                    - get # of lessons per module
                    - divide 100% by # of modules (~25%)
                    - divide each module (100%) by # of lessons per module (4 or 5 = 20% or ~25%)
                    - get value for width of each module
                */}
                <div className="moduleNames">
                    <div style={width}>This</div> | 
                    <div style={width}>This</div> | 
                    <div style={width}>This</div> | 
                    <div style={width}>This</div> | 

                </div>
            </div>
            <Filler percentage={props.percentage}/>
        </div>
    )
}
export default Bar