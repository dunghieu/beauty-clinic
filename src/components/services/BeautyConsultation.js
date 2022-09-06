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
          sectionName={beautyConsultationName}
          sectionTitle={beautyConsultationTitle}
          sectionDescription={beautyConsultationDescription}
        >
          <img src={beautyConsultationImg} alt={beautyConsultationName} />
        </Section>
      </div>
    </section>
  );
};

export default BeautyConsultation;
