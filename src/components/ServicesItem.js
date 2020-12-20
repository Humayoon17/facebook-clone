import React from 'react';

export default function ServicesItem({ Icon, title, description }) {
  return (
    <div className='services_item'>
      <Icon className='service_icon' />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
