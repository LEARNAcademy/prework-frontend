import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/Header';
import Admin from './pages/Home/Admin'
import NewUser from './pages/Home/Admin/NewUser'
import UserProgress from './pages/Home/Admin/UserProgress'
import SignIn from './pages/Home/SignIn'
import Content from './pages/Home/Content'
import ForgotPass from './pages/Home/SignIn/ForgotPass'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'


class App extends React.Component {
  constructor(){
    super()
    this.state={
      adminPage:false,
      currentMod:[],
      createUser:false,
      loginSuccess:false,
      topics:[],
      modules:[],
      lessons:[],
      questions:[],
      resources:[],
      authToken:"",
      current_user:[],
      allUsers:[],
      code: '// Code here',
      mode: 'xml'
    }

    this.getAuthToken = this.getAuthToken.bind(this);
    // API.getTopics = API.getTopics.bind(this);
    // API.getModules = API.getModules.bind(this);
    // API.getLessons = API.getLessons.bind(this);
    // API.getQuestions = API.getQuestions.bind(this);
    // API.getResources = API.getResources.bind(this);
    this.getTopics = this.getTopics.bind(this);
    this.getModules = this.getModules.bind(this);
    this.getLessons = this.getLessons.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getResources = this.getResources.bind(this);
  }
  
  
  getAuthToken = () => {
    if (localStorage.getItem('authToken') && localStorage.getItem('authToken') !== null) {
        let token = localStorage.getItem('authToken')
        let splitToken = token.split(' ')
        let realToken = splitToken[1]
        this.setState({authToken:realToken})
    }
    if (localStorage.getItem('user') && localStorage.getItem('user') !== null && localStorage.getItem('user') !== undefined){
      let user = JSON.parse(localStorage.getItem('user'))
      this.setState({current_user:user})
    }
    if (localStorage.getItem('allUsers') && localStorage.getItem('allUsers') != null && localStorage.getItem('allUsers') !== undefined) {
      let allUsers = JSON.parse(localStorage.getItem('allUsers'))
      this.setState({allUsers:allUsers})
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
  // userModule(){
  //   const { modules, questions, lessons} = this.state
  //     // assigns current user
  //     const current_user = JSON.parse(localStorage.getItem('user'))
  //     if (current_user !== undefined) {
  //       // question the user is currently on
  //       const currentQuestion = questions.find((q)=> q.id>current_user.last_q)
  //       // lesson the user is currently on
  //       const currentLesson = lessons.find((l)=> currentQuestion.lesson_id === l.id)
  //       // module the uer is currently on 
  //       const currentModule = modules.find((m)=> currentLesson.code_module_id === m.id)
        
  //       this.setState({currentMod:currentModule})
  //     }
  // }
  handleUserUpdate = (question) => {
      const {current_user} = this.state
      // if the user gets the right answer, update the users last_q to the current question that's been completed
      fetch(`https://learn-prework-backend.herokuapp.com/users/${current_user.id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json' },
      body: JSON.stringify({
        last_q:question
      })
    }).then((res)=> {
      return res.json()
    }).then((userData) => {
      localStorage.setItem('user',JSON.stringify(userData))
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
    // API.getTopics();
    // API.getModules();
    // API.getLessons();
    // API.getQuestions();
    // API.getResources();
    this.setState({ mode: 'xml'});
    this.getAuthToken();
  }
  getAllUsers(){
    let bearer = localStorage.getItem('authToken')
        fetch('https://learn-prework-backend.herokuapp.com/admin/users',{
            headers : {
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Authorization': bearer
            }
        }).then((response)=> response.json()).then((usersData)=> {
          localStorage.setItem('allUsers',JSON.stringify(usersData))
          let allUsers = JSON.parse(localStorage.getItem('allUsers'))
          this.setState({allUsers:allUsers})
        })
  }
  async getTopics(){
    let response = await fetch('https://learn-prework-backend.herokuapp.com/topics');
    let data = await response.json();
    if (response.status === 200) {
    this.setState({topics:data})
    }
  }
  async getModules() {
    let response = await fetch('https://learn-prework-backend.herokuapp.com/code_modules');
    let data = await response.json();
    if (response.status === 200) {
      this.setState({modules:data})
    }
  } 
  async getLessons(){
    let response = await fetch('https://learn-prework-backend.herokuapp.com/lessons')
    let data = await response.json();
    if (response.status === 200) {
      this.setState({lessons:data})
    }
  }
  async getQuestions(){
    let response = await fetch('https://learn-prework-backend.herokuapp.com/questions')
    let data = await response.json();
    if (response.status === 200) {
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

  logOut = () => {
    // logs the user out and destroys the session in the backend
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
    // this handles the toggle between the user dashboard and the admin panel
    let value = this.state.adminPage
    let final = !value
    this.setState({adminPage:final})
  }
  fetchUsersAdmin() {
    if(this.isAdmin()){
      this.getAllUsers();
    }
  }
  toggleCreate=()=> {
    let value = this.state.createUser 
    value = !value
    this.setState({createUser:value})
  }

  render(){
  const loggedIn = this.isLogged();
  const isAdmin = this.isAdmin();
  const {topics, modules, lessons, questions, resources, current_user, currentMod, adminPage, allUsers, createUser} = this.state;
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
            <Route exact path='/admin' render= {props => <Admin current_user = {current_user} lessons={lessons} modules={modules} questions={questions} createUser={createUser} toggleCreate={this.toggleCreate}/>}/>
            <Route exact path='/admin/progress' render= {props => <UserProgress users={allUsers} lessons={lessons} modules={modules} questions={questions} toggleCreate={this.toggleCreate} createUser={createUser}/>}/>
            <Route exact path='/admin/create' render= {props => <NewUser current_user = {current_user} lessons={lessons} modules={modules} questions={questions} createUser={createUser} toggleCreate={this.toggleCreate}/>}/>
            <Route exact path='/login' render={props => <SignIn loadUserData={this.loadUserData}/>}/>
            <Route exeact path='/forgotpass' render={props => <ForgotPass />} />
          </Switch>
        </Router>
      </Container>
    </>
  );
  }
}
export default App;
