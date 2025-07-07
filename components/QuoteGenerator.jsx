'use client';

import { useEffect, useState } from 'react';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

const fetchQuote = async () => {
  try {
    const res = await fetch('https://dummyjson.com/quotes/random');
    const data = await res.json();
    setQuote(data.quote);
    setAuthor(data.author);
  } catch (err) {
    console.error(err);
    setQuote('Still can’t fetch quotes — API might be blocked.');
    setAuthor('');
  }
};


  useEffect(() => {
    fetchQuote();
  }, []);

  const containerStyle = {
    backgroundColor: darkMode ? '#121212' : '#f4f4f4',
    color: darkMode ? '#e0e0e0' : '#222',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '2rem auto',
    textAlign: 'center',
  };

  const buttonStyle = {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: darkMode ? '#444' : '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
        {quote || 'Loading...'}
      </p>
      {author && <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>— {author}</p>}
      <button style={buttonStyle} onClick={fetchQuote}>✨ New Quote</button>
      <button style={{ ...buttonStyle, backgroundColor: darkMode ? '#999' : '#222' }} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}
