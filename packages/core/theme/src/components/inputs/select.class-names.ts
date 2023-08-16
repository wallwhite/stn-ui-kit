import cx from 'clsx';
import styles from './select.module.scss';

interface SelectTriggerInput {
  scale?: string;
  error?: string | boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  isDisabled?: boolean;
}

export const selectCX = {
  selectTrigger: (
    { scale, error, isSuccess, isWarning, isDisabled }: SelectTriggerInput,
    classNames?: string,
  ): string =>
    cx(styles.selectTrigger, classNames, {
      [styles[`scale-${scale}`]]: scale,
      [styles.error]: error,
      [styles.success]: isSuccess,
      [styles.warning]: isWarning,
      [styles.disabled]: isDisabled,
    }),
  wrapper: ({ scale }: Record<'scale', string>, classNames?: string): string =>
    cx(styles.wrapper, classNames, {
      [styles[`scale-${scale}`]]: scale,
    }),
  arrowIcon: ({ open }: Record<'open', boolean>, classNames?: string): string =>
    cx(styles.arrowIcon, classNames, { [styles.open]: open }),
  label: (): string => cx(styles.label),
  addonElement: (): string => cx(styles.addonElement),
  value: (): string => cx(styles.value),
  placeholder: (): string => cx(styles.placeholder),
  selectOptions: (): string => cx(styles.selectOptions),
};

interface OptionBodyInput {
  active: boolean;
  selected: boolean;
  disabled: boolean;
}

export const selectOptionCX = {
  optionBody: ({ active, selected, disabled }: OptionBodyInput, classNames?: string): string =>
    cx(styles.optionBody, classNames, {
      [styles.active]: active,
      [styles.selected]: selected,
      [styles.disabled]: disabled,
    }),
  addonElement: (): string => cx(styles.addonElement),
  checkIcon: (): string => cx(styles.checkIcon),
  option: (): string => cx(styles.option),
};
