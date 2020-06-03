import React from 'react'
import {Row, Col,  Button, Input, Form, FormGroup, Label} from 'reactstrap'
import './style.css'


class ChangePass extends React.Component {
    constructor(){
        super()
        this.state ={
            user:{
                reset_password_token:'',
                password:'',
                confirm_password:''
            }
        }
    }
    handleSubmit =(event)=> {
        event.preventDefault();
        let link = window.location.href
        let reset_token = link.split('=')[1];
        let user = this.state.user
        console.log('reset_token',reset_token)
        if (user.password === user.confirm_password) {
            fetch('https://learn-prework-backend.herokuapp.com/users/password.json', {
                body:JSON.stringify({
                    user:{
                        reset_password_token:reset_token,
                        password: user.password,
                        confirm_password: user.confirm_passwordd
                    }
                }),
                headers: {
                    "Content-type":"application/json"
                },
                method:"PUT"
            }).then((response => {
                if (response.status === 200) {
                    alert("Your password was reset!")
                } else {
                    alert("failed")
                }
            }))
        } else {
            alert("passwords dont match")
        }
    }
    updatePassword(password) {
        let pass = this.state.user
        pass.password = password
        this.setState({user:pass})
    }
    updateConfirm(confirm_pw){
        let confirm = this.state.user
        confirm.confirm_password = confirm_pw
        this.setState({user:confirm})
    }
    render(){
        return(
            <> 
                <Row>
                    <Col sm={12}>
                        <Form onSubmit={this.handleSubmit} style={{textAlign:"center"}}>
                            <Row>
                                <Col sm={12} style={{textAlign:"center"}}>
                                    <h3>Enter your new password</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <FormGroup>
                                        <Input 
                                            style={{width:"30%",margin:"0 auto"}}
                                            type="password" 
                                            id="password" 
                                            className="password-confirm" 
                                            placeholder="Password"
                                            onChange={e =>{
                                            let passw = e.target.value 
                                            this.updatePassword(passw)
                                            }}>  
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Input 
                                            style={{width:"30%",margin:"0 auto"}}
                                            type="password" 
                                            id="confirm-password" 
                                            className="password-confirm" 
                                            placeholder="Confirm Password"
                                            onChange={e =>{
                                            let passw_confirm = e.target.value 
                                            this.updateConfirm(passw_confirm)
                                            }}>  
                                        </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button outline color='success' type="submit">Change Password</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </>
        )
    }
}

export default ChangePass