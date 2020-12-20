import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <img
          className='navbar_logo'
          src='https://static1.squarespace.com/static/5c9223e6da50d33331814e00/t/5dae97091d2c3845d440f11a/1571723036905/Property+sales+and+rentals.svg'
          alt='Hotel-Rooms'
        />
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
