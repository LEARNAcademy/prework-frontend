import React from 'react'
import Bar from './Bar'

class Progress extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            percentage:0
        }
    }
    fillBarLogic() {
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
    componentDidMount(){
        this.fillBarLogic();
    }
    render() {
        let {lessons, modules, topics} = this.props 
        let {percentage} = this.state
        return (
            <>
                <Bar percentage={percentage} modules={modules} lessons={lessons} topics={topics}/>
            </>
        )
    }
}

export default Progress