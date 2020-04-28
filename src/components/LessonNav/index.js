import React,{Component} from 'react'
import {Container, Row, Col} from 'reactstrap'
import { Button } from '@material-ui/core'



class LessonNav extends Component {
    render() {
        {console.log("hello",this.props.module)}
        return(
            <>
                <aside style={{border:"solid black 3px"}}>
                    <div class="accordion" id="accordionExample">
                        {/* map through our modules*/}
                        {/* start map*/}
                        {this.props.module.map((mod, i) => {
                            return (
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${i}`} aria-expanded="true" aria-controls={`collapse${i}`}>
                                        {/*display module title */}
                                        {mod.lesson}
                                        </button>
                                    </h2>
                                    </div>

                                    <div id={`collapse${i}`} class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            {/* Display lesson list */}
                                            <ul>
                                            {/*display lesson list items*/}
                                                <li>List 1</li>
                                                <li>List 1</li>
                                                <li>List 1</li>
                                                <li>List 1</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </aside>
            </>
        )
    }
}

export default LessonNav