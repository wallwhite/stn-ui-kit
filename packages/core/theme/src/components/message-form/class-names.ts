import cx from 'clsx';
import styles from './message-form.module.scss';

export const messageFormCX = {
  wrapper: (): string => cx(styles.wrapper),
};

export const messageFormSubmitCX = {
  wrapper: (): string => cx(styles.submitWrapper),
};
