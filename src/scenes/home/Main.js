import React, { Component } from 'react';
import './Main.css';
import { QuoteView } from './QuoteView.js'

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to my page. I am Yeeching, but this page is under construction</h1>
        </header>
        <QuoteView />
      </div>
    );
  }
}

export default Main;
