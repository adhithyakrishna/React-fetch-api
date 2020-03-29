import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import News from './News/News'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news1:
      {
        type : 'top-headlines',
        query : 'sources=bbc-news'
      }
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">My feed</h1>
        </header>
        <News news={this.state.news1}/>
      </div>
    );
  }
}

export default App;
