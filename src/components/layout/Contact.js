import './Contact.css';
import Info from '../UI/Info';
import Button from '../UI/Button';
import contactImg from '../../img/ContactUsImg.png';
import Input from '../UI/Input';

const Contact = () => {
  return (
    <section className='Contact'>
      <div className='Contact__wrapper'>
        <div className='Contact__container'>
          <div className='Contact__left'>
            <img src={contactImg} alt='img' />
          </div>
          <div className='Contact__right'>
            <Info className='Contact__info'>
              <span>Contact Us</span>
              <h2>Send your inquiry to our expert team</h2>
              <p>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
            </Info>
            <div className='Contact__form'>
              <div className='Contact__rowname'>
                <Input type='text' placeholder='First name' />
                <Input type='text' placeholder='Last name' />
              </div>
              <Input type='text' placeholder='Email address' />
              <Input type='text' placeholder='Subject message' />
              <textarea placeholder='Your inquiry here'></textarea>
              <div>
                <Button>Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
