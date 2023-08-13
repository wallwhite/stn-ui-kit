import React, { forwardRef, ReactElement } from 'react';
import { Icon } from './components/icon';
import { IconProps } from './types';

export interface CreateIconOptions {
  viewBox?: string;
  width?: string | number;
  height?: string | number;
  path?: ReactElement | ReactElement[];
  definition?: string;
  displayName?: string;
  props?: IconProps;
}

export type IconComponent = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

export const createIcon = ({
  viewBox = '0 0 24 24',
  path,
  definition,
  displayName,
  props: defaultProps = {
    fill: 'none',
  },
  width = 24,
  height = 24,
}: CreateIconOptions): IconComponent => {
  const IconComponent = forwardRef<SVGSVGElement, IconProps>(({ dataHook, className, ...props }, ref) => (
    <Icon
      data-testid={dataHook}
      ref={ref}
      viewBox={viewBox}
      className={className}
      width={width}
      height={height}
      {...defaultProps}
      {...props}
    >
      {definition ? <path d={definition} fill={className ? undefined : 'currentColor'} /> : path}
    </Icon>
  ));

  IconComponent.displayName = displayName;

  return IconComponent;
};
