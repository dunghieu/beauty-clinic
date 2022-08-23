import logo from '../img/MainLogo.png';
import './Header.css';

const Header = () => {
  return (
    <header className='Header'>
      <div className='Header__wrapper'>
        <div className='Header__logo'>
          <img src={logo} alt='' />
        </div>
        <div className='Header__content'>
          <div className='Header__menu '>
            <ul className='Header__menu-children '>
              <li>
                <a href='#' className='active'>
                  Home +
                </a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Service</a>
              </li>
              <li>
                <a href='#'>Gallery</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </div>
          <div className='Header__contact m-0'>
            <button type='button' className='btn'>
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
