import { DashboardLayout, ChatLayout } from '../src';

export default {
  title: 'Layout/ChatLayout',
  component: ChatLayout,
  tags: ['autodocs'],
};

const Template = (args: ObjectLiteral & { title: string }) => (
  <DashboardLayout>
    <ChatLayout {...args} />
  </DashboardLayout>
);

export const Default = {
  render: Template,
  args: {
    title: 'This is very interesting title',
    children: 'Content',
  },
};
