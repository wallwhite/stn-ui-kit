export type PaginationItemType = {
  active: boolean;
  type: string;
  value?: number;
};

export type ComplexPaginationRangeOptionsType = {
  isShowEllipsis: boolean;
  isShowBoundaryLinks: boolean;
  maxPage: number;
  activePage: number;
  siblingRange: number;
};
