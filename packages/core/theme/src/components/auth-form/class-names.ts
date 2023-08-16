import cx from 'clsx';
import styles from './auth-form.module.scss';

export const authFormCX = {
  wrapper: (): string => cx(styles.wrapper),
  form: (): string => cx(styles.form),
  logo: (): string => cx(styles.logo),
  addon: (): string => cx(styles.addon),
};
