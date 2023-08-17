import { FC, HTMLAttributes, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from '@stn-ui/icons';
import { accordionItemCX } from '@stn-ui/theme';
import { useAccordionContext } from './accordion';

const ANIMATION_CONTENT_VARIANTS = {
  open: { opacity: 1, height: 'auto' },
  collapsed: { opacity: 0, height: 0 },
};

const ANIMATION_INDICATOR_VARIANTS = {
  open: { rotate: 45 + 90, transition: { duration: 0.3 } },
  collapsed: { rotate: 0, transition: { duration: 0.3 } },
};

const ANIMATION_TRANSITION = { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] };

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
}

const MotionIcon = motion(PlusIcon);

export const AccordionItem: FC<AccordionItemProps> = forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => {
  const { id, title, children, className, ...restProps } = props;
  const { activeId, onToggle } = useAccordionContext();
  const isActive = activeId === id;

  return (
    <AnimatePresence mode="sync">
      <div className={accordionItemCX.item(className)} {...restProps} ref={ref}>
        <motion.button className={accordionItemCX.trigger({ isActive })} onClick={(): void => onToggle(id)}>
          <span className={accordionItemCX.icon()}>
            <MotionIcon
              key="indicator"
              initial="collapsed"
              animate={isActive ? 'open' : 'collapsed'}
              exit="collapsed"
              variants={ANIMATION_INDICATOR_VARIANTS}
            />
          </span>
          <span>{title}</span>
        </motion.button>
        <AnimatePresence initial={false} mode="popLayout">
          {isActive && (
            <motion.div
              layout
              className={accordionItemCX.content()}
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={ANIMATION_CONTENT_VARIANTS}
              transition={ANIMATION_TRANSITION}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
});

AccordionItem.displayName = 'AccordionItem';
