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
    checkContent(){
        const { content, modules , topics} = this.props
        // grab the content thats being displayed
        // check to see if content is a lesson
        if(content){
            if (content.code_module_id !== undefined) {
                // finds the module that belongs to the current lesson
                let module = modules.find(m => content.code_module_id === m.id)
                // finds the topics that belongs to the model
                let topic = topics.find(t=> t.id === module.topic_id)
                // looks for the element thats 

                let element = document.getElementById(`collapse${topic.id-1}`)

                // eslint-disable-next-line array-callback-return
                topics.map((t,i) => {
                    if(element.id === `collapse${i}`){
                        element.classList.add('show')
                    } else {
                        let element = document.getElementById(`collapse${i}`)
                        element.classList.remove('show')
                    }
                })
            }
        } else if (!content){
            topics.map((t,i) => {
                let element = document.getElementById(`collapse${i}`)
                element.classList.remove('show')
            })
        }
    }
    showNavArrow = (btnNum) => {
        if(document.querySelector(".navIsActive").classList.contains("active")) {
            document.querySelector(".navIsActive").classList.remove("active")
        }
        else {
            document.querySelector(".navIsActive").classList.add("active")
        }
    }
    render() {
        this.checkContent();
        let {modules, topics, currentMod} = this.props;
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
                                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${i}`} aria-expanded="true" aria-controls={`collapse${i}`} onClick={() => this.showNavArrow(i)}>
                                        {/*display module title */}
                                        {topic.title}
                                        </button>
                                        <span className="material-icons float-right navIsActive">keyboard_arrow_right</span>
                                    </h2>
                                    </div>

                                    <div id={`collapse${i}`} className="collapse something" aria-labelledby={`heading${i}`} data-parent="#accordionExample">
                                        <div className="card-body">
                                            {/* Display lesson list */}
                                            <ul className="module-list">
                                                {modules.map((m,i,arr) => {
                                                    let completed = false;
                                                    let flag = ""
                                                    // eslint-disable-next-line no-lone-blocks
                                                    {/* if the current lesson isn't the first lesson, disable it by default*/}
                                                    if(i !== 0 ){
                                                        flag = "disabled"
                                                    }
                                                    // eslint-disable-next-line no-lone-blocks
                                                    {/* checks to see if lessons code module id matches the current modules id */}
                                                    {/*finds the question the user is currently on */}
                                                    //let question = questions.find((q)=> current_user.last_q < q.id)
                                                    {/* finds the lesson the user is currently on*/}
                                                    //let lesson = lessons.find((l)=> question.lesson_id === l.id)
                                                    {/* the module the user is currently on */}
                                                    //let mod = modules.find((m) => lesson.code_module_id === m.id)
                                                    

                                                    if(m.topic_id === topic.id){
                                                    {/* the current mod id is equal to or less than the  */}
                                                        if(i === 0 ){
                                                            flag = ''
                                                        }
                                                        // eslint-disable-next-line no-lone-blocks
                                                        {/* if a previous lesson exists and its completed, override the disabled flag and enable current lesson*/}

                                                        if(m.id <= currentMod.id){
                                                            flag=''
                                                        }
                                                        if(m.id < currentMod.id){
                                                            completed = true;
                                                        }
                                                    
                                                        
                                                        return (
                                                            <li key={i} className={`nav-list ${flag} ${completed ? 'lesson-completed' : ''}`}   onClick={()=>this.captureContent(m)}>{m.lesson}</li>

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