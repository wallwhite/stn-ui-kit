import { Label } from '../src';

export default {
  title: 'Inputs/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: null,
      type: { name: 'string', required: false },
    },
    isWide: {
      name: 'isWide',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    label: 'Label',
  },
};

export const Default = (args: ObjectLiteral) => <Label {...args} />;
