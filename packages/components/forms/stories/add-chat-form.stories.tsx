import { Button } from '@stn-ui/button';
import { ModalProvider, useModals } from '@stn-ui/modal';
import { AddChatModalForm } from '../src';

export default {
  title: 'Forms/AddChatModalForm',
  component: AddChatModalForm,
  tags: ['autodocs'],
};

export const Default = () => {
  enum ModalNames {
    AddChatModal = 'AddChatModal',
  }

  const CHAT_CATEGORIES = [
    { id: 1, value: 'chat', title: 'Some chats', color: '#8C6584' },
    { id: 2, value: 'engineering', title: 'Engineering', color: '#3E90F0' },
    { id: 3, value: 'backend', title: 'Backend', color: '#D84C10' },
    { id: 4, value: 'frontend', title: 'Frontend with AI', color: '#7ECE18' },
  ];

  const AddChatModal = () => (
    <AddChatModalForm categories={CHAT_CATEGORIES} onSubmit={(data) => alert(JSON.stringify(data))} />
  );

  const modals = {
    [ModalNames.AddChatModal]: AddChatModal,
  };

  const AppBody = () => {
    const { openModal } = useModals();

    return (
      <>
        <Button onClick={() => openModal({ name: ModalNames.AddChatModal })}>Open Modal</Button>
      </>
    );
  };

  return (
    <ModalProvider modalComponents={modals}>
      <AppBody />
    </ModalProvider>
  );
};
