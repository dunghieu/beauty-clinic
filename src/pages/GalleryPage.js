import Gallery from '../components/layout/Gallery';
import Slogan from '../components/layout/Slogan';
import sloganGallery from '../img/SloganGallery.png';
import playBtn from '../img/PlayBtn.png';
import Quota from '../components/layout/Quota';

const sloganTitle = 'Watch the video tour';
const sloganDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis';

const GalleryPage = () => {
  return (
    <div className='main'>
      <Gallery />
      <Slogan
        className='Slogan__gallery'
        slogan={sloganGallery}
        sloganTitle={sloganTitle}
        sloganDescription={sloganDescription}
      >
        <img src={playBtn} alt='' />
      </Slogan>
      <Quota />
    </div>
  );
};

export default GalleryPage;
