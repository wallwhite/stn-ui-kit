import { HTMLAttributes } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { radioGroupCX } from '@stn-ui/theme';
import { InputHint } from './input-hint';
import { Label } from './label';

export interface RadioGroupProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  label?: string | React.ReactNode;
  className?: string;
}

export const RadioGroup: React.FC<React.PropsWithChildren<RadioGroupProps>> = ({
  name,
  label,
  className,
  children,
  ...rest
}) => {
  const { control } = useFormContext();
  const {
    formState: { errors },
  } = useController({ name, control });

  const error = (errors[name] as Maybe<ObjectLiteral>)?.value ?? errors[name];
  const isInvalid = !!error;
  const errorMessage = isInvalid ? (error?.message as string) : '';

  return (
    <span className={radioGroupCX.group()} role="group">
      {Boolean(label) && <Label htmlFor={name} className={radioGroupCX.label()} label={label} />}
      <span className={className} {...rest}>
        {children}
      </span>
      {isInvalid && <InputHint isError={!!errorMessage}>{errorMessage}</InputHint>}
    </span>
  );
};
