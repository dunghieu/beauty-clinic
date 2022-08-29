/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css';
import footerLogo from '../../img/FooterLogo.png';
import toTopBtn from '../../img/ToTopButton.png';
import iconFb from '../../img/IconFacebook.png';
import iconTwitter from '../../img/IconTwitter.png';
import iconLinkedin from '../../img/IconLinked.png';
import iconYoutube from '../../img/IconYoutube.png';
import iconInstagram from '../../img/IconInstagram.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__container">
          <div className="Footer__top">
            <div className="Footer__info">
              <div className="Footer__info-logo">
                <img src={footerLogo} alt="img" />
              </div>
              <div className="Footer__info-content">
                <p>
                  <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
                </p>
                <br />
                <p>Baker Steet 101, NY, United States.</p>
                <div className="Footer__info-contact">
                  <span>+521 569 8966.</span>
                  <span>mail@company.com.</span>
                </div>
              </div>
            </div>
            <div className="Footer__menu">
              <div className=" Footer__menu-sub">
                <strong>Pages</strong>
                <ul>
                  <li>➤ Home</li>
                  <li>➤ About</li>
                  <li>➤ Services</li>
                  <li>➤ Gallery</li>
                  <li>➤ Team</li>
                </ul>
              </div>
              <div className=" Footer__menu-sub">
                <strong>Informations</strong>
                <ul>
                  <li>➤ Terms & conditions</li>
                  <li>➤ Privacy policy</li>
                  <li>➤ Blog</li>
                  <li>➤ Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" Footer__bottom">
            <div className="Footer__social">
              <span>
                <img src={iconFb} alt="" />
              </span>
              <span>
                <img src={iconTwitter} alt="" />
              </span>
              <span>
                <img src={iconLinkedin} alt="" />
              </span>
              <span>
                <img src={iconYoutube} alt="" />
              </span>
              <span>
                <img src={iconInstagram} alt="" />
              </span>
            </div>
            <div className="Footer__certification">
              <p>© AltDesain Studio 2021 - All right reserved.</p>
            </div>
          </div>
        </div>
        <div className="Footer__scroll" onClick={scrollToTop}>
          <img src={toTopBtn} alt="img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
