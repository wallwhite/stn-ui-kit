import cx from 'clsx';
import styles from './switcher.module.scss';

export const switcherCX = {
  switcher: (className?: string): string => cx(styles.switcher, className),
  switcherItem: ({ isActive }: Record<'isActive', boolean>, className?: string): string =>
    cx(styles.switcherItem, className, {
      [styles.active]: isActive,
    }),
};
