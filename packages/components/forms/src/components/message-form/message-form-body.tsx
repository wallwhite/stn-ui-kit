import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormTextarea } from '@stn-ui/form';
import { MESSAGE_FIELD_NAME } from '../../constants';
import { MessageFormSubmit } from './message-form-submit';

interface MessageFormProps {
  placeholder?: string;
  onSubmit?: (data: ObjectLiteral) => void | Promise<void>;
}

export const MessageFormBody: FC<MessageFormProps> = ({ placeholder, onSubmit }) => {
  const { trigger, getValues } = useFormContext();

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>): Promise<void> => {
    const { key, shiftKey } = e;

    if (key === 'Enter' && !shiftKey) {
      e.preventDefault();

      const message = getValues(MESSAGE_FIELD_NAME);
      const isValid = await trigger(MESSAGE_FIELD_NAME);

      if (isValid && message) {
        await onSubmit?.({ message });
      }
    }
  };

  return (
    <FormTextarea
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      name={MESSAGE_FIELD_NAME}
      elementRight={<MessageFormSubmit />}
    />
  );
};
