import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
        <Slider />
      </div>
    );
  }
}

export default App;
