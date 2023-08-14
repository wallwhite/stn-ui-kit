import { Children, FC, HTMLAttributes, ReactElement, cloneElement, forwardRef, useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { tableCX } from '@stn-ui/theme';
import { MAX_COLUMNS } from '../constants';
import { calculateProportionalValues } from '../utils';
import { useTableContext } from './table-context';
import { TdProps } from './td';
import { TrPlaceholder } from './tr-placeholder';

export interface THeadProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactElement<TdProps>[];
}

export const THead: FC<THeadProps> = forwardRef<HTMLInputElement, THeadProps>((props, ref) => {
  const { children, className, ...restProps } = props;
  const { currentCols, isReady, setCols, setCurrentCols, colsSetCompleted, tableReady } = useTableContext();

  const isTablet = useMediaQuery({
    query: '(max-width: 1180px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  useLayoutEffect(() => {
    if (!children) return;
    const rawColsData = Children.map(children, (child) => {
      const getColumnSpan = (currentChild: ReactElement<TdProps>): number => {
        switch (true) {
          case currentChild?.props?.hidden === 'always':
          case currentChild?.props?.hidden === 'tablet' && isTablet:
          case currentChild?.props?.hidden === 'mobile' && isMobile:
            return 0;
          case currentChild?.props?.hidden === 'never':
          default:
            return currentChild?.props?.colSpan ?? 1;
        }
      };

      return {
        colSpan: getColumnSpan(child),
        hidden: child?.props?.hidden ?? 'never',
      };
    });

    const nextCurrentCols = calculateProportionalValues(
      rawColsData.map(({ colSpan }) => colSpan),
      MAX_COLUMNS,
    ).map((colSpan, index) => ({
      colSpan,
      hidden: rawColsData[index]?.hidden ?? 'never',
    }));

    setCols(rawColsData);
    setCurrentCols(nextCurrentCols);
    tableReady();
    colsSetCompleted();
  }, [children, isTablet, isMobile]);

  return (
    <div className={tableCX.tHead(className)} ref={ref} {...restProps}>
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
    </div>
  );
});

THead.displayName = 'THead';
