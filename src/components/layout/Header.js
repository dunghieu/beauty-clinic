/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import logo from '../../img/MainLogo.png';
import Button from '../UI/Button';
import Backdrop from '../UI/Backdrop';
import useWindowDimensions from '../../hooks/useWindowDimentions';
import './Header.css';

const Header = () => {
  const { width } = useWindowDimensions();
  const [isShow, setIsShow] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault();
    setIsShow((prevState) => !prevState);
  };

  useEffect(() => {
    if (width > 1024 && isShow === true) {
      setIsShow(false);
    }
  }, [width, isShow]);

  return (
    <header className="Header">
      {isShow && <Backdrop />}
      <div className="Header__wrapper">
        <div className="Header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="Header__toggle" onClick={toggleMenu}>
          <span className="Header__icon"></span>
        </div>
        <div className={`Header__content ${isShow && width < 1024 ? 'show ' : ''}`}>
          <div className="Header__menu ">
            <ul className="Header__menu-children ">
              <li>
                <a href="#" className="active">
                  Home +
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="Header__contact">
            <Button type="button">Contact</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
