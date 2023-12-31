import cx from 'clsx';
import styles from './chat-layout.module.scss';

export const chatLayoutCX = {
  wrapper: (): string => styles.wrapper,
  header: (): string => cx(styles.header),
  title: (): string => cx(styles.title),
  actions: (): string => cx(styles.actions),
  action: (): string => cx(styles.action),
};
