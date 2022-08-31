import Assistance from '../components/layout/Assistance';
import Professional from '../components/layout/Professional';
import Slogan from '../components/layout/Slogan';
import Testimonials from '../components/layout/Testimonials';
import sloganTeam from '../img/SloganTeam.png';

const sloganTitle = 'Customer satisfaction is our main goal';
const sloganDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis';

const professionalName = 'Our Team';
const professionalTitle = 'We are Professional';
const professionalDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.';

const TeamPage = () => {
  return (
    <div className='main'>
      <Professional
        className='Professional__team'
        professionalName={professionalName}
        professionalTitle={professionalTitle}
        professionalDescription={professionalDescription}
      />
      <Assistance />
      <Slogan
        className='Slogan__team'
        slogan={sloganTeam}
        sloganTitle={sloganTitle}
        sloganDescription={sloganDescription}
      />
      <Testimonials />
    </div>
  );
};

export default TeamPage;
