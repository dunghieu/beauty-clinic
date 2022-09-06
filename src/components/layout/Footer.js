/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css';
import footerLogo from '../../img/FooterLogo.png';
import toTopBtn from '../../img/ToTopButton.png';
import iconFb from '../../img/IconFacebook.png';
import iconTwitter from '../../img/IconTwitter.png';
import iconLinkedin from '../../img/IconLinked.png';
import iconYoutube from '../../img/IconYoutube.png';
import iconInstagram from '../../img/IconInstagram.png';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';

const Footer = (props) => {
  const [scrollBtnPosition, setScrollBtnPosition] = useState('');
  const {scrollPosition} = props;

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (scrollPosition > document.body.scrollHeight - 1000) {
      setScrollBtnPosition('absolute');
    } else if (scrollPosition > 100) {
      setScrollBtnPosition('fixed');
    } else {
      setScrollBtnPosition('');
    }
  }, [scrollPosition]);

  return (
    <footer className='Footer'>
      <div className='Footer__wrapper'>
        <div className='Footer__container'>
          <div className='Footer__top'>
            <div className='Footer__info'>
              <div className='Footer__info-logo'>
                <img src={footerLogo} alt='img' />
              </div>
              <div className='Footer__info-content'>
                <p>
                  <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
                </p>
                <br />
                <p>Baker Steet 101, NY, United States.</p>
                <div className='Footer__info-contact'>
                  <span>+521 569 8966.</span>
                  <span>mail@company.com.</span>
                </div>
              </div>
            </div>
            <div className='Footer__menu'>
              <div className=' Footer__menu-sub'>
                <strong>Pages</strong>
                <ul>
                  <li>
                    <Link to='/'>➤ Home</Link>
                  </li>
                  <li>
                    <Link to='/about'>➤ About</Link>
                  </li>
                  <li>
                    <Link to='/service'>➤ Services</Link>
                  </li>
                  <li>
                    <Link to='/gallery'>➤ Gallery</Link>
                  </li>
                  <li>
                    <Link to='/team'>➤ Team</Link>
                  </li>
                </ul>
              </div>
              <div className=' Footer__menu-sub'>
                <strong>Informations</strong>
                <ul>
                  <li>➤ Terms & conditions</li>
                  <li>➤ Privacy policy</li>
                  <li>
                    <Link to='/blog'>➤ Blog</Link>
                  </li>
                  <li>
                    <Link to='/contact'>➤ Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=' Footer__bottom'>
            <div className='Footer__social'>
              <a href='https://facebook.com/' target='_blank' rel='noreferrer'>
                <img src={iconFb} alt='' />
              </a>
              <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
                <img src={iconTwitter} alt='' />
              </a>
              <a href='https://linkedin.com/' target='_blank' rel='noreferrer'>
                <img src={iconLinkedin} alt='' />
              </a>
              <a href='https://youtube.com/' target='_blank' rel='noreferrer'>
                <img src={iconYoutube} alt='' />
              </a>
              <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
                <img src={iconInstagram} alt='' />
              </a>
            </div>
            <div className='Footer__certification'>
              <p>© AltDesain Studio 2021 - All right reserved.</p>
            </div>
          </div>
        </div>
        <div
          className='Footer__scroll'
          style={{position: scrollBtnPosition}}
          onClick={scrollToTop}
        >
          <img src={toTopBtn} alt='img' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
