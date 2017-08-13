import React, { Component } from 'react'
import './App.css'

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: '',
      suit: ''
    }
  }

  render() {

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
  const suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
  const deck = []

  function createDeck() {
    for(var i = 0; i < cards.length; i++) {
      for(var j = 0; j < suit.length; j++) {
        if(cards[i] === 1) {
          deck.push({'value': cards[i], 'suit': suit[j], 'point': 11})
        } else if(cards[i] === 'J' || cards[i] === 'Q' || cards[i] === 'K') {
          deck.push({'value': cards[i], 'suit': suit[j], 'point': 10})
        } else {
          deck.push({'value': cards[i], 'suit': suit[j], 'point': cards[i]})
        }
      }
    }
    return deck
  }

  createDeck()
  console.log(deck)


    return (
      <div>

      </div>
    );
  }
}

export default NewCard;
