import cx from 'clsx';
import styles from './radio.module.scss';

export const radioCX = {
  radio: ({ error }: Record<'error', boolean>, classNames?: string): string =>
    cx(styles.radio, classNames, {
      [styles.error]: !!error,
    }),
  content: (classNames?: string): string => cx(styles.content, classNames),
  marker: ({ markerClassName }: Record<'markerClassName', Maybe<string>>, classNames?: string): string =>
    cx(classNames, {
      [styles.marker]: !markerClassName,
      [`${markerClassName}`]: !!markerClassName,
    }),
  markerDot: (classNames?: string): string => cx(styles.markerDot, classNames),
};
