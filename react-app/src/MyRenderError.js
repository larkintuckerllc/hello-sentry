import React, { Component } from 'react';

export default class MyRenderError extends Component {
  state = {
    flag: false,
  };
  render() {
    const { flag } = this.state;
    return (
      <div>
        <button
          onClick={this.handleClick}
        >
          Render Error
        </button>
        { flag && <div>{flag.busted.bogus}</div> }
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      flag: true,
    });
  }
}