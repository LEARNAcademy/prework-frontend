import React from 'react'
import './index.css'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closetag'

class IdeChoice extends React.Component {
    constructor() {
        super();
        this.state = {
          mode: 'xml'
        };
      }


    updateCode(newCode){
        console.log("newCode",newCode)
        this.props.updateIde(newCode)
    }

    changeMode(e){
        var codeType = e.target.value;
        this.setState({ mode: codeType })
    }
    checkIdeAnswer(typedText){
        this.props.ideUserChoice(typedText)
    }

    getTags(){
        let userTextInput = document.getElementById("renderedCode")
        // let userText = userTextInput.innerHTML
        console.log(userTextInput);
        // if(userText !== null){
        //     let finalInput = userText.includes(/ (<([^>]+)>) /gi)
        //     console.log(finalInput);
        // }
        
        
        // this.checkIdeAnswer(finalInput)
    }
    render(){
        let options = {
            mode: this.state.mode,
            lineNumbers: true,
            autoCloseTags: true
          }
          const {code} = this.props
        return(
        <div className="Ide">
            <h2>IDE for HTML</h2>
            
                <select onChange={this.changeMode.bind(this)} value={this.state.mode}>
                <option value="xml">HTML5</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                </select>    
            <CodeMirror value={code} onChange={e => this.updateCode(e)} options={options} />

            
            <div id="renderedCode" dangerouslySetInnerHTML={{__html:code}}></div>
        </div>
        )
    }
}

export default IdeChoice;