import cx from 'clsx';
import styles from './button.module.scss';

export interface ButtonClassNamesInput {
  isWide: boolean;
  isLoading: boolean;
  isIconOnly: boolean;
  isDisabled: boolean;
  size: string;
  variant: string;
  colorScheme: string;
}

export const buttonCX = (
  { isWide, isLoading, isIconOnly, isDisabled, size, variant, colorScheme }: ButtonClassNamesInput,
  classNames?: Maybe<string>,
): string =>
  cx(styles.button, classNames, {
    [styles.wide]: isWide,
    [styles.disabled]: isDisabled,
    [styles.loading]: isLoading,
    [styles.iconOnly]: isIconOnly,
    [styles[`size-${size}`]]: size,
    [styles[`variant-${variant}`]]: variant && styles[`variant-${variant}`],
    [styles[`color-${colorScheme}`]]: colorScheme,
  });

export interface ButtonTextClassNamesInput {
  isIconOnly: boolean;
}

export const buttonTextCX = ({ isIconOnly }: ButtonTextClassNamesInput, classNames?: Maybe<string>): string =>
  cx(styles.text, classNames, {
    [styles.icon]: isIconOnly,
    [styles.iconOnlyText]: isIconOnly,
  });

export const buttonIconLeftCX = (): string => cx(styles.icon, styles.left);

export const buttonIconRightCX = (): string => cx(styles.icon, styles.right);
