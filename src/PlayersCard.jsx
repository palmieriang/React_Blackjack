import React, { Component } from 'react'
import NewCard from './NewCard';
import './App.css'

class PlayersCard extends Component {
	render() {
	console.log(this.props)
		return (
      <NewCard />
		)
	}
}

export default PlayersCard
