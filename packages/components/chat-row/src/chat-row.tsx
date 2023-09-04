/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType, FC, ReactNode } from 'react';
import { Avatar } from '@stn-ui/avatar';
import { hexToRgba } from '@stn-ui/common-utils';
import { EmailIcon } from '@stn-ui/icons';
import { Td, Tr } from '@stn-ui/table';
import { chatRowCX } from '@stn-ui/theme';

export interface ChatRowProps {
  title: string;
  lastMessage: string;
  icon: ReactNode;
  color: string;
  tag: string;
  counter: number;
  createdAt: string;
  href: string;
  linkAs?: ElementType<any>;
}

export const ChatRow: FC<ChatRowProps> = ({ title, lastMessage, icon, color, tag, counter, href, linkAs }) => {
  const isCounterExists = typeof counter === 'number' && counter >= 0;

  return (
    <Tr as="link" href={href} customElement={linkAs} className={chatRowCX.row()}>
      <Td>
        <span className={chatRowCX.chat()}>
          <Avatar type="square" customColor={hexToRgba(color, 0.2)} icon={icon} className={chatRowCX.icon()} />
          <span className={chatRowCX.texts()}>
            <span className={chatRowCX.title()}>{title}</span>
            <span className={chatRowCX.message()}>{lastMessage}</span>
          </span>
        </span>
      </Td>
      <Td className={chatRowCX.date()}>10.10.2021</Td>
      <Td>
        {!!tag && (
          <span
            className={chatRowCX.tag()}
            style={{
              backgroundColor: color,
            }}
          >
            <span className={chatRowCX.tagBody()}>{tag}</span>
          </span>
        )}
      </Td>
      <Td>
        {!!isCounterExists && (
          <span className={chatRowCX.counter()}>
            <EmailIcon />
            {counter}
          </span>
        )}
      </Td>
    </Tr>
  );
};
