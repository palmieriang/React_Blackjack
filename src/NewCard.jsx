import React, { Component } from 'react'
import './App.css'

class NewCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: card.value,
      suit: card.suit,
      point: card.point
    }
  }

  render() {
    return (
      <div className={`card ${this.state.suit}`}>
        <span> {this.state.value} </span>
        <span className={`reverse ${this.state.suit}`}> {this.state.value} </span>
      </div>
    )
  }
}

export default NewCard
