import cx from 'clsx';
import styles from './radio-group.module.scss';

export const radioGroupCX = {
  group: (classNames?: string): string => cx(styles.group, classNames),
  label: (classNames?: string): string => cx(styles.label, classNames),
};
