import React, { Component } from 'react'
import List from './List'

class GroceryInput extends Component{
  constructor(props){
    super(props)
    this.state = {
      item: "",
      groceryList: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ groceryList: [...this.state.groceryList, this.state.item], item: ""})
  }


  render(){
    return(
      <React.Fragment>
        <form>
          <label>Add Grocery Items:</label>
          <input
            name="groceryList"
            placeholder="add item here"
            type="text"
            value={ this.state.item }
            onChange={ (e) => { this.setState({ item: e.target.value }) }}
          />
          <br />
          <input
            value="Add Item"
            type="submit"
            onClick={ this.handleSubmit }
          />
        </form>
        <List groceryList={ this.state.groceryList }/>
      </React.Fragment>
    )
  }
}
export default GroceryInput
