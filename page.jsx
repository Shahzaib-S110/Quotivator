'use client';
import QuoteGenerator from '../components/QuoteGenerator';

export default function Home() {
  return (
    <main>
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>
        🌟 Quotivator
      </h1>
      <QuoteGenerator />
    </main>
  );
}
