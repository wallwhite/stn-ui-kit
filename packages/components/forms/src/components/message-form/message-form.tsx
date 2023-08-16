import { FC, useRef } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import { Form } from '@stn-ui/form';
import { ReactRef, mergeRefs } from '@stn-ui/react-utils';
import { messageFormCX } from '@stn-ui/theme';
import { MessageFormBody } from './message-form-body';

export interface MessageFormProps {
  placeholder?: string;
  validationSchema?: AnyObjectSchema | ObjectLiteral;
  innerRef?: ReactRef<Maybe<UseFormReturn<ObjectLiteral>>>;
  onSubmit?: (data: ObjectLiteral) => void | Promise<void>;
}

export const MessageForm: FC<MessageFormProps> = ({
  placeholder = 'Enter your question to PawsitiveAI',
  onSubmit,
  innerRef,
}) => {
  const formRef = useRef<Maybe<UseFormReturn<ObjectLiteral>>>();

  const handleSubmit = async (data: ObjectLiteral): Promise<void> => {
    const { current: form } = formRef;

    await onSubmit?.(data);

    form?.reset({ message: '' });
  };

  return (
    <div className={messageFormCX.wrapper()}>
      <Form onSubmit={handleSubmit} initialValues={{ message: '' }} innerRef={mergeRefs(formRef, innerRef)}>
        <MessageFormBody placeholder={placeholder} onSubmit={handleSubmit} />
      </Form>
    </div>
  );
};
