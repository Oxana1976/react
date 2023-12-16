import React from 'react';
import './App.css';

const Message = ({titre, date, contenu}) => {
    const dateFormat = {
        'jma': {
          locale: 'fr-FR',
          format: 'd/M/yyyy',
        },
    }


  return (
    <div>
      {titre && <h1 style={{ color: 'white', background: 'black' }} className='brushing'>{titre}</h1>}
      {date && <div className='date-info'>{new Date().toLocaleDateString(dateFormat['jma'])}</div>}
      {contenu && <p className='brushing'>{contenu}</p>}
    </div>
  );
};

export default Message;