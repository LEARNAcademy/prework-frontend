import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap'
import LessonNav from '../../../components/LessonNav'
import MainContent from '../../../components/MainContent'
import Footer from '../../../components/Footer'

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
      let checkLesson = true
      // if(this.state.lesson.id !== undefined){
      //   checkLesson = true
      // } else {
      //   checkLesson = false
      // }
      {console.log("lesson in contentttt",this.state.lesson)}
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
                    <Footer modules = {this.props.modules} lessons={this.props.lessons} currentLesson={this.currentLesson} questions={this.props.questions} content={this.state.lesson}/>   
                </Col> 
            </Row>
            }

      </>
    )
  }
}
export default Content
