import React from "react";
import { themes } from "@storybook/theming";
import type { Preview } from '@storybook/react';
import '@stn-ui/theme/stn-ui.css';

const decorators: Preview['decorators'] = [
    (Story, {globals: {locale}}) => {
      const direction =
        // @ts-ignore
        locale && new Intl.Locale(locale)?.textInfo?.direction === "rtl" ? "rtl" : undefined;

      return (
          <div className="bg-dark" lang={locale} dir={direction}>
            <Story />
          </div>
      );
    },
  ]

  const commonTheme = {
    brandTitle: "STN UI",
    brandUrl: "https://stn.org",
    brandTarget: "_self",
  }

const parameters: Preview['parameters'] = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Foundations", "Components"],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: "dark",
    stylePreview: true,
    darkClass: "dark",
    lightClass: "light",
    classTarget: "html",
    dark: {
      ...themes.dark,
      ...commonTheme,
      appBg: "#161616",
      barBg: "black",
      background: "black",
      appContentBg: "black",
      appBorderRadius: 14,
      brandImage: "/dark-logo.svg",
    },
    light: {
      ...themes.light,
      ...commonTheme,
      appBorderRadius: 14,
      brandImage: "/light-logo.svg",
    },
  },
};

export default {
  decorators,
  parameters,
} satisfies Preview;
