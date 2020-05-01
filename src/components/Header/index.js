import React from 'react'
import './style.css'
import Brand from './Brand'
import {Container, Row, Col} from 'reactstrap'
const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    {/*Brand on the left */}
                    <Brand />
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