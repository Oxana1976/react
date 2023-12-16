import React from 'react';
import quotes from './Data.js';

const SimpleQuotation = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  return (
    <div>
      <h2>{quote.quote}</h2>
      <p>{quote.author}</p>
    </div>
  );
};

export default SimpleQuotation;