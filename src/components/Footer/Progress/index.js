import React from 'react'
import Bar from './Bar'
import {Button} from 'reactstrap'

class Progress extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            percentage: 0
        }
    }
    componentDidMount(){
        let {lessons, modules} = this.props
        {/*get percentage of completed amount */}
        let completionCount = 0
        {/*divides 100 by lesson count*/}
        let lessonCount = 100/lessons.length
        {/*percent equivalent of each lesson*/}
        let percentPerLesson = lessonCount/100
        {/* number of lessons that have been completed */}
        let cLessons = this.props.lessons.filter((l)=> l.completed === true).length
        {/* the completed count as a whole number*/}
        completionCount = (percentPerLesson * cLessons)*100
        {/*updates the state to completionCount */}
        this.setState({percentage:completionCount})
    }


    render() {
        return (
            <>
                <Bar percentage={this.state.percentage} modules={this.props.modules} lessons={this.props.lessons}/>
            </>
        )
    }
}

export default Progress