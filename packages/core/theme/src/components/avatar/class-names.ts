import cx from 'clsx';
import styles from './avatar.module.scss';

export interface AvatarClassNamesInput {
  type: string;
  size: string;
  isLoading: boolean;
  isBordered: boolean;
}

export const avatarCX = (
  { type, size, isLoading, isBordered }: AvatarClassNamesInput,
  classNames?: Maybe<string>,
): string =>
  cx(styles.messageAvatar, classNames, {
    [styles[`type-${type}`]]: type,
    [styles[`size-${size}`]]: size,
    [styles.loading]: isLoading,
    [styles.bordered]: isBordered,
  });
