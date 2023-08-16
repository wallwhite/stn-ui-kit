import cx from 'clsx';
import styles from './navigation.module.scss';

export const navigationCX = {
  navigation: ({ isExpanded }: Record<'isExpanded', boolean>, classNames?: string): string =>
    cx(styles.navigation, classNames, {
      [styles.expanded]: isExpanded,
    }),
  navigationItem: ({ isExpanded, isActive }: Record<'isExpanded' | 'isActive', boolean>): string =>
    cx(styles.navigationItem, {
      [styles.expanded]: isExpanded,
      [styles.active]: isActive,
    }),
};
