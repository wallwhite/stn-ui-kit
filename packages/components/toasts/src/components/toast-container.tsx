import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { toastContainerCX } from '@stn-ui/theme';
import { Toast } from './toast';
import { useToasts } from './toast-provider';

export const ToastContainer: FC = () => {
  const { toasts, closeToast } = useToasts();

  return (
    <AnimatePresence mode="sync">
      {toasts.length && (
        <motion.div
          className={toastContainerCX.container()}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: 'spring' }}
        >
          <AnimatePresence mode="popLayout">
            {toasts.map((toast) => (
              <motion.div layout key={toast.id}>
                <Toast id={toast.id || ''} type={toast.type} message={toast.message} onClose={closeToast} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
