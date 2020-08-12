import React from 'react'
import './style.css'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closetag'
import {Row, Col } from 'reactstrap'

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
    defineClass(){
        let {questionCorrect} = this.props;
        
        if (questionCorrect !== null) {
            if (questionCorrect) {
                return true
            } else if(!questionCorrect) {
                return false
            }
        }
    }
    render(){
        let options = {
            mode: this.state.mode,
            lineNumbers: true,
            autoCloseTags: true
          }
        const {code, content, userMessage} = this.props
        let defineClass = this.defineClass();
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
        {userMessage !== null &&
        <Row>
            <Col sm={12}>
                <p className={defineClass?'correctVal':'incorrectVal'}>{userMessage}</p>
            </Col>
        </Row>
        }
        </div>
        )
    }
}

export default IdeChoice;