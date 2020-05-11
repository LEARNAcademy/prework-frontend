import React from 'react';
import {Row, Col} from 'reactstrap'
import NewUser from './NewUser'
import './style.css'

class Admin extends React.Component {
    render(){
        let hide = true;
        return(
            <>
            {!hide &&
                <Row>
                    <Col sm={12} className="adminPanel">
                        <Row>
                            <Col>
                                <h3 style={{textAlign:"center"}}>Admin Panel</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ul className="adminList">
                                    <li>Create User</li>
                                    <li>Edit User</li>
                                    <li>Delete User</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }  
                <NewUser />
            </>
        )
    }
}

export default Admin