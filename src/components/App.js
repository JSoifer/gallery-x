import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import Archive from './Archive';
import ImageUpload from './ImageUpload';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Slider}></Route>
          <Route exact path='/archive' component={Archive}></Route>
          <Route exact path='/upload' component={ImageUpload}></Route>        
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
