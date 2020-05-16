import React from 'react'
import './style.css'
import Brand from './Brand'
import {Container, Row, Col, Button} from 'reactstrap'
import {BrowserRouter as Router, Redirect} from 'react-router-dom'


class Header extends React.Component{
    constructor(){
        super()
        this.state ={
            admin:false
        }
    }
    checkUser(){
        let {current_user} = this.props
        if (current_user.length !== 0){
            return true
        } else {
            return false
        }
    }
    toggleAdmin=()=>{
        this.props.toggleAdmin()
    }
    panelName =()=>{
        let {adminPage} = this.props 
        if (adminPage) {
            return 'Dashboard'
        } else {
            return 'Admin Panel'
        }
    }
    render(){
        let {current_user, logOut, isAdmin} = this.props;
        let adminControl = this.panelName()
        console.log(current_user)
        return(
            <Container>
            <Row>
                <Col sm={12}>
                    <div className="header-top-bar w-100">
                        <div id="top-bar-content" className="float-right mt-3">
                            <span className="mr-3"><span className="material-icons mr-1">call</span> (619) 940-7848</span>
                            <span className="mr-3"><span className="material-icons mr-1">email</span> hello@learnacademy.org</span>
                            {current_user.length !== 0 && <span className=""><span className="material-icons">person</span> <span className="strong">{current_user.email}</span>
                            <Button className="login" color="link" onClick={logOut}>Sign Out</Button>{isAdmin && <Button className="login" color="link" onClick={this.toggleAdmin}>{adminControl}</Button>}</span>}
                        </div>
                    </div>
                </Col>
                <Col sm={12}>
                    <Brand />
                </Col>
            </Row>
            {this.state.admin &&
                <Router>
                    <Redirect to='/admin'/>
                </Router>
            }
        </Container>
        )
    }
}

export default Header