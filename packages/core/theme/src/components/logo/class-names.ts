import cx from 'clsx';
import styles from './logo.module.scss';

export const logoCX = {
  logo: (classNames?: Maybe<string>): string => cx(styles.logo, classNames),
};
