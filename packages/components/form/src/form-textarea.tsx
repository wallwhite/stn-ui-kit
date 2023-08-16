import { TextareaHTMLAttributes, forwardRef, ReactNode } from 'react';
import { useController, useFormContext, Path } from 'react-hook-form';
import { Textarea } from '@stn-ui/inputs';
import { mergeRefs } from '@stn-ui/react-utils';

export interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: Path<ObjectLiteral>;
  label?: string;
  validateOnChange?: boolean;
  elementLeft?: ReactNode;
  elementRight?: ReactNode;
  maxRows?: number;
  minRows?: number;
  isWide?: boolean;
  formatValue?: (value: string) => string | number;
  formatErrorMessage?: (errorCode: string) => ReactNode;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>((props, ref) => {
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
    formState: { errors },
  } = useController({ name, control });

  const error = (errors[name] as Maybe<ObjectLiteral>)?.value ?? errors[name];
  const isInvalid = !!error;
  const errorMessage = isInvalid ? (error?.message as string) : '';
  const formattedErrorMessage = formatErrorMessage?.(errorMessage) ?? errorMessage;

  const handleChange = (e: React.SyntheticEvent<HTMLTextAreaElement>): void => {
    const inputValue = e.currentTarget?.value ?? '';
    const formattedInputValue = formatValue?.(inputValue) ?? inputValue;

    if (!validateOnChange && isInvalid) clearErrors(name);

    setValue(name, formattedInputValue);
  };

  return (
    <Textarea
      name={name}
      value={value}
      label={label}
      className={className}
      elementLeft={elementLeft}
      elementRight={elementRight}
      error={formattedErrorMessage}
      ref={mergeRefs<Maybe<HTMLTextAreaElement>>(ref, formRef)}
      onBlur={onBlur}
      onChange={handleChange}
      {...rest}
    />
  );
});

FormTextarea.displayName = 'FormTextarea';

FormTextarea.defaultProps = {
  validateOnChange: false,
  label: '',
  elementLeft: null,
  elementRight: null,
  formatValue: (value: string): string => value,
  formatErrorMessage: (errorCode: string): ReactNode => errorCode,
};
