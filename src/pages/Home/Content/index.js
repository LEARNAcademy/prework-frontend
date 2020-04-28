import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap'
import LessonNav from '../../../components/LessonNav'
import MainContent from '../../../components/MainContent'

class Content extends Component{
  render(){
    {console.log("props",this.props.modules)}
    return(
      <>
          <Row>
            <Col sm={4}>
              <LessonNav module={this.props.modules} lesson={this.props.lessons}/>
            </Col>
            <Col sm={8}>
                <MainContent />
            </Col>
          </Row>
      </>
    )
  }
}
export default Content
