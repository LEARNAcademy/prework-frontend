import React from 'react';
import UserProgress from './UserProgress'
import './style.css'

class Admin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users:[],
            createUser:false,
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
    toggleCreate=()=>{
        let value = this.state.createUser
        let final = !value
        this.setState({createUser:final})
      }
    render(){
        let {lessons, modules, questions} = this.props;
        let {createUser} = this.state
        const {users} = this.state
        return(
            <>
            {/*<NewUser current_user = {current_user}/> */}
            <UserProgress users = {users} lessons={lessons} modules ={modules} questions={questions} createUser={createUser} toggleCreate={this.toggleCreate}/>
            </>
        )
    }
}

export default Admin