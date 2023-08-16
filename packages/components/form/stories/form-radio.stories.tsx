/* eslint-disable react/destructuring-assignment */

import { RadioGroup } from '@stn-ui/inputs';
import { Form, FormRadio, FormRow } from '../src';

export default {
  title: 'Form/FormRadio',
  component: FormRadio,
  tags: ['autodocs'],
  args: {
    name: 'radio',
  },
};

export const Default = (args: ObjectLiteral & { name: string }) => (
  <Form>
    <RadioGroup label="Some radio" name={args.name}>
      <FormRow>
        <FormRadio value="1" label="Option 1" {...args} />
        <FormRadio value="2" label="Option 2" {...args} />
        <FormRadio value="3" label="Option 3" {...args} />
      </FormRow>
    </RadioGroup>
  </Form>
);
