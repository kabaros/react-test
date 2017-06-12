import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CakeList from './containers/CakeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Cake</h2>
        </div>
        <CakeList />
      </div>
    );
  }
}

export default App;
