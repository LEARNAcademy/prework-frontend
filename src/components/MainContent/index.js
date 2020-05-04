import React from 'react'
import { Row, Col } from 'reactstrap'
import Question from './Question'


class MainContent extends React.Component {  
    render(){
        let {content, lessons, questions, resources } = this.props
        // checks if the content is a lesson or question, renders appropriate content
        let contentType;
        let resource;
        var quest;
        if (content.lesson_id !== undefined) {
            contentType = 'question'
        } else if (content.lesson_id === undefined) {
            contentType = 'lesson'
            // find questions that belong to current lesson
            if(content !== undefined){
                quest = questions.find(q => q.lesson_id === content.id)

            }
            //resource = resources.filter(r => r.question_id === quest.id)
            
        }
        console.log("resources",resource)
        return (
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
             {content && contentType === 'lesson' &&
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
                            <p></p>
                        </Col>
                    </Row>
                </div>
            }
            {content && contentType === 'question' &&
                <Question content = {content} lessons = {lessons}/>
            }
            </>
                )
            }
    }

export default MainContent