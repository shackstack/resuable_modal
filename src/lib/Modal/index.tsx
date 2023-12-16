import Root from './components/Modal';
import Closer from './components/Closer';
import Overlay from './components/Overlay';
import Trigger from './components/Trigger';

const Modal = Object.assign(Root, {
  Trigger,
  Overlay,
  Closer,
});

export default Modal;
