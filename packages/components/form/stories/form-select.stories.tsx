/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import { Button } from '@stn-ui/button';
import { SelectOption } from '@stn-ui/inputs';
import { Form, FormSelect } from '../src';

export default {
  title: 'Form/FormSelect',
  component: FormSelect,
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'label',
      defaultValue: '',
      type: { name: 'string', required: false },
    },
    name: {
      name: 'name',
      defaultValue: '',
      type: { name: 'string', required: false },
    },
    formatErrorMessage: {
      name: 'formatErrorMessage',
      defaultValue: (message: string): string => message ?? '',
      type: { name: 'function', required: false },
    },
    formatValue: {
      name: 'formatValue',
      defaultValue: (message: string): string => message ?? '',
      type: { name: 'function', required: false },
    },
    validateOnChange: {
      name: 'validateOnChange',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    label: 'Label',
    name: 'name',
  },
};

export const Default = (args: ObjectLiteral & { name: string }) => {
  const options = [
    { title: 'Option 1', value: 1 },
    { title: 'Option 2', value: 2 },
    { title: 'Option 3', value: 3, disabled: true },
    { title: 'Option 4', value: 4 },
  ];
  return (
    <Form onSubmit={(values: any) => alert(JSON.stringify(values))} initialValues={{ name: null }}>
      <FormSelect {...args}>
        {options.map((option) => (
          <SelectOption key={option.value} value={option} isDisabled={option?.disabled}>
            {option.title}
          </SelectOption>
        ))}
      </FormSelect>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const ValidationSchema = Yup.object().shape({
  select: Yup.object({
    value: Yup.string().max(10).required('Required'),
  }).required('Required'),
});

export const WithValidation = () => {
  const options = [
    { title: 'Option 1', value: 1 },
    { title: 'Option 2', value: 2 },
    { title: 'Option 3', value: 3, disabled: true },
    { title: 'Option 4', value: 4 },
  ];

  return (
    // @ts-ignore
    <Form onSubmit={(values: any) => alert(JSON.stringify(values))} validationSchema={ValidationSchema}>
      <FormSelect name="select" label="Select">
        {options.map((option) => (
          <SelectOption key={option.value} value={option} isDisabled={option?.disabled}>
            {option.title}
          </SelectOption>
        ))}
      </FormSelect>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
