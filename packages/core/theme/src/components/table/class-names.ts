import cx from 'clsx';
import styles from './table-styles.module.scss';

interface TdClassNamesInput {
  colSpan: number;
  isHidden: boolean;
}

interface TrClassNamesInput {
  isInteractive: boolean;
}

export const tableCX = {
  table: (classNames?: string): string => cx(styles.table, classNames),
  tBody: (classNames?: string): string => cx(styles.tbody, classNames),
  tFoot: (classNames?: string): string => cx(styles.tfoot, classNames),
  tHead: (classNames?: string): string => cx(styles.thead, classNames),
  tr: ({ isInteractive }: TrClassNamesInput, classNames?: string): string =>
    cx(styles.tr, classNames, {
      [styles.interactive]: isInteractive,
    }),
  td: ({ colSpan, isHidden }: TdClassNamesInput, classNames?: string): string =>
    cx(styles.td, classNames, {
      [styles[`colSpan-${colSpan}`]]: colSpan,
      [styles.hidden]: isHidden,
    }),
  trPlaceholder: (classNames?: string): string => cx(styles.placeholder, classNames),
};
