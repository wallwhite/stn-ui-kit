import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { ColorAvatar } from '@stn-ui/color-avatar';
import { FormInput, FormRadioCard, FormRow, FormSelect, FormTextarea } from '@stn-ui/form';
import { RadioGroup, SelectOption } from '@stn-ui/inputs';
import { ModalBody } from '@stn-ui/modal';
import { addChatFormBodyCX } from '@stn-ui/theme';
import { AddChatFormFields, CHAT_CREATIVITY_OPTIONS } from '../../constants';
import { ChatCategoryOption } from '../../types';
import { AddChatCreativityItem } from './add-chat-creativity-item';

export interface AddChatModalFormBodyProps {
  categories: ChatCategoryOption[];
}

export const AddChatModalFormBody: FC<AddChatModalFormBodyProps> = ({ categories }) => {
  const { watch } = useFormContext();

  const selectedCategory = watch(AddChatFormFields.Category);

  return (
    <ModalBody>
      <FormRow isSplit>
        <FormInput scale="l" name={AddChatFormFields.Name} label="Chat name" placeholder="Enter chat name" isWide />
        <FormSelect
          scale="l"
          name={AddChatFormFields.Category}
          label="Chat category"
          placeholder="Select chat category"
          elementLeft={<ColorAvatar color={selectedCategory?.color} />}
          isWide
        >
          {categories.map((value) => (
            <SelectOption key={value.id} value={value} elementLeft={<ColorAvatar color={value?.color} />}>
              {value.title}
            </SelectOption>
          ))}
        </FormSelect>
      </FormRow>
      <FormRow>
        <FormTextarea
          name={AddChatFormFields.Prompt}
          label="System prompt"
          minRows={4}
          maxRows={8}
          placeholder='Enter system prompt for chat, e.g. "I want you to act like a cat. You must meow and purr. If you do not, you will be punished."'
          isWide
        />
      </FormRow>
      <FormRow>
        <RadioGroup
          name={AddChatFormFields.Creativity}
          label="Chat creativity"
          className={addChatFormBodyCX.creativityWrapper()}
        >
          {CHAT_CREATIVITY_OPTIONS.map(({ value, ...restOptions }) => (
            <FormRadioCard key={value} name={AddChatFormFields.Creativity} value={value} isWide>
              <AddChatCreativityItem name={AddChatFormFields.Creativity} value={value} {...restOptions} />
            </FormRadioCard>
          ))}
        </RadioGroup>
      </FormRow>
    </ModalBody>
  );
};
