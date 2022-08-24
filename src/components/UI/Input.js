import './Input.css';

const Input = (props) => {
  return (
    <div className={`${props.className} input`}>
      {/* <label htmlFor={props.input.id}>{props.label}</label> */}
      <input {...props} />
    </div>
  );
};

export default Input;
