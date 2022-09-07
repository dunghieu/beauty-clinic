import Section from '../UI/Section';
import './Mission.css';
import missionImg from '../../img/SectionImg2.png';

const Mission = () => {
  const missionName = 'Our Mission';
  const missionTitle = 'Special & premium service to any clients';
  const missionDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.

  Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.`;

  return (
    <section className="Mission">
      <div className="Mission__wrapper">
        <Section
          sectionName={missionName}
          sectionTitle={missionTitle}
          sectionDescription={missionDescription}
          sectionImg={missionImg}
        ></Section>
      </div>
    </section>
  );
};

export default Mission;
