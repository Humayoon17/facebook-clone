import React, { useEffect, useState } from 'react';
import CreateStory from './CreateStory';
import Story from './Story';

import db from '../firebase';

export default function StoryReel({ user }) {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    db.collection('stories')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setStories(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className='story-reel'>
      <CreateStory userProfileSrc={user.photoURL} />
      {stories.map((story) => (
        <Story
          key={story.id}
          profileSrc={story.data.profilePic}
          image={story.data.photo}
          username={story.data.username}
        />
      ))}
    </div>
  );
}
