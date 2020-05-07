import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Home from './pages/Home';
import Header from './components/Header';
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
    console.log("topics",this.state.topics)
    console.log("modules",this.state.modules)
    console.log("lessons",this.state.lessons)
    console.log("questions",this.state.questions)
    console.log("resources",this.state.resources)



    
  const loggedIn = true;
  const {topics, modules, lessons, questions, resources} = this.state
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      {/* Show branding and signed in user */}
      <Header />
      {/* show home page */}
      <Container>
        <Home modules={modules} lessons={lessons} loggedIn={loggedIn} questions={questions} resources={resources} topics = {topics}/>
        {/* Displays Footer */}
      </Container>
    </>
  );
  }
}
export default App;
