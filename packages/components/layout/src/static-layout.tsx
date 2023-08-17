import { FC, PropsWithChildren } from 'react';
import { Heading } from '@stn-ui/heading';
import { Text } from '@stn-ui/text';
import { staticLayoutCX } from '@stn-ui/theme';

export interface StaticLayoutProps {
  title: string;
  subtitle?: string;
}

export const StaticLayout: FC<PropsWithChildren<StaticLayoutProps>> = ({ title, subtitle, children }) => (
  <div className={staticLayoutCX.wrapper()}>
    <div className={staticLayoutCX.header()}>
      <Heading visualVariant="h2" className={staticLayoutCX.title()}>
        {title}
      </Heading>
      {subtitle && (
        <Text size="l" className={staticLayoutCX.subtitle()}>
          {subtitle}
        </Text>
      )}
    </div>
    <div className={staticLayoutCX.content()}>{children}</div>
  </div>
);
