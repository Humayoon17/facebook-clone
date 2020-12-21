import React from 'react';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Features() {
  return (
    <section className='features'>
      <h3>Featured Rooms</h3>
      <div className='features_underline'></div>
      <FeaturedRooms />
    </section>
  );
}
