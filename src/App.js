import React, { Component } from 'react'
import NewCard from './NewCard'
import './App.css'

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
const suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
const deck = []

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
      dealerCards: [],
      playerCards: [],
      isPlayer: true
    }
    this.deal = this.deal.bind(this)
    this.stick = this.stick.bind(this)
    this.score = this.score.bind(this)
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
    const {deck, playerCards} = this.state
    const [card1, card2, card3, card4, ...cards] = deck

    this.setState({
      deck: cards,
      dealerCards: [card2, card4],
      playerCards: [card1, card3]
    })
    this.score(playerCards)
  }

  deal() {
    const {deck, dealerCards, playerCards, isPlayer} = this.state
    const card = deck.shift()

    if (isPlayer) {
      this.setState({
        playerCards: [...playerCards, card]
      })
    } else {
      this.setState({
        dealerCards: [...dealerCards, card]
      })
    }
  }

  stick() {
    const {isPlayer} = this.state
    this.setState({
      isPlayer: !isPlayer
    })
  }

  score(cards) {
    console.log(cards)
  }

  render() {
    const {dealerCards, playerCards} = this.state

    return (
      <div className="App">
        <div className="player">
          {playerCards.map((card, index) => (
            <NewCard key={index} value={card.value} suit={card.suit} />
          ))}
        </div>
        <div className="player-button">
          <button onClick={this.deal}>Hit</button>
          <button onClick={this.stick}>Stick</button>
        </div>
        <div className="player">
          {dealerCards.map((card, index) => (
            <NewCard key={index} value={card.value} suit={card.suit} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
