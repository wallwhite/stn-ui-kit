import { FC, useRef } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import { Form } from '@stn-ui/form';
import { ReactRef, mergeRefs } from '@stn-ui/react-utils';
import { messageFormCX } from '@stn-ui/theme';
import { useToggleBoolean } from '@stn-ui/use-toggle-boolean';
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
  const [isLoading, { on: setLoading, off: setLoaded }] = useToggleBoolean();
  const formRef = useRef<Maybe<UseFormReturn<ObjectLiteral>>>();

  const handleSubmit = async (data: ObjectLiteral): Promise<void> => {
    if (isLoading) return;

    setLoading();

    const { current: form } = formRef;

    await onSubmit?.(data);
    form?.reset({ message: '' });

    setLoaded();
  };

  return (
    <div className={messageFormCX.wrapper()}>
      <Form onSubmit={handleSubmit} initialValues={{ message: '' }} innerRef={mergeRefs(formRef, innerRef)}>
        <MessageFormBody placeholder={placeholder} onSubmit={handleSubmit} isDisabled={isLoading} />
      </Form>
    </div>
  );
};
