import React from 'react';
import SponsoredItem from './SponsoredItem';
import Program from '../assets/images/programming.png';

export default function RightWidget() {
  return (
    <div className='right-widget'>
      <h4>Sponsored</h4>
      <SponsoredItem
        image={Program}
        text='Learn Data Science Today'
        domain='datacamp.com'
      />
      <SponsoredItem
        image={Program}
        text='Best E-Commerce for Larvel'
        domain='aimeos.com'
      />
    </div>
  );
}
