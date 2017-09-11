import React, { Component } from 'react'
import logo from './logo.svg'
import NewCard from './NewCard'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      dealerCards: 2,
      playerCards: 2
    }
  }

  render() {
    const {playerCards} = this.state
    console.log(playerCards)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NewCard />
      </div>
    );
  }
}

export default App;
