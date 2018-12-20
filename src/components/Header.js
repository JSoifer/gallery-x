import React, { Component } from 'react';
import HeadShot from './HeadShot';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white'
  };
  return(
    <div className='headerContainer'>
      <div className='headShot'>
        <HeadShot />
      </div>
      <div className='headerContent'>
        <Link to='/' style={linkStyle}>
        <h1>Gallery x</h1>
      </Link>
        <div className='navLinks' >
          <div className='linkLeft'>
            <li>about Xia</li>
          </div>
          <div className='rightLinks'>
            <li>
              <Link to='/archive' style={linkStyle}>View Archived</Link>
            </li>
            <li>
            <Link to='/upload' style={linkStyle}>Order Print</Link>
          </li>
            <li>Contact</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
