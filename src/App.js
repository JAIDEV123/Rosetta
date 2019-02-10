import React, { Component } from 'react'
import List from './List'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {text:'', key:''}
    }
  }

  inputElement = React.createRef()

  add = e => {
    e.preventDefault();
    console.log('New Input')
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem
    })
  }

  render() {
    return (
      <div className="App">
        <List add={this.add}
              inputElement={this.inputElement}
              currentItem={this.state.currentItem}
              handleInput={this.handleInput}
        />
      </div>
    )
  }
}

export default App