import React from 'react';

import services from '../data/services';
import ServicesItem from './ServicesItem';
import Title from './Title';

export default function Services() {
  return (
    <section className='services'>
      <Title title='Services' />
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
