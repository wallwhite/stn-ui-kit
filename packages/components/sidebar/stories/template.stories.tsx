import { UIProvider } from '@stn-ui/provider';
import { Sidebar } from '../src';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export const Default = () => (
  <UIProvider>
    <div style={{ with: '100vw', height: '100vh', background: '#ccc', position: 'relative' }}>
      <Sidebar footer={<span>footer</span>}>body</Sidebar>
    </div>
  </UIProvider>
);
