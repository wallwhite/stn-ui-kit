import { ReactNode } from 'react';

import { TBody, THead, Table, Td } from '@stn-ui/table';
import { ChatRow } from '../src';

export default {
  title: 'Components/ChatRow',
  component: ChatRow,
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: 'title',
      defaultValue: 'title',
      type: { name: 'string', required: true },
    },
    lastMessage: {
      name: 'lastMessage',
      defaultValue: 'lastMessage',
      type: { name: 'string', required: true },
    },
    icon: {
      name: 'icon',
      defaultValue: 'icon',
      type: { name: 'string', required: true },
    },
    color: {
      name: 'color',
      defaultValue: '#3F51B5',
      type: { name: 'string', required: true },
    },
    counter: {
      name: 'counter',
      defaultValue: 0,
      type: { name: 'number', required: true },
    },
    tag: {
      name: 'tag',
      defaultValue: 'tag',
      type: { name: 'string', required: true },
    },
    href: {
      name: 'href',
      type: { name: 'string', required: true },
    },
    linkAs: {
      name: 'linkAs',
      type: { name: 'ElementType', required: false },
    },
  },
  args: {
    id: '1',
    title: 'Super Chat with AI',
    lastMessage: 'I want you to know that I am happy to have you as my helper.',
    icon: '🦧',
    color: '#3F51B5',
    counter: 0,
    tag: 'tag',
    route: () => '/',
  },
};

export const Default = (): ReactNode => (
  <Table>
    <THead>
      <Td colSpan={6}>Chat</Td>
      <Td colSpan={2} hidden="mobile">
        Created at
      </Td>
      <Td colSpan={2} hidden="tablet">
        Category
      </Td>
      <Td colSpan={2}>Messages</Td>
    </THead>
    <TBody>
      <ChatRow
        title="Some chat"
        lastMessage="I want you to know that I am happy to have you as my helper."
        icon="🦧"
        color="#3F51B5"
        tag="tag"
        counter={154}
        createdAt={Date.now().toString()}
        href="/1"
      />
      <ChatRow
        title="Some chat"
        lastMessage="I want you to know that I am happy to have you as my helper."
        icon="🦧"
        color="#3F51B5"
        tag="tag"
        counter={154}
        createdAt={Date.now().toString()}
        href="/2"
      />
    </TBody>
  </Table>
);
