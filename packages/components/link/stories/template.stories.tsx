/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, LinkProps } from '../src';

export default {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['foreground', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    underline: {
      control: {
        type: 'select',
      },
      options: ['none', 'hover', 'always', 'active', 'focus'],
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const children = `"First solve the problem. Then, write the code." - Jon Johnson.`;

const defaultProps = {
  isDisabled: false,
  showAnchorIcon: true,
  children,
};

const Template = (args: LinkProps) => <Link {...args} href="#" />;

export const Default = {
  render: Template,

  args: {
    ...defaultProps,
    isDisabled: false,
    color: 'foreground',
    size: 'md',
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Underline = Template.bind({}) as any;
Underline.args = {
  ...defaultProps,
  underline: 'always',
  isDisabled: false,
  size: 'md',
};

const CustomLink = () => (
  <svg
    className="custom-link-icon ml-1"
    fill="none"
    height="1em"
    shapeRendering="geometricPrecision"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="1em"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export const isExternal = Template.bind({}) as any;
isExternal.args = {
  ...defaultProps,
  isExternal: true,
};

export const CustomAnchor = Template.bind({}) as any;
CustomAnchor.args = {
  ...defaultProps,
  anchorIcon: <CustomLink />,
};

export const isBlock = Template.bind({}) as any;

isBlock.args = {
  ...defaultProps,
  isBlock: true,
  isDisabled: false,
  size: 'md',
  color: 'secondary',
};
