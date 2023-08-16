import React, { ChangeEvent, forwardRef, ReactNode, useEffect, useMemo } from 'react';
import { CheckIcon } from '@stn-ui/icons';
import { Text } from '@stn-ui/text';
import { checkboxCX } from '@stn-ui/theme';
import { useToggleBoolean } from '@stn-ui/use-toggle-boolean';
import { InputHint } from './input-hint';
import { Label } from './label';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'disabled'> {
  label?: ReactNode;
  isWide?: boolean;
  error?: ReactNode | boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { error, isWide, label, onChange, isChecked, isDisabled, className, ...rest } = props;

  const [isCheckedState, { on: check, off: uncheck }] = useToggleBoolean(false);

  const isCheckedInputValue = useMemo(() => {
    if (typeof isChecked === 'boolean') return isChecked;
    return isCheckedState;
  }, [isChecked, isCheckedState]);

  const classNames = checkboxCX.checkbox({ error: !!error }, className);

  const toggleChecked = (nextChecked: boolean): void => {
    if (nextChecked) check();
    else uncheck();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    toggleChecked(e.target.checked);
    onChange?.(e);
  };

  useEffect(() => {
    toggleChecked(!!isChecked);
  }, [isChecked]);

  return (
    <Label isWide={isWide}>
      <span className={classNames}>
        <input
          type="checkbox"
          ref={ref}
          onChange={handleChange}
          checked={isCheckedInputValue}
          disabled={isDisabled}
          {...rest}
        />
        <span className={checkboxCX.marker()}>{isCheckedState && <CheckIcon />}</span>
        {label && (
          <Text type="body" size="s">
            {label}
          </Text>
        )}
      </span>
      {error && (
        <InputHint className={checkboxCX.hint()} isError={!!error}>
          {error}
        </InputHint>
      )}
    </Label>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
  label: undefined,
  className: undefined,
  isWide: false,
  isChecked: undefined,
  isDisabled: false,
};
