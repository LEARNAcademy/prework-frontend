import React from 'react';
import { Row, Col , Form, FormGroup, Input, Label , Button} from 'reactstrap';

class Question extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userChoice:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            userChoice:event.target.value
        })
    }
    handleSubmit(event){
        let { content } = this.props
        event.preventDefault();
        if(this.state.userChoice === content.answer){
            // send request to backend to change questions completed status to true
            alert("Answer is correct")
        } else {
            alert("Answer is incorrect!")
        }
    }
    render(){
        let { content , lessons } = this.props;
        const lesson = lessons.filter(l=> content.lesson_id === l.id)[0]
        console.log("userchoice",this.state.userChoice)
        return(
            <>
             <Row>
                 <Col sm={12}>
                     <h4>{lesson.question}</h4>
                 </Col>
             </Row>
             <Row>
                 <Col sm={12}>
                     <Form onSubmit={this.handleSubmit}>
                        {content.content.map((answers,i,arr) => {
                            return(
                                <FormGroup check>
                                    <Label check>
                                        <Input 
                                        type='radio' 
                                        name='questions'
                                        value={answers} 
                                        checked = {this.state.userChoice === arr[i] }
                                        onChange={this.handleChange}
                                        />
                                        {answers}
                                    </Label>
                                </FormGroup>
                            )
                        })}
                        <Button type="submit">Check Answer</Button>
                    </Form>
                 </Col>
             </Row>
            </>

        )
    }
}

export default Question