import React, { Component } from 'react'
import './App.css'

class NewCard extends Component {

  render() {
    return (
      <div>
        <div className={`card ${this.props.suit}`}>
          <span> {this.props.value} </span>
          <span className={`reverse ${this.props.suit}`}> {this.props.value} </span>
        </div>
      </div>
    )
  }
}

export default NewCard
