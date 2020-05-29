import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    this.props.squareClick(this.props.index)
  }

  render(){
    return(
      <React.Fragment>
        <div
          id="square"
          onClick={ this.handleClick }
        >
          { this.props.value }
        </div>
      </React.Fragment>
    )
  }
}
export default Square
