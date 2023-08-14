/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, ElementType, FC, HTMLAttributes, ReactElement, cloneElement, forwardRef, useMemo } from 'react';
import { Link } from '@stn-ui/link';
import { tableCX } from '@stn-ui/theme';
import { useTableContext } from './table-context';
import { TdProps } from './td';
import { TrPlaceholder } from './tr-placeholder';

export interface TrPropsBasic {
  as?: 'link' | 'button' | 'div';
  href?: string;
  children: ReactElement<TdProps>[];
  customElement?: ElementType<any>;
  onClick?: () => void;
}

export interface TrPropsLink extends TrPropsBasic, Omit<HTMLAttributes<HTMLAnchorElement>, 'children'> {
  as?: 'link';
  href: string;
  customElement?: ElementType<any>;
  onClick?: () => void;
}

export interface TrPropsButton extends TrPropsBasic, Omit<HTMLAttributes<HTMLButtonElement>, 'children'> {
  as?: 'button';
  href?: never;
  customElement?: never;
  onClick: () => void;
}

export interface TrPropsDiv extends TrPropsBasic, Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  as?: 'div';
  href?: never;
  customElement?: never;
  onClick?: () => void;
}

export type TrProps = TrPropsLink | TrPropsButton | TrPropsDiv;

export const Tr: FC<TrProps> = forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement, TrProps>(
  (props, ref) => {
    const { children, className, as = 'div', customElement, ...restProps } = props;
    const { currentCols, isReady, linkAs } = useTableContext();

    const classNames = tableCX.tr(
      {
        isInteractive: as === 'link' || as === 'button',
      },
      className,
    );

    const Component = useMemo(() => {
      switch (as) {
        case 'link':
          return customElement || linkAs || Link;
        case 'button':
          return 'button';
        default:
          return 'div';
      }
    }, [as]);

    return (
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
