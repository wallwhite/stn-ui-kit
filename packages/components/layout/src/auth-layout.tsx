import { FC, PropsWithChildren } from 'react';
import { Heading } from '@stn-ui/heading';
import { Text } from '@stn-ui/text';
import { authLayoutCX } from '@stn-ui/theme';

export const AuthLayout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className={authLayoutCX.wrapper()}>
    <div className={authLayoutCX.content()}>
      <div className={authLayoutCX.motto()}>
        <Heading visualVariant="h1" className={authLayoutCX.title()}>
          Unlock the power of AI
        </Heading>
        <Text size="l" className={authLayoutCX.subtitle()}>
          Chat with the smartest AI - Experience the power of AI with us
        </Text>
      </div>
      <div className={authLayoutCX.image()} />
    </div>
    <div className={authLayoutCX.form()}>{children}</div>
  </div>
);
