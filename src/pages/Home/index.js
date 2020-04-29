import React, { Component } from 'react'
import Content from './Content'
import SignIn from './SignIn'

class Home extends Component{
  render(){
    let loggedIn = true
    return(
      <>
        {/* if user is logged in, show content*/}
        {loggedIn &&
        <Content lessons={this.props.lessons} modules={this.props.modules}/>
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
