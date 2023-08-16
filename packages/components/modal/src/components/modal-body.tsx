import { FC, HTMLAttributes, forwardRef } from 'react';
import { modalBodyCX } from '@stn-ui/theme';

export type ModalBodyProps = HTMLAttributes<HTMLDivElement>;

export const ModalBody: FC<ModalBodyProps> = forwardRef<HTMLDivElement, ModalBodyProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={modalBodyCX.modalBody(className)} ref={ref} {...restProps}>
      {children}
    </div>
  );
});

ModalBody.displayName = 'ModalBody';
