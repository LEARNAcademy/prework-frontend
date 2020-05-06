import React from 'react';
import { Row, Col , Form, FormGroup, Input, Label , Button} from 'reactstrap';

class MultChoice extends React.Component {
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.handleChange(event)
    }
    render(){
        let { content , lessons, userChoice } = this.props;
        const lesson = lessons.filter(l=> content.lesson_id === l.id)[0]
        return(
            <>
             <Row>
                 <Col sm={12}>
                     <h4>{lesson.question}</h4>
                 </Col>
             </Row>
             <Row>
                 <Col sm={12}>
                     <Form>
                        {content.content.map((answers,i,arr) => {
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