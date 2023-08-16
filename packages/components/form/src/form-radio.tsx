import { forwardRef } from 'react';
import { Path, useController, useFormContext } from 'react-hook-form';
import { Radio, RadioProps } from '@stn-ui/inputs';
import { mergeRefs } from '@stn-ui/react-utils';

export interface FormRadioProps extends RadioProps {
  name: Path<ObjectLiteral>;
}

export const FormRadio = forwardRef<HTMLInputElement, FormRadioProps>((props, ref) => {
  const { name, value, ...rest } = props;
  const { control } = useFormContext();
  const {
    field: { value: fieldValue = '', ref: formFieldRef, onChange },
    fieldState: { error },
  } = useController({ name, control });

  const isChecked = value === fieldValue;

  return (
    <Radio
      name={name}
      value={value}
      isChecked={isChecked}
      error={!!error}
      ref={mergeRefs(formFieldRef, ref)}
      onChange={onChange}
      {...rest}
    />
  );
});

FormRadio.displayName = 'FormRadio';

FormRadio.defaultProps = {
  label: undefined,
  className: undefined,
  isWide: false,
  isChecked: undefined,
  isDisabled: false,
};
