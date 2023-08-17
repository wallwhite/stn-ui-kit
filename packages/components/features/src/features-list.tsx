import { FC, HTMLAttributes } from 'react';
import { featureListCX } from '@stn-ui/theme';

interface FeaturesListProps extends HTMLAttributes<HTMLDivElement> {}

export const FeaturesList: FC<FeaturesListProps> = ({ children, className, ...restProps }) => (
  <div className={featureListCX.wrapper(className)} {...restProps}>
    {children}
  </div>
);
