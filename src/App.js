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

  componentDidMount() {
    this.getTopics();
    this.getModules();
    this.getLessons();
    this.getQuestions();
    this.getResources();
  }

  getTopics = () => {
    fetch('http://localhost:3000/topics').then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(topicArr => {
      this.setState({topics:topicArr});
    });
  };

  getModules = () => {
    fetch('http://localhost:3000/code_modules').then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(modulesArr => {
      this.setState({modules:modulesArr});
    })
  }

  getLessons = () => {
    fetch('http://localhost:3000/lessons').then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(lessonArr => {
      this.setState({lessons:lessonArr})
    })
  }

  getQuestions = () => {
    fetch('http://localhost:3000/questions').then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(questionsArr => {
      this.setState({questions:questionsArr})
    })
  }

  getResources = () => {
    fetch('http://localhost:3000/resources').then(response => {
      if (response.status === 200) {
        return response.json();
      }
    }).then(resourceArr => {
      this.setState({resources:resourceArr})
    })
  }

  render(){
  const loggedIn = false;
  const {topics, modules, lessons, questions, resources} = this.state;
  let isAdmin = true;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      {/* Show branding and signed in user */}
      <Header />
      {/* show home page */}
      <Container>
        {!isAdmin &&
          <Home modules={modules} lessons={lessons} loggedIn={loggedIn} questions={questions} resources={resources} topics = {topics}/>
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
