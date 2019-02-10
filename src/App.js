import React, { Component } from 'react'
import List from './List'
import Items from './Item'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {text:'', key:''}
    }
  }

  add = e => {
    e.preventDefault();
    console.log('New Input')
    var newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      var newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: { text: '', key: '' },
      })
    }
  }

  handleInput = e => {
    var itemText = e.target.value
    var currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem
    })
  }

  delete = item => {
    const 
  }

  render() {
    return (
      <div className="App">
        <List add={this.add}
              inputElement={this.state.currentItem.text}
              currentItem={this.state.currentItem}
              handleInput={this.handleInput}
        />
        <Items items={this.state.items} delete={this.delete}/>
      </div>
    )
  }
}

export default App