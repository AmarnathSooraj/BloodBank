import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import tt from '../assets/testtube.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className='logo'>
        <span><img src={tt} alt="Logo" />Haemax</span>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
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
