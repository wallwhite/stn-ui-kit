import React from 'react';
import { Loader } from '@stn-ui/loader';
import { overlayCX } from '@stn-ui/theme';

export interface Loadable {
  className?: string;
  loaderSize?: number;
  isLoaderInline?: boolean;
  isLoading?: boolean;
  isOverlay?: boolean;
  overlayAs?: 'div' | 'span';
}

export const Loadable: React.FC<React.PropsWithChildren<Loadable>> = ({
  isLoading,
  className,
  loaderSize,
  isLoaderInline,
  children,
  isOverlay,
  overlayAs: OverlayElement = 'div',
}) => {
  const loaderElement = className ? (
    <div className={className}>
      <Loader size={loaderSize} inline={isLoaderInline} />
    </div>
  ) : (
    <Loader size={loaderSize} inline={isLoaderInline} />
  );

  if (isOverlay && isLoading) {
    return (
      <>
        <OverlayElement className={overlayCX()}>{children}</OverlayElement>
        {loaderElement}
      </>
    );
  }

  return <>{isLoading ? loaderElement : children}</>;
};
