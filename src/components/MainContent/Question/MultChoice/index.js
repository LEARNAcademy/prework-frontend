import React from 'react';
import { Row, Col , Form, FormGroup, Input, Label , Button} from 'reactstrap';

class MultChoice extends React.Component {
    constructor(){
        super()
        this.state = {
            userMessage:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.isCorrect = this.isCorrect.bind(this);
    }

    isCorrect(){
        const { content } = this.props;
        if (content.correct !== null) {
            let userMessage;
            if(content.correct){
                userMessage = "Answer is correct"
                this.setState({userMessage:userMessage})
            } else if (!content.correct){
                userMessage = "Answer is incorrect"
                this.setState({userMessage:userMessage})
            }
        }
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
    render(){
        let { content , userChoice } = this.props;
        let iterableContent = this.splitContent();
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
            </>
        )
    }
}

export default MultChoice;