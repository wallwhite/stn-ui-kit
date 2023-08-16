import cx from 'clsx';
import styles from './auth-layout.module.scss';

export const authLayoutCX = {
  wrapper: (): string => cx(styles.wrapper),
  content: (): string => cx(styles.content),
  motto: (): string => cx(styles.motto),
  title: (): string => cx(styles.title),
  subtitle: (): string => cx(styles.subtitle),
  image: (): string => cx(styles.image),
  form: (): string => cx(styles.form),
};
