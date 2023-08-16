import { ChatsNavigation } from '../src';

export default {
  title: 'Components/ChatsNavigation',
  component: ChatsNavigation,
  tags: ['autodocs'],
};

export const Default = () => {
  const navigation = [
    {
      id: '1',
      title: 'Studying with AI',
      counter: 10,
      color: '#404446',
      url: '/chats',
    },
    {
      id: '2',
      title: 'Writer`s help',
      counter: 3,
      color: '#8E55EA',
      url: '/some-url',
    },
    {
      id: '3',
      title: 'Frontend AI help',
      counter: 36,
      color: '#3E90F0',
      url: '/2342',
    },
    {
      id: '4',
      title: 'Backend AI help',
      counter: 1,
      color: '#D84C10',
      url: '/test',
    },
    {
      id: '5',
      title: 'Archive',
      counter: 99,
      color: '#C8FC10',
      url: '/archive',
    },
  ];

  return (
    <div style={{ display: 'flex', background: 'black', padding: 50 }}>
      <ChatsNavigation isExpanded items={navigation} pathname="/chats" />
    </div>
  );
};
