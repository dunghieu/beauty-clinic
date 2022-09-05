/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import logo from '../../img/MainLogo.png';
import Button from '../UI/Button';
import Backdrop from '../UI/Backdrop';
import useWindowDimensions from '../../hooks/useWindowDimentions';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const { width } = useWindowDimensions();
  const [isShow, setIsShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerStyle, setHeaderStyle] = useState('');

  document.body.onscroll = function () {
    setScrollPosition(window.scrollY);
  };

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
      setHeaderStyle({
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      });
    } else {
      setHeaderStyle({ backgroundColor: 'transparent', boxShadow: 'none' });
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (width > 1024 && isShow === true) {
      setIsShow(false);
    }
  }, [width, isShow]);

  return (
    <header
      className="Header"
      style={{ backgroundColor: headerStyle.backgroundColor, boxShadow: headerStyle.boxShadow }}
    >
      {isShow && <Backdrop />}
      <div className="Header__wrapper">
        <div className="Header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="Header__toggle" onClick={toggleMenu}>
          <span className="Header__icon"></span>
        </div>
        <div className={`Header__content ${isShow && width < 1024 ? 'show ' : ''}`}>
          <div className="Header__menu ">
            <ul className="Header__menu-children ">
              <li>
                <NavLink to="/" className={(navData) => (navData.isActive ? 'active' : '')}>
                  Home +
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={(navData) => (navData.isActive ? 'active' : '')}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className={(navData) => (navData.isActive ? 'active' : '')}>
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={(navData) => (navData.isActive ? 'active' : '')}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={(navData) => (navData.isActive ? 'active' : '')}>
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="Header__contact">
            <Link to="/contact">
              <Button type="button">Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
