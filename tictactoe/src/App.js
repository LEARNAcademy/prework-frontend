import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      gameboard: [null, null, null, null, null, null, null, null, null],
      currentPlayer: "🍣",
      winner: null
    }
  }

  squareClick = (currentBox) => {
    if(this.state.gameboard[currentBox] === null && this.state.winner === null){
      this.state.gameboard[currentBox] = this.state.currentPlayer
      this.setState({
        gameboard: this.state.gameboard,
        currentPlayer: this.state.currentPlayer === "🍣" ? "🥑" : "🍣"
      })
    }
    if(this.state.winner === null){
      this.winning()
    }
  }

  winning = () => {
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    winningConditions.map(value => {
      const [a, b, c] = value
      if(this.state.gameboard[a] && this.state.gameboard[a] === this.state.gameboard[b] && this.state.gameboard[b] === this.state.gameboard[c]){
        return(
          this.setState({ winner: this.state.currentPlayer })
        )
      }
    })
  }


  render(){
    let mappedGameboard = this.state.gameboard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          squareClick={ this.squareClick }
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <div id="gameboard">
          { mappedGameboard }
        </div>
        <h3>The winner is: { this.state.winner }</h3>
      </React.Fragment>
    )
  }
}
export default App
