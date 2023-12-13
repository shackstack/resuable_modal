import { ReactElement, cloneElement, useContext } from 'react';
import { ModalContext } from './Modal';

interface TriggerProps {
  as: ReactElement;
}

const Trigger = ({ as }: TriggerProps) => {
  const { openModal } = useContext(ModalContext);

  return cloneElement(as, { onClick: openModal });
};

export default Trigger;
