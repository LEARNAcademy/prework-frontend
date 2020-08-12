import React, { Component } from 'react'
import {Row, Col,  Button, Input, Form, FormGroup, Label} from 'reactstrap'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './style.css'


class SignIn extends Component{
  constructor(props){
    super(props)
      this.state = {
        user: {
          email:"",
          password:""
        }
      }
  }
  
  handleSubmit = (event) => {
      event.preventDefault();
      let {user} = this.state
        fetch('https://learn-prework-backend.herokuapp.com/users/sign_in.json', {
        body: JSON.stringify({user}),
        headers: {
            "Content-type":"application/json"
        },
        method:"POST"
    }).then((response)=> {
        if(response.ok){
            localStorage.setItem('authToken', response.headers.get("Authorization"));
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
        
    }).then((userJson)=> {
      localStorage.setItem('user',JSON.stringify(userJson))
      window.location.reload();
    }).catch((error) => {
        alert("Email and Password are incorrect.")
        window.location.reload()
            localStorage.clear()
      });
}

  
  handleLoginEmail(email){
    let loginUser = this.state.user
    loginUser.email = email 
    this.setState({user:loginUser})
  }
  handleLoginPass(passw){
    let loginUser = this.state.user
    loginUser.password = passw 
    this.setState({user:loginUser})
  }

  render(){
    // check to see if I have an auth token in local storage
    // if i do, get the user 
    // if both of those things exist, set them in the 
    return(
        <>
            <Row>
                <Col sm={12} className="text-center">
                    <main>
                        <Row>
                            <Col><h3>Log In</h3></Col>
      
                        </Row>
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input 
                                            style={{width:"70%"}}
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
                                            style={{width:"70%",margin:"0 auto"}}
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
                           <Button outline color='success' type="submit"> Login </Button>
                                </Col>
                            </Row>
                        </Form>
                        <Row> 
                                <Col>
                                    <Link to="/forgotpass"><Button color='link'> Forgot Password? </Button></Link>
                                </Col>
                            </Row>
                    </main>
                </Col> 
            </Row>
      </>
    )
  }
}
export default SignIn
