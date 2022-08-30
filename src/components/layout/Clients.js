import './Clients.css';
import Info from '../UI/Info';
import clientLogo1 from '../../img/ClientLogo1.png';
import clientLogo2 from '../../img/ClientLogo2.png';
import clientLogo3 from '../../img/ClientLogo3.png';
import clientLogo4 from '../../img/ClientLogo4.png';
import clientLogo5 from '../../img/ClientLogo5.png';

const Clients = () => {
  return (
    <section className='Clients'>
      <div className='Clients__wrapper'>
        <Info>
          <span>Our Clients</span>
          <h2>Well-known agencies</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Info>
        <div className='Clients__list'>
          <span>
            <img src={clientLogo1} alt='' />
          </span>
          <span>
            <img src={clientLogo2} alt='' />
          </span>
          <span>
            <img src={clientLogo3} alt='' />
          </span>
          <span>
            <img src={clientLogo4} alt='' />
          </span>
          <span>
            <img src={clientLogo5} alt='' />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Clients;
