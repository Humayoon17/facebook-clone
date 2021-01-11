import React from 'react';
import Logo from '../assets/images/facebook.svg';
import {
  MdAdd,
  MdExpandMore,
  MdHome,
  MdNotifications,
  MdOndemandVideo,
  MdSearch,
} from 'react-icons/md';

import { AiFillFlag } from 'react-icons/ai';

import { FaFacebookMessenger, FaUsers } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import Avatar from './Avatar';
import Button from './Button';

const Header = ({ user }) => {
  return (
    <div className='header'>
      <div className='header-left'>
        <img src={Logo} className='facebook-logo' alt='facebook logo' />
        <div className='header-search'>
          <MdSearch className='search-icon' />
          <input type='type' placeholder='Search Facebook' />
        </div>
      </div>
      <div className='header-middle'>
        <div className='active'>
          <MdHome />
        </div>

        <div>
          <AiFillFlag />
        </div>

        <div>
          <MdOndemandVideo />
        </div>
        <div>
          <FaUsers />
        </div>
        <div>
          <IoGameController />
        </div>
      </div>
      <div className='header-right'>
        <div className='user-info'>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName.split(' ')[0]}</h4>
        </div>
        <Button>
          <MdAdd />
        </Button>
        <Button>
          <FaFacebookMessenger />
        </Button>
        <Button>
          <MdNotifications />
        </Button>

        <Button>
          <MdExpandMore />
        </Button>
      </div>
    </div>
  );
};

export default Header;
