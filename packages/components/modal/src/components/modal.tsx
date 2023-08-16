import { FC } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import { modalCX } from '@stn-ui/theme';

export interface ModalProps extends Omit<ReactModalProps, 'appElement' | 'bodyOpenClassName' | 'preventScroll'> {
  className?: string;
}

export const Modal: FC<ModalProps> = ({ children, className, ...props }) => (
  <ReactModal
    {...props}
    appElement={document.getElementById('root') as HTMLElement}
    className={modalCX.modal(className)}
    overlayClassName={modalCX.overlay()}
  >
    {children}
  </ReactModal>
);
