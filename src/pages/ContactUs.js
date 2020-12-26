import React from 'react';
import { Link } from 'react-router-dom';
import ContactUsLogo from '../images/contact.svg';

export default function ContactUs() {
  return (
    <div className='contact-us'>
      <div class='contact-logo'>
        <img src={ContactUsLogo} alt='' />
      </div>
      <h1>CONTACT ME</h1>
      <div class='btn'>
        <a href='tel:+93729072966'>
          <i class='fas fa-phone-alt'></i>
          <span>0729072966</span>
        </a>
      </div>
      <div class='btn'>
        <i class='fas fa-at'></i>
        <span className='email'>Humayoon_muhammadi@yahoo.com</span>
      </div>
      <div class='btn'>
        <Link to='/'>Return to Home</Link>
      </div>
    </div>
  );
}
