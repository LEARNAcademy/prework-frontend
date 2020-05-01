import React,{Component} from 'react'
import './style.css'


class LessonNav extends Component {
    
    captureContent(content){
        this.props.currentContent(content)
    }

    render() {
        let {modules, lessons} = this.props
        return(
            <>
                <aside className="lesson-nav">
                    <div className="accordion" id="accordionExample">
                        {/* map through our modules*/}
                        {modules.map((mod, i) => {
                            return (
                                <div key={i} className="card">
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

                                                {this.props.lesson.map((l,i,arr) => {
                                                    let flag = ""
                                                    {/* if the current lesson isn't the first lesson, disable it by default*/}
                                                    if(i !== 0 ){
                                                        flag = "disabled"
                                                    }
                                                    {/* checks to see if lessons code module id matches the current modules id */}
                                                    if(l.code_module_id === mod.id){
                                                        if(i === 0 || arr[i].completed){
                                                            flag = ''
                                                        }
                                                        {/* if a previous lesson exists and its completed, override the disabled flag and enable current lesson*/}
                                                        if(i-1 !== -1 && arr[i-1].completed){
                                                            flag=''
                                                        }
                                                        return (
                                                            <li key={i} className={`nav-list ${flag} ${l.completed ? 'lesson-completed' : ''}`}   onClick={ ()=>this.captureLesson(l)}>{l.title}</li>

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