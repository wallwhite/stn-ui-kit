import React, { ComponentType, createContext, PropsWithChildren, useState, useCallback, useContext } from 'react';
import unionWith from 'lodash.unionwith';
import { ModalItem } from '../types';
import ModalLauncher from './modal-launcher';

export interface ModalContextValue {
  modals: ModalItem[];
  modalComponents: Record<string, ComponentType>;
  openModal: (modal: ModalItem) => void;
  closeModal: (modalName?: string) => void;
  closeAllModals: () => void;
}

const initialValue: ModalContextValue = {
  modals: [],
  modalComponents: {},
  openModal: () => {},
  closeModal: () => {},
  closeAllModals: () => {},
};

const ModalContext = createContext<ModalContextValue>(initialValue);

interface ModalLauncherProviderProps {
  modalComponents: Record<string, ComponentType>;
}

export const ModalProvider: React.FC<PropsWithChildren<ModalLauncherProviderProps>> = ({
  children,
  modalComponents,
}) => {
  const [modals, setModals] = useState<ModalItem[]>([]);

  const openModal = useCallback(
    (newModal: ModalItem): void => {
      setModals((currentModals) =>
        unionWith(currentModals, [newModal], (a: ObjectLiteral, b: ObjectLiteral) => a.name === b.name),
      );
    },
    [modals],
  );

  const closeModal = useCallback(
    (modalName?: string): void => {
      if (!modalName) {
        setModals((currentModals) => currentModals.slice(0, -1));
        return;
      }

      setModals((currentModals) => currentModals.filter((modal) => modal.name !== modalName));
    },
    [modals],
  );

  const closeAllModals = useCallback(() => setModals([]), []);

  return (
    <ModalContext.Provider
      value={{
        modals,
        modalComponents,
        openModal,
        closeModal,
        closeAllModals,
      }}
    >
      {children}
      <ModalLauncher />
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalContextValue => {
  const context = useContext(ModalContext);

  return context;
};

export const useModals = (): Omit<ModalContextValue, 'modals' | 'modalComponents' | 'ModalFallback'> => {
  const { openModal, closeModal, closeAllModals } = useModalContext();

  return {
    openModal,
    closeModal,
    closeAllModals,
  };
};
