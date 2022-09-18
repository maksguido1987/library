import React, { useEffect } from 'react';
import Portal from '../portal/Portal';
import styles from './BackgroundModal.module.scss';

interface Props {
  children: React.ReactElement;
  onClose: () => void;
  isOpened: boolean;
}

const BackgroundModal = ({ children, onClose, isOpened }: Props) => {
  /** Добавить в глобальные стили overflow */
  useEffect(() => {
    isOpened && document.body.classList.add('overflow');

    return () => {
      document.body.classList.remove('overflow');
    };
  }, [isOpened]);

  if (!isOpened) return null;

  return (
    <Portal>
      <div className={styles.container} role='dialog'>
        <div
          className={styles.overlay}
          tabIndex={0}
          role='button'
          onClick={onClose}
        />
        {children}
      </div>
    </Portal>
  );
};

export default BackgroundModal;
