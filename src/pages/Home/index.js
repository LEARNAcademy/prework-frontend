import React, { Component } from 'react'
import Content from './Content'
import SignIn from './SignIn'

class Home extends Component{
  render(){
    const { lessons, modules, questions, resources, loggedIn, topics, current_user} = this.props
    
    return(
      <>
        {/* if user is logged in, show content*/}
        {loggedIn &&
        <Content current_user = {current_user} lessons={lessons} modules={modules} questions={questions} resources={resources} topics = {topics} />
        }
        {/* otherwise, show signin component */}
        {!loggedIn &&
        <SignIn />
        }
      </>
    )
  }
}
export default Home
