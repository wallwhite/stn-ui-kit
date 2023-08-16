import React, { Children, FC, cloneElement, isValidElement } from 'react';
import { switcherCX } from '@stn-ui/theme';

export interface SwitcherProps extends React.HTMLAttributes<HTMLDivElement> {
  path: string;
}

export const Switcher: FC<SwitcherProps> = ({ path, children, className, ...props }) => {
  const switcherClassNames = switcherCX.switcher(className);

  return (
    <div className={switcherClassNames} {...props}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return null;

        const percentage = 100 / Children.count(children);

        return cloneElement(child, {
          ...child.props,
          path,
          style: { ...(child?.props?.style ?? {}), flexBasis: `${percentage}%` },
        });
      })}
    </div>
  );
};
