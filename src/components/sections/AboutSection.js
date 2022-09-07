import Section from '../UI/Section';
import AboutSectionImg from '../../img/SectionImg1.png';
import Button from '../UI/Button';
import './AboutSection.css';

const AboutSection = () => {
  const AboutSectionName = 'About Us';
  const AboutSectionTitle = 'We are the best beauty clinic';
  const AboutSectionDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.';
  return (
    <section className="AboutSection">
      <div className="AboutSection__wrapper">
        <Section
          sectionName={AboutSectionName}
          sectionTitle={AboutSectionTitle}
          sectionDescription={AboutSectionDescription}
          sectionImg={AboutSectionImg}
        >
          <div className="AboutSection__btn">
            <Button>Learn More</Button>
          </div>
        </Section>
      </div>
    </section>
  );
};

export default AboutSection;
