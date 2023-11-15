import cx from 'clsx';
import styles from './user-menu.module.scss';

export const userMenuCX = {
  user: ({ isExpanded }: Record<string, boolean>): string => cx(styles.user, { [styles.collapsed]: !isExpanded }),
  avatar: (): string => styles.avatar,
  content: (): string => styles.content,
  label: (): string => styles.label,
  title: (): string => styles.title,
  menu: (): string => styles.menu,
  menuItem: (): string => styles.menuItem,
};
