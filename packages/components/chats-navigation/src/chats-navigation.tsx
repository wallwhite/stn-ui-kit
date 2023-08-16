import { FC, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@stn-ui/button';
import { Heading } from '@stn-ui/heading';
import { ArrowDownIcon, CloseIcon } from '@stn-ui/icons';
import { Link } from '@stn-ui/link';
import { chatsNavigationCX } from '@stn-ui/theme';
import { useToggleBoolean } from '@stn-ui/use-toggle-boolean';
import { ANIMATION_CONFIG } from './constants';

export interface ChatsNavigationItem {
  id: string;
  title: string;
  counter: number;
  color: string;
  url: string;
}

export interface ChatsNavigationProps {
  pathname: string;
  isExpanded: boolean;
  title?: string;
  items: ChatsNavigationItem[];
}

export const ChatsNavigation: FC<ChatsNavigationProps> = ({ title = 'Chat list', pathname, isExpanded, items }) => {
  const [isOpen, { toggle, off: close }] = useToggleBoolean(true);
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const animationConfig = isMobile ? ANIMATION_CONFIG.mobile : ANIMATION_CONFIG.default;

  const navigationClassNames = chatsNavigationCX.navigation({
    isExpanded: isExpanded && !isMobile,
  });
  const triggerClassNames = chatsNavigationCX.trigger({
    isExpanded: isExpanded && !isMobile,
  });
  const listClassNames = chatsNavigationCX.list({
    isExpanded: isExpanded && !isMobile,
  });
  const iconClassNames = chatsNavigationCX.icon({
    isOpen,
  });

  const itemClassName = (url: string): string =>
    chatsNavigationCX.chat({
      isActive: pathname === url,
      isExpanded,
    });

  useEffect(() => {
    if (isMobile) close();
  }, [isMobile]);

  return (
    <div className={navigationClassNames}>
      <button type="button" onClick={toggle} className={triggerClassNames}>
        <ArrowDownIcon className={iconClassNames} />
        {isExpanded && <div className={chatsNavigationCX.title()}>{title}</div>}
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.span
            className={listClassNames}
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            exit={animationConfig.exit}
          >
            {isMobile && (
              <span className={chatsNavigationCX.mobileHead()}>
                <Heading variant="h3" visualVariant="h4">
                  {title}
                </Heading>
                <Button className={chatsNavigationCX.close()} variant="ghost" size="s" onClick={close} isIconOnly>
                  <CloseIcon />
                </Button>
              </span>
            )}
            {items.map((item) => (
              <Link className={itemClassName(item.url)} key={item.id} href={item.url}>
                <div className={chatsNavigationCX.chatColorWrapper()}>
                  <div
                    className={chatsNavigationCX.chatColor()}
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                </div>
                {(isExpanded || isMobile) && (
                  <>
                    <div className={chatsNavigationCX.chatTitle()}>{item.title}</div>
                    <div className={chatsNavigationCX.chatCounter()}>{item.counter}</div>
                  </>
                )}
              </Link>
            ))}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
