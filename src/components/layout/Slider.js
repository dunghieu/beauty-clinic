/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '../UI/Button';
import './Slider.css';
import slideImg from '../../img/SlideImg.png';

const Slider = () => {
  return (
    <div className='Slider '>
      <div className='Slider__wrapper  '>
        <div className='Slider__main '>
          <div className='Slider__main-left '>
            <h1 className='Slider__main-title'>Clinic & beauty consultant</h1>
            <p className='Slider__main-describe'>
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
            <Button>More Details</Button>
          </div>
          <div className='Slider__main-right '>
            <img src={slideImg} width='100%' height='100%' alt='img_Slider' />
          </div>
        </div>
        <button className='Slider__button'></button>
      </div>
    </div>
  );
};

export default Slider;
