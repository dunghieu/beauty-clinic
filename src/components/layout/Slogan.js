import './Slogan.css';

const Slogan = (props) => {
  return (
    <section className='Slogan'>
      <div
        className='Slogan__wrapper'
        style={{backgroundImage: `url(${props.slogan})`}}
      >
        <div className='Slogan__info'>
          <span>{props.sloganName}</span>
          <h2>{props.sloganTitle}</h2>
          <p>{props.sloganDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
