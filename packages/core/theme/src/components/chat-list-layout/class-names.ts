import cx from 'clsx';
import styles from './chat-list-layout.module.scss';

export const chatListLayoutCX = {
  wrapper: (): string => cx(styles.wrapper),
  header: (): string => cx(styles.header),
  title: (): string => cx(styles.title),
  subtitle: (): string => cx(styles.subtitle),
};
