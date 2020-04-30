import React from 'react'
import {Container, Row, Col} from 'reactstrap'


class MainContent extends React.Component {
    
    render(){
        let {lesson, resources, questions} = this.props
        {console.log("lesson on main",lesson)}
        
        {console.log("questions", questions)}
        {console.log("resources",resources)}
        let val;
        {/* check and see if it's a lesson or question thats passed in */}
        {/* if object has lesson_id, current object is a question */}
        
        return(
             <>
             {lesson === undefined &&
                <div>
                    <Row>
                        <Col sm={12}>
                            <h4>Hello user, click on a module to start</h4>
                        </Col>
                    </Row>
                </div>
             }
             {lesson &&
                <div>
                    <Row>
                        <Col>
                            <h1 className="lessonHeader">{lesson.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{lesson.content}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{lesson.question}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            
                        </Col>
                    </Row>
                </div>
            }
            </>
                )
            }
    }

export default MainContent