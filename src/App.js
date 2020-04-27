import React, { Component } from "react"
import "./App.css"

import Home from "./pages/Home"
import Content from "./pages/Content"
import SignIn from "./pages/SignIn"

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Home />
        <Content />
        <SignIn />
      </React.Fragment>
    )
  }
}
export default App
