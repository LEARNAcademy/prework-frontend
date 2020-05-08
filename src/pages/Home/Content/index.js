import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'
import LessonNav from '../../../components/LessonNav'
import MainContent from '../../../components/MainContent'
import Footer from '../../../components/Footer'

class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            content: [],
            userChoice:'',
            questionCorrect:null,
        }
    }
  
  
  handleChange = (event) => {
    this.setState({userChoice:event.target.value})
  }
  handleSubmit = () => {
      let { content, qCount, userChoice} = this.state
      if (userChoice === content.answer) {
          // send request to backend to change questions completed status to true
          fetch(`http://localhost:3000/questions/${content.id}`, {
            method: 'put',
            headers: {'Content-type': 'application/json' },
            body: JSON.stringify({
              completed:true
            })
          })
          .then(res=> res.json())
          .then((result)=> {
            this.setState({questionCorrect:true})
          })
          alert("Answer is correct")
      } else {
          alert("Answer is incorrect!")
          this.setState({questionCorrect:false})
      }
  }
  currentContent = (content) => {
    this.setState({content:content})
  }

  currentLesson = (content) => {
    this.setState({content:content},() => {
      console.log("./pages/Home/Content/: state changed",this.state.content);
    })
  }
  contentExist() {
    if(this.state.content){
      if (this.state.content.id !== undefined) {
          return true
      } else {
          return false
      }
    }
  }

  render(){
      let checkContent = this.contentExist();
      let { questions, resources, modules, lessons, topics} = this.props
      let {questionCorrect} = this.state
    return(
      <>
          <Row>
            <Col sm={4}>
              <LessonNav modules={modules} lessons={lessons} currentContent = {this.currentContent} topics={topics} content = {this.state.content}/>
            </Col>
            <Col sm={8}>
                <MainContent questionCorrect = {questionCorrect} content={this.state.content} questions={questions} resources={resources} lessons = {lessons} handleChange={this.handleChange} userChoice={this.state.userChoice}/>
            </Col>
          </Row>
          {checkContent &&
            <Row>
                <Col sm={12}>
                    <Footer questionCorrect={questionCorrect} topics={topics} modules = {modules} lessons={lessons} currentContent={this.currentContent} questions={questions} content={this.state.content} handleSubmit={this.handleSubmit} userChoice = {this.state.userChoice}/>   
                </Col> 
            </Row>
            }

      </>
    )
  }
}
export default Content
