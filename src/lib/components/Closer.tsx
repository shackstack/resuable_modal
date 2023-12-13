import { ReactElement, cloneElement, useContext } from 'react';
import { ModalContext } from './Modal';

interface CloserProps {
  as: ReactElement;
}

const Closer = ({ as }: CloserProps) => {
  const { closeModal } = useContext(ModalContext);

  return cloneElement(as, { onClick: closeModal });
};

export default Closer;
