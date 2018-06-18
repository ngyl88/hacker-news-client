import React, { Component } from "react";
import NewsFeed from "./NewsFeed";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hacker News Reader</h1>
        <NewsFeed />
      </div>
    );
  }
}

export default App;
