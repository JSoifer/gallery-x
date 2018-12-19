import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import ImageUpload from './ImageUpload';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
        <ImageUpload />
        <Slider />
        <Footer />
      </div>
    );
  }
}

export default App;
