import React, { Component } from 'react';

export default class MyError extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
        >
          Error
        </button>
      </div>
    )
  }

  handleClick = () => {
    throw new Error('Uncaught');
  }
}
