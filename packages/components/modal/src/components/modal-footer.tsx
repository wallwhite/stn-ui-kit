import { FC, HTMLAttributes, forwardRef } from 'react';
import { modalFooterCX } from '@stn-ui/theme';

export type ModalFooterProps = HTMLAttributes<HTMLDivElement>;

export const ModalFooter: FC<ModalFooterProps> = forwardRef<HTMLDivElement, ModalFooterProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={modalFooterCX.modalFooter(className)} ref={ref} {...restProps}>
      {children}
    </div>
  );
});

ModalFooter.displayName = 'ModalFooter';
