import React from 'react';
import HeadShot from './HeadShot';
import './Header.scss';

function Header() {
  return(
    <div className='headerContainer'>
      <div className='headShot'>
        <HeadShot />
      </div>
      <div className='headerContent'>
        <h1>Gallery X</h1>
        <div className='navLinks' >
          <div className='linkLeft'>
            <li>about Xia</li>
          </div>
          <div className='rightLinks'>
            <li>View Archived</li>
            <li>Order Print</li>
            <li>Contact</li>
          </div>
        </div>    
      </div>
    </div>
  );
}

export default Header;
