import { FC } from 'react';
import { Input } from '../src';

export default {
  title: 'Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: null,
      type: { name: 'string', required: false },
    },
    scale: {
      name: 'scale',
      defaultValue: 'm',
      control: { type: 'select' },
      type: { name: 'enum', required: false, value: ['s', 'm', 'l'] },
    },
    type: {
      name: 'type',
      defaultValue: 'text',
      control: { type: 'select' },
      type: { name: 'enum', required: false, value: ['text', 'password', 'email', 'number'] },
    },
    placeholder: {
      name: 'placeholder',
      defaultValue: null,
      type: { name: 'string', required: false },
    },
    warning: {
      name: 'warning',
      defaultValue: null,
      type: { name: 'string', required: false },
    },
    error: {
      name: 'error',
      defaultValue: null,
      type: { name: 'string', required: false },
    },
    success: {
      name: 'success',
      defaultValue: null,
      type: { name: 'string', required: false },
    },
    elementLeft: {
      name: 'elementLeft',
      defaultValue: null,
      type: { name: 'string', required: false },
    },
    elementRight: {
      name: 'elementRight',
      defaultValue: null,
      type: { name: 'string', required: false },
    },
  },
  args: {
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const Default = (args: ObjectLiteral) => <Input {...args} />;

export const InputSizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <Input label="Small" scale="s" />
    <Input label="Medium" scale="m" />
  </div>
);

export const InputStates = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <Input label="Default" />
    <Input label="Warning" warning="Warning" />
    <Input label="Error" error="Error" />
    <Input label="Success" success="Success" />
  </div>
);

const DummyElement: FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', height: '100%', background: '#ccc', padding: '0 8px' }}>
    element
  </div>
);

export const InputWithElements = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <Input label="Left Element" elementLeft={<DummyElement />} />
    <Input label="Right Element" elementRight={<DummyElement />} />
    <Input label="Both Elements" elementLeft={<DummyElement />} elementRight={<DummyElement />} />
  </div>
);
