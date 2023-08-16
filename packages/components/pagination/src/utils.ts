import map from 'lodash.map';
import range from 'lodash.range';
import type { PaginationItemType, ComplexPaginationRangeOptionsType } from './types';

const getMaxLengthOfInnerGroup = (maxPage: number, countOfSibling: number, boundaryRange: number): number =>
  maxPage <= countOfSibling + 1 ? maxPage - boundaryRange - 1 : countOfSibling;

export const createPageItem = (activePage: number) => (pageNumber?: number): PaginationItemType => ({
  active: activePage === pageNumber,
  type: 'pageItem',
  value: pageNumber,
});

export const createEllipsisItem = (isShowElipsis: boolean): Maybe<PaginationItemType> =>
  isShowElipsis
    ? {
        active: false,
        type: 'ellipsisItem',
      }
    : null;

export const createSimpleRange = (
  start: number,
  end: number,
  pageCreator: (page?: number) => PaginationItemType,
): PaginationItemType[] => map(range(start, end + 1), pageCreator);

export const createComplexRange = (
  options: ComplexPaginationRangeOptionsType,
  pageCreator: (page?: number) => PaginationItemType,
): PaginationItemType[] => {
  const { isShowEllipsis, isShowBoundaryLinks, maxPage, activePage, siblingRange } = options;

  if (!maxPage) return [];

  const boundaryRange = isShowBoundaryLinks && maxPage !== 1 ? 1 : 0;
  const firstGroup = createSimpleRange(1, boundaryRange, pageCreator);
  const lastGroupStart = maxPage + 1 - boundaryRange;
  const lastGroup = createSimpleRange(lastGroupStart, maxPage, pageCreator);
  const countOfSibling = 2 * siblingRange;
  const maxLengthOfInnerGroup = getMaxLengthOfInnerGroup(maxPage, countOfSibling, boundaryRange);

  const innerGroupStart = Math.min(
    Math.max(activePage - siblingRange, boundaryRange + 1),
    Math.abs(lastGroupStart - maxLengthOfInnerGroup),
  );
  const innerGroupEnd = Math.min(innerGroupStart + maxLengthOfInnerGroup, lastGroupStart - 1);
  const innerGroup = createSimpleRange(innerGroupStart, innerGroupEnd, pageCreator);

  const isShowPrefixEllipsis = innerGroupStart !== boundaryRange + 1;
  const isShowSufixEllipsis = innerGroupEnd !== lastGroupStart - 1;

  return [
    ...firstGroup,
    createEllipsisItem(isShowEllipsis && isShowPrefixEllipsis),
    ...innerGroup,
    createEllipsisItem(isShowEllipsis && isShowSufixEllipsis),
    ...lastGroup,
  ].filter(Boolean) as PaginationItemType[];
};
