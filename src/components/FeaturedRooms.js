import React, { useContext } from 'react';

import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';

export default function FeaturedRooms() {
  // getting isLoading and featuredRooms state from the RoomContext
  const { isLoading, featuredRooms } = useContext(RoomContext);

  // checking for loading the data
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='featured_rooms'>
      {featuredRooms.map((featuredRoom) => (
        <Room key={featuredRoom.id} room={featuredRoom} />
      ))}
    </div>
  );
}
