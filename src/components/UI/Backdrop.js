import './Backdrop.css';
import { createPortal } from 'react-dom';

const Backdrop = (props) => {
  return <div className="backdrop" />;
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return <>{createPortal(<Backdrop />, portalElement)}</>;
};

export default Modal;
