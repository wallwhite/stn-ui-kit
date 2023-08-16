import { Pagination } from '../src';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    isShowBoundaryLinks: { control: 'boolean' },
    isShowEllipsis: { control: 'boolean' },
    isShowRange: { control: 'boolean' },
    siblingRange: { control: 'number' },
    activePage: { control: 'number' },
    maxPage: { control: 'number' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    onChangePage: { action: 'onChangePage' },
  },
  args: {
    isShowBoundaryLinks: true,
    isShowEllipsis: true,
    isShowRange: true,
    siblingRange: 1,
    activePage: 5,
    maxPage: 10,
    className: '',
    disabled: false,
  },
  tags: ['autodocs'],
};

export const Default = (args: ObjectLiteral) => (
  <Pagination type="button" onChangePage={(page: number): void => alert(JSON.stringify({ page }))} {...args} />
);
