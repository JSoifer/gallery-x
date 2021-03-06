import React from 'react';



const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    width: '100%',
    height: '60vh',
    marginBottom: '15vh',
  }
  return(
    <div className='slide' style={styles}>
    </div>

  );
}
export default Slide;
