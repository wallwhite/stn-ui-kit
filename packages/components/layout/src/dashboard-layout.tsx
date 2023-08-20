import { FC, PropsWithChildren, ReactNode, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSidebarContext } from '@stn-ui/provider';
import { dashboardLayoutCX } from '@stn-ui/theme';

export interface DashboardLayoutProps {
  isFixedHeight?: boolean;
  sidebar?: ReactNode;
}

export const DashboardLayout: FC<PropsWithChildren<DashboardLayoutProps>> = ({ sidebar, isFixedHeight, children }) => {
  const { isExpanded, expandSidebar, collapseSidebar } = useSidebarContext();

  const isDesktop = useMediaQuery({
    query: '(min-width: 1179px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const layoutClassNames = dashboardLayoutCX.layout({ isExpanded });

  useEffect(() => {
    if (isDesktop) expandSidebar();
    else if (isMobile) collapseSidebar();
    else collapseSidebar();
  }, [isDesktop, isMobile]);

  return (
    <div className={layoutClassNames}>
      {sidebar}
      <div className={dashboardLayoutCX.contentWrapper({ isFixedHeight: !!isFixedHeight })}>
        <div className={dashboardLayoutCX.content()}>{children}</div>
      </div>
    </div>
  );
};
