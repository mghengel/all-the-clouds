import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cloud from './cloud.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Cloud name="AWS" api='/api/aws-serverless-js' />
        <Cloud name="Heroku" api='/test.json' />
        <Cloud name="azure" api='/test.json' />
        <Cloud name="Google Cloud" api='/test.json' />
      </div>
    );
  }
}

export default App;