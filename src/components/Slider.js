import React, { Component } from 'react';
import './Slider.scss';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';


export default class Slider extends Component  {
  constructor(props) {
    super(props);

    this.state = {}
  }

  goToPrevSlide = () => {

  }

  goToNextSlide = () => {

  }

  render() {
    return(
      <div className='slider'>
        <Slide />


        <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
        <RightArrow goToNextSlide={this.goToNextSlide}/>
      </div>

    );

  }
}
