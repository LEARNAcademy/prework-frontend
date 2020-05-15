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
        return(
            <Container>
            <Row>
                <Col sm={12}>
                    {/*Brand on the left */}
                    <Brand />
                </Col>
            {isAdmin &&
                <Col>
                    <Button href="/admin">Admin</Button>
                </Col>
            }
            {userExist && 
            <>
                <Col>
                    <Button onClick={logOut}>Sign Out</Button>
                </Col>
                <Col >
                    {/*Logged in user on the right */}
                    <div className="text-right">
                        <p>{current_user.email}</p>
                    </div>
                </Col>
            </>
            }
            </Row>
        </Container>
        )
    }
}

export default Header