import React, { Component } from 'react';
import './App.css';
import './index.css';

class Items extends Component {
  constructor(props) {
    super(props)

    this.state = {
		name: "Shell Gift Card",
		image: "/img/$10 Shell Gift Card.jpg",
		timeLeft: 10,
		price: 1,
		user: "Evan"
    }

  	setInterval(() => {
  		let newTime = this.state.timeLeft - 1;
  		if (this.state.timeLeft > 0) {
	  		this.setState({
	  			timeLeft: newTime
	  		})
  		}
  	}, 1000)
  }

  makeBid(e) {
  	let newPrice = this.state.price + 1;
  	this.setState({
  		price: newPrice,
  		timeLeft: 10
  	})
  }

  render() {
  	return(
  		<div className="item">
  			<p>{this.state.name}</p>
  			<hr />
  			<img src={this.state.image} />
  			<p className="time bold">00:00:{this.state.timeLeft}</p>
  			<p className="price bold">${this.state.price}</p>
  			<p>{this.state.user}</p>
  			<button className='bid' type='button' onClick={(e) => this.makeBid(e)}>Bid Now</button>
  		</div>
  		)
  }

}

export default Items;