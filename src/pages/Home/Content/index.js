import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap'
import LessonNav from '../../../components/LessonNav'
import MainContent from '../../../components/MainContent'
import Footer from '../../../components/Footer'

class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            lesson: [],
            lessonNav:[]
        }
    }

    currentLesson = (lesson) => {
        this.setState({lesson:lesson})
    }


  render(){
      {console.log("lesson in contente",this.state.lesson)}
      if(this.state.lesson.length > 0){
          console.log("true",this.state.lesson.length)
      } else {
          console.log("else",this.state.lesson.length)
      }
      let checkLesson = this.state.lesson.length > 0
    return(
      <>
          <Row>
            <Col sm={4}>
              <LessonNav module={this.props.modules} lesson={this.props.lessons} currentLesson = {this.currentLesson}/>
            </Col>
            <Col sm={8}>
                <MainContent lesson={this.state.lesson} questions={this.props.questions} resources={this.props.resources}/>
            </Col>
          </Row>
          {checkLesson &&
            <Row>
                <Col sm={12}>
                    <Footer modules = {this.props.modules} lessons={this.props.lessons} lessonNav = {this.state.lessonNav} currentLesson={this.state.lesson}/>   
                </Col> 
            </Row>
            }

      </>
    )
  }
}
export default Content
