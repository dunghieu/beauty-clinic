import Section from '../UI/Section';
import './Vision.css';
import visionImg from '../../img/SectionImg1.png';

const Vision = () => {
  const visionName = 'Our Vision';
  const visionTitle = 'Be the best and go international';
  const visionDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.

  Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.`;

  return (
    <section className='Vision'>
      <div className='Vision__wrapper'>
        <Section
          sectionName={visionName}
          sectionTitle={visionTitle}
          sectionDescription={visionDescription}
        >
          <img src={visionImg} alt={visionName} />
        </Section>
      </div>
    </section>
  );
};

export default Vision;
