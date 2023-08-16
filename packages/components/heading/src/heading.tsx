import { forwardRef, HTMLAttributes } from 'react';
import { headingCX } from '@stn-ui/theme';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: HeadingVariant;
  visualVariant?: HeadingVariant;
  dataHook?: string;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {
    children = '',
    className = '',
    variant: Element = 'h1',
    visualVariant,
    style,
    dataHook = 'heading',
    ...restProps
  } = props;
  const currentViewVariant = visualVariant || Element;
  const headingClassNames = headingCX.heading({ variant: currentViewVariant }, className);

  return (
    <Element className={headingClassNames} style={style} ref={ref} data-testid={dataHook} {...restProps}>
      {children}
    </Element>
  );
});

Heading.displayName = 'Heading';

Heading.defaultProps = {
  variant: 'h1',
  visualVariant: undefined,
};
