import Section from '../UI/Section';
import './BeautyProduct.css';
import beautyProductImg from '../../img/SectionImg5.png';

const BeautyProduct = () => {
  const beautyProductName = 'Beauty Product';
  const beautyProductTitle = 'We present quality beauty products';
  const beautyProductDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.';
  return (
    <section className="BeautyProduct">
      <div className="BeautyProduct__wrapper">
        <Section
          sectionName={beautyProductName}
          sectionTitle={beautyProductTitle}
          sectionDescription={beautyProductDescription}
          sectionImg={beautyProductImg}
        >
          <div className="Section__link">Make an Appointment</div>
        </Section>
      </div>
    </section>
  );
};

export default BeautyProduct;
