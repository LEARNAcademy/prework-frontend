import React from 'react'
import { Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import Question from './Question'
import './style.css'


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
                if (findQuestion !== undefined) {
                    // gets resources that belong to the question that belongs to the current lesson
                    const getResources = resources.filter(r=> r.question_id === findQuestion.id);
                    return getResources
                    }
                } 
            }
        }
        return []
    }
    showContent = (name) => {
    //     if(name === "html") {
            
    //         document.querySelector(`.navBtn0 .navIsActive`).classList.add("active") 
    //     } 
    //     if(name === "js") {

    //         document.querySelector(`.navBtn1 .navIsActive`).classList.add("active") 
    //     }
    //     if(name === "css") {
    
    //         document.querySelector(`.navBtn2 .navIsActive`).classList.add("active") 
    //     } 
    console.log(name)
    }
    render(){
        //,6wYa^laDh
        const {content, lessons, handleChange , userChoice, questionCorrect, userMessage, ideUserChoice, questions, updateIde, code,current_user} = this.props
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
                            <h4>Hello <span style={{color:"green",fontStyle:"italic"}}>{current_user.email}</span>, click on a module to start</h4>
                            <Card className="dashCard" body>
                                <CardTitle><strong>HTML</strong></CardTitle>
                                <CardText>Start learning about the foundation of web development with HTML. In this module, you'll be taught all of the rules you'll need to know about the structure of a website and the foundation of web development.</CardText>
                                <Button type="button" className="dashBtn0 btn btn-success" data-toggle="collapse" data-target="#collapse0" onClick={() => this.showContent("html")}>Go to HTML</Button>
                            </Card>
                            <Card className="dashCard" body>
                                <CardTitle><strong>JavaScript</strong></CardTitle>
                                <CardText>Find out how to make your website interactive, dynamic and awesome with JavaScript.</CardText>
                                <Button type="button" className="dashBtn1 btn btn-success" data-toggle="collapse" data-target="#collapse1" onClick={() => this.showContent("js")}>Go to JavaScript</Button>
                            </Card>
                            <Card className="dashCard" body>
                                <CardTitle><strong>CSS</strong></CardTitle>
                                <CardText>Turn your website into a stunning work of art by learning how to style every aspect of it using CSS.</CardText>
                                <Button type="button" className="dashBtn2 btn btn-success" data-toggle="collapse" data-target="#collapse2" onClick={() => this.showContent("css")}>Go to CSS</Button>
                            </Card>
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
                    {content.img_src !== null &&
                    <Row>
                        <Col>
                            <img className="lessonImg" src={content.img_src}/>
                        </Col>
                    </Row>
                    }
                    <Row>
                        {resourcesL.length > 0 &&
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
                <Question code = {code} updateIde = {updateIde} userMessage = {userMessage} questionCorrect = {questionCorrect} content = {content} lessons = {lessons} handleChange={handleChange} userChoice={userChoice} ideUserChoice = {ideUserChoice} questions = {questions} />
            }
            </>
                )
            }
    }

export default MainContent