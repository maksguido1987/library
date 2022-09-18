import styles from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={`${styles.inner} ${styles.one}`} />
      <div className={`${styles.inner} ${styles.two}`} />
      <div className={`${styles.inner} ${styles.three}`} />
    </div>
  );
};
