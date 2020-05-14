import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Home from './pages/Home';
import Header from './components/Header';
import Admin from './pages/Home/Admin'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      topics:[],
      modules:[],
      lessons:[],
      questions:[],
      resources:[],
      authToken:"",
      current_user:[],
    }
    this.getTopics();
    this.getModules();
    this.getLessons();
    this.getQuestions();
    this.getResources();
  }
  componentDidMount(){
    this.getTopics();
    this.getModules();
    this.getLessons();
    this.getQuestions();
    this.getResources();
  }
  async getTopics(){
    let response = await fetch('http://localhost:3000/topics');
    if(response.status === 200){
      let data = await response.json();
      this.setState({topics:data})
    }
  }
  async getModules(){
    let response = await fetch('http://localhost:3000/code_modules');
    let data = await response.json();
    if (response.status === 200) {
      this.setState({modules:data})
    }
  }
  async getLessons(){
    let response = await fetch('http://localhost:3000/lessons')
    let data = await response.json();
    if(response.status === 200){
      this.setState({lessons:data})
    }
  }
  async getQuestions(){
    let response = await fetch('http://localhost:3000/questions')
    let data = await response.json();
    if(response.status === 200) {
      this.setState({questions:data})
    }
  }
  async getResources(){
    let response = await fetch('http://localhost:3000/resources')
    let data = await response.json();
    if (response.status === 200) {
      this.setState({resources:data})
    }
  }

  loadUserData = (email,passw) => {
      fetch('http://localhost:3000/users/sign_in.json', {
          body: JSON.stringify({
              user:{
                  email:email,
                  password:passw
              }
          }),
          headers: {
              "Content-type":"application/json"
          },
          method:"POST"
      }).then((response)=> {
          if(response.ok){
              localStorage.setItem('authToken', response.headers.get("Authorization"));
              return response.json();
          }
      }).then((userJson)=> {
        localStorage.setItem('user',JSON.stringify(userJson))
      })
  }
  componentWillMount(){
    if (localStorage.getItem('authToken') !== null) {
        let token = localStorage.getItem('authToken')
        let splitToken = token.split(' ')
        let realToken = splitToken[1]
        this.setState({authToken:realToken})
    }
    if (localStorage.getItem('user') !== null){
      let user = JSON.parse(localStorage.getItem('user'))
      this.setState({current_user:user})
    }
  }
  isLogged(){
    let {current_user} = this.state
    if (current_user.length !== 0 || current_user.id ) {
      return true
    } else {
      return false
    }
  }
  isAdmin(){
    let {current_user} = this.state
    if (this.isLogged()) {
      if (current_user.admin) {
        return true
      } else {
        return false
      }
    }
  }

  render(){
  const loggedIn = this.isLogged();
  const {topics, modules, lessons, questions, resources, current_user} = this.state;
  let isAdmin = this.isAdmin();
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      {/* Show branding and signed in user */}
      <Header current_user={current_user}/>
      {/* show home page */}
      <Container>
        {!isAdmin &&
          <Home loadUserData = {this.loadUserData} current_user={current_user} modules={modules} lessons={lessons} loggedIn={loggedIn} questions={questions} resources={resources} topics = {topics}/>
        }
        {/* Displays Footer */}
        {isAdmin && 
          <Admin/>
        }
      </Container>
    </>
  );
  }
}
export default App;
