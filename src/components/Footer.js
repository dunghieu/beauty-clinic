import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-footer bg-no-repeat w-full h-96'>
      <div className='sidebar'>
        <div className='flex justify-center items-center'>
          <div className='bg-footerlogo bg-no-repeat'></div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='site-title'>Pages</div>
          <ul className='flex justify-center items-center'>
            <li className='flex-1'>
              <a href='#'>Home</a>
            </li>
            <li className='flex-1'>
              <a href='#'>About</a>
            </li>
            <li className='flex-1'>
              <a href='#'>Service</a>
            </li>
            <li className='flex-1'>
              <a href='#'>Gallery</a>
            </li>
            <li className='flex-1'>
              <a href='#'>Team</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='site-title'>Informations</div>
          <ul className='flex justify-center items-center'>
            <li className='flex-1'>
              <a href='#'>Team & conditions</a>
            </li>
            <li className='flex-1'>
              <a href='#'>Privacy policy</a>
            </li>
            <li className='flex-1'>
              <a href='#'>Blog</a>
            </li>
            <li className='flex-1'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-totopbtn bg-no-repeat w-9 h-9'></div>
      <div className='info'>
        <div className='social-media flex justify-center items-center'></div>
        <div className='copyright'>
          <span>&copy; AltDesain Studio 2021 - All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
