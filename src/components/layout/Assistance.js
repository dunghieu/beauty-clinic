import Info from '../UI/Info';
import './Assistance.css';
import assistanceImg1 from '../../img/AssistanceImg1.png';
import assistanceImg2 from '../../img/AssistanceImg2.png';
import assistanceImg3 from '../../img/AssistanceImg3.png';

const Assistance = () => {
  return (
    <section className='Assistance'>
      <div className='Assistance__wrapper'>
        <Info className='Assistance__info'>
          <span>Assistance Team</span>
          <h2>Meet the pro assistance</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </Info>
        <div className='Assistance__profiles'>
          <div className='Assistance__profile'>
            <img src={assistanceImg1} alt='assistance' />
            <div className='Assistance__profile-info'>
              <div>
                <span>Lina Gustav / </span>
                <span>Pharmacist</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </p>
            </div>
          </div>
          <div className='Assistance__profile'>
            <img src={assistanceImg2} alt='assistance' />
            <div className='Assistance__profile-info'>
              <div>
                <span>Adam White / </span>
                <span>Finance</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </p>
            </div>
          </div>
          <div className='Assistance__profile'>
            <img src={assistanceImg3} alt='assistance' />
            <div className='Assistance__profile-info'>
              <div>
                <span>Jane Doe / </span>
                <span>Marketer</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistance;
