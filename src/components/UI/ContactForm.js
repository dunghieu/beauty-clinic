import './ContactForm.css';
import Button from '../UI/Button';
import contactImg from '../../img/ContactUsImg.png';
import Input from '../UI/Input';

const ContactForm = (props) => {
  return (
    <form className='Contact__form'>
      <div className='Contact__form__img'>
        <img src={contactImg} alt='img' />
      </div>
      <div className='Contact__form__main'>
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
    </form>
  );
};

export default ContactForm;
