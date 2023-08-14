/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, FC, HTMLAttributes, forwardRef } from 'react';
import { tableCX } from '@stn-ui/theme';
import { TableProvider } from './table-context';

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  linkAs?: ElementType<any>; // TODO: add linkAs to context
}

export const Table: FC<TableProps> = forwardRef<HTMLInputElement, TableProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <TableProvider>
      <div className={tableCX.table(className)} ref={ref} {...restProps}>
        {children}
      </div>
    </TableProvider>
  );
});

Table.displayName = 'Table';
