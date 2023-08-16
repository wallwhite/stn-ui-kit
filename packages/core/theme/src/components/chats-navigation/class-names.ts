import cx from 'clsx';
import styles from './chats-navigation.module.scss';

interface ChatsNavigationClassNamesInput {
  isExpanded?: boolean;
  isOpen?: boolean;
  isActive?: boolean;
}

export const chatsNavigationCX = {
  navigation: ({ isExpanded }: ChatsNavigationClassNamesInput, classNames?: string): string =>
    cx(styles.navigation, classNames, {
      [styles.expanded]: isExpanded,
    }),
  trigger: ({ isExpanded }: ChatsNavigationClassNamesInput, classNames?: string): string =>
    cx(styles.trigger, classNames, {
      [styles.expanded]: isExpanded,
    }),
  list: ({ isExpanded }: ChatsNavigationClassNamesInput, classNames?: string): string =>
    cx(styles.list, classNames, {
      [styles.expanded]: isExpanded,
    }),
  icon: ({ isOpen }: ChatsNavigationClassNamesInput, classNames?: string): string =>
    cx(styles.icon, classNames, {
      [styles.open]: isOpen,
    }),
  title: (classNames?: string): string => cx(styles.title, classNames),
  mobileHead: (classNames?: string): string => cx(styles.mobileHead, classNames),
  close: (classNames?: string): string => cx(styles.close, classNames),
  chat: ({ isExpanded, isActive }: ChatsNavigationClassNamesInput, classNames?: string): string =>
    cx(styles.chat, classNames, {
      [styles.expanded]: isExpanded,
      [styles.active]: isActive,
    }),
  chatColorWrapper: (classNames?: string): string => cx(styles.chatColorWrapper, classNames),
  chatColor: (classNames?: string): string => cx(styles.chatColor, classNames),
  chatTitle: (classNames?: string): string => cx(styles.chatTitle, classNames),
  chatCounter: (classNames?: string): string => cx(styles.chatCounter, classNames),
};
