import React from 'react';
import MultChoice from './MultChoice'
import IdeChoice from './IdeChoice'

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
        let { content , lessons , handleChange, userChoice, questionCorrect, userMessage} = this.props
        return(
            <>
            {isMult &&
                <MultChoice userMessage = {userMessage} questionCorrect = {questionCorrect} content = {content} lessons = {lessons} handleChange = {handleChange} userChoice = {userChoice}/>
            }
            {!isMult && 
                <IdeChoice />
            }
            </>
        )
    }
}

export default Question