import { Form, FormPasswordInput } from '../src';

export default {
  title: 'Form/FormPasswordInput',
  component: FormPasswordInput,
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
    defaultIsVisible: {
      name: 'defaultIsVisible',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    label: 'Password',
    name: 'password',
    placeholder: 'Enter password',
  },
};

export const Default = (args: ObjectLiteral & { name: string }) => (
  <Form>
    <FormPasswordInput {...args} />
  </Form>
);
