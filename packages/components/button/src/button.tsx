/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  ElementType,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { Link as CustomLink } from '@stn-ui/link';
import { Loadable } from '@stn-ui/loadable';
import { buttonCX } from '@stn-ui/theme';

export type HTMLButtonProps = Omit<HTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'>;

export type HTMLLinkProps = Omit<HTMLAttributes<HTMLAnchorElement>, 'href'>;

export interface ButtonBasicProps {
  type?: 'button' | 'link' | 'submit';
  leftIcon?: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  rightIcon?: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  size?: 's' | 'm' | 'l';
  variant?: 'primary' | 'ghost' | 'secondary';
  colorScheme?: 'default' | 'dark';
  as?: ElementType<any>;
  isWide?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isIconOnly?: boolean;
  dataHook?: string;
}

export interface ButtonTypeButtonProps extends HTMLButtonProps, ButtonBasicProps {
  type?: 'button' | 'submit';
  locale?: never;
  to?: never;
  as?: never;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonTypeLinkProps extends HTMLLinkProps, ButtonBasicProps {
  type?: 'link';
  to: string;
  as?: ElementType<any>;
  locale?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export type ButtonProps = ButtonTypeButtonProps | ButtonTypeLinkProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, PropsWithChildren<ButtonProps>>(
  (props, ref) => {
    const {
      type = 'button',
      leftIcon,
      rightIcon,
      size = 's',
      variant = 'solid',
      colorScheme = 'default',
      isWide,
      isDisabled,
      isLoading,
      isIconOnly,
      locale,
      to,
      as,
      children,
      className = '',
      dataHook,
      ...restProps
    } = props;

    const buttonClassNames = buttonCX.button(
      {
        isWide: !!isWide,
        isLoading: !!isLoading,
        isIconOnly: !!isIconOnly,
        isDisabled: !!isDisabled,
        size,
        variant,
        colorScheme,
      },
      className,
    );

    const renderContent = (): React.ReactNode => {
      const textClassName = buttonCX.text({ isIconOnly: !!isIconOnly });

      const isShowLeftIcon = !!leftIcon && !isIconOnly;
      const isShowRightIcon = !!rightIcon && !isIconOnly;

      return (
        <>
          <Loadable isLoading={isLoading} loaderSize={24} overlayAs="span" isOverlay>
            {isShowLeftIcon && <span className={buttonCX.iconLeft()}>{leftIcon}</span>}
            <span className={textClassName}>{children}</span>
            {isShowRightIcon && <span className={buttonCX.iconRight()}>{rightIcon}</span>}
          </Loadable>
        </>
      );
    };

    if (isDisabled) {
      return (
        <button
          type="button"
          disabled
          className={buttonClassNames}
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          data-testid={dataHook}
          {...(restProps as HTMLButtonProps)}
        >
          {renderContent()}
        </button>
      );
    }

    switch (type) {
      case 'link': {
        const Link = as || CustomLink;

        if (!Link) return null;

        return (
          <Link
            href={to ?? ''}
            className={buttonClassNames}
            locale={locale}
            ref={ref as ForwardedRef<HTMLAnchorElement>}
            data-testid={dataHook}
            {...(restProps as HTMLLinkProps)}
          >
            {renderContent()}
          </Link>
        );
      }
      case 'button':
        return (
          <button
            type="button"
            className={buttonClassNames}
            ref={ref as ForwardedRef<HTMLButtonElement>}
            data-testid={dataHook}
            {...(restProps as HTMLButtonProps)}
          >
            {renderContent()}
          </button>
        );
      case 'submit':
        return (
          <button
            type="submit"
            className={buttonClassNames}
            ref={ref as ForwardedRef<HTMLButtonElement>}
            data-testid={dataHook}
            {...(restProps as HTMLButtonProps)}
          >
            {renderContent()}
          </button>
        );
      default:
        return null;
    }
  },
);

Button.displayName = 'Button';

Button.defaultProps = {
  type: 'button',
  size: 'l',
  variant: 'primary',
  colorScheme: 'default',
};
