/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import { Button } from '@stn-ui/button';
import { Form, FormInput } from '../src';

export default {
  title: 'Form/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: '',
      type: { name: 'string', required: false },
    },
    name: {
      name: 'name',
      defaultValue: '',
      type: { name: 'string', required: false },
    },
    formatErrorMessage: {
      name: 'formatErrorMessage',
      defaultValue: (message: string): string => message ?? '',
      type: { name: 'function', required: false },
    },
    formatValue: {
      name: 'formatValue',
      defaultValue: (message: string): string => message ?? '',
      type: { name: 'function', required: false },
    },
    validateOnChange: {
      name: 'validateOnChange',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    label: 'Label',
    name: 'name',
  },
};

export const Default = (args: ObjectLiteral & { name: string }) => (
  <Form onSubmit={(values: any) => alert(JSON.stringify(values))}>
    <FormInput {...args} />
    <Button type="submit">Submit</Button>
  </Form>
);

const ValidationSchema = Yup.object().shape({
  name: Yup.string().max(10).required('Required'),
});

export const WithValidation = () => (
  // @ts-ignore
  <Form onSubmit={(values: any) => alert(JSON.stringify(values))} validationSchema={ValidationSchema}>
    <FormInput name="name" label="Name" />
    <Button type="submit">Submit</Button>
  </Form>
);

export const WithErrorFormatter = () => (
  // @ts-ignore
  <Form onSubmit={(values: any) => alert(JSON.stringify(values))} validationSchema={ValidationSchema}>
    <FormInput
      name="name"
      label="Name"
      formatErrorMessage={(message: string): string => (message ? `Custom error message: ${message}` : '')}
    />
    <Button type="submit">Submit</Button>
  </Form>
);

export const WithValueFormatter = () => (
  <Form onSubmit={(values: any) => alert(JSON.stringify(values))}>
    <FormInput name="name" label="Name" formatValue={(value: string): string => value.toUpperCase()} />
    <Button type="submit">Submit</Button>
  </Form>
);
