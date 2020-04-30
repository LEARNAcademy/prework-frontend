import React, { Component } from 'react'
import Content from './Content'
import SignIn from './SignIn'

class Home extends Component{
  render(){
    let {loggedIn} = this.props
    return(
      <>
        {/* if user is logged in, show content*/}
        {loggedIn &&
        <Content lessons={this.props.lessons} modules={this.props.modules} questions={this.props.questions} resources={this.props.resources}/>
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
