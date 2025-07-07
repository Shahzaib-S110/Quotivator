import styles from '../styles/QuoteStyles.module.css';

export default function QuoteCard({ quote }) {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>{quote}</p>
    </div>
  );
}
