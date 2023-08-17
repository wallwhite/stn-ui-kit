import { DashboardLayout, StaticLayout } from '../src';

export default {
  title: 'Layout/StaticLayout',
  component: StaticLayout,
  tags: ['autodocs'],
};

const Template = (args: ObjectLiteral & { title: string }) => (
  <DashboardLayout>
    <StaticLayout {...args} />
  </DashboardLayout>
);

export const Default = {
  render: Template,
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    children: 'Content',
  },
};
