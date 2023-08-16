import { FC } from 'react';
import { Heading } from '../src';

export default {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'variant',
      defaultValue: 'h1',
      type: { name: 'enum', required: false, value: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    },
    visualVariant: {
      name: 'visualVariant',
      defaultValue: undefined,
      type: { name: 'enum', required: false, value: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    },
  },
  args: {
    children: 'Heading',
  },
  parameters: {},
};

export const Default = (args: ObjectLiteral) => <Heading {...args} />;

export const HeadingVariants: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Heading variant="h1">Heading 1</Heading>
    <Heading variant="h2">Heading 2</Heading>
    <Heading variant="h3">Heading 3</Heading>
    <Heading variant="h4">Heading 4</Heading>
    <Heading variant="h5">Heading 5</Heading>
    <Heading variant="h6">Heading 6</Heading>
  </div>
);

export const HeadingVisualVariants: FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Heading variant="h6" visualVariant="h1">
      Heading 6
    </Heading>
    <Heading variant="h1" visualVariant="h2">
      Heading 1
    </Heading>
    <Heading variant="h2" visualVariant="h3">
      Heading 2
    </Heading>
    <Heading variant="h3" visualVariant="h4">
      Heading 3
    </Heading>
    <Heading variant="h4" visualVariant="h5">
      Heading 4
    </Heading>
    <Heading variant="h5" visualVariant="h6">
      Heading 5
    </Heading>
  </div>
);
