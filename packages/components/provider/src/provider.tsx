/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  HTMLAttributes,
  PropsWithChildren,
  ElementType,
  useContext,
  ForwardRefExoticComponent,
  ComponentType,
} from 'react';
import { useToggleBoolean } from '@stn-ui/use-toggle-boolean';

type SafeNumber = number | `${number}`;

export type ImageProps = HTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  fill?: boolean;
  loader?: ComponentType;
  quality?: SafeNumber;
  priority?: boolean;
  loading?: 'lazy' | 'eager' | undefined;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  unoptimized?: boolean;
  onLoadingComplete?: (img: HTMLImageElement) => void;
};

export type ImageType = ForwardRefExoticComponent<ImageProps> | ElementType<ImageProps> | 'img';

export interface ContextValue {
  sidebar: {
    isExpanded: boolean;
    toggle: () => void;
    expandSidebar: () => void;
    collapseSidebar: () => void;
  };
}

const initialValue: ContextValue = {
  sidebar: {
    isExpanded: true,
    toggle: () => {},
    expandSidebar: () => {},
    collapseSidebar: () => {},
  },
};

const STNUIContext = createContext<ContextValue>(initialValue);

export interface STNUIProviderProps {
  linkElement?: any;
  imageElement?: any;
}

export const UIProvider: React.FC<PropsWithChildren<STNUIProviderProps>> = ({ children }) => {
  const [isExpanded, { toggle, on: expandSidebar, off: collapseSidebar }] = useToggleBoolean(true);

  return (
    <STNUIContext.Provider
      value={{
        sidebar: {
          isExpanded,
          toggle,
          expandSidebar,
          collapseSidebar,
        },
      }}
    >
      {children}
    </STNUIContext.Provider>
  );
};

export const useUIContext = (): ContextValue => useContext(STNUIContext);

export const useSidebarContext = (): ContextValue['sidebar'] => {
  const { sidebar } = useUIContext();

  return sidebar;
};
