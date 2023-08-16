import cx from 'clsx';
import styles from './form-row.module.scss';

export const formRowCX = {
  row: ({ isSplit }: Record<'isSplit', boolean>, classNames?: string): string =>
    cx(styles.formRow, classNames, {
      [styles.split]: isSplit,
    }),
};
