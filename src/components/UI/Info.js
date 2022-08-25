import './Info.css';

const Info = (props) => {
  return <div className={`${props.className} Info`}>{props.children}</div>;
};

export default Info;
