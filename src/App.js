import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionList from './QuestionList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Question List</h1>
        </header>
        <div className="App-intro">
          <QuestionList />
        </div>
      </div>
    );
  }
}

export default App;
