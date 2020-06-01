import React, { Component } from 'react'
import {Row, Col,  Button, Input, Form, FormGroup, Label} from 'reactstrap'
import './style.css'


class ForgotPass extends Component{
    constructor(props){
      super(props)
        this.state = {
          user: {
            email:""
          }
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let {user} = this.state
          fetch('https://learn-prework-backend.herokuapp.com/users/password.json', {
          body: JSON.stringify({user}),
          headers: {
              "Content-type":"application/json"
          },
          method:"POST"
      }).then((response)=> {
          if(response.ok){
              console.log("I WAS SENT OUT")
          } else {
              throw new Error('Something went wrong');
          }
      }).catch((error) => {
          alert("No account with that email was found.")
          window.location.reload()
        });
  }


  handleLoginEmail(email){
    let loginUser = this.state.user
    loginUser.email = email 
    this.setState({user:loginUser})
  }
render(){
return(
    <>
     <Row>
                <Col sm={12} className="text-center">
                    <main>
                        <Row>
                            <Col><h3>Forgot password form</h3></Col>
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
                                <Col sm={12}>
                           <Button outline color='success' type="submit"> Send reset instructions </Button>
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

export default ForgotPass
