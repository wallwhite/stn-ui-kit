/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, FC, HTMLAttributes, forwardRef } from 'react';
import { tableCX } from '@stn-ui/theme';
import { TableProvider } from './table-context';

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  linkAs?: ElementType<any>;
}

export const Table: FC<TableProps> = forwardRef<HTMLInputElement, TableProps>((props, ref) => {
  const { children, className, linkAs, ...restProps } = props;

  return (
    <TableProvider linkAs={linkAs}>
      <div className={tableCX.table(className)} ref={ref} {...restProps}>
        {children}
      </div>
    </TableProvider>
  );
});

Table.displayName = 'Table';
