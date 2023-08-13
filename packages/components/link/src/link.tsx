import { forwardRef } from 'react';
import { LinkIcon } from './link-icon';
import { UseLinkProps, useLink } from './use-link';

export interface LinkProps extends UseLinkProps {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { Component, children, showAnchorIcon, anchorIcon = <LinkIcon />, getLinkProps } = useLink({
    ref,
    ...props,
  });

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

Link.displayName = 'Link';
