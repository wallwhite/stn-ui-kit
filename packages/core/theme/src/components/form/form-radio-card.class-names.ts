import cx from 'clsx';
import styles from './form-radio-card.module.scss';

export const formRadioCardCX = {
  card: ({ error }: Record<'error', boolean>, classNames?: string): string =>
    cx(styles.radioCard, classNames, {
      [styles.error]: !!error,
    }),
  wrapper: (): string => cx(styles.wrapper),
  marker: (): string => cx(styles.marker),
  content: (): string => cx(styles.content),
};
