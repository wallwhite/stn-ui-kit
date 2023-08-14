import cx from 'clsx';
import styles from './loadable.module.scss';

export const loadableCX = {
  overlay: (): string => cx(styles.contentOverlay),
};
