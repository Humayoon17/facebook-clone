import React from 'react';

export default function Avatar({ src }) {
  return (
    <>
      <img src={src} className='avatar' alt='Avatar' />
    </>
  );
}
