import { forwardRef, ReactNode } from 'react';
import { Path, useController, useFormContext } from 'react-hook-form';
import { Checkbox, CheckboxProps } from '@stn-ui/inputs';
import { mergeRefs } from '@stn-ui/react-utils';

export interface FormCheckboxProps extends Omit<CheckboxProps, 'name'> {
  name: Path<ObjectLiteral>;
  formatErrorMessage?: (errorCode: string) => ReactNode;
}

export const FormCheckbox = forwardRef<HTMLInputElement, FormCheckboxProps>((props, ref) => {
  const { name, formatErrorMessage, ...rest } = props;
  const { control } = useFormContext();
  const {
    field: { ref: formFieldRef, value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name, control });

  const isInvalid = !!error;
  const errorMessage = isInvalid ? (error?.message as string) : '';
  const formattedErrorMessage = formatErrorMessage?.(errorMessage) ?? errorMessage;

  return (
    <Checkbox
      name={name}
      isChecked={value}
      error={formattedErrorMessage}
      ref={mergeRefs(formFieldRef, ref)}
      onBlur={onBlur}
      onChange={onChange}
      {...rest}
    />
  );
});

FormCheckbox.displayName = 'FormCheckbox';

FormCheckbox.defaultProps = {
  label: undefined,
  className: undefined,
  isWide: false,
  isChecked: undefined,
  isDisabled: false,
};
