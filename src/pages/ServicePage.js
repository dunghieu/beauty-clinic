import BeautyConsultation from '../components/services/BeautyConsultation';
import BeautyProduct from '../components/services/BeautyProduct';
import Services from '../components/layout/Services';
import SkinTreatements from '../components/services/SkinTreatements';
import Slogan from '../components/layout/Slogan';
import sloganService from '../img/SloganServices.png';
import playBtn from '../img/PlayBtn.png';
import FAQs from '../components/layout/FAQs';

const sloganTitle = 'Best responsibility and service for our customers';
const sloganDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis';

const ServicePage = () => {
  return (
    <div className='main'>
      <Services />
      <BeautyConsultation />
      <SkinTreatements />
      <BeautyProduct />
      <Slogan
        className='Slogan__service'
        slogan={sloganService}
        sloganTitle={sloganTitle}
        sloganDescription={sloganDescription}
      >
        <img src={playBtn} alt='' />
        <span>Treatments Videos</span>
      </Slogan>
      <FAQs />
    </div>
  );
};

export default ServicePage;
