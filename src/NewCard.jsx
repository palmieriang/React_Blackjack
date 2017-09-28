import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'

class NewCard extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <div className={`card ${this.props.suit} index-${this.props.index}`}>
          <span> {this.props.value} </span>
          <span className={`reverse ${this.props.suit}`}> {this.props.value} </span>
        </div>
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
