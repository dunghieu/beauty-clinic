import Section from '../UI/Section';
import './SkinTreatements.css';
import skinTreatementsImg from '../../img/SectionImg4.png';

const SkinTreatements = () => {
  const skinTreatementsName = 'Skin Treatements';
  const skinTreatementsTitle = 'Skin care and treatment by expert';
  const skinTreatementsDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.';

  return (
    <section className='SkinTreatements'>
      <div className='SkinTreatements__wrapper'>
        <Section
          isServicePage={true}
          sectionImg={skinTreatementsImg}
          sectionName={skinTreatementsName}
          sectionTitle={skinTreatementsTitle}
          sectionDescription={skinTreatementsDescription}
        />
      </div>
    </section>
  );
};

export default SkinTreatements;
