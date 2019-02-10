import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class TodoItem extends React.Component {
 constructor(props) {
   super(props);
   this.state = { amDone : true };
 }


 handleClick() {
   var doneState = !this.state.amDone; 
   this.setState({ amDone: !this.state.amDone});
 }

 render() {
  var line =  this.state.amDone ? 'none' : 'line-through';
  return (
    <li key={this.props.id} onClick={this.handleClick.bind(this)} style={{textDecoration:line}}>{this.props.text}</li>
  );
 }