import React from "react"
import "./App.css"
import Home from "./pages/Home"
import Header from './components/Header'
import {Container } from 'reactstrap'

var modules = [{"id":1, "lesson":"Intro to HTML", "progress":"Lesson 1", "completed":false, "user_id":1},{"id":2, "lesson":"Module 2", "progress":"Lesson 1", "completed":false, "user_id":1},{"id":3, "lesson":"Module 3", "progress":"Lesson 1", "completed":false, "user_id":1},{"id":4, "lesson":"Module 4", "progress":"Lesson 1", "completed":false, "user_id":1}]

  var lessons = [{"id":1, "title":"History of HTML","content":"Hyper Text Markup Language: structure and content of a page. Not the styling, not the functionality. Basically the skeleton. In the early days of the internet, there was no standardized way of sending information and documents. Internet was mostly used for communication between colleges and universities as well as the military. If I wanted any formatting to happen with my document, I needed to be able to break that down to smaller pieces. Thus, HTML was made to handle it around 1989/1990. Some headers, some things are bolded or important italicized, some bullet points, bigger and smaller text, etc Eventually moved onto more broad uses. Remember myspace? Probably used HTML/CSS to edit your page. Think of HTML as the skelton of your program!","question":"What did you learn in Module 1?", "completed":true, "code_module_id":1},{"id":2, "title":"What is a tag?","content":"Lesson 2(mod1)","question":"What does HTML stand for?", "completed":true, "code_module_id":1},{"id":3, "title":"Lesson 1(mod2)","content":"This is content for Lesson 1 Moddule 1","question":"Question 1 in module 2", "completed":false, "code_module_id":2},{"id":4, "title":"Lesson 2(mod2)", "content":"Lesson 2 module 2","question":"Question 1 in module 2", "completed":false, "code_module_id":2},{"id":5, "title":"Lesson 1(mod3)", "content":"Content for Lesson 1 Module 3","question":"Question 1 in module 3", "completed":false, "code_module_id":3},{"id":6, "title":"Lesson 2(mod3)","content":"Lesson 2 Content for Module 3","question":"What is the answer to question 1?", "completed":false, "code_module_id":3},{"id":7,"title":"Lesson 1(mod4)", "content":"Lesson 1 content for module 4","question":"What does HTML stand for?", "completed":false, "code_module_id":4},{"id":8, "title":"Lesson 2(mod4)", "content":"Lesson 2 for module 4","question":"What does HTML stand for?", "completed":false, "code_module_id":4}]
  
  var questions = [{"id":1, "content":["I learned about CSS","I learned about HTML","I learned nothing, I want my money back","I give up"],"answer":"I learned about HTML", "correct":true, "completed":false, "lesson_id":1},{"id":2, "content":["I learned about CSS","I learned about HTML","I learned nothing, I want my money back","I give up"],"answer":"I learned about HTML", "correct":true, "completed":false, "lesson_id":1},{"id":3, "content":["I learned about CSS","I learned about HTML","I learned nothing, I want my money back","I give up"],"answer":"I learned about HTML", "correct":true, "completed":false, "lesson_id":2},{"id":4, "content":["I learned about CSS","I learned about HTML","I learned nothing, I want my money back","I give up"],"answer":"I learned about HTML", "correct":true, "completed":false, "lesson_id":2}]

  var resources = [{"id":1, "name":"HTML Tags", "link":"https://www.w3schools.com/tags/tag_html.asp","question_id":1},{"id":2, "name":"A Tag", "link":"https://www.w3schools.com/tags/tag_a.asp","question_id":1},{"id":3, "name":"UL tag", "link":"https://www.w3schools.com/tags/tag_ul.asp","question_id":2},{"id":4, "name":"CSS containers", "link":"https://www.w3schools.com/w3css/w3css_containers.asp","question_id":2},{"id":5, "name":"CSS Borders ", "link":"https://www.w3schools.com/w3css/w3css_borders.asp","question_id":3},{"id":6, "name":"HTML Tags", "link":"https://www.w3schools.com/tags/tag_html.asp","question_id":3},{"id":7, "name":"HTML Tags", "link":"https://www.w3schools.com/tags/tag_html.asp","question_id":4}]
const App = () => {
    let loggedIn = true 
  return(
    <>
      {/* Show branding and signed in user*/}
      <Header />
      {/* show home page*/}
      <Container>
        <Home modules ={modules} lessons={lessons} loggedIn={loggedIn} questions={questions} resources={resources}/>
      {/* Displays Footer */}
      </Container>
    </>
  )
}
export default App
