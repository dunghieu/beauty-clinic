import './Widget.css';

const Widget = (props) => {
  return (
    <div className={`Widget `}>
      <div className='Widget__name'>{props.widgetName}</div>
      <div className={`Widget__content ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Widget;
