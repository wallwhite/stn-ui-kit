import { Loader } from '../src';

export default {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      name: 'size',
      defaultValue: 64,
      type: { name: 'number', required: false },
    },
    inline: {
      name: 'inline',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
  },
};

export const Default = (args: ObjectLiteral) => <Loader {...args} />;
