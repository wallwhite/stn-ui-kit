import cx from 'clsx';
import styles from './dashboard-layout.module.scss';

export interface DashboardLayoutClassNamesInput {
  isExpanded: boolean;
}

export const dashboardLayoutCX = ({ isExpanded }: DashboardLayoutClassNamesInput, classNames?: Maybe<string>): string =>
  cx(styles.wrapper, classNames, {
    [styles.expanded]: isExpanded,
  });

export const dashboardLayoutContentWrapperCX = (): string => cx(styles.contentWrapper);

export const dashboardLayoutContentCX = (): string => cx(styles.content);
