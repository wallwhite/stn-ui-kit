import cx from 'clsx';
import styles from './banner.module.scss';

export const bannerCX = {
  wrapper: (className?: string): string => cx(styles.wrapper, className),
  iconWrapper: (className?: string): string => cx(styles.iconWrapper, className),
  iconBackground: (className?: string): string => cx(styles.iconBackground, className),
  icon: (className?: string): string => cx(styles.icon, className),
  title: (className?: string): string => cx(styles.title, className),
  description: (className?: string): string => cx(styles.description, className),
  content: (className?: string): string => cx(styles.content, className),
};
