import { forwardRef } from 'react';
import { Path, useController, useFormContext } from 'react-hook-form';
import { Radio, RadioProps } from '@stn-ui/inputs';
import { mergeRefs } from '@stn-ui/react-utils';
import { formRadioCardCX } from '@stn-ui/theme';

export interface FormRadioCardProps extends Omit<RadioProps, 'label'> {
  name: Path<ObjectLiteral>;
}

export const FormRadioCard = forwardRef<HTMLInputElement, FormRadioCardProps>((props, ref) => {
  const { name, value, className, ...rest } = props;
  const { control } = useFormContext();
  const {
    field: { value: fieldValue = '', ref: formFieldRef, onChange },
    fieldState: { error },
  } = useController({ name, control });

  const isChecked = value === fieldValue;

  const classNames = formRadioCardCX.card({ error: !!error }, className);

  return (
    <Radio
      name={name}
      value={value}
      isChecked={isChecked}
      error={!!error}
      className={classNames}
      wrapperClassName={formRadioCardCX.wrapper()}
      markerClassName={formRadioCardCX.marker()}
      contentClassName={formRadioCardCX.content()}
      ref={mergeRefs(formFieldRef, ref)}
      onChange={onChange}
      {...rest}
    />
  );
});

FormRadioCard.displayName = 'FormRadioCard';

FormRadioCard.defaultProps = {
  className: undefined,
  isWide: false,
  isChecked: undefined,
  isDisabled: false,
};
