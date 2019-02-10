import React, { Component } from 'react'

class List extends Component {

  render() {
    return (
      <div class="container-fluid">
        <div className="header">
          <form onSubmit={this.props.add}>
            <input
              placeholder="New Task"
              ref={this.props.inputElement}
              onChange={this.props.handleInput}
            />
            <button type="submit" class="btn btn-dark"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}


export default List