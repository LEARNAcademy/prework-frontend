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
            percentage:0,
            code: '',
            ideChoice:'',
            tooltipOpen:false,
            modalOpen:false
        }
    }
  toggleTooltip = () => {
    let tooltip = this.state.tooltipOpen
    let val = !tooltip 
    this.setState({tooltipOpen:val})
  }
  toggleModal = () => {
    let modal = this.state.modalOpen
    let val = !modal 
    this.setState({modalOpen:val})
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
  updateIde = (newCode) => {
      // locates tags and anything inside of them
      let regex = /(<([^>]+)>)/gi
      let updatedCode = newCode.match(regex)
      this.setState({ code: newCode,
                      ideChoice:updatedCode
       })
      
  }
  handleChange = (event) => {
    this.setState({userChoice:event.target.value})
  }
  resetQuestion = () => {
    let val = null
    this.setState({
      questionCorrect:val,
      userChoice:'',
      code:'',
      ideChoice:'',
      userMessage:null})
  }
  checkUserAnswer = () => {
    const {content, userChoice, ideChoice} = this.state
    let value = false
    let finalIDE;
    let message;
    if (ideChoice.length > 1) {
      finalIDE = ideChoice.join('')
      console.log('finalIDE',finalIDE)
    }
    console.log('contentAnswer',content.answer)
    // checks to see if the user got the IDE or multchoice answer correct
    if (content.answer === userChoice || content.answer === finalIDE ) {
      value = true
      message = 'Correct 👍'
      this.setState({
        questionCorrect:value,
        userMessage:message
      })
    } else {
      message = 'Incorrect 🚫, try again'
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

  ideUserChoice = (userChoice) => {
    this.setState({userChoice:userChoice})
  }

  render(){
      let checkContent = this.contentExist();
      let { questions, resources, modules, lessons, topics, current_user, currentMod, handleUserUpdate} = this.props
      let {questionCorrect, userMessage, percentage, code, ideChoice, tooltipOpen,modalOpen} = this.state
    return(
      <>
          <Row>
            <Col sm={4}>
              <LessonNav currentMod = {currentMod} current_user = {current_user} modules={modules} lessons={lessons} currentContent = {this.currentContent} topics={topics} content = {this.state.content} questions={questions}/>
            </Col>
            <Col sm={8}>
                <MainContent userMessage = {userMessage} current_user = {current_user} questionCorrect = {questionCorrect} content={this.state.content} questions={questions} resources={resources} lessons = {lessons} handleChange={this.handleChange} userChoice={this.state.userChoice} ideUserChoice={this.ideUserChoice} updateIde = {this.updateIde} code = {code}/>
            </Col>
          </Row>
          {checkContent &&
            <Row>
                <Col sm={12}>
                    <Footer ideChoice = {ideChoice} code = {code} percentage = {percentage} fillBarLogic={this.fillBarLogic} checkUserAnswer = {this.checkUserAnswer}current_user = {current_user} resetQuestion = {this.resetQuestion} questionCorrect={questionCorrect} topics={topics} modules = {modules} lessons={lessons} currentContent={this.currentContent} questions={questions} content={this.state.content}  userChoice = {this.state.userChoice} handleUserUpdate = {handleUserUpdate} tooltipOpen = {tooltipOpen} toggleTooltip={this.toggleTooltip} modalOpen={modalOpen} toggleModal={this.toggleModal}/>   
                </Col> 
            </Row>
            }

      </>
    )
  }
}
export default Content
