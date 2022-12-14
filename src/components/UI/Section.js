import Info from './Info';
import './Section.css';

const Section = (props) => {
  return (
    <>
      <div className="Section__main">
        <Info>
          <span>{props.sectionName}</span>
          <h2>{props.sectionTitle}</h2>
          <p>{props.sectionDescription}</p>
          {props.children}
        </Info>
      </div>
      <div className="Section__img">
        <img src={props.sectionImg} alt={props.sectionName} />
      </div>
    </>
  );
};

export default Section;
