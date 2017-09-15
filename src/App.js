import React, { Component } from 'react'
import NewCard from './NewCard'
import './App.css'

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
const deck = []

let card;

function getPoints(card) {
  if(card === 'A') {
    return 11
  } else if(card === 'J' || card === 'Q' || card === 'K') {
    return 10
  } else {
    return card
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      deck: this.shuffle(this.createDeck()),
      dealerCards: null,
      playerCards: null
    }
  }

  createDeck() {
    for(var i = 0; i < cards.length; i++) {
      for(var j = 0; j < suit.length; j++) {
        deck.push({'value': cards[i], 'suit': suit[j], 'point': getPoints(cards[i])})
      }
    }
    return deck
  }

  shuffle(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = deck[i]
      deck[i] = deck[j]
      deck[j] = temp
    }
    return deck
  }

  componentDidMount() {
    const {deck, dealerCards, playerCards} = this.state
    const [card, …cards] = deck
    this.setState({
      deck: cards,
      dealerCards: [card],
      playerCards: [card]
    })
  }

  deal() {
    const {deck, dealerCards, playerCards} = this.state
    const card = deck.shift()
    this.setState({
      dealerCards: [card, ...dealerCards],
      playerCards: [card, ...playerCards]
    })
  }

  render() {
    const {playerCards} = this.state
    console.log(playerCards)

    return (
      <div className="App">
        <div className="player">
          {playerCards.map((card, index) => (
            <NewCard key={index} value={card.value} suit={card.suit} />
          ))}
        </div>
        <button onClick={this.deal}>Card</button>
      </div>
    );
  }
}

export default App;
