import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Progress from './Progress';
import './style.css'
/* eslint react/prop-types: 0 */
class Footer extends React.Component {
  contentExist() {
      let { content } = this.props
      if (content.id !== undefined) {
          return true
      } else {
          return false
      }
  }
  getNextLesson() {
    // gets the next lesson and sends it back
    console.log("trying to get next lesson")
    const { lessons, current_user,questions } = this.props;
    // total lessons available
    // get question user is currently on
    const currentQ = questions.find((q)=> current_user.last_q === q.id)
    // lesson the user is currently on
    const currentL = lessons.find((l)=> currentQ.lesson_id === l.id)
    const lCount = lessons.length;
    if (lCount > currentL.id+1) {
      const nextLesson = lessons.find(lessons => lessons.id === currentL.id + 1);
      return nextLesson;
    }
    return undefined;
  }

  // getPrevLesson() {
  //   const { lessons, content } = this.props;
  //   // gets the previous lesson
  //   const prevLesson = lessons.filter(lessons => lessons.id === content.id - 1);
  //   return prevLesson[0];
  // }

  getNextQuestion() {
    const { content, questions , current_user} = this.props;
    // finds the question the user is currently on
    const qUser = questions.find((q)=> current_user.last_q < q.id)
    // finds the next question belonging to the same lesson
    const nextQuestion = questions.filter((q)=> q.lesson_id === qUser.lesson_id).find((q)=> q.id > qUser.id)
    // if the content
    if (content.id === qUser.lesson_id) {
      return qUser
    } else if( content.lesson_id !== undefined && nextQuestion !== undefined ) {
      return nextQuestion
    }
    return undefined;
  }

  sendContent(next) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.currentContent(next);
  }
  checkAnswer() {
    let { userChoice , checkUserAnswer} = this.props;
    if (userChoice !== undefined ){
      checkUserAnswer();
    } else {
      alert("Make a selection homie")
    }
  }

  isContentQuestion(){
    let {content} = this.props
    if (this.contentExist()) {
      if (content.lesson_id !== undefined) {
        return true
      } else {
        return false
      }
    }
  }
  checkContent() {
    const { content } = this.props;
    // eslint-disable-next-line no-unused-vars
    // checks to see if content exists'
    // eslint-disable-next-line no-console
    if (content.id !== undefined) {
      // content does exist, checks to see if the content is a lesson
      // content is a lesson, now checks if theres any questions that belong to it
      // resets the state of userChoice in content component
      if (this.isContentQuestion) {
        if(this.isQuestionCorrect) {
          this.props.resetQuestion();
        }
      }

      if (this.getNextQuestion() !== undefined) {
        this.sendContent(this.getNextQuestion());
        this.props.handleUserUpdate();
        // if the next question returns undefined
      } else if (this.getNextQuestion() === undefined) {
        // update the lesson as completed
        this.sendContent(this.getNextLesson());
      } else if (this.getNextQuestion() === undefined && this.getNextLesson() === undefined) {
        console.log('Completed course homie!');
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
    let { questionCorrect } = this.props 
    
    if (this.contentExist()) {
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
  render() {
    const { lessons, modules, topics, current_user, questions} = this.props;
    let buttType = this.buttonType();
    let isQuestionCorrect = this.isQuestionCorrect();
    let isQuestion = this.isContentQuestion();
     // updates userChoice state to radio selection
    // this.props.handleChange() < ready to use
    // this.props.userChoice < ready to use
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <>
        <Row>
          <Col sm={6}>
            {/* progress meter on the left */}
            <Progress questions = {questions} current_user={current_user} modules={modules} lessons={lessons} topics={topics} />
          </Col>
          {/* continue button on the right */}
          <Col sm={6} className="footer-button" >
            {/* if it is a question, check to see if its correct, if it is correct, load next lesson */}
            <Button onClick={() => isQuestion?isQuestionCorrect?this.checkContent():this.checkAnswer():this.checkContent()}>{buttType}</Button>
          </Col>
        </Row>
      </>
    );
  }
}
export default Footer;
