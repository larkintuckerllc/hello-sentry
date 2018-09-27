import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';

export default class Hello extends Component {
  state = {
    text: '',
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <button
          onClick={this.handleClick}
        >
          Hello
        </button>
        <div>{text}</div>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      text: 'Hello World',
    });
    try {
      throw new Error('Caught');
    } catch (err) {
      Sentry.captureException(err);
    }
  }
}
