import cx from 'clsx';
import styles from './dashboard-layout.module.scss';

export interface DashboardLayoutClassNamesInput {
  isExpanded: boolean;
}

export const dashboardLayoutCX = {
  layout: ({ isExpanded }: DashboardLayoutClassNamesInput, classNames?: Maybe<string>): string =>
    cx(styles.wrapper, classNames, {
      [styles.expanded]: isExpanded,
    }),
  contentWrapper: (): string => cx(styles.contentWrapper),
  content: (): string => cx(styles.content),
};
