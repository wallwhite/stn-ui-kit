import { FC, PropsWithChildren, createContext, useContext, useState } from 'react';
import { useToggleBoolean } from '@stn-ui/use-toggle-boolean';
import { TableColsConfigItem } from '../types';

export interface TableContextValue {
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

export const TableProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isReady, { on: tableReady }] = useToggleBoolean(false);
  const [isColsSet, { on: colsSetCompleted }] = useToggleBoolean(false);
  const [cols, setCols] = useState<TableColsConfigItem[]>([]);
  const [currentCols, setCurrentCols] = useState<TableColsConfigItem[]>([]);

  return (
    <TableContext.Provider
      value={{
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
