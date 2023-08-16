import cx from 'clsx';
import styles from './textarea.module.scss';

interface TextareaPseudoInput {
  scale?: string;
  error?: string | boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
}

export const textareaCX = {
  textareaPseudo: ({ scale, error, isSuccess, isWarning }: TextareaPseudoInput, classNames?: string): string =>
    cx(styles.textareaPseudo, classNames, {
      [styles[`scale-${scale}`]]: scale,
      [styles.error]: error,
      [styles.success]: isSuccess,
      [styles.warning]: isWarning,
    }),
  wrapper: (classNames?: string): string => cx(styles.wrapper, classNames),
  textareaWrapper: (classNames?: string): string => cx(styles.textareaWrapper, classNames),
  textareaElement: (classNames?: string): string => cx(styles.textareaElement, classNames),
  label: (classNames?: string): string => cx(styles.label, classNames),
  addonElement: (classNames?: string): string => cx(styles.addonElement, classNames),
};
