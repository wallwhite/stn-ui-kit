import { Children, FC, HTMLAttributes, ReactElement, cloneElement, forwardRef, useMemo } from 'react';
import { Link } from '@stn-ui/link';
import { tableCX } from '@stn-ui/theme';
import { useTableContext } from './table-context';
import { TdProps } from './td';
import { TrPlaceholder } from './tr-placeholder';

export interface TrPropsBasic {
  as?: 'link' | 'button' | 'div';
  href?: string;
  onClick?: () => void;
  children: ReactElement<TdProps>[];
}

export interface TrPropsLink extends TrPropsBasic, Omit<HTMLAttributes<HTMLAnchorElement>, 'children'> {
  as?: 'link';
  href: string;
  onClick?: () => void;
}

export interface TrPropsButton extends TrPropsBasic, Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {
  as?: 'button';
  href?: never;
  onClick: () => void;
}

export interface TrPropsDiv extends TrPropsBasic, Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  as?: 'div';
  href?: never;
  onClick?: () => void;
}

export type TrProps = TrPropsLink | TrPropsButton | TrPropsDiv;

export const Tr: FC<TrProps> = forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement, TrProps>(
  (props, ref) => {
    const { children, className, as = 'div', ...restProps } = props;
    const { currentCols, isReady } = useTableContext();

    const classNames = tableCX.tr(
      {
        isInteractive: as === 'link' || as === 'button',
      },
      className,
    );

    const Component = useMemo(() => {
      switch (as) {
        case 'link':
          return Link;
        case 'button':
          return 'button';
        default:
          return 'div';
      }
    }, [as]);

    return (
      // @ts-expect-error
      <Component className={classNames} ref={ref} {...restProps}>
        {isReady ? (
          Children.map(children, (child, index) =>
            cloneElement(child, {
              ...(child?.props ?? {}),
              colSpan: (currentCols?.[index]?.colSpan ?? 1) as TdProps['colSpan'],
              hidden: currentCols?.[index]?.hidden ?? 'never',
            }),
          )
        ) : (
          <TrPlaceholder />
        )}
      </Component>
    );
  },
);

Tr.displayName = 'Tr';
