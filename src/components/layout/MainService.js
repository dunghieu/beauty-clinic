import Card from '../UI/Card';
import Info from '../UI/Info';
import './MainService.css';
import mainServiceImg1 from '../../img/Core1.png';
import mainServiceImg2 from '../../img/Core2.png';
import mainServiceImg3 from '../../img/Core3.png';

const MainService = () => {
  return (
    <section className='MainService '>
      <div className='MainService__wrapper'>
        <Info className='MainService__Info'>
          <span>Main Services</span>
          <h2> Learn services to focus on your beauty</h2>
          <p>
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non
            massa. Non parturient amet, feugiat tellus sagittis, scelerisque
            eget nulla turpis
          </p>
        </Info>
        <div className='MainService__item '>
          <Card
            image={mainServiceImg1}
            name='Beauty consultation'
            describe='Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'
          />
          <Card
            image={mainServiceImg2}
            name='Skin treatments'
            describe='Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'
          />
          <Card
            image={mainServiceImg3}
            name='Beauty product'
            describe='Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.'
          />
        </div>
      </div>
    </section>
  );
};

export default MainService;
