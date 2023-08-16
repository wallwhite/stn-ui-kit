import { useState } from 'react';
import { Select, SelectOption } from '../src';

export default {
  title: 'Inputs/Select',
  component: Select,
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
      type: { name: 'enum', required: false, value: ['s', 'm', 'l'] },
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
    value: {
      name: 'value',
      defaultValue: null,
      type: { name: 'object', required: false },
    },
  },
  args: {
    type: 'text',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const Default = (args: ObjectLiteral) => {
  const options = [
    { title: 'Option 1', value: 1 },
    { title: 'Option 2', value: 2 },
    { title: 'Option 3', value: 3, disabled: true },
    { title: 'Option 4', value: 4 },
  ];

  const SelectField = () => {
    const [value, setValue] = useState(args?.value);

    return (
      <Select {...args} value={value} onChange={setValue}>
        {options.map((option) => (
          <SelectOption key={option.value} value={option} isDisabled={option?.disabled}>
            {option.title}
          </SelectOption>
        ))}
      </Select>
    );
  };

  return (
    <div style={{ height: '400px' }}>
      <SelectField />
    </div>
  );
};
