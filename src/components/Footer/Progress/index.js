import React from 'react'
import Bar from './Bar'

class Progress extends React.Component{
    render() {
        let {lessons, modules, topics, percentage } = this.props
        return (
            <>
                <Bar percentage={percentage} modules={modules} lessons={lessons} topics={topics}/>
            </>
        )
    }
}

export default Progress