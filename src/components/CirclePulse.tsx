import styles from './CirclePulse.module.css';

export default function CirclePulse() {
  return (
    <div className={styles.pulseWrapper}>
      <div className={styles.pulseContainer}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}