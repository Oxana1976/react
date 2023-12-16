import React from 'react';
import quotes from './Data.js';
const colors = ['#ffffff', '#000000'];

const Quatation = ({ count = quotes.length, shuffle, author}) => {
    
    const quotesToDisplay = quotes;

  // Si count est défini, affichez le nombre de citations trouvées
  if (count > 1) {
    return (
      <div>
        <p>Nombre de citations trouvées : {quotesToDisplay.length}</p>
      </div>
    );
  }

    // Si aucune propriété n'est définie, affichez toutes les citations
    if (!count && !shuffle && !author) {
        return quotesToDisplay.map((quote) => (
          <div key={quote.id}>
            <h2>{quote.quote}</h2>
            <p>{quote.author}</p>
          </div>
        ));
    }

    // Si shuffle est défini, mélangez toutes les citations
    if (shuffle) {
        quotesToDisplay = quotesToDisplay.sort(() => Math.random() - 0.5);
      }

    // Si author est défini, affichez uniquement les citations de cet auteur
    if (author) {
        quotesToDisplay = quotesToDisplay.filter((quote) => quote.author === author);
    }

    // Si count est défini et author est défini, affichez les  premières citations de l'auteur spécifié
    if (count && author) {
        quotesToDisplay = quotesToDisplay.slice(0, count);
    }

    // Si count est défini et shuffle est défini, affichez citations au hasard de l'auteur spécifié
    if (count && shuffle) {
        quotesToDisplay = quotesToDisplay.slice(0, count).sort(() => Math.random() - 0.5);
    }
    
    // Affiche la liste des citations
    return quotesToDisplay.map((quote) => (
        <div key={quote.id} style={{ backgroundColor: colors[Math.floor(Math.random() * 2)] }}>
        <h1>{quote.quote}</h1>
        <p>{quote.author}</p>
        </div>
    ));


}

export default Quatation;