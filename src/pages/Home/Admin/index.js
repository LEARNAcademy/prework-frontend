import React from 'react';
import {Row, Col} from 'reactstrap'
import NewUser from './NewUser'
import UserProgress from './UserProgress'
import {BrowserRouter as Router, Redirect} from 'react-router-dom'
import './style.css'

class Admin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
        this.getUsers = this.getUsers.bind(this)
    }

    getUsers(){
        let bearer = localStorage.getItem('authToken')
        fetch('https://learn-prework-backend.herokuapp.com/admin/users',{
            headers : {
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Authorization': bearer
            }
        }).then((response)=> response.json()).then((users)=> this.setState({users:users}))
    }
    componentDidMount(){
        this.getUsers();
    }
    render(){
        let {current_user, lessons, modules, questions} = this.props;
        const {users} = this.state
        let hide = true;
        return(
            <>
            {!hide &&
                <Row>
                    <Col sm={12} className="adminPanel">
                        <Row>
                            <Col>
                                <h3 style={{textAlign:"center"}}>Admin Panel</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul className="adminList">
                                    {/* <li onClick={<Redirect to="/admin/create"/>}>Create User</li>
                                    <li onClick={<Redirect to=""/>}>Users Progress</li> */}
                                    <li>Delete User</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <NewUser current_user = {current_user}/>
                </Row>
            }  
            <NewUser current_user = {current_user}/>
            <UserProgress users = {users} lessons={lessons} modules ={modules} questions={questions} />

            </>
        )
    }
}

export default Admin