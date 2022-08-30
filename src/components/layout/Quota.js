import Section from '../UI/Section';
import './Quota.css';
import Button from '../UI/Button';

const quotaName = 'Get The Quota';
const quotaTitle = 'Want to be handled by our professional team immediately?';
const quotaDescription = `Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.`;

const Quota = () => {
  return (
    <section className='Quota'>
      <div className='Quota__wrapper'>
        <Section
          sectionName={quotaName}
          sectionTitle={quotaTitle}
          sectionDescription={quotaDescription}
        >
          <Button>Make an Appointment</Button>
        </Section>
      </div>
    </section>
  );
};

export default Quota;
