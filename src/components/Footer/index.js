import React from 'react' 
import Progress from './Progress'
import {Row, Col, Button} from 'reactstrap'

class Footer extends React.Component {
  
    sendContent(next){
        this.props.currentLesson(next)
    }
    
    render(){
        let {lessons, questions, content} = this.props
        let question;
        
        
        let lessonQuestions;
        if(content !== undefined){
        lessonQuestions = questions.filter((q,i)=> q.lesson_id === content.id)
        }
        
        
        const nextLesson = () => { 
            let nextLess = []
            nextLess = lessons.filter((l,i)=> l.id === content.id+1)
            return nextLess[0];
        }
        return(
            <>
                <Row>
                    <Col sm={6}>
                        {/* progress meter on the left */}
                        <Progress modules={this.props.modules} lessons={this.props.lessons}/>
                    </Col>
                    {/* continue button on the right*/}
                    {/* check the current lesson were on */}
                    {/*checks questions associated with this lesson and lists the first one that hasn't been completed*/}{/* */}
                    <Col sm={6} className="footer-button" style={{textAlign:"right"}}>
                        {/* if the last question was completed from the previous lesson, then we need to show the next lesson by passing it through when the continue button is clicked*/}
                        {
                        (content !== undefined && content.length !== 0) &&
                            (questions.map((questions,i,arr)=> {
                                // if the question belongs to the lesson
                                    if(questions.lesson_id === content.id) {
                                        // and it hasn't been completed
                                        if(!questions.completed) {
                                            // and it's one of the X # of questions in the list
                                            if(i<lessonQuestions.length) {
                                                // set the question variable to equal the question in the next position
                                                question = (arr[i++])
                                            }
                                            else {
                                                // if it's not one of the ?'s in the lesson, go to next module
                                                console.log("last step (3)");
                                                if(content){
                                                    nextLesson();
                                                }
                                                // question = x;
                                            }
                                        }
                                        else {
                                            //it has been completed, go to the next incompleted question
                                            console.log("step 2")
                                            // question = x;
                                        }
                                    } else {
                                        //it doesn't belong to the lesson go to the next module
                                        console.log("step 1");
                                        
                                    }
                                }
                            ))
                        }
                        {/* <Button onClick={() => this.sendContent (back)}>Back</Button> */}
                        <Button onClick={()=> this.sendContent(question)}>Continue</Button>
                    </Col> 
                </Row>
            </>
        )
    }
}
export default Footer