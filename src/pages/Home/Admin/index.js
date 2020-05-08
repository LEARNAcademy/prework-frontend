import React from 'react';
import {Row, Col} from 'reactstrap'
import NewUser from './NewUser'

class Admin extends React.Component {
    render(){
        return(
            <>
                <NewUser />
            </>
        )
    }
}

export default Admin