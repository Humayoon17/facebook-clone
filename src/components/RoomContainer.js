import React from 'react';
import { withHigherComponentRoomConsumer } from '../context';
import Loading from './Loading';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

const RoomContainer = ({ context }) => {
  const { isLoading, sortedRooms, rooms } = context;

  if (isLoading) return <Loading />;
  return (
    <div className='room_container'>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
};

export default withHigherComponentRoomConsumer(RoomContainer);

/*
import React from 'react';
import { RoomConsumer } from '../context';
import Loading from './Loading';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        const { isLoading, sortedRooms, rooms } = value;

        if (isLoading) return <Loading />;

        return (
          <div className='room_container'>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
            Room Container
          </div>
        );
      }}
    </RoomConsumer>
  );
}

*/
