import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Avatar } from '@stn-ui/avatar';
import { Text } from '@stn-ui/text';
import { userMenuCX } from '@stn-ui/theme';

export interface UserMenuProps {
  email: string;
  isExpanded?: boolean;
  onLogOut: () => void;
}

export const UserMenu: FC<UserMenuProps> = ({ isExpanded, email, onLogOut }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const menuSide = isMobile ? 'top' : 'right';

  return (
    <DropdownMenu.Root>
      {/* @ts-ignore */}
      <DropdownMenu.Trigger asChild className={userMenuCX.user({ isExpanded })}>
        <button type="button">
          <span className={userMenuCX.avatar()}>
            <Avatar size="s" title={email} />
          </span>
          <span className={userMenuCX.content()}>
            <Text type="caption" size="s" className={userMenuCX.label()}>
              User:
            </Text>
            <Text size="s" className={userMenuCX.title()}>
              {email}
            </Text>
          </span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className={userMenuCX.menu()} side={menuSide} sideOffset={5}>
        <DropdownMenu.Item>
          <button type="button" onClick={onLogOut} className={userMenuCX.menuItem()}>
            Log out
          </button>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

UserMenu.displayName = 'UserMenu';
