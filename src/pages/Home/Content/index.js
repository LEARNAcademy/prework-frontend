import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import LessonNav from '../../../components/LessonNav'
import MainContent from '../../../components/MainContent'
import Footer from '../../../components/Footer'

class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            content: []
        }
    }

    currentContent = (content) => {
        this.setState({content:lesson})
    }

  currentLesson = (lesson) => {
      this.setState({lesson:lesson},() => {
        console.log("./pages/Home/Content/: state changed",this.state.lesson);
      })
  }

  render(){
      let checkContent = true
      let { questions, resources, modules, lessons} = this.props
    return(
      <>
          <Row>
            <Col sm={4}>
              <LessonNav modules={modules} lessons={lessons} currenContent = {this.currentContent}/>
            </Col>
            <Col sm={8}>
                <MainContent content={this.state.content} questions={questions} resources={resources}/>
            </Col>
          </Row>
          {checkContent &&
            <Row>
                <Col sm={12}>
                    <Footer modules = {modules} lessons={lessons} currentContent={this.currentContent} questions={questions} content={this.state.content}/>   
                </Col> 
            </Row>
            }

      </>
    )
  }
}
export default Content
