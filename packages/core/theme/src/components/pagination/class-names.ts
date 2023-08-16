import cx from 'clsx';
import styles from './pagination.module.scss';

export const paginationCX = {
  pagination: (classNames?: string): string => cx(styles.pagination, classNames),
};
