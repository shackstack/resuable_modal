import { ReactNode, useContext } from 'react';
import { ModalContext } from './Modal';
import { createPortal } from 'react-dom';

interface OverlayProps {
  children: ReactNode;
  style?: string;
}

const portal = document.getElementById('portal');

const Overlay = ({ children, style }: OverlayProps) => {
  const { isModalOpen, closeModal } = useContext(ModalContext);

  return isModalOpen
    ? createPortal(
        <div className={style} onClick={closeModal}>
          {children}
        </div>,
        portal
      )
    : null;
};

export default Overlay;
