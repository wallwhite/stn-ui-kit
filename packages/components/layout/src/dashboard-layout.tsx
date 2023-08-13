import { FC, PropsWithChildren, ReactNode, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSidebarContext } from '@stn-ui/provider';
import { dashboardLayoutCX, dashboardLayoutContentCX, dashboardLayoutContentWrapperCX } from '@stn-ui/theme';

export interface DashboardLayoutProps {
  sidebar?: ReactNode;
}

export const DashboardLayout: FC<PropsWithChildren<DashboardLayoutProps>> = ({ sidebar, children }) => {
  const { isExpanded, expandSidebar, collapseSidebar } = useSidebarContext();

  const isDesktop = useMediaQuery({
    query: '(min-width: 1179px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const layoutClassNames = dashboardLayoutCX({ isExpanded });

  useEffect(() => {
    if (isDesktop) expandSidebar();
    else if (isMobile) collapseSidebar();
    else collapseSidebar();
  }, [isDesktop, isMobile]);

  return (
    <div className={layoutClassNames}>
      {sidebar}
      <div className={dashboardLayoutContentWrapperCX()}>
        <div className={dashboardLayoutContentCX()}>{children}</div>
      </div>
    </div>
  );
};
