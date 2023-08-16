import { FormProvider, useForm } from 'react-hook-form';
import { Radio, RadioGroup } from '../src';

const name = 'radio-group';

export default {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    name: {
      name: 'name',
      type: { name: 'string', required: true },
      description: 'Name of the radio group',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'radio-group' },
      },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      description: 'Label of the radio group',
    },
  },
  args: {
    name,
    label: 'Label',
    children: (
      <span style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
        <Radio key={1} name={name} value="1" label="Value 1" />
        <Radio key={2} name={name} value="2" label="Value 2" />
        <Radio key={3} name={name} value="3" label="Value 3" />
      </span>
    ),
  },
};

export const Default = (args: ObjectLiteral & { name: string }) => {
  const form = useForm({
    defaultValues: {},
  });
  return (
    <FormProvider {...form}>
      <form>
        <RadioGroup {...args} />
      </form>
    </FormProvider>
  );
};
