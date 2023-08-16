/* eslint-disable react/destructuring-assignment */

import { RadioGroup } from '@stn-ui/inputs';
import { Form, FormRow, FormRadioCard } from '../src';

export default {
  title: 'Form/FormRadioCard',
  component: FormRadioCard,
  tags: ['autodocs'],
  args: {
    name: 'radio',
  },
};

export const Default = (args: ObjectLiteral & { name: string }) => (
  <Form>
    <RadioGroup label="Some radio" name={args.name}>
      <FormRow>
        <FormRadioCard value="1" {...args}>
          <div>Some content</div>
        </FormRadioCard>
        <FormRadioCard value="2" {...args}>
          <div>Some content 2</div>
        </FormRadioCard>
        <FormRadioCard value="3" {...args}>
          <div>Some content 3</div>
        </FormRadioCard>
        <FormRadioCard value="3" isDisabled {...args}>
          <div>Some content 3</div>
        </FormRadioCard>
      </FormRow>
    </RadioGroup>
  </Form>
);
