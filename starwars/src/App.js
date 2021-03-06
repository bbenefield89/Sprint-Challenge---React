import React, { Component } from 'react';
import './App.css';

// components
import CharContainer from './comp/charcontainer/CharContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        {/* Char Container */
        (this.state.starwarsChars.length > 0)
          ?
            <CharContainer charData={ this.state.starwarsChars } />
          :
            <h2>Fetching Character Information...</h2>
        }
      </div>
    );
  }
}

export default App;
