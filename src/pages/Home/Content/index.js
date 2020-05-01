import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
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
      this.setState({lesson:lesson},() => {
        console.log("./pages/Home/Content/: state changed",this.state.lesson);
      })
  }

  render(){
      let checkLesson = true
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
