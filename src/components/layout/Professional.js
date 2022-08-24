import './Professional.css';
import Info from '../UI/Info';
import Card from '../UI/Card';
import professionalImg1 from '../../img/Professional1.png';
import professionalImg2 from '../../img/Professional2.png';
import professionalImg3 from '../../img/Professional3.png';
import iconTwitter from '../../img/social-twitter.png';
import iconFacebook from '../../img/social-fb.png';
import iconInstagram from '../../img/social-insta.png';

const socialMedia = [iconTwitter, iconFacebook, iconInstagram];

const Professional = () => {
  return (
    <div className='Professional'>
      <div className='Professional__wrapper'>
        <Info className='Professional__Info'>
          <span>Main Services</span>
          <h2> Learn services to focus on your beauty</h2>
          <p>
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non
            massa. Non parturient amet, feugiat tellus sagittis, scelerisque
            eget nulla turpis
          </p>
        </Info>
        <div className='Professional__item'>
          <Card
            className='Card__none'
            image={professionalImg1}
            title='Surgeon'
            name='Briyan Nevalli'
            describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit'
            contact={socialMedia}
          />
          <Card
            image={professionalImg2}
            title='Dermatologist'
            name='Bella sebastian'
            describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit'
            contact={socialMedia}
          />
          <Card
            className='Card__none'
            title='Stylist expert'
            image={professionalImg3}
            name='Lilly Adams'
            describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit'
            contact={socialMedia}
          />
        </div>
      </div>
    </div>
  );
};

export default Professional;
