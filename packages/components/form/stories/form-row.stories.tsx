import { FC, ReactNode } from 'react';
import { FormRow } from '../src';

const RowExample: FC = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '32px',
      backgroundColor: '#ccc',
    }}
  >
    Example
  </div>
);

export default {
  title: 'Form/FormRow',
  component: FormRow,
  tags: ['autodocs'],
  argTypes: {
    isSplit: {
      name: 'isSplit',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: (
      <>
        <RowExample />
        <RowExample />
      </>
    ),
  },
};

export const Default = (args: ObjectLiteral & { children: ReactNode }) => <FormRow {...args} />;

export const MultipleRowsPreview = () => (
  <>
    <FormRow isSplit>
      <RowExample />
      <RowExample />
    </FormRow>
    <FormRow>
      <RowExample />
    </FormRow>
    <FormRow>
      <RowExample />
    </FormRow>
  </>
);
