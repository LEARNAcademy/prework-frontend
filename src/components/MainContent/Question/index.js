import React from 'react';
import MultChoice from './MultChoice'

class Question extends React.Component{

    checkIfMult() {
        const { content } = this.props
        if(content.multiple_choice){
            return true
        } else {
            return false
        }
    }
    
    render(){
        // function will be set to equal to isMult to find if the current lessons question type is multiple choice
        let isMult = this.checkIfMult();
        let { content , lessons , handleChange, userChoice} = this.props
        return(
            <>
            {isMult &&
                <MultChoice content = {content} lessons = {lessons} handleChange = {handleChange} userChoice = {userChoice}/>
            }
            {!isMult && 
                <p>Renders IDE</p>
            }
            </>
        )
    }
}

export default Question