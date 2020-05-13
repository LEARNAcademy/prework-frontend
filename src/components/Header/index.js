import React from 'react'
import './style.css'
import Brand from './Brand'
import {Container, Row, Col, Button} from 'reactstrap'

class Header extends React.Component{
    checkUser(){
        let {current_user} = this.props
        if (current_user.id !== undefined){
            return true
        } else {
            return false
        }
    }

    render(){
        let isAdmin = false;
        let {current_user} = this.props;
        let userExist = this.checkUser();
        return(
            <Container>
            <Row>
                <Col sm={6}>
                    {/*Brand on the left */}
                    <Brand />
                </Col>
            {isAdmin &&
                <Col>
                    <Button href="/admin">Admin</Button>
                </Col>
            }
            {userExist && 
                <Col >
                    {/*Logged in user on the right */}
                    <div className="text-right">
                        <p>{current_user.email}</p>
                    </div>
                </Col>
            }
            </Row>
        </Container>
        )
    }
}

export default Header