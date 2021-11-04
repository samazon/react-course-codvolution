import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Doe',
    };
  }

  nameChangeHandler = () => {
    alert(`Hey ${this.state.name}!`);
  };

  render() {
    return (
      <div>
        <ChildComponent changeName={this.nameChangeHandler} />
      </div>
    );
  }
}
