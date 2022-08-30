import React from 'react';
import About from '../components/layout/About';
import Clients from '../components/layout/Clients';
import Mission from '../components/layout/Mission';
import Professional from '../components/layout/Professional';
import Slogan from '../components/layout/Slogan';
import Vision from '../components/layout/Vision';
import sloganAbout from '../img/SloganAbout.png';

const AboutPage = () => {
  const sloganName = 'Business Slogan';
  const sloganTitle = 'Best responsibility and service for our customers';
  const sloganDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis';

  return (
    <div className='main'>
      <About />
      <Professional />
      <Slogan
        slogan={sloganAbout}
        sloganName={sloganName}
        sloganTitle={sloganTitle}
        sloganDescription={sloganDescription}
      />
      <Vision />
      <Mission />
      <Clients />
    </div>
  );
};

export default AboutPage;
