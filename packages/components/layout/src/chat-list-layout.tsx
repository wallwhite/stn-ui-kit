import { FC, PropsWithChildren } from 'react';
import { Heading } from '@stn-ui/heading';
import { Text } from '@stn-ui/text';
import { chatListLayoutCX } from '@stn-ui/theme';

export interface ChatListLayoutProps extends PropsWithChildren<{}> {}

export const ChatListLayout: FC<ChatListLayoutProps> = ({ children }) => (
  <div className={chatListLayoutCX.wrapper()}>
    <div className={chatListLayoutCX.header()}>
      <Heading variant="h2" className={chatListLayoutCX.title()}>
        Unlock the power of AI
      </Heading>
      <Text type="body" size="l" className={chatListLayoutCX.subtitle()}>
        Chat with the smartest AI - Experience the power of AI with us
      </Text>
    </div>
    {children}
  </div>
);
