import React, { Component } from "react"
import "./App.css"
import Home from "./pages/Home"
import Header from './components/Header'
import {Container } from 'reactstrap'
import Footer from './components/Footer'

const App = () => {
  const modules = [{"id":1, "lesson":"Module 1", "progress":"Lesson 1", "completed":false, "user_id":1},{"id":2, "lesson":"Module 2", "progress":"Lesson 1", "completed":false, "user_id":1},{"id":3, "lesson":"Module 3", "progress":"Lesson 1", "completed":false, "user_id":1},{"id":4, "lesson":"Module 4", "progress":"Lesson 1", "completed":false, "user_id":1}]
    const lessons = [{"id":1, "title":"Lesson 1(mod1)","content":"This is the content beind displayed for Lesson 1 Module 1","question":"What did you learn in Module 1?", "completed":true, "code_module_id":1},{"id":2, "title":"Lesson 2(mod1","content":"Lesson 2(mod1)","question":"What does HTML stand for?", "completed":false, "code_module_id":1},{"id":3, "title":"Lesson 1(mod2)","content":"This is content for Lesson 1 Moddule 1","question":"Question 1 in module 2", "completed":true, "code_module_id":2},{"id":4, "title":"Lesson 2(mod2)", "content":"Lesson 2 module 2","question":"Question 1 in module 2", "completed":false, "code_module_id":2},{"id":5, "title":"Lesson 1(mod3)", "content":"Content for Lesson 1 Module 3","question":"Question 1 in module 3", "completed":true, "code_module_id":3},{"id":6, "title":"Lesson 2(mod3)","content":"Lesson 2 Content for Module 3","question":"What is the answer to question 1?", "completed":true, "code_module_id":3},{"id":7,"title":"Lesson 1(mod4)", "content":"Lesson 1 content for module 4","question":"What does HTML stand for?", "completed":false, "code_module_id":4},{"id":8, "title":"Lesson 2(mod4)", "content":"Lesson 2 for module 4","question":"What does HTML stand for?", "completed":true, "code_module_id":4}]
    
    const questions = [{"id":1, "content":"What is the highest value being listed?"}]
    
  return(
    <>
      {/* Show branding and signed in user*/}
      <Header />
      {/* show home page*/}
      <Container>
        <Home modules ={modules} lessons={lessons} />
      {/* Displays Footer */}
        <Footer modules = {modules} lessons={lessons}/>
      </Container>
    </>
  )
}
export default App
