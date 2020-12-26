import React from 'react';
import AppLogo from '../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <img className='navbar_logo' src={AppLogo} alt='Hotel-Rooms' />
      </Link>

      <div className='navbar_menu'>
        <Link to='/'>
          <h3>Home</h3>
        </Link>
        <Link to='/rooms'>
          <h3>Rooms</h3>
        </Link>
        <Link to='/about'>
          <h3>About</h3>
        </Link>
        <Link to='/contact-us'>
          <h3>Contact us</h3>
        </Link>
      </div>
    </nav>
  );
}
