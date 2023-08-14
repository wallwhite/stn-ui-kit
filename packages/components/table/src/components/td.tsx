import { FC, HTMLAttributes, forwardRef, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { tableCX } from '@stn-ui/theme';

export interface TdProps extends Omit<HTMLAttributes<HTMLDivElement>, 'hidden'> {
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  hidden?: 'never' | 'always' | 'tablet' | 'mobile' | string;
}

export const Td: FC<TdProps> = forwardRef<HTMLInputElement, TdProps>((props, ref) => {
  const { children, className, colSpan = 12, hidden, ...restProps } = props;

  const isTablet = useMediaQuery({
    query: '(max-width: 1180px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const isHidden = useMemo(() => {
    switch (true) {
      case hidden === 'never':
        return false;
      case hidden === 'always':
        return true;
      case hidden === 'tablet' && isTablet:
        return true;
      case hidden === 'mobile' && isMobile:
        return true;
      default:
        return false;
    }
  }, [hidden, isMobile, isTablet]);

  const classNames = tableCX.td(
    {
      colSpan,
      isHidden,
    },
    className,
  );

  return (
    <div className={classNames} ref={ref} {...restProps}>
      {children}
    </div>
  );
});

Td.displayName = 'Td';
