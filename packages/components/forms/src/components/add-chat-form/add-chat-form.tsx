import { FC } from 'react';
import { Button } from '@stn-ui/button';
import { Form } from '@stn-ui/form';
import { ModalFooter, ModalHeader, useModals } from '@stn-ui/modal';
import { addChatFormCX } from '@stn-ui/theme';
import { AddChatFormFields } from '../../constants';
import { AddChatModalFormSchema } from '../../schemas';
import { AddChatFormData, ChatCategoryOption } from '../../types';
import { AddChatModalFormBody } from './add-chat-form-body';

const initialValues: AddChatFormData = {
  [AddChatFormFields.Name]: '',
  [AddChatFormFields.Category]: null,
  [AddChatFormFields.Prompt]: '',
  [AddChatFormFields.Creativity]: null,
};

export interface AddChatModalFormProps {
  categories: ChatCategoryOption[];
  onSubmit: (data: ObjectLiteral) => void | Promise<void>;
}

export const AddChatModalForm: FC<AddChatModalFormProps> = ({ categories, onSubmit }) => {
  const { closeModal } = useModals();

  return (
    <Form
      initialValues={initialValues}
      className={addChatFormCX.wrapper()}
      validationSchema={AddChatModalFormSchema}
      onSubmit={onSubmit}
    >
      <ModalHeader title="Create new chat" />
      <AddChatModalFormBody categories={categories} />
      <ModalFooter>
        <Button type="button" variant="ghost" size="l" onClick={(): void => closeModal()}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" size="l">
          Create chat
        </Button>
      </ModalFooter>
    </Form>
  );
};
