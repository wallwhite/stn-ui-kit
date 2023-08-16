import { MessageForm } from '../src';

export default {
  title: 'Forms/MessageForm',
  component: MessageForm,
  tags: ['autodocs'],
};

export const Default = () => <MessageForm onSubmit={(data) => alert(JSON.stringify(data))} />;
