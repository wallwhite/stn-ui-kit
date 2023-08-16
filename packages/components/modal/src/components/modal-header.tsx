import { FC, HTMLAttributes, forwardRef } from 'react';
import { Button } from '@stn-ui/button';
import { Heading } from '@stn-ui/heading';
import { CloseIcon } from '@stn-ui/icons';
import { modalHeaderCX } from '@stn-ui/theme';
import { useModalItemContext } from './modal-item-context';

export interface ModalHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  title: string;
}

export const ModalHeader: FC<ModalHeaderProps> = forwardRef<HTMLDivElement, ModalHeaderProps>((props, ref) => {
  const { title, className, ...restProps } = props;

  const { onRequestClose } = useModalItemContext();

  return (
    <div className={modalHeaderCX.modalHeader(className)} ref={ref} {...restProps}>
      <Heading variant="h3" visualVariant="h4">
        {title}
      </Heading>
      <Button isIconOnly size="m" variant="ghost" onClick={onRequestClose}>
        <CloseIcon />
      </Button>
    </div>
  );
});

ModalHeader.displayName = 'ModalHeader';
