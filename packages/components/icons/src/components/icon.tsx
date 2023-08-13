import { forwardRef, PropsWithChildren } from 'react';
import { IconProps } from '../types';

export const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>(
  ({ children, viewBox = '0 0 24 24', width = '24', height = '24', title, ...restProps }, ref) => (
    <svg viewBox={viewBox} width={width} height={height} ref={ref} {...restProps}>
      {children}
      {title && <title>{title}</title>}
    </svg>
  ),
);

Icon.displayName = 'Icon';

Icon.defaultProps = {
  color: 'currentColor',
  viewBox: '0 0 24 24',
  width: '24',
  height: '24',
};
