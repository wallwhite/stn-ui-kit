import cx from 'clsx';
import styles from './loader.module.scss';

export interface LoaderClassNamesInput {
  inline: boolean;
}

export const loaderCX = ({ inline }: LoaderClassNamesInput, classNames?: Maybe<string>): string =>
  cx(styles.icon, classNames, {
    [styles.inline]: inline,
  });
