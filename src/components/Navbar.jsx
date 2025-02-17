import React, { useState } from 'react';
import './Navbar.css';
import tt from '../assets/testtube.png'
function Navbar() {

  return (
    <nav className="nav">
      <div className='logo'>
        <span><img src={tt}/>Haemax</span>
      </div>
      <ul>
        <li>Home</li>
        <li>Walkthrough</li>
        <li>About Us</li>
        <li>Explore</li>
      </ul>
      <button className='signup-btn'>Sign Up</button>
    </nav>
  );
}

export default Navbar;
