import React from 'react';

export default function Login() {
  return (
    <div className='login'>
      <div className='left-section'>
        <img
          src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'
          alt=''
        />
        <p>
          Connect with friends and the world
          <br /> around you on Facebook.
        </p>
      </div>
      <div className='right-section'>
        <div className='form'>
          <form>
            <input type='text' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button className='btn-login'>Log In</button>

            <button className='google-login'>Login with Google</button>
            <p>Forgot Password?</p>
          </form>
          <div className='line'></div>
          <button className='btn-sign-up'>Create New Account</button>
        </div>
      </div>
    </div>
  );
}
