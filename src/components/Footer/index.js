import React from 'react' 
import Progress from './Progress'
import {Row, Col, Button} from 'reactstrap'

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentLesson:"",
            continueLesson:""
        }
    }
    render(){
        return(
            <>
                        <Row>
                            <Col sm={6}>
                                {/* progress meter on the left */}
                                <Progress modules={this.props.modules} lessons={this.props.lessons}/>
                            </Col>
                            {/* continue button on the right*/}
                            <Col sm={6} className="footer-button" style={{textAlign:"right"}}>
                                <Button >Continue</Button>
                            </Col> 
                        </Row>
            </>
        )
    }
}
export default Footer