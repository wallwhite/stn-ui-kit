import cx from 'clsx';
import styles from './blog.module.scss';

export const postListCX = {
  wrapper: (className?: string): string => cx(styles.wrapper, className),
};

export const postCX = {
  post: (className?: string): string => cx(styles.post, className),
  image: (className?: string): string => cx(styles.image, className),
  content: (className?: string): string => cx(styles.content, className),
  header: (className?: string): string => cx(styles.header, className),
  tag: (className?: string): string => cx(styles.tag, className),
  readMore: (className?: string): string => cx(styles.readMore, className),
  readMoreText: (className?: string): string => cx(styles.text, className),
  readMoreIcon: (className?: string): string => cx(styles.icon, className),
  title: (className?: string): string => cx(styles.title, className),
  description: (className?: string): string => cx(styles.description, className),
  footer: (className?: string): string => cx(styles.footer, className),
  avatar: (className?: string): string => cx(styles.avatar, className),
  divider: (className?: string): string => cx(styles.divider, className),
  date: (className?: string): string => cx(styles.date, className),
};

export const postArticleCX = {
  wrapper: (className?: string): string => cx(styles.articleWrapper, className),
  content: (className?: string): string => cx(styles.articleContent, className),
  image: (className?: string): string => cx(styles.articleImage, className),
};
