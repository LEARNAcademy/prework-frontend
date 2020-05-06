import React from 'react';
import { Row, Col, Form, FormGroup, Input, Button, Label} from 'reactstrap'

class Landing extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:{
                email:'',
                access:'',
            }
        }
    }

    render(){
        return(
            <>
                <Row>
                    <Col sm={12}>
                        <h3>LEARN App</h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <p>Confirm your account</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form>
                            <Row>
                                <Col sm={12}>
                                    <Label for="email">Email Address</Label>
                                    <Input id="email" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>

                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Landing