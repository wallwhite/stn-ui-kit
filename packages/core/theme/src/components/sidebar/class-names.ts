import cx from 'clsx';
import styles from './sidebar.module.scss';

export const sidebarCX = {
  sidebar: ({ isExpanded }: Record<'isExpanded', boolean>, classNames?: string): string =>
    cx(styles.sidebar, classNames, {
      [styles.expanded]: isExpanded,
    }),
  header: ({ isExpanded }: Record<'isExpanded', boolean>, classNames?: string): string =>
    cx(styles.header, classNames, {
      [styles.expanded]: isExpanded,
    }),
  toggle: (): string => cx(styles.toggle),
  content: (): string => cx(styles.content),
  footer: (): string => cx(styles.footer),
};
