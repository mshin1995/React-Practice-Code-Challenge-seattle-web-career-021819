import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      eaten:[],
      budget: 100,
      index: 0
    }
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({sushis: data}))
  }

  eatSushi = (sushi) => {
    if(this.state.budget >= sushi.price) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        budget: this.state.budget - sushi.price
      })
    } else {
      alert('No More Money!')
    }
  }

  moreSushi = () => {
    this.setState({
      index: this.state.index + 4
    })
  }

  displaySushi() {
    return this.state.sushis.slice(this.state.index, this.state.index + 4)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          displaySushi={this.displaySushi()}
          eatSushi={this.eatSushi}
          eaten={this.state.eaten}
          moreSushi={this.moreSushi}
        />
        <Table
          budget={this.state.budget}
          eaten={this.state.eaten}
        />
      </div>
    );
  }
}

export default App;
