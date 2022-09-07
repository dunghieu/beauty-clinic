/* eslint-disable jsx-a11y/anchor-is-valid */
import Card from '../UI/Card2';
import Info from '../UI/Info';
import './MainService2.css';
import MainService2Img1 from '../../img/Card2Img1.png';
import MainService2Img2 from '../../img/Card2Img2.png';
import MainService2Img3 from '../../img/Card2Img3.png';

const MainService2 = () => {
  return (
    <section className="MainService2 ">
      <div className="MainService2__wrapper">
        <Info className="MainService2__Info">
          <span>Main Services</span>
          <h2> Our focus services</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </Info>
        <div className="MainService2__item ">
          <Card
            image={MainService2Img1}
            title="Beauty consultation"
            describe="Lorem ipsum dolor sit amet, consectetur adipiscing."
          >
            <a href="#">Learn more</a>
          </Card>
          <Card
            image={MainService2Img2}
            title="Skin treatments"
            describe="Lorem ipsum dolor sit amet, consectetur adipiscing."
          >
            <a href="#">Learn more</a>
          </Card>
          <Card
            image={MainService2Img3}
            title="Beauty product"
            describe="Lorem ipsum dolor sit amet, consectetur adipiscing."
          >
            <a href="#">Learn more</a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MainService2;
