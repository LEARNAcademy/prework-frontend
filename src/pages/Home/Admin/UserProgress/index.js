import React from 'react' 
import {Table, Row, Col, ButtonToggle, Button} from 'reactstrap'
import {Redirect} from 'react-router-dom'

class UserProgress extends React.Component {
    getUserModule(user){
        const {questions, lessons, modules } = this.props 

        // the question the user is currently on
        let currentQuestion = questions.find((q)=> q.id > user.last_q)
        // if currentQuestion is undefined, user is on the last question
        if (currentQuestion === undefined) {
            currentQuestion = questions[questions.length - 1]
        }
        // the lesson the user is currently on 
        const currentLesson = lessons.find((l)=> currentQuestion.lesson_id === l.id)
        // the module the user is currently on 
        const currentModule = modules.find((m)=> currentLesson.code_module_id === m.id)
        // returns title of the current module the user is on
        return currentModule.lesson
    }
    getUserLesson(user){
        const {questions, lessons } = this.props 
        // the question the user is currently on
        let currentQuestion = questions.find((q)=> q.id > user.last_q)
        // if currentQuestion is undefined, user is on last question 
        if (currentQuestion === undefined) {
            currentQuestion = questions[questions.length - 1]
        }
        // the lesson the user is currently on 
        const currentLesson = lessons.find((l)=> currentQuestion.lesson_id === l.id)
        // the lesson title
        return currentLesson.title
    }
    getUserProgress(user){
     const {questions} = this.props
    // get percentage of completed amount
      let completionCount = 0
      let questionCount = 100/questions.length
      // percent equivalent of each question
      let percentPerQuestion = questionCount/100
      
      // number of questions that have been completed 
      let cQuestions = questions.filter((q)=> q.id <= user.last_q).length
      // let cLessons = lessons.filter((l)=> l.completed === true).length
      // the completed count as a whole number
      
      completionCount = (percentPerQuestion * cQuestions)*100
      // completionCount = (percentPerLesson * cLessons)*100
      // updates the state to completionCount
      return Math.floor(completionCount)
    }
    render(){
        const {users, createUser} = this.props
        console.log('userCreate',createUser)
        console.log('tiggkeCreate',this.props.toggleCreate)
        return(
            <>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Module</th>
                            <th>Lesson</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                            {users.map((user,i,array)=> {
                                return(
                                    <tr>
                                            <th>{user.id}</th>
                                            <td>{user.email}</td>
                                            <td>{this.getUserModule(user)}</td>
                                            <td>{this.getUserLesson(user)}</td>
                                            <td>{this.getUserProgress(user)}%</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </Table>
                <Row>
                    <Col sm={12}>
                        <ButtonToggle color="success" onClick={()=> this.props.toggleCreate()}>Create User</ButtonToggle>
                    </Col>
                </Row>
                {createUser &&
                    <Redirect to='/admin/create'/>
                }
                            
            </>
        )
    }
}

export default UserProgress