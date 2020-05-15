import React from 'react'
import './style.css'
import logo from '../../../images/Learn_academy-Logo-green.svg'
const Brand = () => {
    return (
        <>
            
            <div className="header-logo">
                <img src={logo} alt="LEARN Academy Prework Application" style={{"width":"156px","height":"auto"}} />
            </div>
        </>
    )
}

export default Brand

