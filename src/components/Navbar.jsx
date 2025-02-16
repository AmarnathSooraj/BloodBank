import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className='logo'>
        <img src=""/>
        <span>Haemax</span>
      </div>
      <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
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
