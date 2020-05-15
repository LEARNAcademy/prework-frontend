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
    defineClass(){
        let {questionCorrect} = this.props;
        
        if (this.userAnswered()) {
            if (questionCorrect) {
                return true
            } else if(!questionCorrect) {
                return false
            }
        }
    }
    render(){
        let { content , userChoice , userMessage} = this.props;
        // an array of the multiple choice answers users can select
        let iterableContent = this.splitContent();
        // gives a boolean value to check if user has selected an answer
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
             {userMessage !== null &&
            <Row>
                <Col sm={12}>
                    <p className={defineClass?'correctVal':'incorrectVal'}>{userMessage}</p>
                </Col>
            </Row>
             }
            </>
        )
    }
}

export default MultChoice;