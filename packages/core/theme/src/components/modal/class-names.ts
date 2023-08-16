import cx from 'clsx';
import styles from './modal.module.scss';

export const modalCX = {
  modal: (className?: string): string => cx(styles.modal, className),
  overlay: (className?: string): string => cx(styles.modalOverlay, className),
};

export const modalBodyCX = {
  modalBody: (className?: string): string => cx(styles.modalBody, className),
};

export const modalHeaderCX = {
  modalHeader: (className?: string): string => cx(styles.modalHeader, className),
};

export const modalFooterCX = {
  modalFooter: (className?: string): string => cx(styles.modalFooter, className),
};
