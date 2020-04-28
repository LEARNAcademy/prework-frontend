import React from 'react'
import {Container, Row, Col} from 'reactstrap'


class MainContent extends React.Component {
    render(){
        return(
            <>
            <Row>
                <Col>
                    <h1 className="lessonHeader">List Item</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Content for item</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>More content</p>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <div className="extraBox">
                        <h3 className="extraBoxListItem">Resources</h3>
                        <ul>
                            <li>Resource 1</li>
                            <li>Resource 2</li>
                            <li>Resource 3</li>
                            <li>Resource 4</li>
                        </ul>
                    </div>
                </Col>

                <Col sm={6}>
                    <div className="extraBox">
                        <h3 className="extraBoxListItem">Resources</h3>
                        <ul>
                            <li>Resource 1</li>
                            <li>Resource 2</li>
                            <li>Resource 3</li>
                            <li>Resource 4</li>
                        </ul>
                    </div>
                </Col>
            </Row>

            </>
        )
    }
}

export default MainContent