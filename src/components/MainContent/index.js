import React from 'react'
import {Container, Row, Col} from 'reactstrap'


class MainContent extends React.Component {
    render(){
        let {lesson} = this.props
        return(
             <>
             {lesson.length == 0 &&
                <div>
                    <Row>
                        <Col sm={12}>
                            <h4>Hello user, click on a module to start</h4>
                        </Col>
                    </Row>
                </div>
             }
             {lesson.length !== 0 &&
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
                        <div className="extraBox">
                            <h3 className="extraBoxListItem">Resources</h3>
                                <ul>
                                    <li>Resource 1</li>
                                    <li>Resource 2</li>
                                    <li>Resource 3</li>
                                    <li>Resource 4</li>
                                </ul>
                        </div>
                    </Col>

                    <Col sm={6}>
                        <div className="extraBox">
                        <h3 className="extraBoxListItem">Resources</h3>
                            <ul>
                                <li>Resource 1</li>
                                <li>Resource 2</li>
                                <li>Resource 3</li>
                                <li>Resource 4</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                </div>
            }
            </>
                )
            }
    }

export default MainContent