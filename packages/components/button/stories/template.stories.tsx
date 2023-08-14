import { FC } from 'react';
import { Button } from '../src';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      name: 'type',
      defaultValue: 'button',
      type: { name: 'enum', required: false, value: ['button', 'link', 'submit'] },
    },
    variant: {
      control: {
        type: 'select',
      },
      name: 'variant',
      defaultValue: 'solid',
      type: { name: 'enum', required: false, value: ['primary', 'ghost', 'secondary'] },
    },
    size: {
      control: {
        type: 'select',
      },
      name: 'size',
      defaultValue: 's',
      type: { name: 'enum', required: false, value: ['m', 'l'] },
    },
    colorScheme: {
      control: {
        type: 'select',
      },
      name: 'colorScheme',
      defaultValue: 'default',
      type: { name: 'enum', required: false, value: ['default', 'dark'] },
    },
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    isIconOnly: {
      name: 'isIconOnly',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    isLoading: {
      name: 'isLoading',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    isWide: {
      name: 'wide',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    onClick: {
      name: 'onClick',
      type: { name: 'function', required: false },
    },
  },
  args: {
    children: 'Button',
  },
};

const Template = (args: ObjectLiteral) => <Button {...args} />;

export const Default = Template.bind({});

const Icon: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="currentColor"
    />
    <path
      d="M11 7C11 6.45 11.45 6 12 6C12.55 6 13 6.45 13 7V11H17C17.55 11 18 11.45 18 12C18 12.55 17.55 13 17 13H13V17C13 17.55 12.55 18 12 18C11.45 18 11 17.55 11 17V13H7C6.45 13 6 12.55 6 12C6 11.45 6.45 11 7 11H11V7Z"
      fill="currentColor"
    />
  </svg>
);

export const ButtonVariants: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="secondary">Secondary</Button>
  </div>
);

export const ButtonSizes: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Button size="m">M</Button>
    <Button size="l">L</Button>
  </div>
);

export const ButtonColorSchemes: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Button colorScheme="default">Default</Button>
    <Button colorScheme="dark">Dark</Button>
  </div>
);

export const ButtonWithIcon: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Button isIconOnly>
      <Icon />
    </Button>
    <Button leftIcon={<Icon />}>Button</Button>
    <Button rightIcon={<Icon />}>Button</Button>
  </div>
);
