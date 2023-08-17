import cx from 'clsx';
import styles from './features.module.scss';

export const featureListCX = {
  wrapper: (className?: string): string => cx(styles.wrapper, className),
};

export const featureCX = {
  feature: (className?: string): string => cx(styles.feature, className),
  left: (className?: string): string => cx(styles.left, className),
  right: (className?: string): string => cx(styles.right, className),
  icon: (className?: string): string => cx(styles.icon, className),
  title: (className?: string): string => cx(styles.title, className),
  image: (className?: string): string => cx(styles.image, className),
  description: (className?: string): string => cx(styles.description, className),
};
