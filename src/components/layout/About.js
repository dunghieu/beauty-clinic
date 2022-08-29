import React from 'react';
import Info from '../UI/Info';
import aboutVid from '../../img/AboutVideo.png';
import './About.css';

const About = () => {
  return (
    <section className='About'>
      <div className='About__wrapper'>
        <Info className='About__info'>
          <span>About</span>
          <h2>
            We are a leading beauty clinic that has been around since 2002
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </Info>
        <div className='About__image'>
          <img src={aboutVid} alt='' />
        </div>
      </div>
    </section>
  );
};

export default About;
