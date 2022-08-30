import Professional from '../components/layout/Professional';
import Slogan from '../components/layout/Slogan';
import sloganTeam from '../img/SloganTeam.png';

const sloganTitle = 'Customer satisfaction is our main goal';
const sloganDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis';

const TeamPage = () => {
  return (
    <div className='main'>
      <Professional className='Professional__team' />
      <Slogan
        className='Slogan__team'
        slogan={sloganTeam}
        sloganTitle={sloganTitle}
        sloganDescription={sloganDescription}
      />
    </div>
  );
};

export default TeamPage;
