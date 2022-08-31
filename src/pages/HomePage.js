import React from 'react';
import AboutUs from '../components/layout/AboutUs';
import Contact from '../components/layout/Contact';
import Professional from '../components/layout/Professional';
import MainService from '../components/layout/MainService';
import Slider from '../components/layout/Slider';
import Info from '../components/UI/Info';

const contactInfo = (
  <Info className='Contact__info'>
    <div></div>
    <div className='Contact__info__wrapper'>
      <span>Contact Us</span>
      <h2>Send your inquiry to our expert team</h2>
      <p>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
    </div>
  </Info>
);

const HomePage = () => {
  return (
    <div className='main'>
      <Slider />
      <MainService />
      <AboutUs />
      <Professional />
      <Contact>{contactInfo}</Contact>
    </div>
  );
};

export default HomePage;
