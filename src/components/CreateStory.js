import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function CreateStory({ userProfileSrc }) {
  return (
    <div
      className='create-story'
      style={{
        backgroundImage: `url(${userProfileSrc})`,
      }}
    >
      <div className='bg-add-story'>
        <div className='plus-icon'>
          <button className='btn-add-story'>
            <FaPlus />
          </button>
        </div>
        <div className='text-create-story'>
          <h4>Create a Story</h4>
        </div>
      </div>
    </div>
  );
}
