import { Form, FormCheckbox } from '../src';

export default {
  title: 'Form/FormCheckbox',
  component: FormCheckbox,
  tags: ['autodocs'],
  args: {
    label: 'Checkbox',
  },
};

const Template = (args: ObjectLiteral) => (
  <Form>
    <FormCheckbox {...args} name="check1" />
  </Form>
);

export const Default = Template.bind({});
