import React, { Component } from 'react';

export default class StateCounter extends Component {
  /* 
    NB! Whenever you want to update state, use setState()
    If you need to update state based on previous value, use callback function and not object
    You can also pass, props as second argument to setState Callback function 
  */
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementHandler() {
    /* Do not update state like this */
    /* this.setState({
      count: this.state.count + 1,
    }); */

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrementHandler() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.decrementHandler()}>Decrement</button>
        <button onClick={() => this.incrementHandler()}>Increment</button>
      </div>
    );
  }
}
