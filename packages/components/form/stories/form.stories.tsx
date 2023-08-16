/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import * as Yup from 'yup';
import { Button } from '@stn-ui/button';
import { RadioGroup } from '@stn-ui/inputs';
import { FormRow, Form, FormRadio, FormPasswordInput, FormInput, FormCheckbox } from '../src';

export default {
  title: 'Form/Form',
  component: Form,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <FormRow isSplit>
          <FormInput name="name" placeholder="Name" label="Name" />
          <FormInput name="surname" placeholder="Surname" label="Surname" />
        </FormRow>
        <FormRow>
          <FormInput name="email" placeholder="Email" label="Email" />
        </FormRow>
        <FormRow>
          <RadioGroup name="sex" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <FormRadio name="sex" value="male" label="Male" />
            <FormRadio name="sex" value="female" label="Female" />
          </RadioGroup>
        </FormRow>
        <FormRow>
          <FormPasswordInput name="password" placeholder="Password" label="Password" />
        </FormRow>
        <FormRow>
          <FormCheckbox name="privacy" label="I agree to the privacy policy" />
        </FormRow>
        <FormRow>
          <Button type="submit" isWide>
            Submit
          </Button>
        </FormRow>
      </>
    ),
  },
};

const ValidationSchema = Yup.object().shape({
  name: Yup.string().max(10).required('Required'),
  surname: Yup.string().max(10).required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  sex: Yup.string().required('Required'),
  password: Yup.string().min(8).required('Required'),
  privacy: Yup.boolean().oneOf([true], 'Required').required('Required'),
});

export const Default = (args: ObjectLiteral & { children: ReactNode }) => (
  <Form onSubmit={(values: any) => alert(JSON.stringify(values))} validationSchema={ValidationSchema} {...args} />
);
