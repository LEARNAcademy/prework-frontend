import React from 'react'
import './style.css'
import Brand from './Brand'
import {Container, Row, Col, Button} from 'reactstrap'

class Header extends React.Component{
    checkUser(){
        let {current_user} = this.props
        if (current_user.length !== 0){
            return true
        } else {
            return false
        }
    }

    render(){
        let isAdmin = false;
        let {current_user, logOut} = this.props;
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
          {current_user.length !== 0 && <span className=""><span className="material-icons">person</span> <span className="strong">{current_user.email}</span> | <Button className="login" color="link" onClick={logOut}>Sign Out</Button></span>}
                        </div>
                    </div>
                </Col>
                <Col sm={12}>
                    <Brand />
                
            {isAdmin &&
                
                    <Button className="float-right" href="/admin">Admin</Button>
                
            }

            
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Header