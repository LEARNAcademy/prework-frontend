import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Admin from './pages/Home/Admin'
import SignIn from './pages/Home/SignIn'
import Content from './pages/Home/Content'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
class App extends React.Component {
  constructor(){
    super()
    this.state={
      adminPage:false,
      currentMod:[],
      loginSuccess:false,
      topics:[],
      modules:[],
      lessons:[],
      questions:[],
      resources:[],
      authToken:"",
      current_user:[],
      code: '// Code here',
      mode: 'xml'
    }
    this.getAuthToken = this.getAuthToken.bind(this);
    this.getTopics = this.getTopics.bind(this);
    this.getModules = this.getModules.bind(this);
    this.getLessons = this.getLessons.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getResources = this.getResources.bind(this);
  }
  
  async getTopics(){
    let response = await fetch('https://learn-prework-backend.herokuapp.com/topics');
    if(response.status === 200){
      let data = await response.json();
      this.setState({topics:data})
    }
  }
  async getModules(){
    let response = await fetch('https://learn-prework-backend.herokuapp.com/code_modules');
    let data = await response.json();
    if (response.status === 200) {
      this.setState({modules:data})
    }
  }
  async getLessons(){
    let response = await fetch('https://learn-prework-backend.herokuapp.com/lessons')
    let data = await response.json();
    if(response.status === 200){
      this.setState({lessons:data})
    }
  }
  async getQuestions(){
    let response = await fetch('https://learn-prework-backend.herokuapp.com/questions')
    let data = await response.json();
    if(response.status === 200) {
      this.setState({questions:data}
      )
    }
  }
  async getResources(){
    
    let response = await fetch('https://learn-prework-backend.herokuapp.com/resources')
    let data = await response.json();
    if (response.status === 200) {
      this.setState({resources:data})
    }
  }
  getAuthToken = () => {
    if (localStorage.getItem('authToken') !== null) {
        let token = localStorage.getItem('authToken')
        let splitToken = token.split(' ')
        let realToken = splitToken[1]
        this.setState({authToken:realToken})
    }
    if (localStorage.getItem('user') !== null && localStorage.getItem('user') !== undefined){
      let user = JSON.parse(localStorage.getItem('user'))
      this.setState({current_user:user})
    } 
  }
  
  isLogged(){
    let {current_user} = this.state
    if (current_user.length === undefined|| typeof current_user.id === 'number' ) {
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
  findModule() {
    let {modules, lessons, questions, current_user} = this.state 
    // id of the question the user is currently on
    if (current_user.length === undefined) {
      let userQ = current_user.last_q
      // find the question the user is currently on 
      let currentQ = questions.find((q)=> q.id > userQ)
      if (currentQ !== undefined) {
          // find the lesson the user is currently on
          let currentL = lessons.find((q)=> currentQ.lesson_id === q.id)
          // find the module the user is currently on
          let currentM = modules.find((m)=> currentL.code_module_id === m.id)
          this.setState({currentMod:currentM})
      }  
    }
}
  handleUserUpdate = () => {
    const {current_user} = this.props
    const last_q = current_user.last_q + 1
      // if the user gets the right answer, update the users last_q to the current question that's been completed
      fetch(`http://localhost:3000/users/${current_user.id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json' },
      body: JSON.stringify({
        last_q:last_q
      })
    }).then((res)=> {
      localStorage.setItem('user',JSON.stringify(res.json()))
    }).then(() => {
      let user = JSON.parse(localStorage.getItem('user'))
      this.setState({current_user:user})

    })
  }
  componentDidMount(){
    this.getTopics();
    this.getModules();
    this.getLessons();
    this.getQuestions();
    this.getResources();
    this.setState({ mode: 'xml'});
    this.getAuthToken(this.findModule);
  }

  logOut = () => {
    const {current_user} = this.state
    fetch(`https://learn-prework-backend.herokuapp.com/users/sign_out?id=${current_user.id}`,{
      method: "DELETE"
    })
    .then(() => {
        window.location.reload()
        localStorage.clear()
    })
  }
  toggleAdmin=()=> {
    let value = this.state.adminPage
    let final = !value
    this.setState({adminPage:final})
  }

  render(){
  const loggedIn = this.isLogged();
  const isAdmin = this.isAdmin();
  const {topics, modules, lessons, questions, resources, current_user, currentMod, adminPage} = this.state;
  
  // this.isAdmin();
  // }5tZ6KXe:r (password)
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      {/* Show branding and signed in user */}
      <Header current_user={current_user} logOut={this.logOut} isAdmin = {isAdmin} toggleAdmin = {this.toggleAdmin} adminPage={adminPage}/>
      {/* show home page */}
      <Container>
        <Router>
          {/* if the user is logged in and an admin, redirect to admin page */}
          {loggedIn?this.state.adminPage?<Redirect to='/admin'/>:<Redirect to='/dashboard'/>:<Redirect to='/login'/>}
          <Switch>
            <Route exact path="/dashboard" render={props => <Content currentMod = {currentMod} current_user={current_user} lessons={lessons} modules={modules} questions={questions} resources={resources} topics={topics} handleUserUpdate = {this.handleUserUpdate} />}/>
            <Route exact path='/admin' render= {props => <Admin current_user = {current_user}/>}/>
            <Route exact path='/login' render={props => <SignIn loadUserData={this.loadUserData}/>}/>
          </Switch>
        </Router>
      </Container>
    </>
  );
  }
}
export default App;
