import React from 'react'
import './style.css'

const Filler = (props) => {
    return <div className="progress-bar progress-bar-striped progress-bar-animated filler" style={{width:`${props.percentage}%`}}/> 
}

export default Filler