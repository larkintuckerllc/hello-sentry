import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Hello from './Hello';
import MyError from './MyError';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Hello />
          <MyError />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
