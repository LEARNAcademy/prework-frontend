import React from 'react';
import { Row, Col , Form, FormGroup, Input, Label , Button} from 'reactstrap';
import './style.css'

class MultChoice extends React.Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);
        this.isCorrect = this.isCorrect.bind(this);
    }
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
    questionAnswered() {
        let {questionCorrect} = this.props;
        if (questionCorrect !== null) {
            return true
        } else {
            return false
        }
    }
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
             {questionAnswered && 
             <Row>
                 <Col sm={12}>
                    <p className={isCorrect?'correctVal':'incorrectVal'}>{isCorrect}</p>
                 </Col>
             </Row>
             }
            </>
        )
    }
}

export default MultChoice;