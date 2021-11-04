import React, { Component } from 'react';

export default class StateClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello and Welcome!',
    };
  }
  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing!',
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
