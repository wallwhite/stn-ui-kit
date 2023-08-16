import cx from 'clsx';
import styles from './checkbox.module.scss';

export const checkboxCX = {
  checkbox: ({ error }: Record<'error', boolean | string>, classNames?: string): string =>
    cx(styles.checkbox, classNames, {
      [styles.error]: !!error,
    }),
  marker: (classNames?: string): string => cx(styles.marker, classNames),
  hint: (classNames?: string): string => cx(styles.hint, classNames),
};
