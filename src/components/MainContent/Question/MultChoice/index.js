import React from 'react';
<<<<<<< HEAD
import { Row, Col , Form, FormGroup, Input, Label } from 'reactstrap';
=======
import { Row, Col , Form, FormGroup, Input, Label , Button} from 'reactstrap';
>>>>>>> b004260df19e530decfd1d5c36163f334a0eb263
import './style.css'

class MultChoice extends React.Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);
    }
<<<<<<< HEAD

=======
>>>>>>> b004260df19e530decfd1d5c36163f334a0eb263
    handleChange(event){
        this.props.handleChange(event)
    }
    splitContent = () =>{
        let {content} = this.props 
        let itemArr = content.content.split('ans:&*')
        if(itemArr !== undefined){
            return itemArr
        }
    }
<<<<<<< HEAD

    userAnswered(){
        // checks to see that the user has submitted a response to the question
        let {content} = this.props;
        if(content.correct !== null){
=======
    questionAnswered() {
        let {questionCorrect} = this.props;
        if (questionCorrect !== null) {
>>>>>>> b004260df19e530decfd1d5c36163f334a0eb263
            return true
        } else {
            return false
        }
    }
<<<<<<< HEAD
    answerStatus(){
        let {content} = this.props;
        if (this.userAnswered()){
            if(content.correct){
                return "Correct"
            } else if (!content.correct){
                return "Incorrect"
            }
        }
    }
    defineClass(){
        if(this.answerStatus() === "Correct"){
            return true
        } else if (this.answerStatus() === "Incorrect"){
            return false
        }
    }
    render(){
        let { content , userChoice } = this.props;
        // an array of the multiple choice answers users can select
        let iterableContent = this.splitContent();
        // gives a boolean value to check if user has selected an answer
        let answered = this.userAnswered();
        // message will show either correct or incorrect depending on their answer
        let ansMessage = this.answerStatus();
        // sets the className for the answer message 
        let defineClass = this.defineClass();
        console.log("content", content)
=======
    isCorrect(){
        let {questionCorrect} = this.props
        if (this.questionAnswered){
            if(questionCorrect){
                return "Correct"
            } else {
                return "Incorrect"
            }
        }
     }
     defineClassName(){
         if(this.isCorrect() === "Correct"){
            return true
         } else if (this.isCorrect() === "Incorrect"){
             return false
         }
     }
    render(){
        let { content , userChoice , questionCorrect} = this.props;
        let iterableContent = this.splitContent();
        let questionAnswered = this.questionAnswered();
        let isCorrect = this.isCorrect();
        let defineClass = this.defineClassName();
>>>>>>> b004260df19e530decfd1d5c36163f334a0eb263
        return(
            <>
             <Row>
                 <Col sm={12}>
                     <h4>{content.title}</h4>
                 </Col>
             </Row>
             <Row>
                 <Col sm={12}>
                     <Form>
                        {iterableContent.map((answers,i,arr) => {
                            return(
                                <FormGroup check key={i}>
                                    <Label check>
                                        <Input 
                                        type='radio' 
                                        name='questions'
                                        value={answers} 
                                        checked = {userChoice === arr[i] }
                                        onChange={this.handleChange}
                                        />
                                        {answers}
                                    </Label>
                                </FormGroup>
                            )
                        })}
                    </Form>
                 </Col>
             </Row>
<<<<<<< HEAD
             {answered &&
            <Row>
                <Col sm={12}>
                    <p className={defineClass?'correctVal':'incorrectVal'}>{ansMessage}</p>
                </Col>
            </Row>
=======
             {questionAnswered && 
             <Row>
                 <Col sm={12}>
                    <p className={isCorrect?'correctVal':'incorrectVal'}>{isCorrect}</p>
                 </Col>
             </Row>
>>>>>>> b004260df19e530decfd1d5c36163f334a0eb263
             }
            </>
        )
    }
}

export default MultChoice;