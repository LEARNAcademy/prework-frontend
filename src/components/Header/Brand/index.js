import React from 'react'
import './style.css'
import logo from '../../../images/Learn_academy-Logo-green.svg'
const Brand = () => {
    return (
        <>
            <div className="header-top-bar w-100">
                <div id="top-bar-content" className="float-right mt-3">
                    <span className="mr-3"><span className="material-icons mr-1">call</span> (619) 940-7848</span>
                    <span className="mr-3"><span className="material-icons mr-1">email</span> hello@learnacademy.org</span>
                    <span className=""><span className="material-icons">person</span> <a href="https://www.learnacademy.org/login/" class="login">User Login</a></span>
                </div>
            </div>
            <div className="header-logo">
                <img src={logo} alt="LEARN Academy Prework Application" style={{"width":"156px","height":"auto"}} />
            </div>
        </>
    )
}

export default Brand

