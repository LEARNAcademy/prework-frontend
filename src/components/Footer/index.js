import React from 'react';
import { Row, Col, Button, Tooltip,Modal, ModalHeader,ModalBody} from 'reactstrap';
import Progress from './Progress';
import './style.css'
/* eslint react/prop-types: 0 */
class Footer extends React.Component {
  isContentQuestion(){
    let {content} = this.props
    if (content.id !== undefined) {
      if (content.lesson_id !== undefined) {
        return true
      } else {
        return false
      }
    }
  }
  sendContent(next) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.currentContent(next);
  }
  checkAnswer() {
    let { userChoice , checkUserAnswer, ideChoice} = this.props;
    if (ideChoice !== null) {
      if (userChoice.length > 0 || ideChoice.length > 0){
        checkUserAnswer();
      }
    } else if (ideChoice === null){
      console.log("display user message: add a tag")
    }
  }
  previousLesson(){
    const {content, lessons} = this.props
    // does the content exist
    if (content.id) {
      // check to see if the content is a lesson
      if ( content.lesson_id === undefined) {
        // assigns the previous lesson, if it exists
        const prevLesson = lessons.find((l)=>  l.id === content.id-1)
        if (prevLesson !== undefined){
          // changes content to previous lesson
          this.sendContent(prevLesson)
        }
        // checks to see if the content is a question
      } else if (content.lesson_id !== undefined) { 
        // gets the current lesson the user is on
        const currentLesson = lessons.find((l)=> l.id === content.lesson_id)
        this.sendContent(currentLesson)
      }
    }

  }

  previousLessonExist(){
    // checks to see if a previous lesson exists, if it does, shows the Previous Lesson button next to the continue button
    const {content, lessons } = this.props
    // does content exist
    if (content.id) {
      // check to see if the content is a lesson
      if (content.lesson_id === undefined) {
        // if it's a lesson, finds the previous lesson
        const previousLesson = lessons.find((l)=> content.id > l.id)
        // if a previous lesson exists, return true
        if (previousLesson !== undefined) {
          return true
        } else {
          return false
        }
        // it's a question, we know there's a lesson that belongs to it to go back to
      } else {
        return true
      }
    }
  }
  checkContent() {
    const { content, questions , current_user, lessons, userChoice, ideChoice} = this.props;
    let nextQuestion;
    let nextLesson;
    if (content.id !== undefined) {
      // question the user is currently on
      const currentQuestion = questions.find((q)=> current_user.last_q < q.id)
      // checks to see if the current content is a lesson
      if (content.lesson_id === undefined) {
        // get all the questions that belong to this lesson
        const allQuestions = questions.filter((q)=> q.lesson_id === content.id)
        // 
        if (currentQuestion !== undefined) {
          // get the next question to render 
          nextQuestion = allQuestions.find((q)=> currentQuestion.id === q.id)
        }
        // assign the next lesson 
        nextLesson = lessons.find((l)=> content.id < l.id)
        // if there is another question to display, render that question
        if (nextQuestion !== undefined) {
          this.sendContent(nextQuestion)
        } else if (nextQuestion === undefined) {
          this.sendContent(nextLesson)
        }
        // checks to see if the current content is a question
      } else if (content.lesson_id !== undefined) {
        let finalIDE;
        if (ideChoice.length > 1) {
          finalIDE = ideChoice.join('')
        }
        // get the lesson the question belongs to 
        const currentLesson = lessons.find((l)=> content.lesson_id === l.id)
        // if the usersChoice is correct, render the next question or lesson
        if (userChoice === content.answer || finalIDE === content.answer) {
          // get all the questions that belong to the same lesson as the current question
          const allQuestions = questions.filter((q)=> content.lesson_id === q.lesson_id)
          // finds the next question
          nextQuestion = allQuestions.find((q)=> q.id > currentQuestion.id)
          // if there is another question that belongs to the same lesson, render it
          if (nextQuestion !== undefined) {
            this.sendContent(nextQuestion)
            // resets the userChoice, userCorrect, and userMessage in content to null/blank
            this.props.resetQuestion();
            // updates the user info to mark current question as completed
            this.props.handleUserUpdate(content.id)
            // updates progress meter
            this.props.fillBarLogic();
          } else if (nextQuestion === undefined) {
            // if there are no more questions that belong to the same lesson, render next lesson
            nextLesson = lessons.find((l)=> currentLesson.id < l.id)
            this.sendContent(nextLesson)
            this.props.resetQuestion();
            // updates the user info to mark current question as completed
            this.props.handleUserUpdate(content.id)
            // updates progress meter
            this.props.fillBarLogic();
          }
        }
      }
    }
  }
  isQuestionCorrect(){
    let {questionCorrect} = this.props 
    if (this.isContentQuestion()) {
      // if the user has answered, check to see if their answer is true
      if (questionCorrect !== null) {
        if(questionCorrect){
          return true
        } else {
          return false
        }
      }
      // if question hasn't been answered
      return false
    }
  }

  buttonType() {
    let { questionCorrect, content } = this.props 
    
    if (content.id !== undefined) {
      if (this.isContentQuestion()) {
        // content is a question, check the answer
        if (questionCorrect !== null) {
          // if the question is correct, continue 
          if (questionCorrect) {
            return 'Continue';
          }
        }
      return 'Check Answer';
    } else {
      // if its not a question, its a lesson, continue
      return 'Continue';
      }
    }
  }
  isQuestionAnswered(){
    let {userChoice,code} = this.props
    if (this.isContentQuestion()) {
      if (userChoice.length > 0) {
        return true
      } else if (code.length > 0 ){
        return true
      } else {
        return false
      }
    }
  }
  setButtonColor(){
    let {questionCorrect} = this.props
    if (questionCorrect === null || !questionCorrect) {
      return false
    } else if (questionCorrect) {
      return true
    }
  }

  getModalContent(){
    let {content, hints} = this.props
    // checks if the content is a question
    // uncomment lines 195 - 198 when hints is seeded and routes are set up in backend
    // if (this.isContentQuestion()) {
    //   let suggestion = hints.find((h)=> h.question_id === content.id)
    //   return suggestion
    // }
  }
  render() {
    const { lessons, modules, topics, current_user, questions, percentage, tooltipOpen, toggleTooltip, toggleModal, modalOpen} = this.props;
    let buttType = this.buttonType();
    let isQuestionAnswered = this.isQuestionAnswered();
    let isQuestionCorrect = this.isQuestionCorrect();
    let isQuestion = this.isContentQuestion();
    let previousLesson = this.previousLessonExist();
    // uncomment line 207 once hints is seeded and routes are set up in backend
    // let suggestion = this.getModalContent();
     // updates userChoice state to radio selection
    // this.props.handleChange() < ready to use
    // this.props.userChoice < ready to use
    const closeBtn = <button className="close" onClick={toggleModal}>&times;</button>
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Row>
          <Col sm={5}>
            {/* progress meter on the left */}
            <Progress questions = {questions} current_user={current_user} modules={modules} lessons={lessons} topics={topics} percentage = {percentage}/>
          </Col>
          {isQuestion &&
          <Col sm={1}>
            <button className="btn-circle" id="tooltip" onClick={toggleModal}>?</button>   
            <Modal isOpen={modalOpen} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal} close={closeBtn}>{/*suggestion.title*/}Modal Header</ModalHeader>
              <ModalBody>
                {/*suggestion.content*/}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
                {/*suggestion.resource &&
                  
                  <ul>
                    <li><a href={suggestion.resource}>Resource Link</a></li>
                  </ul>
                */}
              </ModalBody>
            </Modal>
            <Tooltip placement="bottom" isOpen={tooltipOpen} autohide={false} target="tooltip" toggle={toggleTooltip}>
            Hint/Suggestions
          </Tooltip>
          </Col>
          }
          {/* continue button on the right */}
          <Col sm={4} style={{textAlign:"right"}}>
            {previousLesson && 
            <Button style ={{textAlign:"right"}} outline color='secondary' onClick={()=> this.previousLesson()}>Back</Button>
            }
          </Col>
          <Col className="footer-button" style={{textAlign:"right"}}>
            {/* if it is a question, check to see if its correct, if it is correct, load next lesson */}
            <Button outline color={isQuestion?isQuestionCorrect? 'success':'info':'secondary'} disabled = {isQuestion?isQuestionAnswered?false:true:false} onClick={() => isQuestion?isQuestionCorrect?this.checkContent():this.checkAnswer():this.checkContent()}>{buttType}</Button>
          </Col>
        </Row>
      </>
    );
  }
}
export default Footer;
