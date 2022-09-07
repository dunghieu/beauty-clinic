/* eslint-disable jsx-a11y/anchor-is-valid */
import './Card2.css';

const Card2 = (props) => {
  return (
    <div className={`${props.className} Card2`}>
      <div className="Card2__wrapper">
        <div className="Card2__image">
          <img src={props.image} alt="img" />
        </div>
        <div className="Card2__info">
          <h2 className="Card2__info-title">{props.title}</h2>
          <p className="Card2__info-describe">{props.describe}</p>
        </div>
        <div className="Card2__link">{props.children}</div>
        {/* <div className="Card__contact">
          {props.contact &&
            props.contact.map((item, index) => (
              <a href="#" key={index}>
                <img src={item} alt="img" />
              </a>
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default Card2;
