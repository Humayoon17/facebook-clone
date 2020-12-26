import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

// returns the values from a list
const getUniqueValue = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    maxPrice,
    maxSize,
    type,
    handleChange,
    capacity,
    price,
    minPrice,
    minSize,
    breakfast,
    pets,
  } = context;

  // getting the unique types
  let types = getUniqueValue(rooms, 'type');
  // take what ever you have and add new "all" to it
  types = ['all', ...types];

  // map to jsx

  const typeOptions = types.map((type, index) => {
    return (
      <option key={index} value={type}>
        {type}
      </option>
    );
  });

  // getting unique capacity
  let people = getUniqueValue(rooms, 'capacity');

  const capacityOptions = people.map((cap, index) => {
    return (
      <option key={index} value={cap}>
        {cap}
      </option>
    );
  });

  return (
    <div className='rooms_filter'>
      <div className='rooms_filter_title'>
        <Title title='Search Rooms' />
      </div>
      <form className='filter_form'>
        {/* Type Filter */}
        <div className='filter_type'>
          <label htmlFor='type'>Room Types</label>
          <select
            name='type'
            value={type}
            className='type_select'
            onChange={handleChange}
          >
            {typeOptions}
          </select>
        </div>
        {/* Capacity Filter */}
        <div className='filter_type'>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            value={capacity}
            className='capacity_select'
            onChange={handleChange}
          >
            {capacityOptions}
          </select>
        </div>
        <div className='filter_range'>
          <label htmlFor='price'>Room Price</label>
          <input
            type='range'
            name='price'
            id='price'
            max={maxPrice}
            min={minPrice}
            value={price}
            onChange={handleChange}
            className='range'
          />
        </div>

        <div className='size-section'>
          <div className='size-inputs'>
            <label htmlFor='size'>Room Size</label>
            <div className='input-1'>
              <input
                type='text'
                name='minSize'
                id='size'
                value={minSize}
                onChange={handleChange}
                className='size1'
              />
            </div>
            <div className='input-2'>
              <input
                type='text'
                name='maxSize'
                id='size'
                value={maxSize}
                onChange={handleChange}
                className='size2'
              />
            </div>
          </div>
        </div>

        <div className='checkbox-section'>
          <div className='filter-checkbox'>
            <p className='extra-text'>some text</p>
            <div className='checkbox-inputs-1'>
              <label className='lbl-breakfast' htmlFor='breakfast'>
                <input
                  type='checkbox'
                  name='breakfast'
                  id='breakfast'
                  checked={breakfast}
                  onChange={handleChange}
                />
                <span className='slider-checkbox'></span>
              </label>
              <span>Breakfast</span>
            </div>
            <div className='checkbox-inputs-2'>
              <label htmlFor='pets' className='lbl-pets'>
                <input
                  type='checkbox'
                  name='pets'
                  id='pets'
                  checked={pets}
                  onChange={handleChange}
                />
                <span className='slider-checkbox'></span>
              </label>
              <span>Pets</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
