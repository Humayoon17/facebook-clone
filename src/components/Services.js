import React from 'react';

import services from '../data/services';
import ServicesItem from './ServicesItem';

export default function Services() {
  return (
    <section className='services'>
      <h3>Services</h3>
      <div className='services_underline'></div>
      <div className='services_items_sections'>
        {services.map((service) => {
          return (
            <ServicesItem
              key={service.title}
              Icon={service.icon}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </section>
  );
}
