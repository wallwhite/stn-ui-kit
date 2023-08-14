import { FC, HTMLAttributes, forwardRef } from 'react';
import { tableCX } from '@stn-ui/theme';

export type TFootProps = HTMLAttributes<HTMLDivElement>;

export const TFoot: FC<TFootProps> = forwardRef<HTMLInputElement, TFootProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <div className={tableCX.tFoot(className)} ref={ref} {...restProps}>
      {children}
    </div>
  );
});

TFoot.displayName = 'TFoot';
