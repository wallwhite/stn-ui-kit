import { forwardRef, ReactNode } from 'react';
import { EyeIcon, EyeCrossIcon } from '@stn-ui/icons';
import { formPasswordInputCX } from '@stn-ui/theme';
import { useToggleBoolean } from '@stn-ui/use-toggle-boolean';
import { FormInput, FormInputProps } from './form-input';

export interface FormPasswordInputProps extends Omit<FormInputProps, 'type' | 'elementRight'> {
  defaultIsVisible?: boolean;
}

export const FormPasswordInput = forwardRef<HTMLInputElement, FormPasswordInputProps>((props, ref) => {
  const { name, defaultIsVisible = false, ...rest } = props;
  const [isVisible, { on: onShow, off: onHide }] = useToggleBoolean(defaultIsVisible);

  const inputType = isVisible ? 'text' : 'password';

  const renderToggleVisibilityButton = (): ReactNode => (
    <button type="button" className={formPasswordInputCX.visibilityButton()} onClick={isVisible ? onHide : onShow}>
      {isVisible ? <EyeIcon /> : <EyeCrossIcon />}
    </button>
  );

  return <FormInput type={inputType} name={name} ref={ref} elementRight={renderToggleVisibilityButton()} {...rest} />;
});

FormPasswordInput.displayName = 'FormPasswordInput';

FormPasswordInput.defaultProps = {
  defaultIsVisible: false,
};
