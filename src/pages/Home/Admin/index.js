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
        let {lessons, modules, questions, toggleCreate, createUser} = this.props;
        const {users} = this.state
        return(
            <>
            {/*<NewUser current_user = {current_user}/> */}
            <UserProgress users = {users} lessons={lessons} modules ={modules} questions={questions} toggleCreate={toggleCreate} createUser={createUser}/>
            </>
        )
    }
}

export default Admin