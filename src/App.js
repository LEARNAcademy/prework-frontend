import React, { Component } from "react"
import "./App.css"
import Home from "./pages/Home"
import Header from './components/Header'
import {Container } from 'reactstrap'
const App = () => {
  return(
    <>
      {/* Show branding and signed in user*/}
      <Header />
      {/* show home page*/}
      <Container>
        <Home />
      {/* Displays Footer */}
      </Container>
    </>
  )
}
export default App
