import React from 'react';
import FeaturedRooms from '../components/FeaturedRooms';
import Title from './Title';

export default function Features() {
  return (
    <section className='features'>
      <Title title='Featured Rooms' />
      <FeaturedRooms />
    </section>
  );
}
