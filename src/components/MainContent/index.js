import React from 'react'
import {Row, Col} from 'reactstrap'


class MainContent extends React.Component {  
    render(){
        let {content, resources, questions} = this.props
        
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
             {content &&
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