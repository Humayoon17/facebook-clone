import React from 'react';

import { auth, provider } from '../firebase';
import userActions from '../actions/userActions';
import { useStateValue } from '../providers/StateProvider';

export default function Login() {
  const [state, dispatch] = useStateValue();

  const signInWithGoogle = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: userActions.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

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
            <button type='submit' className='btn-login'>
              Log In
            </button>

            <button className='google-login' onClick={signInWithGoogle}>
              Login with Google
            </button>
            <p>Forgot Password?</p>
          </form>
          <div className='line'></div>
          <button className='btn-sign-up'>Create New Account</button>
        </div>
      </div>
    </div>
  );
}
