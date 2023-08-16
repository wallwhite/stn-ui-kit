import { FC, PropsWithChildren, ReactNode } from 'react';
import { chatLayoutCX } from '@stn-ui/theme';

export interface ActionItem {
  icon: ReactNode;
  title: string;
  onClick: () => void;
}

export interface ChatLayoutProps {
  title: string;
  actions?: ActionItem[];
}

export const ChatLayout: FC<PropsWithChildren<ChatLayoutProps>> = ({ title, actions = [], children }) => (
  <>
    <div className={chatLayoutCX.header()}>
      <div className={chatLayoutCX.title()}>{title}</div>
      <div className={chatLayoutCX.actions()}>
        {actions.map((action, index) => (
          <button
            type="button"
            className={chatLayoutCX.action()}
            aria-label={action.title}
            onClick={action.onClick}
            key={`${index.toString()}-${action.title}`}
          >
            {action.icon}
          </button>
        ))}
      </div>
    </div>
    {children}
  </>
);
