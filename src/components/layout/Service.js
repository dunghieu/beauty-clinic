import Card from '../UI/Card';
import Info from '../UI/Info';
import './Service.css';
import serviceImg1 from '../../img/Core1.png';
import serviceImg2 from '../../img/Core2.png';
import serviceImg3 from '../../img/Core3.png';

const Service = () => {
  return (
    <div className="Service ">
      <div className="Service__wrapper">
        <Info>
          <span>Main Services</span>
          <h2> Learn services to focus on your beauty</h2>
          <p>
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient
            amet, feugiat tellus sagittis, scelerisque eget nulla turpis
          </p>
        </Info>
        <div className="Service__item ">
          <Card
            image={serviceImg1}
            name="Beauty consultation"
            describe="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
          />
          <Card
            image={serviceImg2}
            name="Skin treatments"
            describe="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
          />
          <Card
            image={serviceImg3}
            name="Beauty product"
            describe="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
