import React from 'react';
import Room from './Room';

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className='rooms_empty'>
        <h1>Opps, There is not room!</h1>
      </div>
    );
  }
  return (
    <section className='rooms_list'>
      {rooms.map((room) => {
        return <Room key={room.id} room={room} />;
      })}
    </section>
  );
}
