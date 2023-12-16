import { ReactNode } from 'react';
import { create } from 'zustand';

export interface State {
  isModalOpen: boolean;
  currentModalContent: ReactNode;
}

export interface Action {
  openModal: ({ content }: { content: ReactNode }) => void;
  closeModal: () => void;
}

const useModalStore = create<State & Action>((set) => ({
  isModalOpen: false,
  currentModalContent: null,

  openModal: ({ content }) =>
    set(() => ({ isModalOpen: true, currentModalContent: content })),
  closeModal: () =>
    set(() => ({ isModalOpen: false, currentModalContent: null })),
}));

export default useModalStore;
