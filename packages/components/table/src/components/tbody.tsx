import { FC, HTMLAttributes, forwardRef } from 'react';
import { tableCX } from '@stn-ui/theme';

export type TBodyProps = HTMLAttributes<HTMLDivElement>;

export const TBody: FC<TBodyProps> = forwardRef<HTMLInputElement, TBodyProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={tableCX.tBody(className)} ref={ref} {...restProps}>
      {children}
    </div>
  );
});

TBody.displayName = 'TBody';
