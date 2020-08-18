import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class NotFound extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <h3>Oops, something went wrong.</h3>
        <Footer />
      </React.Fragment>
    )
  }
}
export default NotFound
