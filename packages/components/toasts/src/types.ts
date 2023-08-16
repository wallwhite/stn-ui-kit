import { ReactNode } from 'react';
import { ToastTypes } from './constants';

export type ToastItemType = {
  type: `${ToastTypes}`;
  message: string | ReactNode;
  id?: string;
  isHTML?: boolean;
};
