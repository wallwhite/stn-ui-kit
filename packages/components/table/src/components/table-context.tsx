/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, FC, PropsWithChildren, createContext, useContext, useState } from 'react';
import { useToggleBoolean } from '@stn-ui/use-toggle-boolean';
import { TableColsConfigItem } from '../types';

export interface TableContextValue {
  linkAs: Maybe<ElementType<any>>;
  isReady: boolean;
  isColsSet: boolean;
  cols: TableColsConfigItem[];
  currentCols: TableColsConfigItem[];
  tableReady: () => void;
  colsSetCompleted: () => void;
  setCols: (cols: TableColsConfigItem[]) => void;
  setCurrentCols: (cols: TableColsConfigItem[]) => void;
}

const initialValue: TableContextValue = {
  linkAs: null,
  isReady: false,
  isColsSet: false,
  cols: [],
  currentCols: [],
  tableReady: () => {},
  colsSetCompleted: () => {},
  setCols: () => {},
  setCurrentCols: () => {},
};

const TableContext = createContext(initialValue);

interface TableProviderProps {
  linkAs?: ElementType<any>;
}

export const TableProvider: FC<PropsWithChildren<TableProviderProps>> = ({ children, linkAs }) => {
  const [isReady, { on: tableReady }] = useToggleBoolean(false);
  const [isColsSet, { on: colsSetCompleted }] = useToggleBoolean(false);
  const [cols, setCols] = useState<TableColsConfigItem[]>([]);
  const [currentCols, setCurrentCols] = useState<TableColsConfigItem[]>([]);

  return (
    <TableContext.Provider
      value={{
        linkAs,
        isReady,
        isColsSet,
        cols,
        currentCols,
        tableReady,
        colsSetCompleted,
        setCols,
        setCurrentCols,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = (): TableContextValue => {
  const context = useContext(TableContext);

  if (context === undefined) {
    throw new Error('useTableContext must be used within a TableProvider');
  }

  return context;
};
