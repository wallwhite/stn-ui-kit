import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@stn-ui/button';
import { SendMessageIcon } from '@stn-ui/icons';
import { messageFormSubmitCX } from '@stn-ui/theme';
import { MESSAGE_FIELD_NAME } from '../../constants';

export const MessageFormSubmit: FC = () => {
  const { watch } = useFormContext();

  const message = watch(MESSAGE_FIELD_NAME);
  const isDisabled = !message;

  return (
    <span className={messageFormSubmitCX.wrapper()}>
      <Button type="submit" size="s" isDisabled={isDisabled}>
        <SendMessageIcon />
      </Button>
    </span>
  );
};
