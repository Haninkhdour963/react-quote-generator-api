import React from 'react';

const QuoteBox = ({ quote, onNewQuote }) => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.content}" - ${quote.author}`
  )}`;

  return (
    <div className="quote-box">
      <p className="quote">"{quote.content}"</p>
      <p className="author">- {quote.author}</p>
      <div className="actions">
        <button onClick={onNewQuote}>New Quote</button>
        <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
          Tweet
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;
