import { FC, HTMLAttributes, useEffect, useRef } from 'react';
import { messageListCX } from '@stn-ui/theme';

export type MessageListProps = HTMLAttributes<HTMLDivElement>;

export const MessageList: FC<MessageListProps> = ({ children, className, ...props }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current: wrapper } = wrapperRef;
    const { current: messageList } = messageListRef;

    if (!wrapper || !messageList) return;

    const outerHeight = wrapper.clientHeight;
    const innerHeight = messageList.clientHeight;

    wrapper.scrollTo({
      top: innerHeight - outerHeight + 64,
      left: 0,
    });
  }, []);

  useEffect(() => {
    const { current: wrapper } = wrapperRef;
    const { current: messageList } = messageListRef;

    if (!wrapper || !messageList) return;

    const outerHeight = wrapper.clientHeight;
    const innerHeight = messageList.clientHeight;

    wrapper.scrollTo({
      top: innerHeight - outerHeight + 64,
      left: 0,
      behavior: 'smooth',
    });
  }, [children]);

  return (
    <div className={messageListCX.wrapper()} ref={wrapperRef}>
      <div className={messageListCX.list(className)} ref={messageListRef} {...props}>
        {children}
      </div>
    </div>
  );
};
