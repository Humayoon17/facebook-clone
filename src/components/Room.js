import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../images/details-1.jpeg';

import { Link } from 'react-router-dom';

export default function Room({ room }) {
  const { name, images, price, id } = room;
  return (
    <div className='room'>
      <div className='image_container'>
        <img
          className='image_room'
          src={images[0] || defaultImage}
          alt={images[0] || defaultImage}
        />
        <div className='room_price'>
          <h6>{price} AF</h6>
          <p>per night</p>
        </div>
        <div className='room_details'>
          <Link to={`/rooms/${id}`}>
            <button className='btn_primary'>Details</button>
          </Link>
        </div>
        <p className='room_info'>{name}</p>
      </div>
    </div>
  );
}

// checking for prop types
Room.prototype = {
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
