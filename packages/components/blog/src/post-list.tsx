import { FC, HTMLAttributes } from 'react';
import { postListCX } from '@stn-ui/theme';

export interface PostListProps extends HTMLAttributes<HTMLDivElement> {}

export const PostList: FC<PostListProps> = ({ children, className, ...restProps }) => (
  <div className={postListCX.wrapper(className)} {...restProps}>
    {children}
  </div>
);
