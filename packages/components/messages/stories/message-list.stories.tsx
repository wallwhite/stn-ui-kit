import { MessageItem, MessageList } from '../src';

export default {
  title: 'Messages/MessageList',
  component: MessageList,
  tags: ['autodocs'],
};

export const Default = () => (
  <MessageList>
    <MessageItem time="31 Apr, 10:30 AM" author="John Doe" type="sent">
      Some content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
    </MessageItem>
    <MessageItem time="31 Apr, 10:30 AM" type="received">
      Some content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
    </MessageItem>
    <MessageItem time="31 Apr, 10:30 AM" author="John Doe" type="sent">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
    </MessageItem>
    <MessageItem time="31 Apr, 10:30 AM" type="received" isLoading>
      Some content.
    </MessageItem>
  </MessageList>
);
