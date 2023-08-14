import { PropsWithChildren, HTMLAttributes, ElementType, forwardRef } from 'react';
import { textCX } from '@stn-ui/theme';

export interface TextBasicProps extends HTMLAttributes<HTMLElement> {
  type?: 'button' | 'body' | 'caption';
  size?: 'xs' | 's' | 'm' | 'l';
  isWide?: boolean;
  as?: keyof HTMLElementTagNameMap | ElementType;
  dataHook?: string;
}

export interface TextButtonProps extends TextBasicProps {
  type?: 'button';
  variant?: 'default' | 'link';
  size?: 'xs' | 's' | 'm' | 'l';
}

export interface TextBodyProps extends TextBasicProps {
  type?: 'body';
  variant?: 'default' | 'bold' | 'black';
  size?: 's' | 'm' | 'l';
}

export interface TextCaption extends TextBasicProps {
  type?: 'caption';
  variant?: 'default' | 'label';
  size?: 's' | 'm' | 'l';
}

export type TextProps = TextButtonProps | TextBodyProps | TextCaption;

export const Text = forwardRef<HTMLElement, PropsWithChildren<TextProps>>((props, ref) => {
  const { children, type = 'body', size = 'm', variant = 'default', isWide, className = '', as, ...restProps } = props;

  const Element = (as || 'span') as ElementType;

  const textClassNames = textCX.text(
    {
      type,
      variant,
      isWide: !!isWide,
      size,
    },
    className,
  );

  return (
    <Element className={textClassNames} ref={ref} {...restProps}>
      {children}
    </Element>
  );
});

Text.displayName = 'Text';

Text.defaultProps = {
  type: 'body',
  size: 'm',
  variant: 'default',
};
