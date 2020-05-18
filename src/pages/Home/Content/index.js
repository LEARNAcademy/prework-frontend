import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import LessonNav from '../../../components/LessonNav'
import MainContent from '../../../components/MainContent'
import Footer from '../../../components/Footer'

class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            content: [],
            userChoice:'',
            questionCorrect:null,
            userMessage:null,
        }
    }

  handleChange = (event) => {
    this.setState({userChoice:event.target.value})
  }
  resetQuestion = () => {
    let val = null
    this.setState({
      questionCorrect:val,
      userChoice:'',
      userMessage:null})
  }
  checkUserAnswer = () => {
    const {content, userChoice} = this.state
    let value = false
    let message;
    if (content.answer === userChoice) {
      value = true
      message = 'Correct'
      this.setState({
        questionCorrect:value,
        userMessage:message
      })
    } else {
      message = 'Incorrect'
      this.setState({
        questionCorrect:value,
        userMessage:message
      })
    }
  }
  handleUserUpdate = () => {
    const {content, userChoice} = this.state;
    const {current_user} = this.props
    const last_q = current_user.last_q + 1
    let val;
    if (userChoice === content.answer) {
      val = true;
      this.setState({questionCorrect:val})
      // if the user gets the right answer, update the users last_q to the current question that's been completed
      fetch(`https://learn-prework-backend.herokuapp.com/users/${current_user.id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json' },
      body: JSON.stringify({
        last_q:last_q
      })
    }).then((res)=> {
      localStorage.setItem('user',JSON.stringify(res.json()))
    })
    }
  }


  currentContent = (content) => {
    this.setState({content:content})
  }

  currentLesson = (content) => {
    this.setState({content:content})
  }

  contentExist =()=> {
    if(this.state.content){
      if (this.state.content.id !== undefined) {
          return true
      } else {
          return false
      }
    }
  }
  render(){
      let checkContent = this.contentExist();
      let { questions, resources, modules, lessons, topics, current_user, currentMod} = this.props
      let {questionCorrect, userMessage} = this.state
    return(
      <>
          <Row>
            <Col sm={4}>
              <LessonNav currentMod = {currentMod} current_user = {current_user} modules={modules} lessons={lessons} currentContent = {this.currentContent} topics={topics} content = {this.state.content} questions={questions}/>
            </Col>
            <Col sm={8}>
                <MainContent userMessage = {userMessage} current_user = {current_user} questionCorrect = {questionCorrect} content={this.state.content} questions={questions} resources={resources} lessons = {lessons} handleChange={this.handleChange} userChoice={this.state.userChoice} />
            </Col>
          </Row>
          {checkContent &&
            <Row>
                <Col sm={12}>
                    <Footer checkUserAnswer = {this.checkUserAnswer}current_user = {current_user} resetQuestion = {this.resetQuestion} questionCorrect={questionCorrect} topics={topics} modules = {modules} lessons={lessons} currentContent={this.currentContent} questions={questions} content={this.state.content}  userChoice = {this.state.userChoice} handleUserUpdate = {this.handleUserUpdate}/>   
                </Col> 
            </Row>
            }

      </>
    )
  }
}
export default Content
