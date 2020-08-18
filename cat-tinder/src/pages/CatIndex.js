import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class CatIndex extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
        <h3>All the Cats</h3>
        <Footer />
      </React.Fragment>
    )
  }
}
export default CatIndex
