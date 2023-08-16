import { FC } from 'react';
import { ErrorCircleIcon, LoaderIcon, SuccessCircleIcon } from '@stn-ui/icons';
import { ToastTypes } from '../constants';

export interface ToastIconProps {
  type: `${ToastTypes}`;
}

export const ToastIcon: FC<ToastIconProps> = ({ type }) => {
  switch (type) {
    case ToastTypes.Success:
      return <SuccessCircleIcon />;
    case ToastTypes.Danger:
      return <ErrorCircleIcon />;
    case ToastTypes.Attention:
      return <ErrorCircleIcon />;
    case ToastTypes.Loading:
      return <LoaderIcon />;
    default:
      return null;
  }
};
