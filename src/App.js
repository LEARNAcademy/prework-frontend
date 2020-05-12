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
      resources:[]
    }
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


  // getTopics = () => {
  //   fetch('http://localhost:3000/topics').then(response => {

  //     if (response.status === 200) {
  //       return response.json();
  //     }
  //   }).then(topicArr => {
  //     this.setState({topics:topicArr});
  //   });
  // };

  // getModules = () => {
  //   fetch('http://localhost:3000/code_modules').then(response => {
  //     if (response.status === 200) {
  //       return response.json();
  //     }
  //   }).then(modulesArr => {
  //     this.setState({modules:modulesArr});
  //   })
  // }

  // getLessons = () => {
  //   fetch('http://localhost:3000/lessons').then(response => {
  //     if (response.status === 200) {
  //       return response.json();
  //     }
  //   }).then(lessonArr => {
  //     this.setState({lessons:lessonArr})
  //   })
  // }

  // getQuestions = () => {
  //   fetch('http://localhost:3000/questions').then(response => {
  //     if (response.status === 200) {
  //       return response.json();
  //     }
  //   }).then(questionsArr => {
  //     this.setState({questions:questionsArr})
  //   })
  // }

  // getResources = () => {
  //   fetch('http://localhost:3000/resources').then(response => {
  //     if (response.status === 200) {
  //       return response.json();
  //     }
  //   }).then(resourceArr => {
  //     this.setState({resources:resourceArr})
  //   })
  // }

  render(){
  const current_user = {"id":1,"email":"artortega.25@gmail.com","last_q": 5}
  console.log("lessonsss", this.state.lessons)
  console.log("modules", this.state.modules)
  console.log("questions", this.state.questions)
  console.log("resources", this.state.resources)
  const loggedIn = true;
  const {topics, modules, lessons, questions, resources} = this.state;
  let isAdmin = false;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      {/* Show branding and signed in user */}
      <Header />
      {/* show home page */}
      <Container>
        {!isAdmin &&
          <Home current_user={current_user} modules={modules} lessons={lessons} loggedIn={loggedIn} questions={questions} resources={resources} topics = {topics}/>
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
