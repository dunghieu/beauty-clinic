import Section from '../UI/Section';
import './BeautyProduct.css';
import beautyProductImg from '../../img/SectionImg5.png';

const BeautyProduct = () => {
  const beautyProductName = 'Beauty Product';
  const beautyProductTitle = 'We present quality beauty products';
  const beautyProductDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.';
  return (
    <section className='BeautyProduct'>
      <div className='BeautyProduct__wrapper'>
        <Section
          isServicePage={true}
          sectionImg={beautyProductImg}
          sectionName={beautyProductName}
          sectionTitle={beautyProductTitle}
          sectionDescription={beautyProductDescription}
        />
      </div>
    </section>
  );
};

export default BeautyProduct;
