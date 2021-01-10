import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { IoMdShareAlt } from 'react-icons/io';
import { MdExpandMore } from 'react-icons/md';
import userProfilePic from '../assets/images/facebook.svg';
import Program from '../assets/images/programming.png';
import Avatar from './Avatar';

export default function Post({
  username,
  currentUserProfile,
  postedUserProfile,
  image,
  message,
  timestamp,
}) {
  return (
    <div className='post'>
      <div className='post-top'>
        <Avatar src={userProfilePic} />
        <div className='post-info'>
          <h3>{username}slkdjf</h3>
          <p>{timestamp}10 ago</p>
        </div>
      </div>
      <div className='post-content'>
        <div className='post-text'>
          <p>{message}lkjdslfksjd</p>
        </div>
        <div className='post-image'>
          <img src={Program} alt='' />
        </div>
      </div>
      <div className='post-bottom'>
        <div className='post-option'>
          <BiLike />
          <p>Like</p>
        </div>
        <div className='post-option'>
          <FaRegCommentAlt />
          <p>Comment</p>
        </div>
        <div className='post-option'>
          <IoMdShareAlt />
          <p>Share</p>
        </div>
        <div className='post-option'>
          <Avatar src={userProfilePic} />
          <MdExpandMore />
        </div>
      </div>
    </div>
  );
}
