import React from 'react';
import AboutUs from '../components/layout/AboutUs';
import Contact from '../components/layout/Contact';
import Professional from '../components/layout/Professional';
import MainService from '../components/layout/MainService';
import Slider from '../components/layout/Slider';

const HomePage = () => {
  return (
    <div className='main'>
      <Slider />
      <MainService />
      <AboutUs />
      <Professional />
      <Contact />
    </div>
  );
};

export default HomePage;
