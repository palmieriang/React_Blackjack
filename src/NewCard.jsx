import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'

class NewCard extends Component {

  render() {
    return (
      <div>
        {this.props.index !== 0 && <div className={`card ${this.props.suit}`}>
                  <span> {this.props.value} </span>
                  <span className={`reverse ${this.props.suit}`}> {this.props.value} </span>
                </div>}
        {this.props.index === 0 && !this.props.isPlayer && <div className={`card ${this.props.suit}`}>
                  <span> {this.props.value} </span>
                  <span className={`reverse ${this.props.suit}`}> {this.props.value} </span>
                </div>}
        {this.props.index === 0 && this.props.isPlayer && <div className={`card ${this.props.index === 0 ? "first-card" : ""}`}></div>}
      </div>
    )
  }
}

NewCard.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ]),
  suit: PropTypes.string.isRequired
}

export default NewCard
