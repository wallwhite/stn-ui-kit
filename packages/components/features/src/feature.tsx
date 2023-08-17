import { FC, HTMLAttributes, ReactNode } from 'react';
import { Text } from '@stn-ui/text';
import { featureCX } from '@stn-ui/theme';

export interface FeatureProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  icon: ReactNode;
  title: string;
  image: ReactNode;
  description: string;
}

export const Feature: FC<FeatureProps> = ({ icon, title, image, description, className, ...restProps }) => (
  <div className={featureCX.feature(className)} {...restProps}>
    <div className={featureCX.left()}>
      <div className={featureCX.icon()}>{icon}</div>
      <Text variant="bold" className={featureCX.title()}>
        {title}
      </Text>
    </div>
    <div className={featureCX.right()}>
      <div className={featureCX.image()}>{image}</div>
      <Text className={featureCX.description()}>{description}</Text>
    </div>
  </div>
);
