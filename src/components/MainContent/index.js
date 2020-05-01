import React from 'react'
import {Container, Row, Col} from 'reactstrap'


class MainContent extends React.Component {
    
    render(){
        {/*  */}
        let {content, resources, questions} = this.props
        {/* check and see if it's a lesson or question thats passed in */}
        {/* if object has lesson_id, current object is a question */}
        
        return(
             <>
             {content === undefined &&
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
                            <h1 className="lessonHeader">{content.title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{content.content}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{content.question}</p>
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