import cx from 'clsx';
import styles from './add-chat-form.module.scss';

export const addChatFormCX = {
  wrapper: (): string => cx(styles.wrapper),
};

export const addChatFormCreativityCX = {
  wrapper: (): string => cx(styles.creativity),
  icon: ({ isActive }: { isActive: boolean }): string => cx(styles.icon, { [styles.active]: isActive }),
  version: ({ isPrimary, isSecondary }: { isPrimary: boolean; isSecondary: boolean }): string =>
    cx(styles.version, { [styles.primary]: isPrimary, [styles.secondary]: isSecondary }),
  content: (): string => cx(styles.content),
  mainInfo: (): string => cx(styles.mainInfo),
  additionalInfo: (): string => cx(styles.additionalInfo),
  infoItem: (): string => cx(styles.infoItem),
  infoText: (): string => cx(styles.infoText),
};

export const addChatFormBodyCX = {
  creativityWrapper: (): string => cx(styles.creativityWrapper),
};
