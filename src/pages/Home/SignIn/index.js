import React, { Component } from 'react'
import {Row, Col,  Button, Input, Form, FormGroup, Label} from 'reactstrap'
import './style.css'


class SignIn extends Component{
  constructor(props){
    super(props)
      this.state = {
        login: {
          email:"",
          password:""
        }
      }
  }
  handleSubmit(){
    alert("Sent login request")
  }
  handleLoginEmail(email){
    let loginUser = this.state.login
    loginUser.email = email 
    this.setState({login:loginUser})
  }
  handleLoginPass(passw){
    let loginUser = this.state.login
    loginUser.password = passw 
    this.setState({login:loginUser})
  }
  render(){
    return(
        <>
            <Row>
                <Col sm={12} className="text-center">
                    <main>
                        <Row>
                            <Col><h1>Learn App</h1></Col>
                        </Row>
                        <Row>
                            <Col><h3>Log In</h3></Col>
                        </Row>
                        <Form>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="text" 
                                            id="email" 
                                            className="login-form" 
                                            placeholder="Email"
                                            onChange={e =>{
                                            let email = e.target.value 
                                            this.handleLoginEmail(email)
                                            }}>  
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="passw" className="text-left">Password</Label>
                                        <Input
                                            type="password" 
                                            id="passw" 
                                            className="login-form" 
                                            placeholder="Password" 
                                            onChange={e =>{
                                            let passw = e.target.value 
                                            this.handleLoginPass(passw)
                                            }}>
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Button onClick={() => this.handleSubmit()}>Login</Button>
                                </Col>
                            </Row>
                        </Form>
                    </main>
                </Col> 
            </Row>
      </>
    )
  }
}
export default SignIn
