import { BarcodeIcon, CardIcon, ChatIcon, SearchIcon, SettingsIcon } from '@stn-ui/icons';
import { Navigation } from '../src';

export default {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
};

export const Default = () => {
  const navigation = [
    {
      title: 'Chats',
      icon: ChatIcon,
      color: '#fff',
      url: '/chats',
    },
    {
      title: 'Search',
      icon: SearchIcon,
      color: '#C39F67',
      url: '#',
    },
    {
      title: 'Manage subscription',
      icon: CardIcon,
      color: '#DE8F75',
      url: '#',
    },
    {
      title: 'Updates & FAQ',
      icon: BarcodeIcon,
      color: '#5F9EF8',
      url: '#',
    },
    {
      title: 'Settings',
      icon: SettingsIcon,
      color: '#13F21F',
      onClick: () => {
        alert('clicked');
      },
    },
  ];
  // <div className="z-20 top-0 left-0 bottom-0 flex flex-col pt-10 pb-10 px-4 bg-n-7"></div>
  return (
    <div style={{ background: '#000', color: '#fff' }}>
      <Navigation isExpanded items={navigation} pathname="/chats" />
    </div>
  );
};
