import React from 'react'
import Filler from '../Filler'
import './style.css'


const Bar = (props) => {
    return(
        <div className="bar">
            <Filler percentage={props.percentage}/>
        </div>
    )
}
export default Bar