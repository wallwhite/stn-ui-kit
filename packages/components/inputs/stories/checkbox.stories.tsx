import { Checkbox } from '../src';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: '',
      type: { name: 'string', required: false },
    },
    isWide: {
      name: 'isWide',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    error: {
      name: 'error',
      defaultValue: '',
      type: { name: 'string', required: false },
    },
    isChecked: {
      name: 'isChecked',
      defaultValue: null,
      type: { name: 'boolean', required: false },
    },
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    label: 'Label',
  },
};

export const Default = (args: ObjectLiteral) => <Checkbox {...args} />;
