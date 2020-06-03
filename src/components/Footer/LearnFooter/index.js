import React from 'react';
import logo from '../../../images/Learn_academy-Logo-white.svg'
import './style.css'
class LearnFooter extends React.Component {
    render(){
        return(
            <>
                <div className="green-box"><img src={logo} alt="learn academy logo" className="learn-logo" /></div>
                <div className="gray-box">Copyright ©2020<a href="https://www.learnacademy.org">LEARN academy</a> | <a href="https://www.learnacademy.org/privacy-policy/"> Privacy</a> | <a href="https://www.learnacademy.org/terms-conditions/">Terms</a></div>
            </>
        )
    }
}
export default LearnFooter