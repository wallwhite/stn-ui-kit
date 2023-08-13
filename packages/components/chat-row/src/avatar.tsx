// import { FC, ReactElement, ReactNode, useMemo } from 'react';
// import hash from 'object-hash';
// import { renderToString } from 'react-dom/server';
// import { AVATAR_COLORS, AVATAR_SYSTEM_COLOR } from './avatar.constants';

// export interface AvatarGeneralProps {
//   type?: 'circle' | 'square';
//   size?: 's' | 'm' | 'l';
//   customColor?: string;
//   isSystem?: boolean;
//   isLoading?: boolean;
//   isBordered?: boolean;
//   className?: string;
//   icon?: ReactNode;
//   title?: string;
// }

// export interface AvatarImageProps extends AvatarGeneralProps {
//   icon: ReactNode;
//   title?: never;
// }

// export interface AvatarTextProps extends AvatarGeneralProps {
//   icon?: never;
//   title: string;
// }

// export type AvatarProps = AvatarImageProps | AvatarTextProps;

// export const Avatar: FC<AvatarProps> = ({
//   type = 'circle',
//   size = 'm',
//   customColor = '',
//   isLoading,
//   isSystem,
//   isBordered,
//   className,
//   icon,
//   title = '',
// }) => {
//   const iconString = icon ? renderToString(icon as ReactElement) : '';
//   const avatarHash = hash({ title, type, size, className, iconString }, { algorithm: 'md5' });
//   const avatarStyles = useMemo(() => {
//     if (isLoading) return {};
//     if (customColor) return { backgroundColor: customColor };
//     if (isSystem) return { background: AVATAR_SYSTEM_COLOR };
//     let sum = 0;
//     const hashSymbols = avatarHash.split('');

//     for (let index = 0; index < hashSymbols.length; index++) {
//       sum += hashSymbols[index].charCodeAt(0);
//     }

//     const colorIndex = sum % AVATAR_COLORS.length;

//     return { background: AVATAR_COLORS[colorIndex] };
//   }, [avatarHash, isSystem, customColor, isLoading]);

//   const avatarContent = useMemo(() => {
//     if (icon) return icon;
//     const [firstName, lastName] = (title as string).split(' ');
//     const getUserInitials = `${(firstName && firstName[0]) || ''}${(lastName && lastName[0]) || ''}`;

//     return getUserInitials.toUpperCase();
//   }, [title, icon]);

//   return (
//     <div
//       className={avatarCX(
//         {
//           size,
//           type,
//           isBordered: !!isBordered,
//           isLoading: !!isLoading,
//         },
//         className,
//       )}
//       style={avatarStyles}
//     >
//       {avatarContent}
//     </div>
//   );
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Avatar = (): any => <div>avatar</div>;
