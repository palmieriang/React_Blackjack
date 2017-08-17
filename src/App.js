import React, { Component } from 'react';
import logo from './logo.svg';
import PlayersCard from './PlayersCard';
import './App.css';

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
const deck = []
let shuffledCards = []
let card;

function createDeck() {
  for(var i = 0; i < cards.length; i++) {
    for(var j = 0; j < suit.length; j++) {
      deck.push({'value': cards[i], 'suit': suit[j], 'point': getPoints(cards[i])})
    }
  }
  return deck
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
}

deal()

console.log(card)

const playersCard = 2;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PlayersCard playersCard={playersCard} card={card} />
      </div>
    );
  }
}

export default App;
