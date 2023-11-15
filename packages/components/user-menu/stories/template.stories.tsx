import { UserMenu, UserMenuProps } from '../src';

export default {
  title: 'Components/UserMenu',
  component: UserMenu,
  tags: ['autodocs'],
  argTypes: {
    email: {
      control: {
        type: 'input',
      },
      name: 'email',
      defaultValue: '',
    },
  },
  args: {
    email: 'some@gmail.com',
  },
};

export const Default = (args: UserMenuProps) => (
  <div style={{ background: '#111', padding: '20px' }}>
    <UserMenu {...args} />
  </div>
);
