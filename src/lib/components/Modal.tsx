import { ReactNode, createContext } from 'react';
import useModalState from '../hooks/useModalState';
import Overlay from './Overlay';
import Trigger from './Trigger';
import Content from './Content';
import Closer from './Closer';

interface ModalContextState {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextState>(
  {} as ModalContextState
);

interface ModalProps {
  isOpen?: boolean;
  children: ReactNode;
}

const Modal = ({ isOpen = false, children }: ModalProps) => {
  const value = useModalState(isOpen);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

Modal.Trigger = Trigger;
Modal.Overlay = Overlay;
Modal.Content = Content;
Modal.Closer = Closer;

export default Modal;
