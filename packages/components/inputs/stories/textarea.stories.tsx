import { Textarea } from '../src';

export default {
  title: 'Inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export const Default = (args: ObjectLiteral) => <Textarea {...args} />;
