import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import { NavLink, Redirect } from 'react-router-dom'
// import mockCats from '../mockCats.js'

class CatShow extends Component{
  constructor(props){
    super(props)
    this.state = {
      success: false
    }
  }

  render(){
    const { cat } = this.props
    return(
      <React.Fragment>
        <Header />
          { cat &&
            <div>
              <h4>Hi, my name is <strong>{ cat.name }</strong>!</h4>
              <p>I am { cat.age }</p>
              <p>I enjoy { cat.enjoys }</p>
              <NavLink
                to={`/catedit/${cat.id}`}
              >
                Edit Cat Profile
              </NavLink>
              <br />
              <button
                onClick={ () => { this.props.deleteCat(cat.id)
                  // split promise
                  .then(response => {
                    this.setState({ success: true })
                  })
                }}
              >
                Delete Cat Profile
              </button>
            </div>
        }
        <Footer />
        { this.state.success && <Redirect to="/catindex" />}
      </React.Fragment>
    )
  }
}
export default CatShow
