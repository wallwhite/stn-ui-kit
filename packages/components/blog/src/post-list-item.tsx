/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, FC, ReactNode } from 'react';
import { Avatar } from '@stn-ui/avatar';
import { ArrowDownIcon } from '@stn-ui/icons';
import { Link } from '@stn-ui/link';
import { postCX } from '@stn-ui/theme';

interface PostListItemProps {
  title: string;
  date: string;
  author: string;
  description: string;
  tag: string;
  image: ReactNode;
  linkAs?: ElementType<any>;
  className?: string;
  route: string;
}

export const PostListItem: FC<PostListItemProps> = ({
  title,
  date,
  author,
  description,
  tag,
  image,
  linkAs,
  className,
  route,
}) => {
  const LinkElement = linkAs || Link;

  return (
    <LinkElement href={route} className={postCX.post(className)}>
      <span className={postCX.image()}>{image}</span>
      <span className={postCX.content()}>
        <span className={postCX.header()}>
          <span className={postCX.tag()}>{tag}</span>
          <span className={postCX.readMore()}>
            <span className={postCX.readMoreText()}>Read more</span>
            <span className={postCX.readMoreIcon()}>
              <ArrowDownIcon />
            </span>
          </span>
        </span>
        <span className={postCX.title()}>{title}</span>
        <span className={postCX.description()}>{description}</span>
        <span className={postCX.footer()}>
          <span className={postCX.avatar()}>
            <Avatar title={author} size="s" />
            {author}
          </span>
          <span className={postCX.divider()} />
          <span className={postCX.date()}>{date}</span>
        </span>
      </span>
    </LinkElement>
  );
};
