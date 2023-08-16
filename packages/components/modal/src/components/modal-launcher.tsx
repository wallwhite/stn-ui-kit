import React, { FC, LazyExoticComponent, useCallback, useEffect } from 'react';
import isEmpty from 'lodash.isempty';
import last from 'lodash.last';
import { KeyCodes } from '../constants';
import { ModalItem, ModalItemProps } from '../types';
import { Modal } from './modal';
import { ModalItemProvider } from './modal-item-context';
import { useModalContext } from './modal-provider';

export type ModalBodyComponent =
  | Maybe<React.ComponentType<ObjectLiteral>>
  | LazyExoticComponent<React.ComponentType<ObjectLiteral>>;

const ModalLauncher: FC = () => {
  const { modals, modalComponents, closeModal } = useModalContext();

  const handleKeyUp = useCallback(
    (event: KeyboardEvent): void => {
      event.preventDefault();

      const currentModal = last(modals);
      const disabled = currentModal?.props?.disabled;
      const customCloseModalHandler = currentModal?.props?.customCloseModalHandler;

      if (!disabled && event.key === KeyCodes.Escape) {
        if (customCloseModalHandler) {
          customCloseModalHandler();
          return;
        }
        closeModal();
      }
    },
    [modals],
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return (): void => document.removeEventListener('keyup', handleKeyUp);
  }, []);

  return (
    <>
      {!isEmpty(modals) &&
        modals.map((modal: ModalItem) => {
          if (!modal.name) {
            throw new Error('ModalLauncher: Modal object should have "name" property');
          }

          const ModalBodyComponent = modalComponents?.[
            modal.name as keyof typeof modalComponents
          ] as ModalBodyComponent;

          const handleClose = (): void => {
            if (modal?.onCloseModal) modal?.onCloseModal();
            closeModal(modal?.name);
          };

          const modalProps: ModalItemProps = {
            isOpen: true,
            onRequestClose: handleClose,
            style: modal?.style ?? {},
          };

          if (!ModalBodyComponent) return null;

          return (
            <Modal {...modalProps} key={modal.name}>
              <ModalItemProvider {...modalProps}>
                <ModalBodyComponent {...modal.props} />
              </ModalItemProvider>
            </Modal>
          );
        })}
    </>
  );
};

export default ModalLauncher;
