import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap'
import LessonNav from '../../../components/LessonNav'
import MainContent from '../../../components/MainContent'

class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            lesson: []
        }
    }

    currentLesson = (lesson) => {
        this.setState({lesson:lesson})
    }


  render(){
    return(
      <>
          <Row>
            <Col sm={4}>
              <LessonNav module={this.props.modules} lesson={this.props.lessons} currentLesson = {this.currentLesson}/>
            </Col>
            <Col sm={8}>
                <MainContent lesson={this.state.lesson} />
            </Col>
          </Row>
      </>
    )
  }
}
export default Content
