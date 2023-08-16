import { FC, ReactNode } from 'react';
import { Avatar } from '@stn-ui/avatar';
import { LogoIcon } from '@stn-ui/icons';
import { messageItemCX } from '@stn-ui/theme';
import { MessageItemLoader } from './message-item-loader';

export interface MessageItemProps {
  type: 'sent' | 'received';
  children: ReactNode;
  time: string;
  author?: string;
  isLoading?: boolean;
}

export const MessageItem: FC<MessageItemProps> = ({ type, isLoading = false, time, author, children }) => {
  const isSent = type === 'sent';
  const isReceived = type === 'received';

  const cxProps = { isLoading, isSent, isReceived };

  const messageClassNames = messageItemCX.message(cxProps);
  const messageWrapperClassNames = messageItemCX.wrapper(cxProps);
  const avatarClassNames = messageItemCX.avatar(cxProps);
  const messageFooterClassNames = messageItemCX.footer(cxProps);

  const avatarProps = author ? { title: author } : { icon: <LogoIcon /> };

  return (
    <div className={messageWrapperClassNames}>
      <div className={messageClassNames}>{isLoading ? <MessageItemLoader /> : children}</div>
      <div className={messageFooterClassNames}>
        <Avatar
          type="square"
          className={avatarClassNames}
          isSystem={type === 'received'}
          isLoading={isLoading}
          isBordered={!isLoading}
          {...avatarProps}
        />
        {!isLoading && (
          <div className={messageItemCX.time()}>
            <div className="caption1 text-n-4/50 dark:text-n-4">{time}</div>
          </div>
        )}
      </div>
    </div>
  );
};
