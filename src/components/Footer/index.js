import React from 'react' 
import Progress from './Progress'
import {Row, Col, Button} from 'reactstrap'

class Footer extends React.Component {
  
    sendContent(next){
        this.props.currentContent(next)
    }

    getNextLesson(){
        // gets the next lesson and sends it back
        let {lessons, content} = this.props
        // total lessons available
        let lCount = lessons.length
        console.log("lesson length", lessons.length)

        if(lCount > content.id){
            let nextLesson = lessons.filter(lessons => lessons.id === content.id+1)
            console.log("next lesson",nextLesson)
        } else {
            return console.log("undefined")
        }
        
    }
    getPrevLesson(){
        let {lessons, content} = this.props
        // gets the previous lesson
        let prevLesson = lessons.filter(lessons => lessons.id === content.id-1)
        console.log(prevLesson[0])
    }

    getNextQuestion(){
        let {content, questions} = this.props
        // filters out and finds the questions that belong to current lesson. Then finds the first instance of those questions that haven't been completed
        let lQuestions = questions.filter(questions => questions.lesson_id === content.id)
        // how many questions belong to this current lesson
        let qCount = lQuestions.length
        // the count of completed questions that belong to this current lesson
        let cQuestions = lQuestions.filter(questions => questions.completed).length
        // if the question count is less than the completed questions
        console.log("questions belong to current lesson",qCount);
        console.log("questions that have been completed in the current lesson", cQuestions);
        
        
        if(qCount > cQuestions){
            let nextQuestion = questions.filter(questions => questions.lesson_id === content.id).find(q=>!q.completed)
            console.log("next question",nextQuestion)
            return nextQuestion
        } else {
            return undefined
        }
        
    }
    
    checkContent(){
        let {lessons, questions, content} = this.props
        let nextContent;
        //checks to see if content exists'
        console.log("nextContent",nextContent)
        if(content.id !== undefined){
            //content does exist, checks to see if the content is a lesson
            if(content.lesson_id === undefined){
                //content is a lesson, now checks if theres any questions that belong to it
                if(this.getNextQuestion() !== undefined){
                nextContent = this.getNextQuestion()
                // if the next question returns undefined
                } else if(this.getNextQuestion() === undefined){
                nextContent = this.getNextLesson()
                }
            } else if(content.lesson_id !== undefined){
                console.log("this is a question")
            }
            
        }
    }

    
    render(){
        let {lessons, questions, content, modules} = this.props
        let nextContent;
        if(content.id !== undefined) {
            // let incompleteQuestion;
            // //if the current content doesnt have a lesson_id then, we know its a lesson
            // if(content.lesson_id === undefined){
            //     //check to see if there any questions that belong to this lesson,return the first question that hasnt been completed
            //     incompleteQuestion = questions.filter(questions=> questions.lesson_id === content.id).find(q=> !q.completed)
            //     nextContent = incompleteQuestion
            //     //return the incompleteQuestion if it exists as the next content that loads
            // } else if(content.lesson_id !== undefined){
            //     incompleteQuestion = questions.filter(questions=> questions.lesson_id === content.id).find(q=> !q.completed)
            //     nextContent = incompleteQuestion
            // }
            // if(incompleteQuestion){
            //     nextContent = incompleteQuestion
            // }
            // // } else if(!incompleteQuestion){
            // //     // if there isn't another incomplete question, render the next lesson
            // //     let nextLess = []
            // //     nextLess = lessons.filter(lessons => lessons.id === content.id+1)
            // //     nextContent=nextLess[0]
            // // }
                
            }
        return(
            <>
                <Row>
                    <Col sm={6}>
                        {/* progress meter on the left */}
                        <Progress modules={modules} lessons={lessons}/>
                    </Col>
                    {/* continue button on the right*/}
                    <Col sm={6} className="footer-button" style={{textAlign:"right"}}>
                        
                        {/* <Button onClick={() => this.sendContent (back)}>Back</Button> */}
                        
                        <Button onClick={()=> this.getNextQuestion()}>Next Question</Button>
                        <Button onClick={()=> this.getNextLesson()}>Next Lesson</Button>
                        <Button onClick={()=> this.getPrevLesson()}>Previous Lesson</Button>
                        <Button onClick={()=> this.checkContent()}>Check Content</Button>
                        <Button onClick={()=> this.sendContent(nextContent)}>Continue</Button>
                        
                    </Col> 
                </Row>
            </>
        )
    }
}
export default Footer