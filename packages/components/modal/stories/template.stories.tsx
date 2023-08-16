import { Button } from '@stn-ui/button';
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalProvider, useModals } from '../src';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export const Default = () => {
  enum ModalNames {
    ModalFirst = 'ModalFirst',
  }

  const ModalFirst = () => {
    const { closeModal } = useModals();
    return (
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '400px' }}>
        <ModalHeader title="Hello i am a modal" />
        <ModalBody>Some content here</ModalBody>
        <ModalFooter>
          <Button onClick={() => closeModal(ModalNames.ModalFirst)} variant="ghost" size="m">
            Close
          </Button>
          <Button onClick={() => closeModal(ModalNames.ModalFirst)} size="m">
            Proceed
          </Button>
        </ModalFooter>
      </div>
    );
  };

  const modals = {
    [ModalNames.ModalFirst]: ModalFirst,
  };

  const AppBody = () => {
    const { openModal } = useModals();

    return (
      <>
        <Button onClick={() => openModal({ name: ModalNames.ModalFirst })}>Open Modal</Button>
      </>
    );
  };
  return (
    <ModalProvider modalComponents={modals}>
      <AppBody />
    </ModalProvider>
  );
};
