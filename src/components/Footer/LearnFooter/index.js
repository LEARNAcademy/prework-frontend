import React from 'react';
import logo from '../../../images/Learn_academy-Logo-white.svg'
import './style.css'
class LearnFooter extends React.Component {
    render(){
        return(
            <>
                <div class="footer-box">
                    <div class="green-box"><img src={logo} alt="learn academy logo" class="learn-logo" />
                    </div>
                    <div class="gray-box">
                        <sm> Copyright ©2020 </sm>
                        <a href="https://www.learnacademy.org"><sm class="link"> LEARN academy </sm></a> | 
                        <a href="https://www.learnacademy.org/privacy-policy/"> <sm class="link">Privacy</sm></a> | 
                        <a href="https://www.learnacademy.org/terms-conditions/"><sm class="link">Terms</sm></a>
                    </div>
                </div>
            </>
        )
    }
}
export default LearnFooter