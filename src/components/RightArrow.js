import React from 'react';


const RightArrow = (props) => {
  return(
    <div className='nextArrow' onClick={props.goToNextSlide}>
      <i className="fa fa-angle-right fa-4x" aria-hidden="true"></i>
    </div>

  );
}
export default RightArrow;
