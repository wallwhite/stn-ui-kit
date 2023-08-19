import { DashboardLayout, ArticleLayout } from '../src';

export default {
  title: 'Layout/ArticleLayout',
  component: ArticleLayout,
  tags: ['autodocs'],
};

const Template = (args: ObjectLiteral & { title: string }) => (
  <DashboardLayout>
    <ArticleLayout {...args} />
  </DashboardLayout>
);

export const Default = {
  render: Template,
  args: {
    title: 'This is very interesting title',
    subtitle: 'Very descriptive explanation of the title and the content',
    author: 'Hans Wurst',
    tag: 'Default',
    date: '2021-01-01',
    linkHref: '#',
    children: 'Content',
  },
};
