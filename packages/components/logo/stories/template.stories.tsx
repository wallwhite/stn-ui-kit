import { Logo } from '../src';

export default {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export const Default = () => (
  <div style={{ background: '#000', color: '#fff' }}>
    <Logo />
  </div>
);
