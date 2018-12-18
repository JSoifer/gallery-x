import React from 'react';


const LeftArrow = (props) => {
  return(
    <div className='backArrow' onClick={props.goToPrevSlide}>
      <i className="fa fa-angle-left fa-4x" aria-hidden="true"></i>
    </div>

  );
}
export default LeftArrow;
