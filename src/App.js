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
    this.calculateScore = this.calculateScore.bind(this)
    this.start = this.start.bind(this)
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
    this.start()
  }

  deal(player) {
    const {deck, dealerCards, playerCards, isPlayer} = this.state
    const card = deck.shift()

    if (player) {
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
    const {dealerCards, playerCards, isPlayer} = this.state
    let scoreDealer = this.calculateScore(dealerCards)
    let scorePlayer = this.calculateScore(playerCards)

    this.setState({
      isPlayer: false
    })

    if(scoreDealer < scorePlayer) {
      this.deal(false)
      scoreDealer = this.calculateScore(dealerCards)
      console.log(scoreDealer)
    }
  }

  calculateScore(cards) {
    let score = 0
    if (cards.length > 0) {
      score = cards.reduce(function (score, card) { return score + card.point; }, 0)
    }
    return score
  }

  checkWinner() {
    const {dealerCards, playerCards, isPlayer} = this.state
    const scoreDealer = this.calculateScore(dealerCards)
    const scorePlayer = this.calculateScore(playerCards)
    let winner = ''

    if (scorePlayer > 21) {
      winner = 'You lose'
    }
    if (scoreDealer > 21) {
      winner = 'You win'
    }
    if (!isPlayer && scoreDealer === scorePlayer) {
      winner = 'Tie'
    }
    if (!isPlayer && scoreDealer > scorePlayer && scoreDealer <= 21) {
      winner = 'You lose'
    }
    if (!isPlayer && scoreDealer < scorePlayer) {
      this.deal(false)
    }
    return winner
  }

  start() {
    const {deck} = this.state
    const [card1, card2, card3, ...cards] = deck

    this.setState({
      deck: cards,
      dealerCards: [card2],
      playerCards: [card1, card3],
      isPlayer: true
    })
  }

  render() {
    const {dealerCards, playerCards, isPlayer} = this.state

    return (
      <div className="App">
        <div className="header">&#9734; BlackJack &#9734;</div>
        <p className="winner-row">{this.checkWinner(playerCards)}</p>
        <div className="player">
          {playerCards.map((card, index) => (
            <NewCard key={index} value={card.value} suit={card.suit} />
          ))}
        </div>

        <div className="console-center">
          <div>
            <p>{this.calculateScore(playerCards)}</p>
          </div>
          <div>
            <button onClick={() => this.deal(true)} disabled={!isPlayer}>Hit</button>
            <button onClick={this.stick} disabled={!isPlayer}>Stick</button>
            <button onClick={this.start}>Play again</button>
          </div>
          <div>
            <p>{this.calculateScore(dealerCards)}</p>
          </div>
        </div>

        <div className="player">
          {dealerCards.map((card, index) => (
            <NewCard key={index} index={index} value={card.value} suit={card.suit} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
