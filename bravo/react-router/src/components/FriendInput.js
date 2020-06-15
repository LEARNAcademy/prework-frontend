import React, { Component } from 'react'
import Friend from './Friend'

class FriendInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      friend: "",
      friendList: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ friendList: [...this.state.friendList, this.state.friend], friend: ""})
  }

  render(){
    return(
      <React.Fragment>
        <form>
          <label>Add Friends Here:</label>
          <input
            name="friendList"
            type="text"
            placeholder="add friends here"
            value={ this.state.friend }
            onChange={ (e) => { this.setState({ friend: e.target.value })}}
          />
          <br />
          <input
            value="Add Friend"
            type="submit"
            onClick={ this.handleSubmit }
          />
        </form>
        <Friend friendList={ this.state.friendList }/>
      </React.Fragment>
    )
  }
}
export default FriendInput
