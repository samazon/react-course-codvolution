import React, { Component } from 'react';

class EventBinding extends Component {
  constructor() {
    super();
    this.state = {
      message: 'This is the message!',
    };
  }

  changeMessage() {
    this.setState({
      message: 'Updated Message!',
    });
  }
  changeHandler = () => {
    this.setState({
      message: 'Updated Message!',
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* Method 1 */}
        <div>
          <button onClick={this.changeMessage.bind(this)}>
            Change Message (Bind in Render)
          </button>
        </div>
        {/* Method 2 */}
        <div>
          <button
            onClick={() => {
              this.changeMessage();
            }}
          >
            Change Message (Arrow in Render)
          </button>
        </div>
        {/* Method 3 */}
        <div>
          <button onClick={this.changeHandler}>
            Change Message (Arrow Function Handler)
          </button>
        </div>
      </div>
    );
  }
}

export default EventBinding;
