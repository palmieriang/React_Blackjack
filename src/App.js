import React, { Component } from 'react'
import NewCard from './NewCard'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      dealerCards: [1, 2],
      playerCards: [1, 2]
    }
  }

  render() {
    const {playerCards} = this.state
    console.log(playerCards)

    return (
      <div className="App">
        <div className="player">
          {playerCards.map((card, index) => (
            <NewCard key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
