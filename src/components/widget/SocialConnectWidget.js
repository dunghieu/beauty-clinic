import Widget from '../UI/Widget';
import './SocialConnectWidget.css';
import socialFBImg from '../../img/facebook-f.png';
import socialTwitterImg from '../../img/twitter.png';
import socialInstagramImg from '../../img/instagram.png';
import socialLinkedinImg from '../../img/linkedin-in.png';

const DUMMY_SOCIALS = [
  {
    id: 's1',
    img: socialFBImg,
    href: 'https://www.facebook.com/',
  },
  {
    id: 's2',
    img: socialTwitterImg,
    href: 'https://twitter.com/',
  },
  {
    id: 's3',
    img: socialInstagramImg,
    href: 'https://www.instagram.com/',
  },
  {
    id: 's4',
    img: socialLinkedinImg,
    href: 'https://www.linkedin.com/',
  },
];

const SocialConnectWidget = () => {
  const socialConnects = DUMMY_SOCIALS.map((social) => (
    <li className='SocialConnect__item' key={social.id}>
      <a href={social.href} target='_blank' rel='noreferrer'>
        <div className='SocialConnect__img'>
          <img src={social.img} alt='' />
        </div>
      </a>
    </li>
  ));

  return (
    <Widget className='SocialConnect__content' widgetName='Social Connect'>
      <ul className='SocialConnect__list'>{socialConnects}</ul>
    </Widget>
  );
};

export default SocialConnectWidget;
