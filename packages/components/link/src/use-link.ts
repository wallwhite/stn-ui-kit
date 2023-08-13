/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, AnchorHTMLAttributes, ElementType, ForwardedRef, RefObject } from 'react';
import { useFocusRing } from '@react-aria/focus';
import { useLink as useAriaLink } from '@react-aria/link';
import { mergeProps } from '@react-aria/utils';
import type { AriaLinkProps } from '@react-types/link';
import { useDOMRef } from '@stn-ui/react-utils';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: ForwardedRef<HTMLAnchorElement>;
  isExternal?: boolean;
  showAnchorIcon?: boolean;
  anchorIcon?: React.ReactNode;
  autoFocus?: boolean;
  isDisabled?: boolean;
  as?: ElementType<any>;
}

export type UseLinkProps = Props & AriaLinkProps;

export function useLink(props: UseLinkProps) {
  const {
    ref,
    as,
    children,
    anchorIcon,
    isExternal = false,
    showAnchorIcon = false,
    isDisabled,
    autoFocus = false,
    className,
    onPress,
    onPressStart,
    onPressEnd,
    onClick,
    ...otherProps
  } = props;

  const Component = as || 'a';

  const domRef = useDOMRef(ref as RefObject<HTMLAnchorElement>);

  const { linkProps } = useAriaLink(
    {
      ...otherProps,
      onPress,
      onPressStart,
      onPressEnd,
      // @ts-ignore React Aria Link does accept onClick as a prop but it's not in the types
      onClick,
      isDisabled,
      elementType: `${as}`,
    },
    domRef,
  );

  const { isFocused, isFocusVisible, focusProps } = useFocusRing({
    autoFocus,
  });

  if (isExternal) {
    otherProps.rel = otherProps.rel ?? 'noopener noreferrer';
    otherProps.target = otherProps.target ?? '_blank';
  }

  const classNames = className;

  const getLinkProps = useCallback(
    () => ({
      ref: domRef,
      className: classNames,
      ...mergeProps(focusProps, linkProps, otherProps),
    }),
    [classNames, isFocused, isFocusVisible, focusProps, linkProps, otherProps],
  );

  return { Component, children, anchorIcon, showAnchorIcon, getLinkProps };
}

export type UseLinkReturn = ReturnType<typeof useLink>;
