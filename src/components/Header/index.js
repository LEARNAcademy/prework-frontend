import React from 'react'
import './style.css'
import Brand from './Brand'
import {Container, Row, Col, Button} from 'reactstrap'

const Header = () => {
    let isAdmin = false;
    return (
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
                <Col >
                    {/*Logged in user on the right */}
                    <div className="text-right">
                        <p>you@youremail.tld</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header