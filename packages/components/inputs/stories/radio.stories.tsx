import { Radio } from '../src';

export default {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: undefined,
      type: { name: 'string', required: false },
    },
    error: {
      name: 'error',
      defaultValue: undefined,
      type: { name: 'string', required: false },
    },
    isWide: {
      name: 'isWide',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    isChecked: {
      name: 'isChecked',
      defaultValue: undefined,
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

export const Default = (args: ObjectLiteral) => <Radio {...args} />;
