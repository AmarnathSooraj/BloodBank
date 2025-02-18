import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom' 
import tt from '../assets/testtube.png'
function Navbar() {

  return (

    <nav className="nav">
      <div className='logo'>
        <span><img src={tt}/>Haemax</span>
      </div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Walkthrough</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link>Explore</Link></li>
      </ul>
      <button className='signup-btn'>Sign Up</button>
    </nav>
  );
}

export default Navbar;
