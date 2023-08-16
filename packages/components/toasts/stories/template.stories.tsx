import { Button } from '@stn-ui/button';
import { ToastProvider, useToasts } from '../src';

export default {
  title: 'Components/Toasts',
  component: ToastProvider,
  tags: ['autodocs'],
};

export const Default = () => {
  const App = () => {
    const { notify } = useToasts();

    return (
      <Button
        onClick={() => {
          notify({
            type: 'success',
            message: `This is a notification, unique id: ${Math.random()}`,
          });
        }}
      >
        Add notification
      </Button>
    );
  };

  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
};
