import { ReactNode } from 'react';
import { MessageItem } from '../src';

export default {
  title: 'Messages/MessageItem',
  component: MessageItem,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      name: 'type',
      defaultValue: 'sent',
      type: { name: 'enum', required: true, value: ['sent', 'received'] },
    },
    time: {
      name: 'time',
      type: { name: 'string', required: false },
    },
    children: {
      name: 'children',
      type: { name: 'string', required: false },
    },
    isLoading: {
      name: 'isLoading',
      type: { name: 'boolean', required: false },
    },
    author: {
      name: 'author',
      type: { name: 'string', required: false },
    },
  },
  args: {
    type: 'sent',
    children: 'Some content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    time: '31 Apr, 10:30 AM',
    isLoading: false,
    author: '',
  },
};

// @ts-ignore
export const Default = (args): ReactNode => (
  <div>
    <MessageItem {...args} />
  </div>
);
