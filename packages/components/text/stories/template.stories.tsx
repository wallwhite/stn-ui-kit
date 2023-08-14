import { FC } from 'react';
import { Text } from '../src';

export default {
  title: 'Components/DataDisplay/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    type: {
      name: 'type',
      defaultValue: 'body',
      type: { name: 'enum', required: false, value: ['button', 'body', 'caption'] },
    },
    size: {
      name: 'size',
      defaultValue: 'm',
      type: { name: 'enum', required: false, value: ['s', 'm', 'l'] },
    },
    isWide: {
      name: 'isWide',
      defaultValue: false,
      type: { name: 'boolean', required: false },
    },
    variant: {
      name: 'variant',
      defaultValue: 'default',
      type: { name: 'enum', required: false, value: ['default', 'link', 'bold', 'black', 'label'] },
    },
  },
  args: {
    children: 'Text',
  },
};

export const Default = (args: ObjectLiteral) => <Text {...args} />;

export const TextTypes: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text type="button">Button</Text>
    <Text type="body">Body</Text>
    <Text type="caption">Caption</Text>
  </div>
);

export const TextBodySizes: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text type="body" size="s">
      Body S
    </Text>
    <Text type="body" size="m">
      Body M
    </Text>
    <Text type="body" size="l">
      Body L
    </Text>
  </div>
);

export const TextBodyVariants: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text type="body" variant="default">
      Default
    </Text>
    <Text type="body" variant="bold">
      Bold
    </Text>
    <Text type="body" variant="black">
      Black
    </Text>
  </div>
);

export const TextButtonSizes: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text type="button" size="s">
      Button S
    </Text>
    <Text type="button" size="m">
      Button M
    </Text>
    <Text type="button" size="l">
      Button L
    </Text>
  </div>
);

export const TextCaptionSizes: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text type="caption" size="s">
      Caption S
    </Text>
    <Text type="caption" size="m">
      Caption M
    </Text>
    <Text type="caption" size="l">
      Caption L
    </Text>
  </div>
);

export const TextCaptionVariants: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text type="caption" variant="default">
      Default
    </Text>
    <Text type="caption" variant="label">
      Label
    </Text>
  </div>
);
