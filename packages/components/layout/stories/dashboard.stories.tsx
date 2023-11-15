import { BarcodeIcon, CardIcon, ChatIcon, SearchIcon, SettingsIcon } from '@stn-ui/icons';
import { Navigation } from '@stn-ui/navigation';
import { Sidebar } from '@stn-ui/sidebar';
import { UserMenu } from '@stn-ui/user-menu';
import { DashboardLayout } from '../src';

export default {
  title: 'Layout/DashboardLayout',
  component: DashboardLayout,
  tags: ['autodocs'],
};

export const Default = {};

export const WithSidebarFull = () => {
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

  const userMenuElement = (
    <UserMenu
      isExpanded={false}
      email="test-email-supa-very-long-email-blah-blah-blah@gmail.com"
      onLogOut={() => {
        alert('logged out');
      }}
    />
  );
  const sidebarElement = (
    <Sidebar footer={userMenuElement}>
      <Navigation isExpanded={false} items={navigation} pathname="/chats" />
    </Sidebar>
  );

  return <DashboardLayout sidebar={sidebarElement}>content</DashboardLayout>;
};
