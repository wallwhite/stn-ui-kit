import { ReactNode } from 'react';
import { Loadable } from '../src';

export default {
  title: 'Components/Loadable',
  component: Loadable,
  argTypes: {
    isLoading: {
      name: 'isLoading',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    isOverlay: {
      name: 'isOverlay',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    loaderSize: {
      name: 'loaderSize',
      defaultValue: 16,
      type: { name: 'number', required: false },
    },
    isLoaderInline: {
      name: 'isLoaderInline',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
  },
};

const Template = (args: Loadable & { children?: ReactNode }) => (
  <div
    style={{
      position: 'relative',
      width: '200px',
      height: '200px',
      backgroundColor: '#CCC',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Loadable {...args}>Content will be loaded</Loadable>
  </div>
);

export const Default = Template.bind({});
