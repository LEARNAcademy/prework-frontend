import React from 'react' 
import Progress from './Progress'
import {Row, Col, Button} from 'reactstrap'

class Footer extends React.Component {
  
    sendContent(next){
        this.props.currentContent(next)
    }


    
    render(){
        let {lessons, questions, content, modules} = this.props
        let nextContent;
        console.log("what type",typeof content)

        //content can only be lessons or questions at any given point
        if(content.id !== undefined) {
            let incompleteQuestion;
            console.log("reached inside")
            //if the current content doesnt have a lesson_id then, we know its a lesson
            if(content.lesson_id === undefined){ 
                //check to see if there any questions that belong to this lesson,return the first question that hasnt been completed
                incompleteQuestion = questions.filter(questions=> questions.lesson_id === content.id).find(q=> !q.completed)
                nextContent = incompleteQuestion
                //return the incompleteQuestion if it exists as the next content that loads
            } else if(content.lesson_id !== undefined){
                incompleteQuestion = questions.filter(questions=> questions.lesson_id === content.id).find(q=> !q.completed)
                nextContent = incompleteQuestion
            }
            if(incompleteQuestion){
                nextContent = incompleteQuestion
            } else if(!incompleteQuestion){
                // if there isn't another incomplete question, render the next lesson
                let nextLess = []
                nextLess = lessons.filter(lessons => lessons.id === content.id+1)
                nextContent=nextLess[0]
            }
                
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
                        <Button onClick={()=> this.sendContent(nextContent)}>Continue</Button>
                    </Col> 
                </Row>
            </>
        )
    }
}
export default Footer