import React, { Component } from 'react'
import Content from './Content'
import SignIn from './SignIn'

class Home extends Component{
  render(){
    const modules = [{"id":1, "lesson":"Module 1", "progress":"Lesson 1", "completed":false, "user_id":1},{"id":2, "lesson":"Module 2", "progress":"Lesson 1", "completed":false, "user_id":1},{"id":3, "lesson":"Module 3", "progress":"Lesson 1", "completed":false, "user_id":1},{"id":4, "lesson":"Module 4", "progress":"Lesson 1", "completed":false, "user_id":1}]
    const lessons = [{"id":1, "content":"Lesson mod 1","question":"What is the answer to question 1?", "completed":false, "code_module_id":1},{"id":2, "content":"Lesson 2","question":"What does HTML stand for?", "completed":false, "code_module_id":1},{"id":3, "content":"Lesson Mod 2","question":"Question 1 in module 2", "completed":false, "code_module_id":2},{"id":4, "content":"Lesson Mod 3","question":"Question 1 in module 3", "completed":false, "code_module_id":3}]
    const questions = [{"id":1, "content":"What is the highest value being listed?"}]
    let loggedIn = true
    return(
      <>
        {/* if user is logged in, show content*/}
        {loggedIn &&
        <Content lessons={lessons} modules={modules}/>
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
