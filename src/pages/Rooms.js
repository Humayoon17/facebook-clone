import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

import Hero from '../components/Hero';
import RoomContainer from '../components/RoomContainer';

const Rooms = () => {
  return (
    <>
      <Hero hero='room_hero'>
        <Banner title='Our Rooms'>
          <Link to='/'>
            <button className='btn_primary'>Returns Home</button>
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
