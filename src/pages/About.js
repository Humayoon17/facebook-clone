import React from 'react';
import { Link } from 'react-router-dom';
import ProgrammingLogo from '../images/programming.svg';
import ProfilePic from '../images/profile.svg';

export default function About() {
  return (
    <div className='about'>
      <div class='text'>
        <img src={ProgrammingLogo} alt='' />
      </div>

      <h1>This Website Developed By</h1>
      <div className='prog-info'>
        <div className='prof-round'>
          <img src={ProfilePic} alt='' />
        </div>
        <h2>Humayoon Muhammadi</h2>
      </div>
      <div class='btn'>
        <a
          href='https://github.com/Humayoon17'
          target='_blank'
          rel='noreferrer'
        >
          Github Account
        </a>
      </div>
      <div class='btn'>
        <Link to='/'>Return to Home</Link>
      </div>
    </div>
  );
}
