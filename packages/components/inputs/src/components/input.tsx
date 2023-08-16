import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { CheckIcon } from '@stn-ui/icons';
import { inputCX } from '@stn-ui/theme';
import { InputHint } from './input-hint';
import { Label } from './label';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled'> {
  scale?: 's' | 'm' | 'l';
  warning?: ReactNode | boolean;
  error?: ReactNode | boolean;
  success?: ReactNode | boolean;
  label?: ReactNode;
  elementLeft?: ReactNode;
  elementRight?: ReactNode;
  isWide?: boolean;
  isDisabled?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    scale = 'm',
    warning,
    error,
    success,
    label,
    type,
    isWide,
    elementLeft,
    elementRight,
    isDisabled,
    ...restProps
  } = props;

  const hint = success || warning || error;
  const isHintVisible = hint && (typeof hint === 'string' || typeof hint === 'object');

  const isSuccess = Boolean(success && !error);
  const isWarning = Boolean(warning && !error);

  const classNames = inputCX.inputPseudo({
    scale,
    error: !!error,
    isSuccess,
    isWarning,
  });

  return (
    <Label label={label} isWide={isWide} className={inputCX.wrapper()} labelClassName={inputCX.label()}>
      <span className={classNames}>
        {elementLeft && <span className={inputCX.addonElement()}>{elementLeft}</span>}
        <span className={inputCX.inputWrapper()}>
          <input
            {...restProps}
            type={type}
            className={inputCX.inputElement()}
            id={`${type}-${label || 'default'}`}
            disabled={isDisabled}
            ref={ref}
          />
          {isSuccess && (
            <span className={inputCX.successIcon()}>
              <CheckIcon />
            </span>
          )}
        </span>
        {elementRight && <span className={inputCX.addonElement()}>{elementRight}</span>}
      </span>
      {isHintVisible && (
        <InputHint isError={!!error} isWarning={!!warning} isSuccess={!!success} isDisabled={isDisabled}>
          {hint}
        </InputHint>
      )}
    </Label>
  );
});

Input.displayName = 'Input';

Input.defaultProps = {
  type: 'text',
  warning: false,
  error: false,
  success: false,
  label: null,
  elementLeft: null,
  elementRight: null,
};
