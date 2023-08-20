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
  contentWrapper: ({ isFixedHeight }: { isFixedHeight: boolean }): string =>
    cx(styles.contentWrapper, {
      [styles.fixedHeight]: isFixedHeight,
    }),
  content: (): string => cx(styles.content),
};
