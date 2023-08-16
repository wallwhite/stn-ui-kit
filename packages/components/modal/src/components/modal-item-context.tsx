import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { ModalItemProps } from '../types';

export const ModalItemContext = createContext<ModalItemProps>({
  isOpen: false,
  onRequestClose: () => {},
  style: {},
});

export const ModalItemProvider: FC<PropsWithChildren<ModalItemProps>> = ({ children, ...props }) => (
  <ModalItemContext.Provider value={props}>{children}</ModalItemContext.Provider>
);

export const useModalItemContext = (): ModalItemProps => {
  const context = useContext(ModalItemContext);

  if (context === undefined) {
    throw new Error('useModalItemContext must be used within a ModalItemProvider');
  }

  return context;
};
