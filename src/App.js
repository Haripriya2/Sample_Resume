import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started<br/>
          1. npm install create-react-app<br/>
          2. create-react-app your_app_name<br/>
          3. cd /your_app_name<br/>
          4. npm start<br/>
          5. edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
