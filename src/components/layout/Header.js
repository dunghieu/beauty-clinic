/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react';
import logo from '../../img/MainLogo.png';
import Button from '../UI/Button';
import Backdrop from '../UI/Backdrop';
import useWindowDimensions from '../../hooks/useWindowDimentions';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
  const {width} = useWindowDimensions();
  const [isShow, setIsShow] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault();
    if (!isShow) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    setIsShow((prevState) => !prevState);
  };

  useEffect(() => {
    if (width > 1024 && isShow === true) {
      setIsShow(false);
    }
  }, [width, isShow]);

  return (
    <header className='Header'>
      {isShow && <Backdrop />}
      <div className='Header__wrapper'>
        <div className='Header__logo'>
          <img src={logo} alt='' />
        </div>
        <div className='Header__toggle' onClick={toggleMenu}>
          <span className='Header__icon'></span>
        </div>
        <div
          className={`Header__content ${isShow && width < 1024 ? 'show ' : ''}`}
        >
          <div className='Header__menu '>
            <ul className='Header__menu-children '>
              <li>
                <NavLink
                  to='/'
                  className={(navData) => (navData.isActive ? 'active' : '')}
                >
                  Home +
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className={(navData) => (navData.isActive ? 'active' : '')}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/service'
                  className={(navData) => (navData.isActive ? 'active' : '')}
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/gallery'
                  className={(navData) => (navData.isActive ? 'active' : '')}
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/blog'
                  className={(navData) => (navData.isActive ? 'active' : '')}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='Header__contact'>
            <Button type='button'>Contact</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
