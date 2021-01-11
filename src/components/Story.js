import React from 'react';
import Avatar from './Avatar';
import { FcExpand } from 'react-icons/fc';

export default function Story({ image, profileSrc, username, showMoreBtn }) {
  const moreBtn = (
    <div className='more-story' title='More Stories'>
      <FcExpand className='more-icon' />
    </div>
  );

  return (
    <div
      className='story'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Avatar src={profileSrc} />
      <h4>{username}</h4>
      {showMoreBtn && moreBtn}
    </div>
  );
}
