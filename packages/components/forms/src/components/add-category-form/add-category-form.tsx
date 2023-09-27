import { FC } from 'react';
import { Button } from '@stn-ui/button';
import { Form } from '@stn-ui/form';
import { ModalFooter, ModalHeader, useModals } from '@stn-ui/modal';
import { addCategoryFormCX } from '@stn-ui/theme';
import { useToggleBoolean } from '@stn-ui/use-toggle-boolean';
import { AddCategoryFormFields } from '../../constants';
import { AddCategoryFormSchema } from '../../schemas';
import { AddCategoryFormData } from '../../types';
import { AddCategoryModalFormBody } from './add-category-form-body';

const initialValues: AddCategoryFormData = {
  [AddCategoryFormFields.Name]: '',
  [AddCategoryFormFields.Color]: null,
};

export interface AddCategoryModalFormProps {
  onSubmit: (data: AddCategoryFormData) => void | Promise<void>;
}

export const AddCategoryModalForm: FC<AddCategoryModalFormProps> = ({ onSubmit }) => {
  const { closeModal } = useModals();
  const [isLoading, { on: setLoading, off: setLoaded }] = useToggleBoolean();

  const handleSubmit = async (data: ObjectLiteral): Promise<void> => {
    setLoading();
    await onSubmit(data as AddCategoryFormData);
    setLoaded();
  };

  return (
    <Form
      initialValues={initialValues}
      validationSchema={AddCategoryFormSchema}
      className={addCategoryFormCX.wrapper()}
      onSubmit={handleSubmit}
    >
      <ModalHeader title="Create new category" />
      <AddCategoryModalFormBody />
      <ModalFooter>
        <Button type="button" variant="ghost" size="l" onClick={(): void => closeModal()} isDisabled={isLoading}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" size="l" isLoading={isLoading}>
          Create category
        </Button>
      </ModalFooter>
    </Form>
  );
};
