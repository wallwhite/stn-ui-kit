import { FC, PropsWithChildren } from 'react';
import { Button } from '@stn-ui/button';
import { Form, FormInput, FormPasswordInput, FormRow } from '@stn-ui/form';
import { Logo } from '@stn-ui/logo';
import { authFormCX } from '@stn-ui/theme';
import { AuthLoginFormFields } from '../../constants';
import { AuthLoginFormSchema } from '../../schemas';
import { AuthLoginFormValues } from '../../types';

const initialValues: AuthLoginFormValues = {
  [AuthLoginFormFields.Email]: '',
  [AuthLoginFormFields.Password]: '',
};

export interface AuthLoginFormProps {
  onSubmit?: (values: ObjectLiteral) => void | Promise<void>;
}

export const AuthLoginForm: FC<PropsWithChildren<AuthLoginFormProps>> = ({ children, onSubmit }) => (
  <div className={authFormCX.wrapper()}>
    <Form
      className={authFormCX.form()}
      initialValues={initialValues}
      validationSchema={AuthLoginFormSchema}
      onSubmit={onSubmit}
    >
      <FormRow className={authFormCX.logo()}>
        <Logo />
      </FormRow>
      {children && <FormRow className={authFormCX.addon()}>{children}</FormRow>}
      <FormRow>
        <FormInput name={AuthLoginFormFields.Email} scale="l" placeholder="Enter your email" isWide />
      </FormRow>
      <FormRow>
        <FormPasswordInput name={AuthLoginFormFields.Password} scale="l" placeholder="Enter your password" isWide />
      </FormRow>
      <FormRow>
        <Button type="submit" size="l" variant="primary" isWide>
          Sign in to your account
        </Button>
      </FormRow>
    </Form>
  </div>
);
