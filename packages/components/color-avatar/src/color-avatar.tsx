import { FC } from 'react';
import { Avatar } from '@stn-ui/avatar';
import { colorAvatarCX } from '@stn-ui/theme';

export interface ColorAvatarProps {
  color?: string;
}

export const ColorAvatar: FC<ColorAvatarProps> = ({ color }) => {
  if (!color) return null;

  return (
    <span className={colorAvatarCX.wrapper()}>
      <Avatar size="s" type="square" title="" customColor={color} className={colorAvatarCX.avatar()} />
    </span>
  );
};
