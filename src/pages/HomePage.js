import React from 'react';
import AboutUs from '../components/layout/AboutUs';
import Contact from '../components/layout/Contact';
import Professional from '../components/layout/Professional';
import Service from '../components/layout/Service';
import Slider from '../components/layout/Slider';

const HomePage = () => {
  return (
    <div className='main'>
      <Slider />
      <Service />
      <AboutUs />
      <Professional />
      <Contact />
    </div>
  );
};

export default HomePage;
