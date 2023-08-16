import { Switcher, SwitcherItem } from '../src';

export default {
  title: 'Components/Switcher',
  component: Switcher,
  tags: ['autodocs'],
};

export const Default = () => (
  <Switcher path="/sign-in">
    <SwitcherItem href="/sign-in">Sign In</SwitcherItem>
    <SwitcherItem href="/sign-up">Sign Up</SwitcherItem>
  </Switcher>
);
