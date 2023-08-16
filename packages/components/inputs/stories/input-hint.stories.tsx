import { ReactNode } from 'react';
import { InputHint } from '../src';

export default {
  title: 'Inputs/InputHint',
  component: InputHint,
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      name: 'isDisabled',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    isError: {
      name: 'isError',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    isSuccess: {
      name: 'isSuccess',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    isWarning: {
      name: 'isWarning',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    children: {
      name: 'children',
      defaultValue: null,
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: 'Default Hint',
  },
};

export const Default = (args: ObjectLiteral & { children: ReactNode }) => <InputHint {...args} />;

export const HintVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <InputHint>Default Hint</InputHint>
    <InputHint isDisabled>Disabled Hint</InputHint>
    <InputHint isWarning>Warning Hint</InputHint>
    <InputHint isError>Error Hint</InputHint>
    <InputHint isSuccess>Success Hint</InputHint>
  </div>
);
