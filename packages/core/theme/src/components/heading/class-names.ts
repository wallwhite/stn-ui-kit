import cx from 'clsx';
import styles from './heading.module.scss';

interface HeadingClassNamesInput {
  variant: string;
}

export const headingCX = {
  heading: ({ variant }: HeadingClassNamesInput, classNames?: string): string =>
    cx(styles.heading, classNames, {
      [styles[`variant-${variant}`]]: variant,
    }),
};
