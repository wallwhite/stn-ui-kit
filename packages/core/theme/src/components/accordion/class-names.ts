import cx from 'clsx';
import styles from './accordion.module.scss';

export const accordionCX = {
  wrapper: (className?: string): string => cx(styles.wrapper, className),
};

export const accordionItemCX = {
  item: (className?: string): string => cx(styles.item, className),
  trigger: ({ isActive }: Record<'isActive', boolean>, className?: string): string =>
    cx(styles.trigger, className, {
      [styles.active]: isActive,
    }),
  icon: (className?: string): string => cx(styles.icon, className),
  content: (className?: string): string => cx(styles.content, className),
};
