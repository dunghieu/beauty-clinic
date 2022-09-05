/* eslint-disable jsx-a11y/anchor-is-valid */
import './Card.css';

const Card = (props) => {
  return (
    <div className={`${props.className} Card`}>
      <div className="Card__wrapper">
        <div className="Card__image">
          <img src={props.image} alt="img" />
        </div>
        <div className="Card__info">
          <span className="Card__info-title">{props.title}</span>
          <h3 className="Card__info-name">{props.name}</h3>
          <p className="Card__info-describe">{props.describe}</p>
        </div>
        <div className="Card__contact">
          {props.contact &&
            props.contact.map((item, index) => (
              <a href="#" key={index}>
                <img src={item} alt="img" />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
