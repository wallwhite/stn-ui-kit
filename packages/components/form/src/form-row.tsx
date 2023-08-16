import { forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { formRowCX } from '@stn-ui/theme';

export interface FormRowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isSplit?: boolean;
}

export const FormRow = forwardRef<HTMLDivElement, PropsWithChildren<FormRowProps>>((props, ref) => {
  const { children, className, isSplit, ...rest } = props;

  const classNames = formRowCX.row({ isSplit: !!isSplit }, className);

  return (
    <div className={classNames} ref={ref} {...rest}>
      {children}
    </div>
  );
});

FormRow.displayName = 'FormRow';

FormRow.defaultProps = {
  isSplit: false,
};
