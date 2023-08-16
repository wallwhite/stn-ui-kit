import { FC, ReactNode, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Button } from '@stn-ui/button';
import { CloseIcon } from '@stn-ui/icons';
import { toastCX } from '@stn-ui/theme';
import { TOAST_AUTO_HIDE_TIMEOUT, ToastTypes } from '../constants';
import { ToastIcon } from './toast-icon';

export interface ToastProps {
  id: string;
  message: string | ReactNode;
  type: `${ToastTypes}`;
  onClose: (id: string) => void;
}

export const Toast: FC<ToastProps> = ({ id, message, type, onClose }) => {
  const toastSlideOffset = 30;

  const toastClassNames = toastCX.toast({ type });

  const handleClose = (): void => {
    onClose(id);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleClose();
    }, TOAST_AUTO_HIDE_TIMEOUT);

    return (): void => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div
      layout
      className={toastClassNames}
      transition={{ type: 'spring' }}
      initial={{ opacity: 0, y: toastSlideOffset }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
    >
      <div className={toastCX.body()}>
        <div className={toastCX.icon()}>
          <ToastIcon type={type} />
        </div>
        <div className={toastCX.message()}>{message}</div>
      </div>
      <Button className={toastCX.close()} onClick={handleClose} variant="ghost" size="s" isIconOnly>
        <CloseIcon />
      </Button>
    </motion.div>
  );
};
