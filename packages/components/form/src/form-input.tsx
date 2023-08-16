import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { useController, useFormContext, Path } from 'react-hook-form';
import { Input, InputProps } from '@stn-ui/inputs';
import { mergeRefs } from '@stn-ui/react-utils';

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement>, InputProps {
  name: Path<ObjectLiteral>;
  label?: string;
  validateOnChange?: boolean;
  elementLeft?: ReactNode;
  elementRight?: ReactNode;
  formatValue?: (value: string) => string | number;
  formatErrorMessage?: (errorCode: string) => ReactNode;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
  const {
    name,
    validateOnChange,
    label = '',
    elementLeft,
    elementRight,
    className,
    formatValue,
    formatErrorMessage,
    ...rest
  } = props;
  const { control, clearErrors, setValue } = useFormContext();
  const {
    field: { onBlur, value = '', ref: formRef },
    fieldState: { error },
  } = useController({ name, control });

  const isInvalid = !!error;
  const errorMessage = isInvalid ? (error?.message as string) : '';
  const formattedErrorMessage = formatErrorMessage?.(errorMessage) ?? errorMessage;

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const inputValue = e.currentTarget?.value ?? '';
    const formattedInputValue = formatValue?.(inputValue) ?? inputValue;

    if (!validateOnChange && isInvalid) clearErrors(name);

    setValue(name, formattedInputValue);
  };

  return (
    <Input
      name={name}
      value={value}
      label={label}
      className={className}
      elementLeft={elementLeft}
      elementRight={elementRight}
      error={formattedErrorMessage}
      ref={mergeRefs<Maybe<HTMLInputElement>>(ref, formRef)}
      onBlur={onBlur}
      onChange={handleChange}
      {...rest}
    />
  );
});

FormInput.displayName = 'FormInput';

FormInput.defaultProps = {
  validateOnChange: false,
  label: '',
  elementLeft: null,
  elementRight: null,
  formatValue: (value: string): string => value,
  formatErrorMessage: (errorCode: string): ReactNode => errorCode,
};
