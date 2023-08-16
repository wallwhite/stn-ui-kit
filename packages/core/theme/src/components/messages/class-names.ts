import cx from 'clsx';
import styles from './messages.module.scss';

interface MessageInput {
  isLoading?: boolean;
  isSent?: boolean;
  isReceived?: boolean;
}

export const messageItemCX = {
  message: ({ isLoading, isSent, isReceived }: MessageInput, className?: string): string =>
    cx(styles.message, className, {
      [styles.loading]: isLoading,
      [styles.sent]: isSent,
      [styles.received]: isReceived,
    }),
  wrapper: ({ isSent, isReceived }: MessageInput, className?: string): string =>
    cx(styles.messageWrapper, className, {
      [styles.sent]: isSent,
      [styles.received]: isReceived,
    }),
  avatar: ({ isLoading, isSent, isReceived }: MessageInput, className?: string): string =>
    cx(styles.messageAvatar, className, {
      [styles.loading]: isLoading,
      [styles.sent]: isSent,
      [styles.received]: isReceived,
    }),
  footer: ({ isLoading, isSent, isReceived }: MessageInput, className?: string): string =>
    cx(styles.messageFooter, className, {
      [styles.loading]: isLoading,
      [styles.sent]: isSent,
      [styles.received]: isReceived,
    }),
  time: (): string => styles.time,
};

export const messageLoaderCX = {
  container: (): string => styles.loaderContainer,
  dot: (): string => styles.loaderDot,
};

export const messageListCX = {
  wrapper: (): string => styles.wrapper,
  list: (className?: string): string => cx(styles.messageList, className),
};
