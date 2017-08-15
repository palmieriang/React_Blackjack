import React, { Component } from 'react'
import './App.css'

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
const deck = []
var shuffledCards = []
var card;

function createDeck() {
  for(var i = 0; i < cards.length; i++) {
    for(var j = 0; j < suit.length; j++) {
      deck.push({'value': cards[i], 'suit': suit[j], 'point': getPoints(cards[i])});
    }
  }
  return deck;
}

function getPoints(card) {
  if(card === 'A') {
    return 11
  } else if(card === 'J' || card === 'Q' || card === 'K') {
    return 10
  } else {
    return card
  }  
}

(function shuffle() {
  shuffledCards = createDeck()
  for (var i = shuffledCards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = shuffledCards[i]
    shuffledCards[i] = shuffledCards[j]
    shuffledCards[j] = temp
  }
  return shuffledCards
})()

function deal() {
  card = shuffledCards[0]
  shuffledCards.splice(0, 1)
};

deal()

console.log(card)

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
      <div>

      </div>
    )
  }
}

export default NewCard;
