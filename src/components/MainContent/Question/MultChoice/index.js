import React from 'react';
import { Row, Col , Form, FormGroup, Input, Label } from 'reactstrap';
import './style.css'

class MultChoice extends React.Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.handleChange(event)
    }
    splitContent = () =>{
        let {content} = this.props 
        let itemArr = content.content.split('*/')
        if(itemArr !== undefined){
            return itemArr
        }
    }

    userAnswered(){
        // checks to see that the user has submitted a response to the question
        let {questionCorrect } = this.props;
        if(questionCorrect !== null){
            return true
        } else {
            return false
        }
    }
    answerStatus(){
        let {questionCorrect} = this.props;
        console.log("questionCorrect",questionCorrect)
        if (this.userAnswered()){
            if(questionCorrect){
                return "Correct"
            } else if (!questionCorrect){
                return "Incorrect"
            }
        } else if (questionCorrect === null) {
            return ''
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
             {answered &&
            <Row>
                <Col sm={12}>
                    <p className={defineClass?'correctVal':'incorrectVal'}>{ansMessage}</p>
                </Col>
            </Row>
             }
            </>
        )
    }
}

export default MultChoice;