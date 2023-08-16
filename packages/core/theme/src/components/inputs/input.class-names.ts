import cx from 'clsx';
import styles from './input.module.scss';

interface InputPseudoInput {
  scale?: string;
  error?: string | boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
}

export const inputCX = {
  inputPseudo: ({ scale, error, isSuccess, isWarning }: InputPseudoInput, classNames?: string): string =>
    cx(styles.inputPseudo, classNames, {
      [styles[`scale-${scale}`]]: scale,
      [styles.error]: error,
      [styles.success]: isSuccess,
      [styles.warning]: isWarning,
    }),
  wrapper: (classNames?: string): string => cx(styles.wrapper, classNames),
  label: (classNames?: string): string => cx(styles.label, classNames),
  addonElement: (classNames?: string): string => cx(styles.addonElement, classNames),
  inputWrapper: (classNames?: string): string => cx(styles.inputWrapper, classNames),
  inputElement: (classNames?: string): string => cx(styles.inputElement, classNames),
  successIcon: (classNames?: string): string => cx(styles.successIcon, classNames),
};
