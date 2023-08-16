import cx from 'clsx';
import styles from './toasts.module.scss';

export const toastContainerCX = {
  container: (): string => styles.container,
};

export const toastCX = {
  toast: ({ type }: Record<'type', string>): string =>
    cx(styles.toast, {
      [styles?.[type]]: type,
    }),
  body: (): string => styles.body,
  icon: (): string => styles.icon,
  close: (): string => styles.close,
  message: (): string => styles.message,
};
