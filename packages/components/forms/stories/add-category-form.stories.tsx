import { Button } from '@stn-ui/button';
import { ModalProvider, useModals } from '@stn-ui/modal';
import { AddCategoryModalForm } from '../src';

export default {
  title: 'Forms/AddCategoryModalForm',
  component: AddCategoryModalForm,
  tags: ['autodocs'],
};

export const Default = () => {
  enum ModalNames {
    AddCategoryModal = 'AddCategoryModalForm',
  }

  const AddChatModal = () => <AddCategoryModalForm onSubmit={(data) => alert(JSON.stringify(data))} />;

  const modals = {
    [ModalNames.AddCategoryModal]: AddChatModal,
  };

  const AppBody = () => {
    const { openModal } = useModals();

    return (
      <>
        <Button onClick={() => openModal({ name: ModalNames.AddCategoryModal })}>Open Modal</Button>
      </>
    );
  };

  return (
    <ModalProvider modalComponents={modals}>
      <AppBody />
    </ModalProvider>
  );
};
