import cx from 'clsx';
import styles from './article-layout.module.scss';

export const articleLayoutCX = {
  wrapper: (className?: string): string => cx(styles.wrapper, className),
  header: (className?: string): string => cx(styles.header, className),
  backLink: (className?: string): string => cx(styles.backLink, className),
  row: (className?: string): string => cx(styles.row, className),
  tag: (className?: string): string => cx(styles.tag, className),
  title: (className?: string): string => cx(styles.title, className),
  subtitle: (className?: string): string => cx(styles.subtitle, className),
  meta: (className?: string): string => cx(styles.meta, className),
  metaItem: (className?: string): string => cx(styles.metaItem, className),
  metaLabel: (className?: string): string => cx(styles.metaLabel, className),
  author: (className?: string): string => cx(styles.author, className),
  date: (className?: string): string => cx(styles.date, className),
  content: (className?: string): string => cx(styles.content, className),
};
