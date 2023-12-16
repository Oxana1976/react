import React, { Component } from 'react';
import Message from './Message';
import SimpleQuotation from './SimpleQuotation';
import Quatation from './Quatation';
const App = () => {
  return (
    <div>
      
      <Message titre="Notification" date="jma" contenu="Composant affiché avec succès" />
      <Message contenu="Information sans titre" />
      <SimpleQuotation />
      <Quatation />
    </div>
  );
};

export default App;
