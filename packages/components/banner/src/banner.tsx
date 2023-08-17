import { FC, HTMLAttributes, ReactNode } from 'react';
import { Heading } from '@stn-ui/heading';
import { Text } from '@stn-ui/text';
import { bannerCX } from '@stn-ui/theme';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: ReactNode;
}

export const Banner: FC<AccordionProps> = ({ title, description, icon, children, className, ...restProps }) => (
  <div className={bannerCX.wrapper(className)} {...restProps}>
    <div className={bannerCX.iconWrapper()}>
      <div className={bannerCX.iconBackground()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
          <path
            stroke="none"
            fill="currentColor"
            d="M46 4.0829037686548a28 28 0 0 1 28 0l27.425625842204 15.83419246269a28 28 0 0 1 14 24.248711305964l0 31.668384925381a28 28 0 0 1 -14 24.248711305964l-27.425625842204 15.83419246269a28 28 0 0 1 -28 0l-27.425625842204 -15.83419246269a28 28 0 0 1 -14 -24.248711305964l0 -31.668384925381a28 28 0 0 1 14 -24.248711305964"
          />
        </svg>
      </div>
      <div className={bannerCX.icon()}>{icon}</div>
    </div>
    <Heading variant="h4" className={bannerCX.title()}>
      {title}
    </Heading>
    <Text className={bannerCX.description()}>{description}</Text>
    <div className={bannerCX.content()}>{children}</div>
  </div>
);
