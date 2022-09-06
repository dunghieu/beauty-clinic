/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react';
import logo from '../../img/MainLogo2.png';
import Button from '../UI/Button';
import Backdrop from '../UI/Backdrop';
import useWindowDimensions from '../../hooks/useWindowDimentions';
import {NavLink, Link} from 'react-router-dom';
import './HeaderPlus.css';

const HeaderPlus = (props) => {
  const {width} = useWindowDimensions();
  const [isShow, setIsShow] = useState(false);
  const [HeaderPlusStyle, setHeaderPlusStyle] = useState('');
  const {scrollPosition} = props;

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
    if (scrollPosition > 100) {
      setHeaderPlusStyle({
        backgroundColor: 'rgba(23, 32, 108, 0.7);',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      });
    } else {
      setHeaderPlusStyle({backgroundColor: 'transparent', boxShadow: 'none'});
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (width > 1024 && isShow === true) {
      setIsShow(false);
    }
  }, [width, isShow]);

  return (
    <header
      className='HeaderPlus'
      style={{
        backgroundColor: HeaderPlusStyle.backgroundColor,
        boxShadow: HeaderPlusStyle.boxShadow,
      }}
    >
      {isShow && <Backdrop />}
      <div className='HeaderPlus__wrapper'>
        <div className='HeaderPlus__logo'>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>
        <div className='HeaderPlus__toggle' onClick={toggleMenu}>
          <span className='HeaderPlus__icon'></span>
        </div>
        <div
          className={`HeaderPlus__content ${
            isShow && width < 1024 ? 'show ' : ''
          }`}
        >
          <div className='HeaderPlus__menu '>
            <ul className='HeaderPlus__menu-children '>
              <li>
                <NavLink
                  to='/home'
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
          <div className='HeaderPlus__contact'>
            <Link to='/contact'>
              <Button type='button'>Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPlus;
