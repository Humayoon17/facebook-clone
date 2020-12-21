import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error.css';

const Error = () => {
  return (
    <div className='error'>
      <div class='text'>404</div>

      <h1>Oops! Something went wrong!</h1>
      <div class='btn'>
        <Link to='/'>Return to Home</Link>
      </div>
    </div>
  );
};

export default Error;
