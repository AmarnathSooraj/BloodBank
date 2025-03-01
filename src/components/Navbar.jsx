import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import tt from '../assets/testtube.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isNotHome = location.pathname !== '/';
  const [navMenu, setNavMenu] = useState(false);

  const toggleMenu = () => {
    setNavMenu((prev) => !prev);
  };

  const handleLinkClick = (path) => {
    setNavMenu(false);
    navigate(path);
  };

  useEffect(() => {
    setNavMenu(false);
  }, [location]);

  return (
    <nav className={`nav ${navMenu ? 'nav-mobile-open' : ''}`}>
      <div className='icon-con' onClick={toggleMenu}>
        <img className='icon' src={navMenu ? close : menu} alt='menu' />
      </div>
      <div className='logo'>
        <span>
          <Link to='/' className={isNotHome ? 'active-link' : ''}>
            <img src={tt} alt='logo' />
            Haemax
          </Link>
        </span>
      </div>
      <ul className={`nav-links ${navMenu ? 'nav-links-mobile-open' : ''}`}>
        <li>
          <span
            onClick={() => handleLinkClick('/')}
            style={{
              cursor: 'pointer',
              color: location.pathname === '/' ? '#fefefe' : 'rgba(252, 70, 70, 0.8)',
            }}
          >
            Home
          </span>
        </li>
        <li>
          <span
            onClick={() => handleLinkClick('/about')}
            style={{
              cursor: 'pointer',
              color: location.pathname === '/about' || location.pathname === '/login' || location.pathname === '/form' ? 'rgba(252, 70, 70, 0.8)' : '#fefefe',
            }}
          >
            About Us
          </span>
        </li>
        <li>
          <span
            onClick={() => handleLinkClick('/')}
            style={{
              cursor: 'pointer',
              color: location.pathname === '/about' || location.pathname === '/login' || location.pathname === '/form'? 'rgba(252, 70, 70, 0.8)' : '#fefefe',
            }}
          >
            Register Donor
          </span>
        </li>
      </ul>
      <Link to='/login'>
        <button className='signup-btn'>Login</button>
      </Link>
    </nav>
  );
}

export default Navbar;