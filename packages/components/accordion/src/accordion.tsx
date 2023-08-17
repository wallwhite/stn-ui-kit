import { HTMLAttributes, createContext, forwardRef, useContext, useState } from 'react';
import { accordionCX } from '@stn-ui/theme';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {}

interface AccordionContextValue {
  activeId: Maybe<string>;
  onToggle: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextValue>({
  activeId: null,
  onToggle: () => {},
});

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const { children, className, ...restProps } = props;
  const [activeId, setActiveId] = useState<Maybe<string>>(null);

  const onToggle = (id: string): void => {
    setActiveId((prevId: Maybe<string>) => (prevId === id ? null : id));
  };

  return (
    <div className={accordionCX.wrapper(className)} ref={ref} {...restProps}>
      <AccordionContext.Provider value={{ activeId, onToggle }}>{children}</AccordionContext.Provider>
    </div>
  );
});

Accordion.displayName = 'Accordion';

export const useAccordionContext = (): AccordionContextValue => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('useAccordionContext must be used within a AccordionContext.Provider');
  }

  return context;
};
