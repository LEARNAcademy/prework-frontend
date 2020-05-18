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
  
  // getNextLesson() {
  //   // gets the next lesson and sends it back
  //   const { lessons, current_user,questions } = this.props;
  //   // total lessons available
  //   // get question user is currently on
  //   const currentQ = questions.find((q)=> current_user.last_q < q.id)
  //   // lesson the user is currently on
  //   const currentL = lessons.find((l)=> currentQ.lesson_id === l.id)
  //   // get all questions that belong to the lesson the user is on
  //   const lessonQ = questions.filter((q)=> currentL.id === q.lesson_id)
  //   // checks to see if theres another question in the same lesson 
  //   const nextQ = lessonQ.find((q) => currentQ.id < q.id)
  //   // if content is not a question, return the next lesson
  //   if (nextQ === undefined) {
  //     const nextLesson = lessons.find((l)=> currentL.id < l.id)
  //     console.log("nextLesson", nextLesson)
  //     return nextLesson
  //   } else if (nextQ !== undefined) {
  //     console.log("not undefined", nextQ)
  //     return undefined
  //   }
  // }
  // getNextLesson() {
  //     // gets the next lesson and sends it back
  //     const { lessons, content } = this.props;
  //     // total lessons available
  //     const lCount = lessons.length;
  //     if (lCount > content.id) {
  //       const nextLesson = lessons.filter(lessons => lessons.id === content.id + 1);
  //       return nextLesson[0];
  //     }
  //     return undefined;
  // }

  // getNextQuestion() {
  //   const { content, questions , current_user} = this.props;
  //  // questions that belong to the current lesson
  //  const lQuestions = questions.filter(questions => questions.lesson_id === content.id);
  //  // amount of questions that belong to the current lesson
  //  const qCount = lQuestions.length;
  //  // the amount of completed questions 
  //  const cQuestions = lQuestions.filter(q=> q.id <= current_user.last_q).length
  //   // current question the user is on
  //  const currentQ = questions.find((q)=> current_user.last_q < q.id)
  //   if(qCount > cQuestions) {
  //     const nextQuestion = questions.filter(q=> q.lesson_id === content.id).find(q=> currentQ.id +1 === q.id)
  //     return nextQuestion
  //   }
  //   return undefined
  // }

  sendContent(next) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.currentContent(next);
  }
  checkAnswer() {
    let { userChoice , checkUserAnswer} = this.props;
    if (userChoice.length > 0){
      checkUserAnswer();
    } else {
      alert("Make a selection")
    }
  }
  checkContent() {
    const { content, questions , current_user, lessons, userChoice} = this.props;
    let nextQuestion;
    let nextLesson;
    if (content.id !== undefined) {
      // question the user is currently on
      const currentQuestion = questions.find((q)=> current_user.last_q < q.id)
      // checks to see if the current content is a lesson
      if (content.lesson_id === undefined) {
        // get all the questions that belong to this lesson
        const allQuestions = questions.filter((q)=> q.lesson_id === content.id)
        // get the next question to render 
        nextQuestion = allQuestions.find((q)=> currentQuestion.id === q.id)
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
        // get the lesson the question belongs to 
        const currentLesson = lessons.find((l)=> content.lesson_id === l.id)
        // if the usersChoice is correct, render the next question or lesson
        if (userChoice === content.answer) {
          // get all the questions that belong to the same lesson as the current question
          const allQuestions = questions.filter((q)=> content.lesson_id === q.lesson_id)
          // finds the next question
          nextQuestion = allQuestions.find((q)=> q.id > currentQuestion.id)
          // if there is another question that belongs to the same lesson, render it
          if (nextQuestion !== undefined) {
            this.sendContent(nextQuestion)
            this.props.resetQuestion();

          } else if (nextQuestion === undefined) {
            // if there are no more questions that belong to the same lesson, render next lesson
            nextLesson = lessons.find((l)=> currentLesson.id < l.id)
            this.sendContent(nextLesson)
            this.props.resetQuestion();
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
