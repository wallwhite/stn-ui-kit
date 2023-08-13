import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import alias from '@rollup/plugin-alias';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    "./welcome.stories.mdx",
    "../../components/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "storybook-dark-mode",
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: false,
  },
  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [alias()],
      resolve: {
        alias: [
          {
            find: 'helpers',
            replacement: path.resolve(__dirname, '../../core/theme/src/styles/helpers.scss'),
          },
        ]
      },
    })
  }
};

module.exports = config;
