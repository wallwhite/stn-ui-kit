import { Avatar, AvatarProps } from '../src/avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    type: {
      name: 'type',
      defaultValue: 'circle',
      type: { name: 'enum', required: false, value: ['circle', 'square'] },
    },
    size: {
      name: 'size',
      defaultValue: 'm',
      type: { name: 'enum', required: false, value: ['s', 'm', 'l'] },
    },
    customColor: {
      name: 'customColor',
      defaultValue: '',
      type: { name: 'string', required: false },
    },
    isSystem: {
      name: 'isSystem',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    isLoading: {
      name: 'isLoading',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    className: {
      name: 'className',
      defaultValue: '',
      type: { name: 'string', required: false },
    },
    icon: {
      name: 'icon',
      defaultValue: null,
      type: { name: 'ReactNode', required: false },
    },
    title: {
      name: 'title',
      defaultValue: '',
      type: { name: 'string', required: false },
    },
  },
  args: {
    type: 'circle',
    size: 'm',
    isSystem: false,
    isLoading: false,
    className: '',
    customColor: '',
    icon: null,
    title: 'John Doe',
  },
};

export const Default = (args: AvatarProps) => <Avatar {...args} />;
