import { FC, PropsWithChildren, createContext, useContext, useState } from 'react';
import { getEntityHash } from '@stn-ui/react-utils';
import { ToastItemType } from '../types';
import { ToastContainer } from './toast-container';

export interface ToastContextValue {
  toasts: ToastItemType[];
  notify: (payload: ToastItemType) => void;
  closeToast: (id: string) => void;
  closeAllToasts: () => void;
}

const initialValue: ToastContextValue = {
  toasts: [],
  notify: () => {},
  closeToast: () => {},
  closeAllToasts: () => {},
};

const ToastContext = createContext(initialValue);

export const ToastProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItemType[]>([]);

  const notify = ({ id, ...payload }: ToastItemType): void => {
    setToasts((prevToasts) => {
      const messageHash = getEntityHash(payload.message);
      const newToast = { ...payload, id: id || messageHash };

      const isAlertAlreadyExists = prevToasts.find((toast) => toast.id === newToast.id);
      return isAlertAlreadyExists ? prevToasts : [...prevToasts, newToast];
    });
  };

  const closeToast = (id: string): void => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const closeAllToasts = (): void => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider value={{ toasts, notify, closeToast, closeAllToasts }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export const useToasts = (): ToastContextValue => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error('useToasts must be used within a ToastProvider');
  }

  return context;
};
