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
          sectionName={beautyProductName}
          sectionTitle={beautyProductTitle}
          sectionDescription={beautyProductDescription}
        >
          <img src={beautyProductImg} alt={beautyProductName} />
        </Section>
      </div>
    </section>
  );
};

export default BeautyProduct;
