import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import tt from '../assets/testtube.png';

function Navbar() {
  const location = useLocation();

  const isNotHome = location.pathname !== '/';

  return (
    <nav className="nav">
      <div className='logo'>
        <span><Link to='/' className={isNotHome ? 'active-link' : ''}><img src={tt} alt="logo" />Haemax</Link></span>
      </div>
      <ul>
        <li>
          <Link to='/' className={isNotHome ? 'active-link' : ''}>Home</Link>
        </li>
        <li>
          <Link to='/about' className={isNotHome ? 'active-link' : ''}>About Us</Link>
        </li>
        <li>
          <Link to='/' className={isNotHome ? 'active-link' : ''}>Register Donor</Link>
        </li>
      </ul>
        <Link to='/login'><button className='signup-btn'>Login</button></Link>
    </nav>
  );
}

export default Navbar;

