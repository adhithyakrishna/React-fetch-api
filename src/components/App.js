import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import News from './News/News'
import SideNews from './News/SideNews'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news1:
      {
        type : 'top-headlines',
        query : 'sources=bbc-news'
      },
      news2:
      {
        type : 'everything',
        query : 'domains=comicbookmovie.com&language=en'
      }
    }
  }


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper indigo lighten4">
                <a herf="/" className="bran-logo center">My Feed</a>
              </div>
            </nav>
          </div>
          <div className="row">
            <div className="col s8">
              <News news={this.state.news1}/>
            </div>
            <div className="col s4">
              <SideNews news={this.state.news2}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
