import { ColorAvatar } from '../src';

export default {
  title: 'Components/ColorAvatar',
  component: ColorAvatar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      name: 'color',
      type: { name: 'string', required: false },
    },
  },
  args: {
    color: '#ffC0CB',
  },
  parameters: {},
};

const Template = (args: ObjectLiteral) => <ColorAvatar {...args} />;

export const Default = {
  render: Template,

  args: {
    color: '#ffC0CB',
  },
};
