/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ElementType, FC, HTMLAttributes } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from '@stn-ui/link';
import { navigationCX } from '@stn-ui/theme';

export interface NavigationItem {
  title: string;
  icon: React.ExoticComponent<HTMLAttributes<HTMLOrSVGElement>>;
  color: string;
  url?: string;
  onClick?: () => void;
}

export interface NavigationProps {
  isExpanded: boolean;
  pathname: string;
  items: NavigationItem[];
  linkAs?: ElementType<any>;
}

export const Navigation: FC<NavigationProps> = ({ linkAs, isExpanded, pathname, items }) => {
  const LinkElement = linkAs || Link;

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const navigationClassNames = navigationCX.navigation({ isExpanded: isExpanded && !isMobile });

  const navigationItemClassNames = (url: string): string =>
    navigationCX.navigationItem({ isExpanded: isExpanded && !isMobile, isActive: pathname === url });

  return (
    <div className={navigationClassNames}>
      <AnimatePresence initial={false}>
        {items.map(({ url, title, icon: Icon, color, onClick }) =>
          url ? (
            <LinkElement className={navigationItemClassNames(url)} href={url} key={`${url}-${title}`}>
              <Icon style={{ color }} />
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {title}
                </motion.span>
              )}
            </LinkElement>
          ) : (
            <button type="button" className={navigationItemClassNames('')} key={`${url}-${title}`} onClick={onClick}>
              <Icon style={{ color }} />
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {title}
                </motion.span>
              )}
            </button>
          ),
        )}
      </AnimatePresence>
    </div>
  );
};
