import Info from '../UI/Info';
import './Services.css';
import servicesImg1 from '../../img/ServicesImg1.png';
import servicesImg2 from '../../img/ServicesImg2.png';
import servicesImg3 from '../../img/ServicesImg3.png';
import servicesImg4 from '../../img/ServicesImg4.png';

const Services = () => {
  return (
    <section className='Services'>
      <div className='Services__wrapper'>
        <Info className='Services__Info'>
          <span>Our Services</span>
          <h2> We focus on your beauty</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </Info>
        <div className='Services__item'>
          <div className='Services__item__wrapper'>
            <span>
              <img src={servicesImg1} alt='img' />
            </span>
            <span>
              <img src={servicesImg2} alt='img' />
            </span>
            <span>
              <img src={servicesImg3} alt='img' />
            </span>
            <span>
              <img src={servicesImg4} alt='img' />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
