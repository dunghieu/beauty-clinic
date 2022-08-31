import './ContactInfo.css';
import Info from '../UI/Info';
import Card from '../UI/Card';
import contactsImg1 from '../../img/ContactsImg1.png';
import contactsImg2 from '../../img/ContactsImg2.png';
import contactsImg3 from '../../img/ContactsImg3.png';

const ContactInfo = () => {
  return (
    <section className='ContactInfo'>
      <div className='ContactInfo__wrapper'>
        <Info className='ContactInfo__info'>
          <div>
            <span>Get in Touch</span>
            <h2>Get direct handling by us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </p>
          </div>
          <div className='Contacts'>
            <Card
              className='Contacts__card Card__none'
              image={contactsImg1}
              title='Address'
              name='101 Baker Street, NY'
              describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit'
            />
            <Card
              className='Contacts__card'
              image={contactsImg2}
              title='Phone'
              name='+896 120 5889'
              describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit'
            />
            <Card
              className='Contacts__card  Card__none'
              image={contactsImg3}
              title='Mail'
              name='mail@company.com'
              describe='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit'
            />
          </div>
        </Info>
      </div>
    </section>
  );
};

export default ContactInfo;
