import { FC } from 'react';
import { Button } from '@stn-ui/button';
import { Form } from '@stn-ui/form';
import { ModalFooter, ModalHeader, useModals } from '@stn-ui/modal';
import { addCategoryFormCX } from '@stn-ui/theme';
import { AddCategoryFormFields } from '../../constants';
import { AddCategoryFormSchema } from '../../schemas';
import { AddCategoryFormData } from '../../types';
import { AddCategoryModalFormBody } from './add-category-form-body';

const initialValues: AddCategoryFormData = {
  [AddCategoryFormFields.Name]: '',
  [AddCategoryFormFields.Color]: null,
};

export interface AddCategoryModalFormProps {
  onSubmit: (data: ObjectLiteral) => void | Promise<void>;
}

export const AddCategoryModalForm: FC<AddCategoryModalFormProps> = ({ onSubmit }) => {
  const { closeModal } = useModals();

  return (
    <Form
      initialValues={initialValues}
      validationSchema={AddCategoryFormSchema}
      className={addCategoryFormCX.wrapper()}
      onSubmit={onSubmit}
    >
      <ModalHeader title="Create new category" />
      <AddCategoryModalFormBody />
      <ModalFooter>
        <Button type="button" variant="ghost" size="l" onClick={(): void => closeModal()}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" size="l">
          Create category
        </Button>
      </ModalFooter>
    </Form>
  );
};
