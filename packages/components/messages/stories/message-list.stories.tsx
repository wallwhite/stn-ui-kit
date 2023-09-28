import { FC, ReactNode, useState } from 'react';
import { MessageForm } from '@stn-ui/forms';
import { BarcodeIcon, CardIcon, ChatIcon, SearchIcon, SettingsIcon } from '@stn-ui/icons';
import { DashboardLayout, ChatLayout } from '@stn-ui/layout';
import { Navigation } from '@stn-ui/navigation';
import { Sidebar } from '@stn-ui/sidebar';
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

const navigationItems = [
  {
    title: 'Chats',
    icon: ChatIcon,
    color: 'fill-accent-2',
    url: '/chats',
  },
  {
    title: 'Search',
    icon: SearchIcon,
    color: 'fill-primary-2',
    url: '#',
  },
  {
    title: 'Manage subscription',
    icon: CardIcon,
    color: 'fill-accent-4',
    url: '#',
  },
  {
    title: 'Updates & FAQ',
    icon: BarcodeIcon,
    color: 'fill-accent-1',
    url: '#',
  },
  {
    title: 'Settings',
    icon: SettingsIcon,
    color: 'fill-accent-3',
    onClick: (): void => {
      alert('clicked');
    },
  },
];

const SidebarNavigation: FC = () => (
  <>
    <Navigation isExpanded items={navigationItems} pathname="/chats" />
  </>
);

const ChatComponent = () => {
  const [messages, setMessages] = useState<ObjectLiteral[]>([]);
  const handleSubmit = async (data: ObjectLiteral): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        time: new Date().toISOString(),
        type: 'sent',
        content: data.message,
        author: 'John Doe',
      } as ObjectLiteral,
    ]);
  };
  const renderSidebar = (): ReactNode => (
    <Sidebar>
      <SidebarNavigation />
    </Sidebar>
  );
  return (
    <DashboardLayout sidebar={renderSidebar()}>
      <ChatLayout title="Chat title">
        <MessageList>
          <MessageItem time="31 Apr, 10:30 AM" author="John Doe" type="sent">
            Some content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </MessageItem>
          <MessageItem time="31 Apr, 10:30 AM" type="received">
            Some content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </MessageItem>
          <MessageItem time="31 Apr, 10:30 AM" author="John Doe" type="sent">
            Some content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </MessageItem>
          <MessageItem time="31 Apr, 10:30 AM" type="received">
            Some content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </MessageItem>
          <MessageItem time="31 Apr, 10:30 AM" author="John Doe" type="sent">
            Some content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </MessageItem>
          <MessageItem time="31 Apr, 10:30 AM" type="received">
            Some content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </MessageItem>
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
          {messages.map((message: ObjectLiteral) => (
            <MessageItem time={message.time} key={message.time} type={message.type} author={message?.author ?? ''}>
              {message.content}
            </MessageItem>
          ))}
        </MessageList>
        <MessageForm onSubmit={handleSubmit} />
      </ChatLayout>
    </DashboardLayout>
  );
};

export const Chat = () => <ChatComponent />;
