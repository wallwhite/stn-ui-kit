import cx from 'clsx';
import styles from './label.module.scss';

export const labelCX = {
  label: ({ isWide }: Record<'isWide', Maybe<boolean>>, classNames?: string): string =>
    cx(styles.label, classNames, {
      [styles.wide]: isWide,
    }),
  labelText: (classNames?: string): string => cx(styles.labelText, classNames),
  labelContent: (classNames?: string): string => cx(styles.labelContent, classNames),
};
