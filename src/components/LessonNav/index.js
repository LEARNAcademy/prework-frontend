import React,{Component} from 'react'
import './style.css'


class LessonNav extends Component {
    
    captureLesson(lesson){
        this.props.currentLesson(lesson)
    }

    render() {
        return(
            <>
                <aside style={{border:"solid black 3px"}}>
                    <div className="accordion" id="accordionExample">
                        {/* map through our modules*/}
                        {/* start map*/}
                        {this.props.module.map((mod, i) => {
                            return (
                                <div className="card">
                                    <div className="card-header" id={`heading${i}`}>
                                    <h2 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${i}`} aria-expanded="true" aria-controls={`collapse${i}`} >
                                        {/*display module title */}
                                        {mod.lesson}
                                        </button>
                                    </h2>
                                    </div>

                                    <div id={`collapse${i}`} className="collapse " aria-labelledby={`heading${i}`} data-parent="#accordionExample">
                                        <div className="card-body">
                                            {/* Display lesson list */}
                                            <ul className="module-list">
                                                {this.props.lesson.map((l,i)=> {
                                                    if(l.code_module_id === mod.id){
                                                        return (
                                                            <li key={i} className="nav-list" style={{opacity: l.completed? '.2':'',color:l.completed? 'green':''}} onClick={ ()=>this.captureLesson(l)}>{l.title}</li>
                                                        )
                                                    }
                                                })}
                                            {/*display lesson list items*/}
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