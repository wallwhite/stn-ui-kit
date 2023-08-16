import cx from 'clsx';
import styles from './add-category-form.module.scss';

export const addCategoryFormCX = {
  wrapper: (className?: string): string => cx(styles.wrapper, className),
};
