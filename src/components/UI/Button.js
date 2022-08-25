import './Button.css';

const Button = (props) => {
  return (
    <button className={`${props.className} button`} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
