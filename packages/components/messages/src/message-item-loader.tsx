import { FC } from 'react';
import { messageLoaderCX } from '@stn-ui/theme';

export const MessageItemLoader: FC = () => (
  <div className={messageLoaderCX.container()}>
    <div className={messageLoaderCX.dot()} />
    <div className={messageLoaderCX.dot()} />
    <div className={messageLoaderCX.dot()} />
  </div>
);
