import Info from '../UI/Info';
import './Gallery.css';
import galleryImg1 from '../../img/GalleryImg1.png';
import galleryImg2 from '../../img/GalleryImg2.png';
import galleryImg3 from '../../img/GalleryImg3.png';
import galleryImg4 from '../../img/GalleryImg4.png';
import galleryImg5 from '../../img/GalleryImg5.png';
import galleryImg6 from '../../img/GalleryImg6.png';
import galleryImg7 from '../../img/GalleryImg7.png';
import galleryImg8 from '../../img/GalleryImg8.png';
import galleryImg9 from '../../img/GalleryImg9.png';

const Gallery = () => {
  return (
    <section className='Gallery'>
      <div className='Gallery__wrapper'>
        <Info className='Gallery__Info'>
          <div className='Gallery__Info-left'>
            <span>Our Gallery</span>
            <h2> Check out the collection pictures from our clinic</h2>
          </div>
          <div className='Gallery__Info-right'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>
        </Info>
        <div className='Gallery__grid'>
          <div className='Gallery__item'>
            <img src={galleryImg1} alt='gallery' />
          </div>
          <div className='Gallery__item'>
            <img src={galleryImg2} alt='gallery' />
          </div>
          <div className='Gallery__item'>
            <img src={galleryImg3} alt='gallery' />
          </div>
          <div className='Gallery__item'>
            <img src={galleryImg4} alt='gallery' />
          </div>
          <div className='Gallery__item'>
            <img src={galleryImg5} alt='gallery' />
          </div>
          <div className='Gallery__item'>
            <img src={galleryImg6} alt='gallery' />
          </div>
          <div className='Gallery__item'>
            <img src={galleryImg7} alt='gallery' />
          </div>
          <div className='Gallery__item'>
            <img src={galleryImg8} alt='gallery' />
          </div>
          <div className='Gallery__item'>
            <img src={galleryImg9} alt='gallery' />
          </div>
        </div>
        <div className='Gallery__Info-sub'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim,<strong> our teams.</strong>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
