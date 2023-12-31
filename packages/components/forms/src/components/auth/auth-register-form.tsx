import { FC, PropsWithChildren } from 'react';
import { Button } from '@stn-ui/button';
import { Form, FormInput, FormPasswordInput, FormRow } from '@stn-ui/form';
import { Logo } from '@stn-ui/logo';
import { authFormCX } from '@stn-ui/theme';
import { useToggleBoolean } from '@stn-ui/use-toggle-boolean';
import { AuthRegisterFormFields } from '../../constants';
import { AuthRegisterFormSchema } from '../../schemas';
import { AuthRegisterFormValues } from '../../types';

const initialValues: AuthRegisterFormValues = {
  [AuthRegisterFormFields.Email]: '',
  [AuthRegisterFormFields.Password]: '',
  [AuthRegisterFormFields.PasswordConfirm]: '',
};

export interface AuthRegisterFormProps {
  onSubmit?: (values: ObjectLiteral) => void | Promise<void>;
}

export const AuthRegisterForm: FC<PropsWithChildren<AuthRegisterFormProps>> = ({ children, onSubmit }) => {
  const [isLoading, { on: setLoading, off: setLoaded }] = useToggleBoolean();

  const handleSubmit = async (data: ObjectLiteral): Promise<void> => {
    setLoading();
    await onSubmit?.(data as AuthRegisterFormValues);
    setLoaded();
  };

  return (
    <div className={authFormCX.wrapper()}>
      <Form
        className={authFormCX.form()}
        initialValues={initialValues}
        validationSchema={AuthRegisterFormSchema}
        onSubmit={handleSubmit}
      >
        <FormRow className={authFormCX.logo()}>
          <Logo />
        </FormRow>
        {children && <FormRow className={authFormCX.addon()}>{children}</FormRow>}
        <FormRow>
          <FormInput name={AuthRegisterFormFields.Email} scale="l" placeholder="Enter your email" isWide />
        </FormRow>
        <FormRow>
          <FormPasswordInput
            name={AuthRegisterFormFields.Password}
            scale="l"
            placeholder="Enter your password"
            isWide
          />
        </FormRow>
        <FormRow>
          <FormPasswordInput
            name={AuthRegisterFormFields.PasswordConfirm}
            scale="l"
            placeholder="Confirm your password"
            isWide
          />
        </FormRow>
        <FormRow>
          <Button type="submit" size="l" variant="primary" isWide isLoading={isLoading}>
            Create account
          </Button>
        </FormRow>
      </Form>
    </div>
  );
};
