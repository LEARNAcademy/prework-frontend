import React,{Component} from 'react'
import './style.css'


class LessonNav extends Component {
    captureContent(content){
        const { lessons } = this.props
        const lesson = lessons.find(l=> l.code_module_id === content.id && !l.completed)
        const cLesson = lessons.find(l=> l.code_module_id === content.id)

        if (lesson !== undefined) {
            this.props.currentContent(lesson)
        } else {
            this.props.currentContent(cLesson)
        }
    }

    render() {
        let {modules, topics} = this.props
        return(
            <>
                <aside className="lesson-nav">
                    <div className="accordion" id="accordionExample">
                        {/* map through our modules*/}
                        {topics.map((topic, i) => {
                            return (
                                <div key={i} className="card">
                                    <div className="card-header" id={`heading${i}`}>
                                    <h2 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${i}`} aria-expanded="true" aria-controls={`collapse${i}`} >
                                        {/*display module title */}
                                        {topic.title}
                                        </button>
                                    </h2>
                                    </div>

                                    <div id={`collapse${i}`} className="collapse " aria-labelledby={`heading${i}`} data-parent="#accordionExample">
                                        <div className="card-body">
                                            {/* Display lesson list */}
                                            <ul className="module-list">
                                                {modules.map((m,i,arr) => {
                                                    let flag = ""
                                                    // eslint-disable-next-line no-lone-blocks
                                                    {/* if the current lesson isn't the first lesson, disable it by default*/}
                                                    if(i !== 0 ){
                                                        flag = "disabled"
                                                    }
                                                    // eslint-disable-next-line no-lone-blocks
                                                    {/* checks to see if lessons code module id matches the current modules id */}
                                                    if(m.topic_id === topic.id){
                                                        if(i === 0 || arr[i].completed){
                                                            flag = ''
                                                        }
                                                        // eslint-disable-next-line no-lone-blocks
                                                        {/* if a previous lesson exists and its completed, override the disabled flag and enable current lesson*/}
                                                        if(i-1 !== -1 && arr[i-1].completed){
                                                            flag=''
                                                        }
                                                        return (
                                                            <li key={i} className={`nav-list ${flag} ${m.completed ? 'lesson-completed' : ''}`}   onClick={ ()=>this.captureContent(m)}>{m.lesson}</li>

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