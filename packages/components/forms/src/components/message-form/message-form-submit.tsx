import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '@stn-ui/button';
import { SendMessageIcon } from '@stn-ui/icons';
import { messageFormSubmitCX } from '@stn-ui/theme';
import { MESSAGE_FIELD_NAME } from '../../constants';

export const MessageFormSubmit: FC<Record<'isDisabled', Maybe<boolean>>> = ({ isDisabled }) => {
  const { watch } = useFormContext();

  const message = watch(MESSAGE_FIELD_NAME);

  const isDisabledSubmit = !message || !!isDisabled;

  return (
    <span className={messageFormSubmitCX.wrapper()}>
      <Button type="submit" size="s" isDisabled={isDisabledSubmit}>
        <SendMessageIcon />
      </Button>
    </span>
  );
};
