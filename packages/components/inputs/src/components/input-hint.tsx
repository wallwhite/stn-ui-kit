import { FC, ReactNode } from 'react';
import { Text } from '@stn-ui/text';
import { inputHintCX } from '@stn-ui/theme';

export interface InputHintProps {
  children: ReactNode;
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
  isDisabled?: boolean;
  className?: string;
}

export const InputHint: FC<InputHintProps> = ({ isError, isWarning, isSuccess, isDisabled, children, className }) => {
  const classNames = inputHintCX.hint(
    {
      isError,
      isWarning,
      isSuccess,
      isDisabled,
    },
    className,
  );

  return (
    <Text type="caption" className={classNames}>
      {children}
    </Text>
  );
};
