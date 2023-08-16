import { FC, PropsWithChildren, ReactNode, useEffect } from 'react';
import { ToggleOnIcon, ToggleOffIcon } from '@stn-ui/icons';
import { Logo } from '@stn-ui/logo';
import { useSidebarContext } from '@stn-ui/provider';
import { sidebarCX } from '@stn-ui/theme';

export interface SidebarProps {
  className?: string;
  footer?: ReactNode;
  onToggle?: (nextValue: boolean) => void;
}

export const Sidebar: FC<PropsWithChildren<SidebarProps>> = ({ children, footer, className, onToggle }) => {
  const { isExpanded, toggle } = useSidebarContext();

  const sidebarClassNames = sidebarCX.sidebar({ isExpanded }, className);

  const headerClassNames = sidebarCX.header({ isExpanded });

  useEffect(() => {
    onToggle?.(isExpanded);
  }, [isExpanded]);

  return (
    <div className={sidebarClassNames}>
      <div className={headerClassNames}>
        {isExpanded && <Logo />}
        <button type="button" className={sidebarCX.toggle()} onClick={toggle}>
          {!isExpanded ? <ToggleOnIcon /> : <ToggleOffIcon />}
        </button>
      </div>
      <div className={sidebarCX.content()}>{children}</div>
      {footer && <div className={sidebarCX.footer()}>{footer}</div>}
    </div>
  );
};
