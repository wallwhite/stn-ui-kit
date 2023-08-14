import cx from 'clsx';
import styles from './text.module.scss';

interface TextClassNamesInput {
  type: string;
  variant: string;
  size: string;
  isWide: boolean;
}

export const textCX = {
  text: ({ type, variant, size, isWide }: TextClassNamesInput, classNames?: string): string => {
    const sizeClassName = styles?.[`size-${size}`];
    const variantClassName = styles?.[`variant-${variant}`];

    return cx(styles.text, classNames, {
      [styles[type]]: type,
      [styles.wide]: isWide,
      [variantClassName]: variant && variantClassName,
      [sizeClassName]: size && sizeClassName,
    });
  },
};
