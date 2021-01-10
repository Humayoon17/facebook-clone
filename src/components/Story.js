import React from 'react';
import Avatar from './Avatar';
import { FcExpand } from 'react-icons/fc';

export default function Story({ image, profileSrc, title, showMoreBtn }) {
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
      <h4>{title}</h4>
      {showMoreBtn && moreBtn}
    </div>
  );
}
