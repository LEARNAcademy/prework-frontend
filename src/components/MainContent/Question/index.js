import React from 'react';
import MultChoice from './MultChoice'

class Question extends React.Component{
    render(){
        let isMult = true
        let { content , lessons} = this.props
        return(
            <>
            {isMult &&
                <MultChoice content = {content} lessons = {lessons}/>
            }
            {!isMult && 
                <p>Renders IDE</p>
            }
            </>
        )
    }
}

export default Question