import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      items: ["Apples", "Oatmeal", "Cheese", "Ice cream", "Yogurt", "Peanut butter", "Juice"]
    }
  }

  addItem = (newitem) => {
    console.log(newitem)
  }

  render(){
    return(
      <React.Fragment>
      <h1>Grocery App</h1>
      <h3>Grocery Items</h3>
      <ul>
      { this.state.items.map((item, index) => {
        return(
          <div key={ index }>
            <li>{ item }</li>
            <button onClick={ () => { this.addItem(item) } }>Add item</button>
          </div>
        )
      })}
      </ul>
      </React.Fragment>
    )
  }
}
export default App
