import React from 'react'
import { Row, Col } from 'reactstrap'
import Question from './Question'


class MainContent extends React.Component {  
    contentExist(){
        let { content } = this.props
        if(content){
            if (content.id !== undefined) {
                return true
            } else {
                return false
            }
        }
    }
    checkType() {
        let { content } = this.props
        if (this.contentExist()) {
            if (content.lesson_id === undefined) {
                return true
            } else {
                return false
            }
        }
    }
    getResource() {
        let { content , questions, resources } = this.props 
        // check to see if content has been loaded
        if (this.contentExist()) {
            if (content.code_module_id !== undefined){
            //returns a boolean value of true if it is a lesson, or false if not
            let isLesson = this.checkType();
            if (isLesson) {
                // it is a lesson, find first question that belongs to current lesson
                const findQuestion = questions.find(q=> q.lesson_id === content.id);
                // Jehovah > all
                if(findQuestion !== undefined){
                    // gets resources that belong to the question that belongs to the current lesson
                    const getResources = resources.filter(r=> r.question_id === findQuestion.id);
                    return getResources
                    }
                } 
            }
        }
    }
    
    render(){
        const {content, lessons, handleChange , userChoice} = this.props
        let contentExist = this.contentExist();
        // checks if the content is a lesson or question, renders appropriate content
        let isLesson = this.checkType();
        // gets the resources that belong to current lesson
        let resourcesL = this.getResource();

        return (
             <>
             {!contentExist &&
                <div>
                    <Row>
                        <Col sm={12}>
                            <h4>Hello user, click on a module to start</h4>
                        </Col>
                    </Row>
                </div>
             }
             {contentExist && isLesson &&
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
                        {resourcesL !== undefined &&
                        <Col sm={6}>
                            <h5>Resources</h5>
                            <ul>
                                {resourcesL.map((resource,i)=>{
                                    return(
                                        // eslint-disable-next-line react/jsx-no-target-blank
                                        <li key={i}><a href={resource.link} target="_blank">{resource.name}</a></li>
                                    )
                                })}
                            </ul>
                        
                        </Col>
                        }
                    </Row>

                </div>
            }
            {contentExist && !isLesson &&
                <Question content = {content} lessons = {lessons} handleChange={handleChange} userChoice={userChoice}/>
            }
            </>
                )
            }
    }

export default MainContent