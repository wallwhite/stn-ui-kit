/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@stn-ui/button';
import { Form, FormTextarea } from '../src';

export default {
  title: 'Form/FormTextarea',
  component: FormTextarea,
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
const button = (
  <Button type="submit" size="m">
    Submit
  </Button>
);

export const Default = (args: ObjectLiteral & { name: string }) => (
  <Form onSubmit={(values: any) => alert(JSON.stringify(values))}>
    <FormTextarea {...args} elementRight={button} />
  </Form>
);
