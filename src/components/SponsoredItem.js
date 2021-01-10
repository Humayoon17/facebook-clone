import React from 'react';

export default function SponsoredItem({ text, domain, image }) {
  return (
    <div className='sponsored-item'>
      <img src={image} alt='' />
      <div className='sponsored-item-info'>
        <h3>{text}</h3>
        <p>{domain}</p>
      </div>
    </div>
  );
}
