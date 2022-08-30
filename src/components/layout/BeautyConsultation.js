import Section from '../UI/Section';
import './BeautyConsultation.css';
import beautyConsultationImg from '../../img/SectionImg3.png';

const BeautyConsultation = () => {
  const beautyConsultationName = 'Beauty Consultation';
  const beautyConsultationTitle = 'We services beauty consultation';
  const beautyConsultationDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.';

  return (
    <section className='BeautyConsultation'>
      <div className='BeautyConsultation__wrapper'>
        <Section
          isServicePage={true}
          sectionImg={beautyConsultationImg}
          sectionName={beautyConsultationName}
          sectionTitle={beautyConsultationTitle}
          sectionDescription={beautyConsultationDescription}
        />
      </div>
    </section>
  );
};

export default BeautyConsultation;
