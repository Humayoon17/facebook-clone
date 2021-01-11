import React, { useState } from 'react';
import { FaImages } from 'react-icons/fa';
import { FcVideoCall } from 'react-icons/fc';
import { RiEmotionLine } from 'react-icons/ri';
import db from '../firebase';
import firebase from 'firebase';

import Avatar from './Avatar';

const MessengeSender = ({ user }) => {
  const [input, setInput] = useState('');
  const [imageUrlInput, setImageUrlInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('posts')
      .add({
        text: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        image: imageUrlInput,
        username: user.displayName,
      })
      .then((_) => {
        setInput('');
        setImageUrlInput('');
      })
      .catch((error) => {
        console.log('adding post error', error);
      });
  };

  return (
    <div className='message-sender'>
      <div className='message-sender-top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            type='text'
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className='input'
            placeholder={`What's on your mind ${
              user.displayName.split(' ')[0]
            }?`}
          />
          <input
            type='text'
            value={imageUrlInput}
            onChange={(e) => {
              setImageUrlInput(e.target.value);
            }}
            placeholder='image URL (Optional)'
          />
          <button type='submit' onClick={handleSubmit}></button>
        </form>
      </div>
      <div className='message-sender-bottom'>
        <div className='message-sender-option'>
          <FcVideoCall className='video-call' />
          <h3>Live Video</h3>
        </div>
        <div className='message-sender-option'>
          <FaImages className='images' />
          <h3>Photo/Video</h3>
        </div>
        <div className='message-sender-option'>
          <RiEmotionLine className='emotion' />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessengeSender;
