import './Contact.css';
import ContactForm from '../UI/ContactForm';

const Contact = (props) => {
  return (
    <section className={`Contact ${props.className}`}>
      <div className='Contact__wrapper'>
        {props.children}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
