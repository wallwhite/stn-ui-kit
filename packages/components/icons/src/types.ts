import { SVGAttributes } from 'react';

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'viewBox' | 'verticalAlign'> {
  color?: string;
  viewBox?: string;
  width?: string | number;
  height?: string | number;
  title?: string;
  dataHook?: string;
}
