import React from 'react';
import HomeBanner from '../components/layout/HomeBanner';
import MainService2 from '../components/layout/MainService2';
import SliderPlus from '../components/layout/SliderPlus';
import About from '../components/sections/AboutSection';

const HomePagePlus = () => {
  return (
    <div className="main">
      <SliderPlus />
      <About />
      <MainService2 />
      <HomeBanner />
    </div>
  );
};

export default HomePagePlus;
