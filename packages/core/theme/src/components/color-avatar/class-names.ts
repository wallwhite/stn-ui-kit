import cx from 'clsx';
import styles from './color-avatar.module.scss';

export const colorAvatarCX = {
  wrapper: (): string => cx(styles.wrapper),
  avatar: (): string => cx(styles.colorAvatar),
};
