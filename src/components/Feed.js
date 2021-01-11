import React, { useEffect, useState } from 'react';
import MessengeSender from './MessengeSender';
import StoryReel from './StoryReel';
import Post from './Post';
import { useStateValue } from '../providers/StateProvider';
import db from '../firebase';

export default function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className='feed'>
      <StoryReel user={user} />
      <MessengeSender user={user} />
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.data.username}
          postedUserProfile={post.data.profilePic}
          image={post.data.image}
          message={post.data.text}
          timestamp={post.data.timestamp}
          currentUserProfile={user.photoURL}
        ></Post>
      ))}
    </div>
  );
}
