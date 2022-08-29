import './AboutUs.css';
import Info from '../UI/Info';
import Button from '../UI/Button';
import playBtn from '../../img/Play_button.png';
import aboutImg from '../../img/AboutUsImg.png';

const AboutUs = () => {
  return (
    <section className='AboutUs '>
      <div className='AboutUs__wrapper'>
        <div className='AboutUs__content'>
          <div className='AboutUs__content-left'>
            <Info className='AboutUs__content-info'>
              <span>About Us</span>
              <h2>We are the best beauty clinic</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat. <br />
                <br />
                Id dui erat sed quam tellus in purus. Pellentesque congue
                fringilla cras tellus enim.
              </p>
            </Info>
            <div className='AboutUs__content-btnGroup'>
              <Button className='AboutUs__content-btnLeft'>Learn More</Button>
              <button className='AboutUs__content-btnRight'>
                <img src={playBtn} width='49' height='49' alt='icon' />
                <span>Watch Video</span>
              </button>
            </div>
          </div>
          <div className='AboutUs__content-right'>
            <img className='AboutUs__content-image' src={aboutImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
