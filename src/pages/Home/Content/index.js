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
            percentage:0
        }
    }
  fillBarLogic = () => {
    let {questions, current_user } = this.props
    // get percentage of completed amount
      let completionCount = 0
      // divides 100 by lesson count
      let questionCount = 100/questions.length
      // let lessonCount = 100/lessons.length
      // percent equivalent of each question
      
      let percentPerQuestion = questionCount/100
      
      // let percentPerLesson = lessonCount/100
      // number of questions that have been completed 
      let cQuestions = questions.filter((q)=> q.id < current_user.last_q).length
      // let cLessons = lessons.filter((l)=> l.completed === true).length
      // the completed count as a whole number
      
      completionCount = (percentPerQuestion * cQuestions)*100
      // completionCount = (percentPerLesson * cLessons)*100
      // updates the state to completionCount
      this.setState({percentage:completionCount})
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

  currentContent = (content) => {
    this.setState({content:content})
    this.fillBarLogic();
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
      let { questions, resources, modules, lessons, topics, current_user, currentMod, handleUserUpdate} = this.props
      let {questionCorrect, userMessage, percentage} = this.state
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
                    <Footer percentage = {percentage} fillBarLogic={this.fillBarLogic} checkUserAnswer = {this.checkUserAnswer}current_user = {current_user} resetQuestion = {this.resetQuestion} questionCorrect={questionCorrect} topics={topics} modules = {modules} lessons={lessons} currentContent={this.currentContent} questions={questions} content={this.state.content}  userChoice = {this.state.userChoice} handleUserUpdate = {handleUserUpdate}/>   
                </Col> 
            </Row>
            }

      </>
    )
  }
}
export default Content
