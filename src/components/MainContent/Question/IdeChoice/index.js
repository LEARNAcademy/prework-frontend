import React from 'react'
import './style.css'
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
        this.props.updateIde(newCode)
    }

    changeMode(e){
        var codeType = e.target.value;
        this.setState({ mode: codeType })
    }
    checkIdeAnswer(typedText){
        this.props.ideUserChoice(typedText)
    }
    render(){
        let options = {
            mode: this.state.mode,
            lineNumbers: true,
            autoCloseTags: true
          }
          const {code, content} = this.props
        return(
        <div className="Ide">
            <h2>{content.title}</h2>
            <br/>
                <span className="ideContent">{content.content}</span>
                <br/>
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