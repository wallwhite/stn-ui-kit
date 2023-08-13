import React from 'react';
import { LoaderIcon } from '@stn-ui/icons';
import { loaderCX } from '@stn-ui/theme';

export interface LoaderProps {
  size?: number;
  inline?: boolean;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size = 64, inline, className }) => {
  const iconClassName = loaderCX({ inline: !!inline }, className);

  return (
    <div className={iconClassName}>
      <LoaderIcon width={size} height={size} />
    </div>
  );
};
