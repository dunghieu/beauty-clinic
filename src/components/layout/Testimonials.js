import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Info from '../UI/Info';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';
import star from '../../img/Star.png';
import testimonialImg1 from '../../img/TestimonialImg1.png';
import testimonialImg2 from '../../img/TestimonialImg2.png';
import testimonialImg3 from '../../img/TestimonialImg3.png';

const Testimonials = () => {
  return (
    <section className='Testimonials'>
      <div className='Testimonials__wrapper'>
        <Info className='Testimonials__info'>
          <span>Our Testimonials</span>
          <h2>What our customer says</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </Info>
        <Swiper
          className='Testimonials__swiper'
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination
          loop={true}
        >
          <SwiperSlide>
            <div className='Testimonials__swiper-wrapper'>
              <img src={testimonialImg1} alt='testimonial' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus metus tincidunt laoreet ultricies condimentum ac
                integer aliquam. Lorem diam dignissim amet fermentum elementum
                dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut.
                Purus volutpat in turpis gravida blandit.
              </p>
              <img className='star-rate' src={star} alt='star' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Testimonials__swiper-wrapper'>
              <img
                className='Testimonials__avt'
                src={testimonialImg2}
                alt='testimonial'
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus metus tincidunt laoreet ultricies condimentum ac
                integer aliquam. Lorem diam dignissim amet fermentum elementum
                dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut.
                Purus volutpat in turpis gravida blandit.
              </p>
              <img className='star-rate' src={star} alt='star' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Testimonials__swiper-wrapper'>
              <img src={testimonialImg3} alt='testimonial' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus metus tincidunt laoreet ultricies condimentum ac
                integer aliquam. Lorem diam dignissim amet fermentum elementum
                dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut.
                Purus volutpat in turpis gravida blandit.
              </p>

              <img className='star-rate' src={star} alt='star' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
