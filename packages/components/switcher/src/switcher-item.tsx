/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, FC, HTMLAttributes } from 'react';
import { Link } from '@stn-ui/link';
import { switcherCX } from '@stn-ui/theme';

export interface SwitcherItemProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  path?: string;
  as?: ElementType<any>;
}

export const SwitcherItem: FC<SwitcherItemProps> = ({ href, as, path, children, className, ...props }) => {
  const LinkElement = as || Link;

  const switcherItemClassNames = switcherCX.switcherItem(
    {
      isActive: path === href,
    },
    className,
  );

  return (
    <LinkElement href={href} className={switcherItemClassNames} {...props}>
      {children}
    </LinkElement>
  );
};
