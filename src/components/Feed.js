import React from 'react';
import MessengeSender from './MessengeSender';
import StoryReel from './StoryReel';
import Post from './Post';

export default function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessengeSender />
      <Post />
    </div>
  );
}
