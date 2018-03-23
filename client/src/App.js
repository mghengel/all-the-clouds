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
        <Cloud name="aws-serverless-js" api='/api/aws-serverless-js' />
        <Cloud name="heroku-clojure" api='/api/heroku-clojure' />
        <Cloud name="gcp-python" api='/api/gcp-python' />
        <Cloud name="azure-dotnet" api='/api/azure-dotnet' />
        <Cloud name="openshift-ruby" api='/api/openshift-ruby' />
      </div>
    );
  }
}

export default App;