import React from 'react';
import Hero from './../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import Features from '../components/Features';

const Home = () => {
  return (
    <div className='home'>
      <Hero>
        <Banner
          title='Luxurious Rooms'
          subtitle='Deluxe rooms start at 3000 AF'
        >
          <Link to='/rooms'>
            <button className='btn_primary'>our rooms</button>
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Features />
    </div>
  );
};

export default Home;
