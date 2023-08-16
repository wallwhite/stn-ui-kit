import { forwardRef, ReactNode } from 'react';
import { useController, useFormContext, Path } from 'react-hook-form';
import { Select, SelectItemValue, SelectProps } from '@stn-ui/inputs';
import { mergeRefs } from '@stn-ui/react-utils';

export interface FormSelectProps extends SelectProps {
  name: Path<ObjectLiteral>;
  label?: string;
  validateOnChange?: boolean;
  elementLeft?: ReactNode;
  formatErrorMessage?: (errorCode: string) => ReactNode;
}

export const FormSelect = forwardRef<HTMLButtonElement, FormSelectProps>((props, ref) => {
  const { name, validateOnChange, label = '', elementLeft, className, formatErrorMessage, children, ...rest } = props;
  const { control, clearErrors, setValue } = useFormContext();
  const {
    field: { onBlur, value, ref: formRef },
    formState: { errors },
  } = useController({ name, control });

  const error = (errors[name] as Maybe<ObjectLiteral>)?.value ?? errors[name];
  const isInvalid = !!error;
  const errorMessage = isInvalid ? (error?.message as string) : '';
  const formattedErrorMessage = formatErrorMessage?.(errorMessage) ?? errorMessage;

  const handleChange = (selectValue: SelectItemValue): void => {
    if (!validateOnChange && isInvalid) clearErrors(name);

    setValue(name, selectValue);
  };

  return (
    <Select
      value={value}
      label={label}
      className={className}
      elementLeft={elementLeft}
      error={formattedErrorMessage}
      ref={mergeRefs<Maybe<HTMLButtonElement>>(ref, formRef)}
      onBlur={onBlur}
      onChange={handleChange}
      {...rest}
    >
      {children}
    </Select>
  );
});

FormSelect.displayName = 'FormSelect';

FormSelect.defaultProps = {
  validateOnChange: false,
  label: '',
  elementLeft: null,
  formatErrorMessage: (errorCode: string): ReactNode => errorCode,
};
