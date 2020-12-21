import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RoomContext } from '../context';
import Loading from '../components/Loading';
import Error from './Error';
import Banner from '../components/Banner';
import StyleHero from '../styles/StyledHero';
import defaultImage from '../images/details-2.jpeg';

const SingleRoom = () => {
  const { roomId } = useParams();
  const { getRoom, isLoading } = useContext(RoomContext);
  const room = getRoom(roomId);

  if (isLoading) {
    return <Loading />;
  }

  if (!room) {
    return <Error />;
  }

  const [mainImage, ...defaultImages] = room.images;

  return (
    <div className='single_room'>
      <StyleHero image={mainImage || defaultImage}>
        <Banner title={room.name}>
          <Link to='/'>
            <button className='btn_primary'>our rooms</button>
          </Link>
        </Banner>
      </StyleHero>
      <section className='single_room_section'>
        <div className='single_room_images'>
          {defaultImages.map((image) => {
            return <img key={image} src={image} alt={image} />;
          })}
        </div>
        <div className='single_room_info'>
          <article className='room_description'>
            <h3>Details</h3>
            <p>{room.description}</p>
          </article>
          <article className='room_info'>
            <h3>Info</h3>
            <h6>price : {room.price} AF</h6>
            <h6>size : {room.size} SQFT</h6>
            <h6>
              max capacity :{' '}
              {room.capacity > 1
                ? `${room.capacity} people`
                : `${room.capacity} person`}
            </h6>
            <h6>{room.pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{room.breakfast && 'free breakfast included'}</h6>
          </article>
        </div>
      </section>

      <section className='room_extras_section'>
        <h6>extras</h6>
        <ul className='extras'>
          {room.extras.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SingleRoom;
