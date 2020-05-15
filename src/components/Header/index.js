import React from 'react'
import './style.css'
import Brand from './Brand'
import {Container, Row, Col, Button} from 'reactstrap'

class Header extends React.Component{
    checkUser(){
        let {current_user} = this.props
        if (current_user !== null){
            return true
        } else {
            return false
        }
    }

    render(){
        let isAdmin = false;
        let {current_user} = this.props;
        let userExist = this.checkUser();
        console.log(current_user)
        return(
            <Container>
            <Row>
                <Col sm={12}>
                    <div className="header-top-bar w-100">
                        <div id="top-bar-content" className="float-right mt-3">
                            <span className="mr-3"><span className="material-icons mr-1">call</span> (619) 940-7848</span>
                            <span className="mr-3"><span className="material-icons mr-1">email</span> hello@learnacademy.org</span>
                            <span className=""><span className="material-icons">person</span> <a href="#" class="login">{userExist?`Sign Out`:`Sign In`}</a></span>
                        </div>
                    </div>
                </Col>
                <Col sm={12}>
                    <Brand />
                
            {isAdmin &&
                
                    <Button className="float-right" href="/admin">Admin</Button>
                
            }
            {current_user.length !== 0 &&
                    <div className="user-email text-right">
                        <p>You're logged in as: <span className="strong">{current_user.email}</span></p>
                    </div>
            }
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Header