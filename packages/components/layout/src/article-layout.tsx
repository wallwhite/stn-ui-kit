import { ElementType, FC, PropsWithChildren } from 'react';
import { Avatar } from '@stn-ui/avatar';
import { Heading } from '@stn-ui/heading';
import { ArrowPrevIcon } from '@stn-ui/icons';
import { Link } from '@stn-ui/link';
import { Text } from '@stn-ui/text';
import { articleLayoutCX } from '@stn-ui/theme';

export interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  tag?: string;
  author?: string;
  date?: string;
  linkAs?: ElementType;
  linkHref?: string;
}

export const ArticleLayout: FC<PropsWithChildren<ArticleLayoutProps>> = ({
  title,
  subtitle,
  tag,
  author,
  date,
  linkAs,
  linkHref,
  children,
}) => {
  const LinkElement = linkAs || Link;

  return (
    <div className={articleLayoutCX.wrapper()}>
      <div className={articleLayoutCX.header()}>
        <LinkElement className={articleLayoutCX.backLink()} href={linkHref}>
          <ArrowPrevIcon />
          <Text size="m">Blog</Text>
        </LinkElement>
        <div className={articleLayoutCX.row()}>
          <div className={articleLayoutCX.tag()}>{tag}</div>
        </div>
        <Heading visualVariant="h3" className={articleLayoutCX.title()}>
          {title}
        </Heading>
        {subtitle && (
          <Text size="m" className={articleLayoutCX.subtitle()}>
            {subtitle}
          </Text>
        )}
        <div className={articleLayoutCX.meta()}>
          <div className={articleLayoutCX.metaItem()}>
            <div className={articleLayoutCX.metaLabel()}>Written by</div>
            <div className={articleLayoutCX.author()}>
              <Avatar size="s" title={author || ''} type="circle" />
              {author}
            </div>
          </div>
          <div className={articleLayoutCX.metaItem()}>
            <div className={articleLayoutCX.metaLabel()}>Published on</div>
            <div className={articleLayoutCX.date()}>{date}</div>
          </div>
        </div>
      </div>
      <div className={articleLayoutCX.content()}>{children}</div>
    </div>
  );
};
