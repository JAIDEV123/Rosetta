import React, { Component } from 'react'
import ReactDOM from 'react'

class Items extends Component {

  createTasks = item => {
    return <li key={item.key}
    		   onClick()= () => this.props.delete(item.key)
    		>{item.text}</li>
  }

  render() {
    const todoItems = this.props.items
    const listItems = todoItems.map(this.createTasks)

    return <ul>{listItems}</ul>
  }
}

export default Items