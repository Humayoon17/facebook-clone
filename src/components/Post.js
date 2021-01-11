import React from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { IoMdShareAlt } from 'react-icons/io';
import { MdExpandMore } from 'react-icons/md';

import Avatar from './Avatar';

export default function Post({
  username,
  currentUserProfile,
  postedUserProfile,
  image,
  message,
  timestamp,
}) {
  timestamp =
    timestamp !== null
      ? new Date(timestamp?.toDate()).toUTCString()
      : 'loading...';

  return (
    <div className='post'>
      <div className='post-top'>
        <Avatar src={postedUserProfile} />
        <div className='post-info'>
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className='post-content'>
        <div className='post-text'>
          <p>{message}</p>
        </div>
        <div className='post-image'>
          <img src={image} alt='' />
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
          <Avatar src={currentUserProfile} />
          <MdExpandMore />
        </div>
      </div>
    </div>
  );
}
