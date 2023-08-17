import cx from 'clsx';
import styles from './static-layout.module.scss';

export const staticLayoutCX = {
  wrapper: (className?: string): string => cx(styles.wrapper, className),
  header: (className?: string): string => cx(styles.header, className),
  title: (className?: string): string => cx(styles.title, className),
  subtitle: (className?: string): string => cx(styles.subtitle, className),
  content: (className?: string): string => cx(styles.content, className),
};
