import React from 'react';
import About from '../components/layout/About';
import Contact from '../components/layout/Contact';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Professional from '../components/layout/Professional';
import Service from '../components/layout/Service';
import Slider from '../components/layout/Slider';

const HomePage = () => {
  return (
    <div className='wrap'>
      <Header />
      <div className='main'>
        <Slider />
        <Service />
        <About />
        <Professional />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
