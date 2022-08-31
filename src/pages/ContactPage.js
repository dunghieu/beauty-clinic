import Contact from '../components/layout/Contact';
import ContactInfo from '../components/layout/ContactInfo';
import Info from '../components/UI/Info';

const contactPageInfo = (
  <Info className='ContactPage__info'>
    <div>
      <span>Contact Us</span>
      <h2>Contact service for our customers</h2>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis
      </p>
    </div>
  </Info>
);

const ContactPage = () => {
  return (
    <div className='main'>
      <Contact className='ContactPage'>{contactPageInfo}</Contact>
      <section className='map'></section>
      <ContactInfo />
    </div>
  );
};

export default ContactPage;
