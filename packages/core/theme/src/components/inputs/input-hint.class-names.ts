import cx from 'clsx';
import styles from './input-hint.module.scss';

interface HintInput {
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
  isDisabled?: boolean;
}

export const inputHintCX = {
  hint: ({ isError, isWarning, isSuccess, isDisabled }: HintInput, classNames?: string): string =>
    cx(styles.inputHint, classNames, {
      [styles.error]: isError,
      [styles.warning]: isWarning,
      [styles.success]: isSuccess,
      [styles.disabled]: isDisabled,
    }),
};
