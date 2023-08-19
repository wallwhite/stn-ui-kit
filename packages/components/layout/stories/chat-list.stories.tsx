import { DashboardLayout, ChatListLayout } from '../src';

export default {
  title: 'Layout/ChatListLayout',
  component: ChatListLayout,
  tags: ['autodocs'],
};

const Template = (args: ObjectLiteral) => (
  <DashboardLayout>
    <ChatListLayout {...args} />
  </DashboardLayout>
);

export const Default = {
  render: Template,
  args: {
    children: 'Content',
  },
};
