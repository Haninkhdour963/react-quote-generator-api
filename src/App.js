import React, { useEffect, useState } from 'react';
import QuoteBox from './components/QuoteBox';
import './index.css';

function App() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      const res = await fetch(
        'https://api.allorigins.win/raw?url=https://api.quotable.io/random'
      );
      if (!res.ok) throw new Error('Failed to fetch quote');
      const data = await res.json();
      setQuote(data);
      setError(null);
    } catch (err) {
      setQuote(null);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <h1>💬 Quote Generator</h1>
      {error && <p className="error">{error}</p>}
      {!quote && !error && <p>Loading...</p>}
      {quote && <QuoteBox quote={quote} onNewQuote={fetchQuote} />}
    </div>
  );
}

export default App;
