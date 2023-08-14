import cx from 'clsx';
import styles from './chat-row.module.scss';

export const chatRowCX = {
  row: (classNames?: string): string => cx(styles.chatItem, classNames),
  chat: (classNames?: string): string => cx(styles.chat, classNames),
  texts: (classNames?: string): string => cx(styles.texts, classNames),
  icon: (classNames?: string): string => cx(styles.icon, classNames),
  title: (classNames?: string): string => cx(styles.title, classNames),
  message: (classNames?: string): string => cx(styles.message, classNames),
  date: (classNames?: string): string => cx(styles.date, classNames),
  tag: (classNames?: string): string => cx(styles.tag, classNames),
  tagBody: (classNames?: string): string => cx(styles.tagBody, classNames),
  counter: (classNames?: string): string => cx(styles.counter, classNames),
};
