/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, FC, ReactNode, useEffect } from 'react';
import { Button, ButtonProps } from '@stn-ui/button';
import { ArrowPrevIcon, ArrowNextIcon } from '@stn-ui/icons';
import { Link } from '@stn-ui/link';
import { paginationCX } from '@stn-ui/theme';
import { PaginationItemType } from './types';
import { createComplexRange, createPageItem } from './utils';

interface PaginationBaseProps {
  type?: 'button' | 'link';
  isShowBoundaryLinks?: boolean;
  isShowEllipsis?: boolean;
  isDisabled?: boolean;
  isShowRange?: boolean;
  siblingRange?: number;
  activePage?: number;
  maxPage?: number;
  className?: string;
  size?: ButtonProps['size'];
  as?: ElementType<any>;
  disabled?: boolean;
  onChangePage?: (page: number) => void;
  route?: (page: number) => void;
}
interface PaginationButtonProps extends PaginationBaseProps {
  type: 'button';
  route?: never;
  as?: never;
  onChangePage: (page: number) => void;
}

interface PaginationLinkProps extends PaginationBaseProps {
  type: 'link';
  as?: ElementType<any>;
  route: (page: number) => string;
}

export type PaginationProps = PaginationButtonProps | PaginationLinkProps;

interface RenderPaginationItemProps {
  item: PaginationItemType;
  variant?: ButtonProps['variant'];
  className?: string;
  children?: ReactNode;
}

export const Pagination: FC<PaginationProps> = ({
  type,
  isShowBoundaryLinks = false,
  isShowEllipsis = false,
  isDisabled = false,
  isShowRange,
  siblingRange = 0,
  activePage = 1,
  maxPage = 1,
  as,
  route,
  className,
  size = 'm',
  disabled,
  onChangePage,
}) => {
  const isStart = activePage === 1;
  const isEnd = activePage === maxPage;

  const rangeItems = createComplexRange(
    { isShowEllipsis, isShowBoundaryLinks, maxPage, activePage, siblingRange },
    createPageItem(activePage),
  );
  const isRenderPagination = (isShowRange && rangeItems.length > 1) || !isShowRange;

  const renderPaginationItem = ({
    item,
    variant = 'ghost',
    className: itemClassName = '',
    children,
  }: RenderPaginationItemProps): ReactNode => {
    const commonProps = {
      key: `pagination-item-${item.value || 1}`,
      className: `${itemClassName}`,
      isDisabled: isDisabled || item.active || disabled,
      isIconOnly: true,
      size,
      variant,
    };
    const genericProps =
      type === 'link'
        ? {
            type,
            as: as || Link,
            to: (route as PaginationLinkProps['route'])(item?.value ?? 1),
            ...commonProps,
          }
        : {
            onClick: (): void => (onChangePage as PaginationButtonProps['onChangePage'])(item.value || 1),
            type: 'button',
            ...commonProps,
          };

    return <Button {...(genericProps as ButtonProps)}>{children ?? item.value}</Button>;
  };

  const renderPaginationItemsRange = (): ReactNode =>
    rangeItems.map((item, index) => {
      switch (item.type) {
        case 'pageItem':
          return renderPaginationItem({ item });
        case 'ellipsisItem':
          return <span key={`pagination-item-ellipsis-${index.toString()}`}>...</span>;
        default:
          return null;
      }
    });

  useEffect(() => {
    if (activePage > maxPage && !!maxPage) onChangePage?.(maxPage);

    if (activePage < 1) onChangePage?.(1);
  });

  return isRenderPagination ? (
    <div className={paginationCX.pagination(className)}>
      {renderPaginationItem({
        item: {
          type: 'pageItem',
          value: activePage - 1,
          active: isStart && !disabled,
        },
        variant: 'secondary',
        children: <ArrowPrevIcon />,
      })}

      {isShowRange && renderPaginationItemsRange()}
      {renderPaginationItem({
        item: {
          type: 'pageItem',
          value: activePage + 1,
          active: isEnd && !disabled,
        },
        variant: 'secondary',
        children: <ArrowNextIcon />,
      })}
    </div>
  ) : null;
};

Pagination.defaultProps = {
  isShowBoundaryLinks: false,
  isShowEllipsis: false,
  isShowRange: false,
  siblingRange: 0,
  activePage: 1,
  maxPage: 1,
  isDisabled: false,
  className: '',
};
